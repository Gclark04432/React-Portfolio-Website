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

    return (
      <li key={index} className="project">
        <h2>{project.title}</h2>
          <ul>{renderLanguages}</ul>
          <ul>{renderTech}</ul>
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
