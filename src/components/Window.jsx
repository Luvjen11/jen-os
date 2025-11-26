import { useState } from "react";
import { X, Minus } from "lucide-react";
import '../styles/Window.css';

import About from './windows/AboutContent'
import Project from './windows/Projects'
import Skill from './windows/Skills'
import Selfsaga from './windows/Selfsaga'
import Hobby from './windows/Hobbies'
import Cv from './windows/Cv'
import JenOSUpdates from './windows/JenOSUpdates'

export const Window = (
    { id, title, isOpen, onClose, isNight }
) => {

    if (!isOpen) return null;

    const renderContent = () => {
        switch (id) {
            case "about":
                return <About isNight={isNight}/>;
            case "projects":
                return <Project isNight={isNight}/>;
            case "skills":
                return <Skill isNight={isNight}/>;
            case "selfsaga":
                return <Selfsaga isNight={isNight}/>;
            case "hobbies":
                return <Hobby isNight={isNight}/>;
            case "cv":
                return <Cv isNight={isNight}/>;
            case "jenosupdates":
                return <JenOSUpdates isNight={isNight}/>;
            default:
                return null;
        }
    };

    return (

        <div className={`window-container ${isNight ? "night-mode" : ""}`}>
            <div className="window-card">
                <div className="window-header">
                    <div className="window-title">{title}</div>
                    <div className="window-control">
                        <button className="ctrl-btn">
                            <h3>-</h3>
                        </button>
                        <button
                        className="ctrl-btn close"
                        onClick={onClose}
                        >
                        <h3>X</h3>
                        </button>
                    </div>
                </div>
                <div className="window-content">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}; 

export default Window;