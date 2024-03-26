import React from "react"
import "./About.css"
import AboutImg from "../assets/profile.jpg"

function About() {
  return (
    <section id="about">
      <h1 className="section-title"> About </h1>

      <div className="about-container">
        <div className="left-section">
          <div className="about-info">
            Hi there, I'm Sam, an aspiring Data Scientist and Machine Learning Engineer. I hold Bachelor's degrees in
            Computer Science and Mathematics from Clemson University, and recently finished a Masters in Computer Science at North Carolina State University.
            <br /><br />
            I love playing with data to solve problems and make informed decisions. Whether
            it's analyzing trends or building machine learning models, I'm always
            excited to dive into a new project and see where it takes me.
            <br /><br />
            In my free time I enjoy activities such as rock climbing, video games, and anime.
            If you have any questions or would like to chat, feel free to reach out below!
          </div>
        </div>
        <div className="right-section">
          <img src={AboutImg} alt="profile" />
        </div>
      </div>
    </section>
  )
}

export default About;