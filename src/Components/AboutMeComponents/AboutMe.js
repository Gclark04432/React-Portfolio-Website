import React from 'react';
import './AboutMe.css';

function AboutMe() {

  return(
    <main className="about-me-main">
      <section className="about-me-text">
        <span className="my-name">Hi, I'm Gary!</span><br/><br/>
        A Graduate Software Developer who loves tackling complex problems in all walks of life and using logic to make the world a slightly brighter place! I take pride in writing sensible, efficient and re-useable code to help the user and developers alike. I've worked on projects covering a range of scenarios and briefs and am now actively seeking full-time employment in the industry, read on for more!
      </section>
      <section className="about-unknown">
        <span className="hobbies-header">Education</span>
        <p className="hobbies-text">
          Graduate from Stirling University with a BSc in Computer Science, I also have a PDA in professional Software Development and have completed a 4 month immersive coding course with CodeClan. <br/><br/>
          This course focussed much more on pratical coding than theory and allowed me to learn the basics of a number of languages and technologies that allow me to create full-stack applications from a wide range of briefs. <br/><br/>
          What was brilliant about the course was the interactive nature and the real feeling of togetherness with my cohort, we had so much fun and enjoyed learning that it made the whole process extremely enjoyable & rewarding! This combined with years of working as part of, and often leading, teams has helped me develop excellent communication and interpersonal skills that help me to fit into teams more easily and hit the gorund running.
        </p>
      </section>
      <section className="hobbies-text">
        <span className="hobbies-header">Hobbies</span>
        <p className="hobbies-text">
          I like to keep active and play football and occasionally basketball in my spare time (do not hire me hoping to bolster your five a side team, you will be disappointed!) <br/><br/>
          I do also love my games and quizes, listening to music and (hopefully someday soon) hanging out with friends and family in a nice beer garden. I even built a quiz generator app to help stave off the boredome and allow the family to have some fun from across the city together, it was great! <br></br>
          I've recently started completeing a couple of Hackerrank challenges a day as well and find these short but thought provoking challenges a nice destresser (most of the time anyway!)
        </p>
      </section>
    </main>
  )
}

export default AboutMe;
