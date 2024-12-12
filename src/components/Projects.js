import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'SpotiFind',
    description: 'A customized playlist curator for Spotify users developed using Flask, HTML/CSS, and JavaScript.',
    link: 'https://github.com/dilarabikmaz/spotify_playlist_curator',
    image: 'spoti.jpg'
  },
  {
    title: 'Whisk: Smart Cooking',
    description: 'A smart cooking app developed with Swift that optimizes recipe step display by minimizing wait times. Developed as the final project for Yale\'s Software Engineering course.',
    link: 'whiskapp-demo.mp4',
    image: 'whisklogo.png'
  },
  {
    title: 'The Yalie Wellness Journal',
    description: 'A digital wellness journal for Yale students developed with Flask, HTML/CSS, and JavaScript.',
    link: 'https://github.com/dilarabikmaz/wellness_journal',
    image: 'yalie-journal.png'
  },
  {
    title: 'beije. App',
    description: 'Internship project: A menstrual tracking app I product managed that is set to launch in the upcoming year.',
    link: '#',
    image: 'beije-web.png'
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}></div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
