import React from 'react';
import '../../styles/Hobbies.css';

const Hobbies = ({ isNight }) => {
  const hobbies = [
    {
      id: 1,
      title: "Flute Era",
      desc: "I’ve been playing the flute since forever. I am no professional but I love it.",
      img: "/flute.png",
      xp: 70,
      level: 5
    },
    {
      id: 2,
      title: "Digital Doodles & Cute UI Girl",
      desc: "I illustrate characters, icons, and UI that feel cozy, curious, and mine.",
      img: "/illustrations.png",
      xp: 85,
      level: 4
    },
    {
      id: 3,
      title: "Bookworm with Commitment Issues",
      desc: "I read 3 books at once and finish… one. But I collect quotes a lot of quotes.",
      img: "/book.png",
      xp: 55,
      level: 2
    },
    {
      id: 4,
      title: "Soft Girl Crocheting",
      desc: "I like creating cute things with yarn. It’s like coding, but fluffier.",
      img: "/crochet.png",
      xp: 60,
      level: 3
    },
    {
      id: 5,
      title: "Igbo Girl in the Diaspora",
      desc: "Learning Igbo to stay rooted in where I come from.",
      img: "/igbo.png",
      xp: 40,
      level: 2
    }
  ];

  return (
    <div className={`hobbies-container ${isNight ? "night-mode" : ""}`}>
      <h2 className="hobbies-title">My Offline Quests</h2>
      <div className="hobbies-list">
        {hobbies.map(hobby => (
          <div key={hobby.id} className="hobby-card">
            <div className="hobby-content">
              <div className="hobby-info">
                <h3>{hobby.title}</h3>
                <p>{hobby.desc}</p>
                <div className="xp-section">
                  <span className="level">Lv. {hobby.level}</span>
                  <div className="xp-bar">
                    <div className="xp-fill" style={{ width: `${hobby.xp}%` }}></div>
                  </div>
                  <span className="xp-text">{hobby.xp}% XP</span>
                </div>
              </div>
              <div className="hobby-image">
                <img src={hobby.img} alt={hobby.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hobbies;
