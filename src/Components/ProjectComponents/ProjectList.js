import React, {useState} from 'react';
import { Player } from 'video-react';
import jobSwipeVid from './Jobswipe.webm';
import quizGenVid from './Quizgenerator.webm';

import './ProjectList.css';


function ProjectList({ projects }) {

  const [selectedVid, setSelectedVid] = useState()

  if (!projects) return null;
  const renderProjects = projects.map((project, index) => {

    const renderLanguages = project.languages.map((language, index) => {
      return (
        <li key={index} className="language">{language}</li>
      )
    })

    const renderTech = project.tech.map((t, index) => {
      return (
        <li key={index} className="tech">{t}</li>
      )
    })

    const background = {
      backgroundImage: 'url('+project.image+')'
    }
    
    const handleProjectSelect = (event) => {
      if (event.target.value === 0) setSelectedVid(jobSwipeVid)
      if (event.target.value === 3) setSelectedVid(quizGenVid)
      console.log(event.target.value);
      
    }

    return (
      
      <li onClick={handleProjectSelect} value={index} key={index} className="project" style={background}>
        <section className="language-and-tech-list">
          {/* <ul className="language-list">{renderLanguages}</ul>
          <ul className="tech-list">{renderTech}</ul> */}
        </section>
      </li>
    )
  })

  return (
    <section className="main-projectList">

      <div className="project-wrapper">
      <link
        rel="stylesheet"
        href="https://video-react.github.io/assets/video-react.css"
      />
      <Player className="react-player "
        playsInline 
        src={selectedVid}
        style="width: 200px;"

       />
      </div>
    
      <ul className="project-list">
        {renderProjects}
      </ul>
    </section>
  )
}

export default ProjectList;
