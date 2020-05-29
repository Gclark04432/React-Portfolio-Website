import React from 'react';
import './HomePage.css';

import htmlLogo from './html-css-logo.png'
import intellijLogo from './intellij-logo.png'
import javaLogo from './java-logo.png'
import javascriptLogo from './javascript-logo.png'
import mongodbLogo from './mongodb-logo.png'
import postgresLogo from './postgres-logo.png'
import reactLogo from './react-logo.png'
import rubyLogo from './ruby-logo.png'
import springLogo from './spring-logo.png'
import swiftLogo from './swift-logo.png'
import vueLogo from './vue-logo.png'


function HomePage() {
  return (
    <article className="home-page-content">
      <p className="intro">
        I am a graduate <span className="title-in-text">Software Developer</span> taking my first steps in the industry.
        <br/><br/>
        Based in edinburgh currently, I have experience working on full-stack applications and am confident in a number of languages and technologies as my project showcase demonstrates.
      </p>
      <section className="tech-and-languages">
        <img className="logo" src={rubyLogo} alt="Ruby"/>
        <img className="logo" src={javaLogo} alt="Java"/>
        <img className="logo" src={javascriptLogo} alt="Javascript"/>
        <img className="logo" src={reactLogo} alt="JS React"/>
        <img className="logo" src={swiftLogo} alt="Swift"/>

        <img className="logo" src={htmlLogo} alt="HTML5"/>
        <img className="logo" src={vueLogo} alt="JS Vue"/>

        <img className="logo" src={intellijLogo} alt="Intelli J"/>
        <img className="logo" src={mongodbLogo} alt="MongoDB"/>
        <img className="logo" src={postgresLogo} alt="Postgres"/>
        <img className="logo" src={springLogo} alt="Java Spring"/>
      </section>
    </article>
  )
}

export default HomePage;
