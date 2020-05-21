import React, {useState, useEffect} from 'react';
import AboutMe from './Components/AboutMeComponents/AboutMe.js'
import NavBar from './Components/NavBarComponents/NavBar.js'
import ProjectList from './Components/ProjectComponents/ProjectList.js'
import Contact from './Components/ContactComponents/Contact.js'
import HomePage from './Components/HomePageComponents/HomePage.js'
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

const [projects, setProjects] = useState([
  {
    title: "JobSwipe Search Site",
    languages: ["Javascript", "Java"],
    tech: ["IntelliJ IDE", "Express", "Spring", "React", "PostgresSQL"]
  },
  {
    title: "Brewcat Bar Inventory",
    languages: ["Ruby"],
    tech: ["Sinatra", "PostgresSQL"]
  },
  {
    title: "JAGAscript Gamified Habit Tracker",
    languages: ["Javascript"],
    tech: ["Vue", "Express", "MongoDB"]
  },
  {
    title: "Quiz Question Generator",
    languages: ["Javascript", "Java"],
    tech: ["IntelliJ IDE", "Express", "Spring", "React"]
  }
])

  return (
    <div className="App">
      <Router>
          <nav id="nav">
            <NavBar/>
          </nav>
          <Switch>
            <>
            <main className="main-content">
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/about">
              <AboutMe />
            </Route>
            <Route exact path="/projects">
              <ProjectList projects={projects}/>
            </Route>
            <Route exact path="/contact">
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
