import React, { useState } from 'react';
import '../styles/Journal.css';
import Window from './Window.jsx';

export const Journal = ({ isNight }) => {

    const [window, setWindow] = useState([
        {id: "about", title: "About me", isOpen: false},
        {id: "projects", title: "Projects", isOpen: false},
        {id: "skills", title: "Skills", isOpen: false},
        {id: "services", title: "Services", isOpen: false},
        {id: "hobbies", title: "Hobbies", isOpen: false},
        {id: "cv", title: "Curriculum Vitae", isOpen: false},
        {id: "github", title: "GitHub Profile", isOpen: false},
        {id: "quote1", title: "Quote 1", isOpen: false},
    ]);

    const polaroids = [
        {id: "about", src: "/about-me.png", alt: "about me", label: "About Me"},
        {id: "projects", src: "/projects.png", alt: "projects", label: "Projects"},
        {id: "skills", src: "/skills.png", alt: "skills", label: "Skills"},
        {id: "services", src: "/services.png", alt: "services", label: "Services"},
        {id: "hobbies", src: "/hobbies.png", alt: "hobbies", label: "Hobbies"},
    ]

    const extras = [
        {id: "cv", src: "/file-icon.png ", alt: "cv", label: "CV", top: '10%', left: '70%', size: 50},
        {id: "github", src: "/github.png", alt: "github", label: "GitHub", top: '40%', left: '10%', size: 80},
        {id: "quote1", h3: "Quote 1", label: "there is no future for the past. What’s done is done—now let’s make the best of what we have here and now.", top: '90%', left: '90%', size: 60},
    ]

    const openPolaroid = (id) => {
        setWindow(window.map(win => 
            win.id === id
                ? {...win, isOpen: true}
                : win  
        ));
    };

    const closePolaroid = (id) => {
        setWindow(window.map(win => 
            win.id === id
                ? {...win, isOpen: false}
                : win
        ));
    };

    return (
        <section className={`journal-container ${isNight ? "night-mode" : ""}`}>
            <div className="polariods">
                
                {polaroids.map((polaroid) => (
                    <img
                        key={polaroid.id}
                        src={polaroid.src}
                        alt={polaroid.alt}
                        label={polaroid.label}
                        className="polaroid"
                        onClick={() => openPolaroid(polaroid.id)}
                    />
                ))}
            </div>
                <div className="extras">
                    {extras.map(item => (
                        <div
                            key={item.id}
                            className="extra-item-container"
                            style={{
                                position: 'absolute',
                                top: item.top,
                                left: item.left,
                                textAlign: 'center',
                            }}
                        >
                            <img
                                src={item.src}
                                alt={item.alt}
                                label={item.label}
                                className="extra-item"
                                style={{
                                    width: `${item.size}px`,
                                    cursor: 'pointer',
                                }}
                                onClick={() => openPolaroid(item.id)}
                            />
                            <h3 className="extra-label">{item.label}</h3>
                </div>
                ))}
            </div>

            {window.map((win) =>
                win.isOpen && (
                    <Window
                        key={win.id}
                        id={win.id}
                        title={win.title}
                        isOpen={win.isOpen}
                        onClose={() => closePolaroid(win.id)}
                    />
                )
            )}
        </section>
    );

}

export default Journal;