import React from 'react';
import './HomePage.css';

import htmlLogo from './html-logo.png'
import intellijLogo from './intellij-logo.jpeg'
import javaLogo from './java-logo.png'
import javascriptLogo from './javascript-logo.jpeg'
import jsonLogo from './json-logo.jpeg'
import mongodbLogo from './mongodb-logo.png'
import postgresLogo from './postgres-logo.png'
import reactLogo from './react-logo.png'
import rubyLogo from './ruby-logo.png'
import springLogo from './spring-logo.png'
import swiftLogo from './swift-logo.jpeg'
import vueLogo from './vue-logo.png'


function HomePage() {
  return (
    <article className="home-page-content">
      <p className="intro">
        I am a graduate <span className="title-in-text">Software Developer</span> taking my first steps in the industry.
        <br/><br/>
        Based in edinburgh currently I have experience working on full-stack applications and am confident in a number of languages and technologies as my project showcase demonstrates.
      </p>
      <section className="tech-and-languages">
        <img class="logo" src={rubyLogo} alt="Ruby"/>
        <img class="logo" src={javaLogo} alt="Java"/>
        <img class="logo" src={javascriptLogo} alt="Javascript"/>
        <img class="logo" src={reactLogo} alt="JS React"/>
        <img class="logo" src={swiftLogo} alt="Swift"/>

        <img class="logo" src={htmlLogo} alt="HTML5"/>
        <img class="logo" src={vueLogo} alt="JS Vue"/>

        <img class="logo" src={intellijLogo} alt="Intelli J"/>
        <img class="logo" src={jsonLogo} alt="Json"/>
        <img class="logo" src={mongodbLogo} alt="MongoDB"/>
        <img class="logo" src={postgresLogo} alt="Postgres"/>
        <img class="logo" src={springLogo} alt="Java Spring"/>
      </section>
    </article>
  )
}

export default HomePage;
