import React,{useEffect,useState,useRef} from 'react';
import './contact.css';
import WOW from 'wowjs';
const Contact=()=>{

const nameInput = useRef("");
const emailInput = useRef("");
const subjectInput = useRef("");
const messageInput = useRef("");
const [contact,setContact] = useState({});

useEffect(()=>{
    new WOW.WOW().init();
    fetch('http://localhost:2404/Contacts/Contact',
      {method:'get',
      headers:{'Content-Type':'application/json'}
    }).then((res)=>{
      return res.json();
    }).then((data)=>{
      if(data !==null && data !== undefined){
        setContact(data);
      }
    });
},[]);

const handleClick=(event)=>{
  let messageObj ={};
  messageObj.Name = nameInput.current.value;
  messageObj.Email = emailInput.current.value;
  messageObj.Subject = subjectInput.current.value;
  messageObj.Message = messageInput.current.value;

  fetch('http://localhost:2404/ContactMessage/Message', {
    method: 'post',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(messageObj)
 }).then((res)=>{
   return res.json();
 }).then((data)=>{ 
   console.log(data);
   alert(data);
  });

};



    return (
        <section id="contact" className="section-bg wow fadeInUp">

      <div className="container">

        <div className="section-header">
          <h2>Contact Us</h2>
          
        </div>

        <div className="row contact-info">

          <div className="col-md-6">
            <div className="contact-address">
              <i className="ion-ios-telephone-outline"></i>
              <h3>Phone Number</h3>
    <p>{contact.Name}</p>
    <p><a href={`tel:${contact.Phone}`}>{contact.Phone}</a></p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="contact-email">
              <i className="ion-ios-email-outline"></i>
              <h3>Email</h3>
    <p><a href={`mailto:${contact.Email}`}>{contact.Email}</a></p>
            </div>
          </div>

        </div>

        <div className="form">
          <div id="sendmessage">Your message has been sent. Thank you!</div>
          <div id="errormessage"></div>
          <div action=""  className="contactForm">
            <div className="form-row">
              <div className="form-group col-md-6">
                <input type="text" ref={nameInput} name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                <div className="validation"></div>
              </div>
              <div className="form-group col-md-6">
                <input type="email" ref={emailInput} className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                <div className="validation"></div>
              </div>
            </div>
            <div className="form-group">
              <input type="text" ref={subjectInput} className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
              <div className="validation"></div>
            </div>
            <div className="form-group">
              <textarea ref={messageInput} className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
              <div className="validation"></div>
            </div>
            <div className="text-center"><button onClick={handleClick} type="submit">Send Message</button></div>
          </div>
        </div>

      </div>
    </section>

    );
}


export default Contact;