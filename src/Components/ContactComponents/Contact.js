import React from 'react';
import './ContactMe.css';
import linkedInIcon from '../../pictures/linkedIn.png';
import edinburghImage from './edinburgh-backdrop.jpg';
import footballImage from './football.jpg';
import basketballImage from './basketball.jpeg';
import ContactForm from './ContactForm.js'


function Contact() {
  return (
    <article className="contact-page">
    <section className="contact-page-images">
      <img src={edinburghImage} alt="Edinburgh Skyline"/>
      <img src={footballImage} alt="Football"/>
      <img src={basketballImage} alt="Basketball"/>
    </section>
    <section className="contact-me-details">
    <p className="contact-me-text"><span className="contact-title">Give me a shout!</span><br/>
      You can email me using the form to the right, alternatively good old fashioned phone calls or LinkedIn messages/conections are more than welcome!<br/>
    </p>
      <ul className="contact-list">
        <li className="contact-list-item"> 📞: +447860632294
        </li>
        <li className="contact-list-item"> 📨: gclark04432@live.co.uk
        </li>
        <li className="contact-list-item"><img className="contact-icon" src={linkedInIcon} alt="linkedInIcon"/> : www.linkedin.com/in/gary--clark/
        </li>
      </ul>
      </section>
      <section className="contact-me-form-section">
        <ContactForm className="contact-form"/>
      </section>
    </article>
  )
}

export default Contact;
