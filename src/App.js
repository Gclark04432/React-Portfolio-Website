import React, {useEffect} from 'react';
import AboutMe from './Components/AboutMeComponents/AboutMe.js'
import NavBar from './Components/NavBarComponents/NavBar.js'
import ProjectList from './Components/ProjectComponents/ProjectList.js'
import Contact from './Components/ContactComponents/Contact.js'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {

useEffect(() => {
  let btnContainer = document.getElementById("nav");
  let btns = btnContainer.getElementsByClassName("navbar-list-item")
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
})

  return (
    <div className="App">
      <Router>
          <nav id="nav">
            <NavBar/>
          </nav>
          <Switch>
            <>
            <main className="main-content">
            <Route path="/about">
              <AboutMe />
            </Route>
            <Route path="/projects">
              <ProjectList />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            </main>
            </>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
