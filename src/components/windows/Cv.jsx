import React from 'react';
import '../../styles/CV.css';
import { Download } from 'lucide-react';

const Cv = () => {
  return (
    <div className="cv-container">
      <h2 className="cv-title">@jennifer-cv</h2>
      <p className="cv-intro">
        A little peek into my professional world
        You can view my CV below or download it to keep!
      </p>

      <div className="cv-frame">
        <iframe
          src="/jennifer-cv.pdf"
          title="Jennifer's CV"
          className="cv-iframe"
        ></iframe>
      </div>

      <a
        href="/jennifer-cv.pdf"
        download="Jennifer-CV.pdf"
        className="cv-download-btn"
      >
        <Download size={18} style={{ marginRight: '8px' }} />
        Download CV
      </a>
    </div>
  );
};

export default Cv;
