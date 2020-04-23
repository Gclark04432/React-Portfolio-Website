import React from 'react';
import './ContactForm.css'

function ContactForm() {
  return (
    <>
    <p>Contact Me Below:</p>
    <label>First Name
    <input type="text" name="firstname" placeholder="Your name.."/>
    </label>

    <label>Last Name
    <input type="text" name="lastname" placeholder="Your last name.."/>
    </label>

    <label>Subject
    <textarea name="subject" placeholder="Write something.."></textarea>
    </label>

    <input type="submit" value="Submit"/>
    </>
  )
}

export default ContactForm;
