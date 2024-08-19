import React from 'react';
import './About.css';
import profilePic from '../assets/profile.jpg'; // Ensure you have a profile picture in the assets folder

const About = () => {
  return (
    <section id="about" className="about-section">
      <img src={profilePic} alt="Profile" className="profile-pic" />
      <div className="about-content">
        <h2>Hi, I'm Dilara!</h2>
        <p>I'm a CS and Econ student passionate about leveraging technology to simplify life. My interests lie in femtech and using data-driven insights to develop innovative, user-friendly solutions.</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/handan-dilara-b%C4%B1kmaz-7b4367174/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/dilarabikmaz" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:handandilara.bikmaz@yale.edu">Email</a>
        </div>
      </div>
    </section>
  );
};

export default About;
