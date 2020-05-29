import React from 'react';
import './ProjectList.css';

function ProjectList({ projects }) {

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
    console.log(background);
    

    return (
      
      <li key={index} className="project" style={background}>
        <p className="project-title">{project.title}</p>
        <section className="language-and-tech-list">
          {/* <ul className="language-list">{renderLanguages}</ul>
          <ul className="tech-list">{renderTech}</ul> */}
        </section>
      </li>
    )
  })

  return (
    <section className="main-projectList">
      <ul className="project-list">
        {renderProjects}
      </ul>
    </section>
  )
}

export default ProjectList;
