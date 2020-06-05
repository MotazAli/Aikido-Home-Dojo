import React from 'react';
import {connect} from 'react-redux';

import * as ActionCreators from '../../store/actionCreators';
import './contact.css';
import WOW from 'wowjs';
import MainContainer from '../main-container-component/MainContainer';
const Errors = {
  minlen : {  message : (length) => { return `Please enter at least ${length} chars`}},
  email : "Please enter a valid email",
  minlen8 : "Please enter at least 8 chars ",
  required :"Please write something"
}




class Contact extends React.Component{


  state ={
    Name:{ 
      value: "" , 
      validate : { 
        rule : 'minlen' ,
        length : 4 , 
        error : { status : false , message:""} 
          }
        },
    Email:{ value: "" , validate : { rule : 'email' , error : { status : false , message:""}  }},
    Subject:{ value: "" , validate : { rule : 'minlen',length : 8 , error : { status : false , message:""}  }},
    Message:{ value: "" , validate : { rule : 'required' , error : { status : false , message:""}  }}
  }



componentDidMount(){
  new WOW.WOW().init();
  this.props.getContact();
}

onNameChangeHandler = event =>{
  this.setState({ ...this.state , Name : { ...this.state.Name , value: event.target.value}});
}
onEmailChangeHandler = event =>{
  this.setState({ ...this.state, Email:{ ...this.state.Email ,value: event.target.value}});
}
onSubjectChangeHandler = event =>{
  this.setState({...this.state ,Subject:{...this.state.Subject , value: event.target.value}});
}
onMessageChangeHandler = event =>{
  this.setState({...this.state ,Message:{...this.state.Message , value: event.target.value}});
}


validateInputs = () =>{
  let isValid = true;
  let exp = "";
  const emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;
  Object.keys(this.state).forEach((key)=>{
  let item = this.state[key];
  item.validate.error.status = false;
  item.validate.error.message = "";
  switch (item.validate.rule) {
    case 'required':
      if (item.value === '') {
        item.validate.error.status  = true;
        item.validate.error.message = Errors[item.validate.rule];
        isValid = false;
      }
      break;

    case 'minlen':
      if (item.value.length < parseInt(item.validate.length)) {
        item.validate.error.status  = true;
        item.validate.error.message = Errors[item.validate.rule].message(item.validate.length);
        isValid = false;
      }
      break;

    case 'email':
      if (!emailExp.test(item.value)) {
        item.validate.error.status  = true;
        item.validate.error.message = Errors[item.validate.rule];
        isValid = false;
      }
      break;


    case 'regexp':
      exp = new RegExp(exp);
      if (!exp.test(item.value)) {
        item.validate.error.status  = true;
        item.validate.error.message = Errors[item.validate.rule];
        isValid = false;
      }
      break;

      default:;
  }
  this.setState({  ...this.state , [key]: item });
});
return isValid ; 

}


 handleClick= event =>{
   if(!this.validateInputs()) return;
   
   
   this.props.sendContactMessage(this.state);
};



render(){

  let message = null;
  if(this.props.messageSentResult){
    message = <h2>Message sent</h2>
  }

  let contact = null;
  if(this.props.contact)
  {
    contact = (
      <>
      <div className="col-md-6">
              <div className="contact-address">
                <i className="ion-ios-telephone-outline"></i>
                <h3>Phone Number</h3>
      <p>{this.props.contact.Name}</p>
      <p><a href={`tel:${this.props.contact.Phone}`}>{this.props.contact.Phone}</a></p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="contact-email">
                <i className="ion-ios-email-outline"></i>
                <h3>Email</h3>
      <p><a href={`mailto:${this.props.contact.Email}`}>{this.props.contact.Email}</a></p>
              </div>
            </div>
      </>
    );
  }




      return (
        //wow fadeInUp

        <MainContainer header="Contact Us">
          <div className="row contact-info">

          {contact}

          </div>

          <div className="form">
          <div id="sendmessage">Your message has been sent. Thank you!</div>
          <div id="errormessage"></div>
          <div action=""  className="contactForm">
            <div className="form-row">
              <div className="form-group col-md-6">
                <input type="text" value={this.state.Name.value} onChange={this.onNameChangeHandler}  name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                { this.state.Name.validate.error.status ? <div className="validation">{this.state.Name.validate.error.message}</div>: null}
              </div>
              <div className="form-group col-md-6">
                <input type="email" value={this.state.Email.value} onChange={this.onEmailChangeHandler} className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                { this.state.Email.validate.error.status ? <div className="validation">{this.state.Email.validate.error.message}</div>: null}
              </div>
            </div>
            <div className="form-group">
              <input type="text" value={this.state.Subject.value} onChange={this.onSubjectChangeHandler} className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
              { this.state.Subject.validate.error.status ? <div className="validation">{this.state.Subject.validate.error.message}</div>: null}
            </div>
            <div className="form-group">
              <textarea value={this.state.Message.value} onChange={this.onMessageChangeHandler} className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
              { this.state.Message.validate.error.status ? <div className="validation">{this.state.Message.validate.error.message}</div>: null}
            </div>
            <div className="text-center"><button onClick={this.handleClick}  type="submit">Send Message</button></div>
            {message}
          </div>
          </div>
        </MainContainer>

      );
  }
}

const mapStateToProps = state =>{
  return {
    contact : state.main.contact,
    messageSentResult: state.main.contactMessageSendResult
  }
}

const mapDispatchToProps= dispatch =>{
  return {
    getContact : () => dispatch(ActionCreators.getContact()),
    sendContactMessage : (data) => dispatch(ActionCreators.sendContactMessage(data))
  }
}



const setConnect = connect(mapStateToProps,mapDispatchToProps);
export default setConnect(Contact);