import React, { useState, useEffect } from "react";
import "../styles/Hero.css";

const Hero = ({ isNight, setIsNight }) => {

  const [isHalloween, setIsHalloween] = useState(false);

   // 🎃 Auto-activate between Oct 25–31
  useEffect(() => {
    const today = new Date();
    const month = today.getMonth(); // 0 = Jan
    const date = today.getDate();

    if (month === 9 && date >= 25 && date <= 31) {
      setIsHalloween(true);
    }
  }, []);

  const getImage = () => {
    if (isHalloween) return "/jen-os-halloween.png";
    return isNight ? "/jen-os-night.png" : "/jen-os-day.png";
  };


  return (
    <section className={`hero ${isNight ? "night" : "day"}`}>
      <img
        src={getImage()}
        alt="Jen OS Hero"
        className="hero-img"
      />

      <div className="hero-overlay">
        <button
          className="theme-toggle"
          onClick={() => setIsNight(!isNight)}
        >
          {isNight ? "☀️ Day Mode" : "🌙 Night Mode"}
        </button>
      </div>
    </section>
  );
};

export default Hero;
