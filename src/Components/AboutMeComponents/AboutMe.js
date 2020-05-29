import React from 'react';
import './AboutMe.css';

function AboutMe() {

  return(
    <main className="about-me-main">
      <section className="about-me-text">
        <span className="my-name">Hi, I'm Gary!</span><br/><br/>
        A Graduate Software Developer who loves tackling complex problems in all walks of life and using logic to make the world a slightly brighter place! For some, like me, that is just making things more efficient, building cool apps or having a game to play to take your mind off things. For others it's tracking behaviours and bettering yourself through lifestyle changes, job changes...etc. I've worked on projects covering a range of scenarios and briefs and am now actively seeking full-time employment in the industry, read on for more!
      </section>
      <section className="about-unknown">
        <span className="hobbies-header">Education</span>
        <p className="hobbies-text">
          Graduate from Striling University with a BSc in Computer Science, I have also just completed a 4 month immersive coding course with CodeClan, in Edinburgh. <br/><br/>
          This course focussed much more on pratical coding than theory and allowed me to learn the basics of a number of languages and technologies that allow me to creat full-stack applications from wide range of briefs. <br/><br/>
          What was brilliant about the course was the interactive nature and the real feeling of togetherness with my cohort, we had so much fun and enjoyed learning that it made the whole process extremely enjoyable & rewarding!
        </p>
      </section>
      <section className="hobbies-text">
        <span className="hobbies-header">Hobbies</span>
        <p className="hobbies-text">
          I like to keep active and play football and occasionally basketball in my spare time (do not hire me hoping to bolster your five a side team, you will be disappointed!) <br/><br/>
          I do also love my games and quizes, listening to music and (hopefully someday soon) hanging out with friends and family in a nice beer garden. I even built a quiz generator app to help stave off the boredome and allow the family to have some fun from across the city together, it was great!
        </p>
      </section>
    </main>
  )
}

export default AboutMe;
