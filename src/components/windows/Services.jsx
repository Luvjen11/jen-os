import React from "react";
import "../../styles/Services.css";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Web Development",
      desc: "I design and build beautiful, responsive websites that reflect personality and function seamlessly.",
      img: "/webdev.png",
    },
    {
      id: 2,
      title: "Frontend Magic",
      desc: "Turning ideas into interactive interfaces — clean, intuitive, and built with love using React and CSS.",
      img: "/frontend.png",
    },
    {
      id: 3,
      title: "API Integration",
      desc: "I connect your app’s frontend and backend with RESTful APIs for smooth data flow and performance.",
      img: "/api.png",
    },
  ];

  return (
    <div className="services-container">
      <h2 className="services-title">My Services</h2>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-img-wrapper">
              <img src={service.img} alt={service.title} className="service-img" />
            </div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
