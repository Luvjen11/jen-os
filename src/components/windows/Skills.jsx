import React from 'react';
import '../../styles/Skills.css';

const Skills = () => {
  const technicalSkills = [
    { name: 'Java (Spring Boot)', logo: '/icons/java.png' },
    { name: 'React', logo: '/icons/react.png' },
    { name: 'MySQL', logo: '/icons/sql.png' },
    { name: 'HTML5', logo: '/icons/html5.png' },
    { name: 'CSS3', logo: '/icons/css3.png' },
    { name: 'JavaScript', logo: '/icons/js.png' },
    { name: 'GitHub', logo: '/icons/github.png' },
    { name: 'Git', logo: '/icons/git.png' },
  ];

  const softSkills = [
    'Problem Solving',
    'Teamwork',
    'Adaptability',
  ];

  const languageSkills = [
    'Italian',
    'English',
    'Igbo',
  ];

  return (
    <div className="skills-container">
      <h2 className="skills-title">Skills</h2>

      {/* Technical Skills */}
      <div className="skills-section">
        <h3 className="skills-section-title">Technical Skills</h3>
        <div className="skills-grid">
          {technicalSkills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-logo">
                <img 
                  src={skill.logo} 
                  alt={skill.name}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="skill-logo-fallback" style={{ display: 'none' }}>
                  {skill.name.charAt(0)}
                </div>
              </div>
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div className="skills-section">
        <h3 className="skills-section-title">Soft Skills</h3>
        <div className="skills-text-list">
          {softSkills.map((skill, index) => (
            <span key={index} className="skill-text-item">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Language Skills */}
      <div className="skills-section">
        <h3 className="skills-section-title">Language Skills</h3>
        <div className="skills-text-list">
          {languageSkills.map((skill, index) => (
            <span key={index} className="skill-text-item">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;