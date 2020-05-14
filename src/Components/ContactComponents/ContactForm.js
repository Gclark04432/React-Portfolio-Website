import React from 'react';
import './ContactForm.css'

function ContactForm() {
  return (
    <>
    <p>Contact Me Below:</p>
    <label>Your Name
    <input type="text" name="name" placeholder="Your name.."/>
    </label>

    <label>Subject
    <input type="text" name="subject" placeholder="Subject.."/>
    </label>

    <label>Your Message
    <textarea name="message" placeholder="Write something.."></textarea>
    </label>

    <input type="submit" value="Submit"/>
    </>
  )
}

export default ContactForm;
