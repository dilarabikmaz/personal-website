import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      <div className="experience-container">
            <div className="experience-item">
                <h3>Product Management Intern</h3>
                <a href="https://beije.co/en" target="_blank" rel="noopener noreferrer">
                  <img src="beije-logo.png" alt="Beije Logo" class="company-logo"></img>
                </a>
                <p>June 2024 - August 2024</p>
            </div>
            <div className="experience-item">
                <h3>Project Intern</h3>
                <a href="https://www.beko.com/" target="_blank" rel="noopener noreferrer">
                  <img src="beko-logo.png" alt="Beko Logo" class="company-logo"></img>
                </a>
                <p>July 2023 - August 2023</p>
            </div>
            <div className="experience-item">
                <h3>Board Member & Treasurer</h3>
                <a href="https://yalecomputersociety.org/" target="_blank" rel="noopener noreferrer">
                  <img src="ycs-logo.png" alt="YCS Logo" class="company-logo"></img>
                </a>
                <p>January 2024 - Present</p>
            </div>
            <div className="experience-item">
                <h3>Teaching Assistant</h3>
                <a href="https://economics.yale.edu/" target="_blank" rel="noopener noreferrer">
                  <img src="yale-econ.png" alt="Yale Econ Logo" class="company-logo"></img>
                </a>
                <p>September 2023 - December 2023</p>
            </div>
        </div>
    </section>
  );
};

export default Experience;
