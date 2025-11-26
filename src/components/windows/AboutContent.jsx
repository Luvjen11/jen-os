import React from 'react';
import '../../styles/AboutContent.css';

const AboutContent = ({ isNight }) => {
  return (
    <div className={`about-content ${isNight ? "night-mode" : ""}`}>
        <div className='about-info'>
            <div className="about-image">
                <img src="/jen.png" alt="A photo of me" />
            </div>
            <div className="about-text">
                <h1>Jennifer Ogechi Okeke</h1>
                <p>I’m an Igbo Nigerian girl born and raised in Italy. Somehow ended up in the UK trying to act like I have my life together. 
                    Spoiler: I don’t, but I’m really good at making Notion dashboards that say otherwise.
                </p>
                <p>
                My love for tech didn’t start with some dramatic “I built my first computer at age 5” moment. It was more like “oooh I wanna learn that and that and that too”. Suddenly I went from cute little HTML to being in a situationship with Mr Java and Miss React.
                Now I’m over here building digital tools to automate my life because if something can be done by code, why should I suffer? 
                And along the way, I realized I actually enjoy building things that help people feel more organized, more empowered, and a little less chaotic, even if the world is doing its best to be messy.
                </p>
            </div>
        </div>
      

      {/* Goals Section */}
      <div className="about-goals">
        <h3>Goals</h3>
        <div className="goal-cards">
          <div className="goal-card">Build my startup</div>
          <div className="goal-card">Learn Igbo and Korean</div>
          <div className="goal-card">Gym and food</div>
          <div className="goal-card">Build multiple streams of income</div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;