import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return(
    <main className="about-me-main">
      <section className="about-me-text">
        <span className="my-name">Hi, I'm Gary!</span><br/>
        A Junior Software Developer who loves tackling complex problems in all walks of life and using logic to make the world a slightly brighter place! For some, like me, that is just making things more efficient, building cool apps or having a game to play to take your mind off things. For others it's tracking behaviours and bettering yourself through lifestyle changes, job changes...etc. I've worked on projects covering a range of scenarios and briefs and am now actively seeking full-time employment in the industry, read on for more!
      </section>
      <section className="about-unknown">
        <span className="hobbies-header">Unknown</span>
      </section>
      <section className="hobbies-text">
        <span className="hobbies-header">Hobbies</span>
      </section>
    </main>
  )
}

export default AboutMe;
