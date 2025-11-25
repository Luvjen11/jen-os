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
    { id, title, isOpen, onClose }
) => {

    if (!isOpen) return null;

    const renderContent = () => {
        switch (id) {
            case "about":
                return <About/>;
            case "projects":
                return <Project/>;
            case "skills":
                return <Skill/>;
            case "selfsaga":
                return <Selfsaga/>;
            case "hobbies":
                return <Hobby/>;
            case "cv":
                return <Cv/>;
            case "jenosupdates":
                return <JenOSUpdates/>;
            default:
                return null;
        }
    };

    return (

        <div className="window-container">
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