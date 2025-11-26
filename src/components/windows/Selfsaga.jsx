import React from "react";
import "../../styles/Selfsaga.css";

const Selfsaga = ({ isNight }) => {
  return (
    <div className={`selfsaga-container ${isNight ? "night-mode" : ""}`}>
      <div className="selfsaga-content">
        <h1 className="selfsaga-h1">SelfSaga</h1>
        
        <blockquote className="selfsaga-blockquote">
          A gentle productivity app for girls who want to grow, heal, and get their life together without burning out.
        </blockquote>

        <h2 className="selfsaga-h2">What it is</h2>
        <p className="selfsaga-p">
          SelfSaga is my long-term project: a gamified self-growth and journaling platform. 
        </p>
        <p className="selfsaga-p">
          It blends cozy aesthetics, quests, reflections, and simple tracking tools to help people work on their goals in a softer way.
        </p>

        <h2 className="selfsaga-h2">Who it's for</h2>
        <ul className="selfsaga-ul">
          <li>Students and young women juggling school, work, and personal growth</li>
          <li>People who love journaling, but want structure and a bit of fun</li>
          <li>Anyone who likes "soft RPG" vibes more than hardcore grind culture</li>
        </ul>

        <h2 className="selfsaga-h2">Features (current & planned)</h2>
        <ul className="selfsaga-ul">
          <li>Daily and weekly reflection prompts</li>
          <li>Quest-style goals and streaks</li>
          <li>Soft, journal-inspired UI</li>
          <li>Future: AI reflections, personalized quests, community features</li>
        </ul>

        <h2 className="selfsaga-h2">My role</h2>
        <ul className="selfsaga-ul">
          <li>Backend: Java, Spring Boot, MySQL</li>
          <li>Frontend: React / Next.js (MVP in progress)</li>
        </ul>

        <h2 className="selfsaga-h2">Status</h2>
        <ul className="selfsaga-checklist">
          <li className="selfsaga-check-item checked">
            <span className="selfsaga-checkbox">✓</span>
            Concept & core feature list
          </li>
          <li className="selfsaga-check-item checked">
            <span className="selfsaga-checkbox">✓</span>
            Early UI explorations
          </li>
          <li className="selfsaga-check-item">
            <span className="selfsaga-checkbox">☐</span>
            MVP backend
          </li>
          <li className="selfsaga-check-item">
            <span className="selfsaga-checkbox">☐</span>
            MVP frontend
          </li>
          <li className="selfsaga-check-item">
            <span className="selfsaga-checkbox">☐</span>
            Closed beta with friends
          </li>
        </ul>

        <h2 className="selfsaga-h2">Tech stack</h2>
        <ul className="selfsaga-ul">
          <li>Java, Spring Boot, MySQL</li>
          <li>React / Next.js</li>
        </ul>

        <h2 className="selfsaga-h2">Links</h2>
        <p className="selfsaga-p">
          <a href="#" className="selfsaga-link">Link</a>
        </p>
      </div>
    </div>
  );
};

export default Selfsaga;
