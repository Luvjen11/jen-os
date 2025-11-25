import React from "react";
import "../styles/Contact.css";

const Contact = ({ isNight }) => {
  return (
    <section className={`contact-container ${isNight ? "night-mode" : ""}`}>
      <h2 className="contact-title">Let's Stay in Touch</h2>
      <p className="contact-desc">
        If you’ve made it this far into my journal — thank you!  
        I’d love to hear from you, collaborate, or just chat about code, design, or books.
      </p>

      <div className="contact-icons">
        <a href="mailto:jenniferooke11@gmail.com" className="contact-icon">
          <img src="/mail.png" alt="Email" />
          <span>Email</span>
        </a>

        <a
          href="https://www.linkedin.com/in/jenniferogechiokeke/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <img src="/linkedin.png" alt="LinkedIn" />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://github.com/luvjen11"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <img src="/github-icon.png" alt="GitHub" />
          <span>GitHub</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
