import React from 'react';
import '../styles/About-Hero.css';

const AboutHero = () => {
  return (
    <section className="about-hero">
      <div className="about-hero-container">
        {/* Left: Polaroid Image */}
        <div className="about-hero-image">
          <img src="/jen.png" alt="Jen Ogechi Okeke" />
        </div>

        {/* Right: Professional Text */}
        <div className="about-hero-text">
          <h1 className="about-hero-name">Jennifer Ogechi Okeke</h1>
          <p className="about-hero-title">Software Engineer — Java, Spring Boot, React</p>
          <div className="about-hero-description">
            <p>
            I build clean and dependable web applications, blending solid backend engineering with simple, intuitive interfaces. 
            I love making digital tools that feel warm, organized, and genuinely useful.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;

