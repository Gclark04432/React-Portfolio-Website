import React from 'react';
import './App.css';
import AboutMe from './Components/AboutMeComponents/AboutMe.js'
import NavBar from './Components/NavBarComponents/NavBar.js'
import rubyLogo from './pictures/ruby-logo.jpg'
import javaLogo from './pictures/java-logo.jpg'
import jsLogo from './pictures/javascript-logo.jpg'

function App() {
  return (
    <div className="App">
          <nav className="nav">
            <NavBar/>
          </nav>
          <section className="about-me">
          <h1> Gary A. Clark</h1>
          <h2>Graduate Software Developer</h2>
            <AboutMe />
          </section>
          <p className="ruby">
            <img className="logo" src={rubyLogo} alt="Ruby Logo"/>
          </p>
          <p className="javascript">
            <img className="logo" src={jsLogo} alt="Javascript Project Frontpage"/>
          </p>
          <p className="java">
            <img className="logo" src={javaLogo} alt="Java Logo"/>
          </p>
          <div className="footer">Footer Here</div>
    </div>
  );
}

export default App;
