import React, { useState } from "react";
import "./about.css";
import ml from './ml.jpg'
import sql from './sql.png'
import imgppr from './paper.jpg'

export const About = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      title: "TIJER - INTERNATIONAL RESEARCH JOURNAL",
      description: "Published 'AI Powered Content Generation for Websites' in TIJER International Research Journal, November 2024.",
      image: imgppr,
    },
    {
      title: "Python for Machine Learning",
      description: "Completed 'Python for Machine Learning' course from Great Learning Academy in August 2023.",
      image: ml,
    },
    {
      title: "Skill rack",
      description: "A Certificate for completing SQL Basics.",
      image: sql,
    },
  ];

  const openModal = (certificate) => setSelectedCertificate(certificate);
  const closeModal = () => setSelectedCertificate(null);

  return (
    <div className="about-container">
      <div className="about-header">
        <h1 className="about-title">
          Hello, I'm <span>SAHANAA</span>
        </h1>
        <p className="about-subtitle">
          A Creative Web Developer and Technology Enthusiast
        </p>
      </div>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hi Everyone, I am <strong>SAHANAA</strong> from Coimbatore, India. I
            am currently studying in{" "}
            <strong>Sri Eshwar College of Engineering</strong>, pursuing
            B.E.CSE (Artificial Intelligence and Machine Learning).
          </p>
          <p>
            I have completed <strong>HSC and SSLC</strong> in{" "}
            <strong>Maharishi Vidya Mandir Higher Secondary School</strong>.
          </p>
          <p>
            When I'm not coding, you'll find me <em>Painting and Drawing</em>,{" "}
            <em>capturing moments through photography</em>, or{" "}
            <em>exploring nature</em>.
          </p>
        </div>

        {/* Programming Skills */}
        <div className="skills-section">
          <h2 className="skills-title">My Programming Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <span>HTML & CSS</span>
            </div>
            <div className="skill-card">
              <span>Java</span>
            </div>
            <div className="skill-card">
              <span>JavaScript</span>
            </div>
            <div className="skill-card">
              <span>Python</span>
            </div>
            <div className="skill-card">
              <span>C++</span>
            </div>
            <div className="skill-card">
              <span>C</span>
            </div>
          </div>
        </div>

        {/* Certificates Section */}
        <div className="certificates-section">
          <h2 className="certificates-title">My Certificates</h2>
          <div className="certificates-grid">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="certificate-card"
                onClick={() => openModal(cert)}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="certificate-image"
                />
                <div className="certificate-info">
                  <h3>{cert.title}</h3>
                  <p>{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for Certificate Details */}
        {selectedCertificate && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="modal-image"
              />
              <h3>{selectedCertificate.title}</h3>
              <p>{selectedCertificate.description}</p>
              <button className="close-modal-btn" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="skills">
     
      <ul>
      
        <div class="skills-category">
          <div className="new-h2">
                <h2>Tools & Technologies</h2></div>
                <ul>
                    <li>VS Code: <progress value="90" max="100"></progress></li>
                    <li>Canva: <progress value="80" max="100"></progress></li>
                    <li>GitHub: <progress value="85" max="100"></progress></li>
                </ul>
            </div>
      </ul>
    
  
    
  
      
       
        </div>

    </div>
  );
};
