import React from 'react';
import './About.css';
import profilePic from '../assets/profile.jpg';

const About = () => {
  return (
    <section id="about" className="about-section">
      <img src={profilePic} alt="Profile" className="profile-pic" />
      <div className="about-content">
        <h2>Hi, I'm Dilara!</h2>
        <p>I'm a 3rd year Computer Science and Economics double-major at Yale passionate about simplifying life using technology. From analyzing urban mobility data for my research project to designing femtech products during my internship, I enjoy tackling all kinds of challenges that combine creativity, technology, and impact.</p>
        <p>Some days you’ll catch me deep in code, other days obsessing over a product design, but every day I’m driven by ambition, curiosity, and a love for turning ideas into things people actually want to use. When I’m not building things, you’ll find me dancing, trying new foods, befriending every cat and dog I meet, or working to make life just a little better—one project at a time.
</p>
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
