import React from 'react';
import emailjs from 'emailjs-com';

import './ContactForm.css'

function ContactForm() {

  function emailMe(event){
    event.preventDefault();

    emailjs.sendForm('gmail', 'contact_form', event.target, 'user_8DcSiXyD76CwsEycbZzOm')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    
    <>
    <p>Contact Me Below:</p>
    <form onSubmit={emailMe}>
    <label>Your Name
    <input type="text" name="contact_name" placeholder="Your name..."/>
    </label>

    <label>Your Email Address
    <input type="text" name="contact_email" placeholder="Your Email..."/>
    </label>

    <label>Your Message
    <textarea id="myText" name="message" placeholder="Write something..."></textarea>
    </label>

    <input type="submit" value="Submit" />
    </form>

    </>
  )
}

export default ContactForm;
