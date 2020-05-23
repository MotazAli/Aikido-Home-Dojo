import React from 'react';
// import axios from '../../server/axios';
import {connect} from 'react-redux';

import * as ActionCreators from '../../store/actionCreators';
import './contact.css';
import WOW from 'wowjs';
class Contact extends React.Component{


  state ={
    Name:"",
    Email:"",
    Subject:"",
    Message:""
  }



componentDidMount(){
  new WOW.WOW().init();
  this.props.getContact();
}

onNameChangeHandler = event =>{
  this.setState({Name:event.target.value});
}
onEmailChangeHandler = event =>{
  this.setState({Email:event.target.value});
}
onSubjectChangeHandler = event =>{
  this.setState({Subject:event.target.value});
}
onMessageChangeHandler = event =>{
  this.setState({Message:event.target.value});
}


 handleClick= event =>{
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
          <section id="contact" className="section-bg ">

        <div className="container">

          <div className="section-header">
            <h2>Contact Us</h2>
            
          </div>

          <div className="row contact-info">

            {contact}

          </div>

          <div className="form">
            <div id="sendmessage">Your message has been sent. Thank you!</div>
            <div id="errormessage"></div>
            <div action=""  className="contactForm">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <input type="text" value={this.state.Name} onChange={this.onNameChangeHandler}  name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div className="validation"></div>
                </div>
                <div className="form-group col-md-6">
                  <input type="email" value={this.state.Email} onChange={this.onEmailChangeHandler} className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                  <div className="validation"></div>
                </div>
              </div>
              <div className="form-group">
                <input type="text" value={this.state.Subject} onChange={this.onSubjectChangeHandler} className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                <div className="validation"></div>
              </div>
              <div className="form-group">
                <textarea value={this.state.Message} onChange={this.onMessageChangeHandler} className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                <div className="validation"></div>
              </div>
              <div className="text-center"><button onClick={this.handleClick}  type="submit">Send Message</button></div>
              {message}
            </div>
          </div>

        </div>
      </section>

      );
  }
}

const mapStateToProps = state =>{
  return {
    contact : state.contact,
    messageSentResult: state.contactMessageSendResult
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