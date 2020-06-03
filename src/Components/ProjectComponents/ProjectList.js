import React, {useState} from 'react';
import { Player } from 'video-react';
import jobSwipeVid from './Jobswipe.webm';
import brewCat from './BrewCatInventory.webm';
import habitTracker from './habit_tracker.webm';
import quizGenVid from './quizGenerator.webm';

import './ProjectList.css';


function ProjectList({ projects }) {

  const [selectedVid, setSelectedVid] = useState()

  if (!projects) return null;
  const renderProjects = projects.map((project, index) => {

    const background = {
      backgroundImage: 'url('+project.image+')'
    }
    
    const handleProjectSelect = (event) => {
      if (event.target.value === 0) setSelectedVid(jobSwipeVid)
      if (event.target.value === 1) setSelectedVid(brewCat)
      if (event.target.value === 2) setSelectedVid(habitTracker)
      if (event.target.value === 3) setSelectedVid(quizGenVid)      
    }

    return (
      
      <li onClick={handleProjectSelect} value={index} key={index} className="project" style={background}>
        <section className="language-and-tech-list">
        </section>
      </li>
    )
  })

  return (
    <section className="main-projectList">

    <ul className="project-list">
      {renderProjects}
    </ul>

      <div className="project-wrapper">
      
      <Player className="react-player "
        playsInline 
        src={selectedVid}
       />
      </div>
    
    </section>
  )
}

export default ProjectList;
