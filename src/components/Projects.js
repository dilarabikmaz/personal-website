import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'SpotiFind',
    description: 'A customized playlist curator for Spotify users.',
    link: 'https://github.com/dilarabikmaz/spotify_playlist_curator',
    image: 'spoti.jpg'
  },
  {
    title: 'The Yalie Wellness Journal',
    description: 'A digital wellness journal for Yale students.',
    link: 'https://github.com/dilarabikmaz/wellness_journal',
    image: 'yalie-journal.png'
  },
  {
    title: 'beije. App',
    description: 'A mentrual tracking app I helped develop during my internship at beije.',
    link: 'https://beije.co/en',
    image: 'beije-web.png'
  },
  {
    title: 'Personal Website',
    description: 'Hi! You\'re here :)',
    link: '#',
    image: 'pers-web.png'
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
