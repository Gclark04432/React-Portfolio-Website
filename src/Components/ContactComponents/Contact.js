import React from 'react';
import './ContactMe.css';
import linkedInIcon from '../../pictures/linkedIn.png';

function Contact() {
  return (
    <article className="contact-page">
    <p className="contact-me-text"><span className="contact-title">Give me a shout!</span><br/>
      You can email me using the form below, alternatively good old fashioned phone calls or LinkedIn messages/conections are more than welcome!<br/>
    </p>
      <ul className="contact-list">
        <li className="contact-list-item"> 📞: +447860632294
        </li>
        <li className="contact-list-item"> 📨: gclark04432@live.co.uk
        </li>
        <li className="contact-list-item"><img className="contact-icon" src={linkedInIcon} alt="linkedInIcon"/> : www.linkedin.com/in/gary--clark/
        </li>
      </ul>
    </article>
  )
}

export default Contact;
