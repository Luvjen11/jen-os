import React from 'react';
import '../../styles/Skills.css';

const Skills = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-title">Skills</h2>

      {/* Technical Skills */}
      <div className="skills-box">
        <h3>Technical Skills</h3>
        <div className="skill-card">
          <p>Java</p>
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: '80%' }}></div>
          </div>
          <span className="skill-percentage">80%</span>
        </div>
        <div className="skill-card">
          <p>React</p>
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: '65%' }}></div>
          </div>
          <span className="skill-percentage">65%</span>
        </div>
        <div className="skill-card">
          <p>MySQL</p>
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: '75%' }}></div>
          </div>
          <span className="skill-percentage">75%</span>
        </div>
        <div className="skill-card">
          <p>HTML</p>
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: '100%' }}></div>
          </div>
          <span className="skill-percentage">100%</span>
        </div>
        <div className="skill-card">
          <p>CSS</p>
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: '70%' }}></div>
          </div>
          <span className="skill-percentage">70%</span>
        </div>
        <div className="skill-card">
          <p>Javascript</p>
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: '70%' }}></div>
          </div>
          <span className="skill-percentage">70%</span>
        </div>
      </div>

      {/* Soft Skills */}
      <div className="skills-box">
        <h3>Soft Skills</h3>
        <div className="skill-card">
          <p>Problem Solving</p>
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: '85%' }}></div>
          </div>
          <span className="skill-percentage">85%</span>
        </div>
        <div className="skill-card">
          <p>Teamwork</p>
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: '90%' }}></div>
          </div>
          <span className="skill-percentage">90%</span>
        </div>
        <div className="skill-card">
          <p>Adaptability</p>
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: '80%' }}></div>
          </div>
          <span className="skill-percentage">80%</span>
        </div>
      </div>

      {/* Language Skills */}
      <div className="skills-box">
        <h3>Language Skills</h3>
        <div className="skill-card">
          <p>Italian</p>
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: '100%' }}></div>
          </div>
          <span className="skill-percentage">100%</span>
        </div>
        <div className="skill-card">
          <p>English</p>
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: '95%' }}></div>
          </div>
          <span className="skill-percentage">95%</span>
        </div>
        <div className="skill-card">
          <p>Igbo</p>
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: '50%' }}></div>
          </div>
          <span className="skill-percentage">50%</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;