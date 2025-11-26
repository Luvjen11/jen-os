import React from 'react';
import '../../styles/Projects.css';

const Projects = ({ isNight }) => {
  return (
    <div className={`project-container ${isNight ? "night-mode" : ""}`}>
      <div className="project-card">
        <img src="/akukonkendu.png" alt="Projects Icon" />
        <div className="project-details">
          <h3>Akụkọ Nke Ndụ</h3>
          <p>
            Akụkọ means "story," and Ndụ means "life", in Igbo language. Together, it translates to "The Story of Life.
            A cozy quote generator that displays inspirational quotes from books I've read.
          </p>
          <div className="technologies">
            <h4>Technologies:</h4>
            <p>Java(Spring Boot), React, MySQL</p>
          </div>
          <div className="project-buttons">
            <button className='button'><a href="https://github.com/Luvjen11/Akuko-nke-Ndu" target='blank'>Github</a></button>
            <button className='button'><a href="https://akuko-nke-ndu.vercel.app" target='blank'>Demo</a></button>
          </div>
        </div>
      </div>
      <div className="project-card">
        <img src="/moviemuse1.png" alt="Movie Muse" />
        <div className="project-details">
          <h3>Movie Muse</h3>
          <p>
            MovieMuse lets users add reviews to movies. I can save favorites, add movies and categories, and read reviews from other users.
          </p>
          <div className="technologies">
            <h4>Technologies:</h4>
            <p>Java(Spring Boot), React, MySQL</p>
          </div>
          <div className="project-buttons">
            <button className='button'><a href="https://github.com/Luvjen11/moviemuse" target='blank'>Github</a></button>
            <button className='button'><a href="https://moviemuse-demo.com" target='blank'>Demo</a></button>
          </div>
        </div>
      </div>
      <div className="project-card">
        <img src="/projects-icon.png" alt="Projects Icon" />
        <div className="project-details">
          <h3>Project Name 3</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis magnam cupiditate, hic natus iste provident odit, animi quia aperiam qui molestias rem ducimus dolorem eaque facilis necessitatibus earum at? Aspernatur.
          </p>
          <div className="technologies">
            <h4>Technologies:</h4>
            <p>Python, Django, PostgreSQL</p>
          </div>
          <div className="project-buttons">
            <button>Github</button>
            <button>Demo</button>
          </div>
        </div>
      </div>
      {/* <div className="project-card">
        <img src="/projects-icon.png" alt="Projects Icon" />
        <div className="project-details">
          <h3>Project Name 3</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis magnam cupiditate, hic natus iste provident odit, animi quia aperiam qui molestias rem ducimus dolorem eaque facilis necessitatibus earum at? Aspernatur.
          </p>
          <div className="technologies">
            <h4>Technologies:</h4>
            <p>Python, Django, PostgreSQL</p>
          </div>
          <div className="project-buttons">
            <button>Github</button>
            <button>Demo</button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Projects;