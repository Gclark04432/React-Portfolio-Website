import React from 'react';
import './ContactMe.css';
import phoneIcon from '../../pictures/phone.jpeg';
import emailIcon from '../../pictures/email.png';
import gitHubIcon from '../../pictures/github.png';
import linkedInIcon from '../../pictures/linkedIn.png';

function Contact() {
  return (
    <article className="contact-page">
    <p className="contact-me-text"><span className="contact-title">Give me a shout!</span><br/>
      You can email me using the form below, alternatively good old fashioned phone calls or LinkedIn messages/conections are more than welcome!<br/>
    </p>
      <ul className="contact-list">
        <li className="contact-list-item"><img className="contact-icon" src={phoneIcon} alt="phone"/>+447860632294
        </li>
        <li className="contact-list-item"><img className="contact-icon" src={emailIcon} alt="email"/>gclark04432@live.co.uk
        </li>
        <li className="contact-list-item"><img className="contact-icon" src={gitHubIcon} alt="gitHub"/>TBC
        </li>
        <li className="contact-list-item"><img className="contact-icon" src={linkedInIcon} alt="linkedInIcon"/>TBC
        </li>
      </ul>
    </article>
  )
}

export default Contact;
