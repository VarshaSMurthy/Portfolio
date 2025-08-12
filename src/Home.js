import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./App.css";

function Home() {
  return (
    <section id="home" className="section home-section">
      <div className="home-container">
        <div className="home-card">
          <div className="home-left">
            <h3 className="home-hello">Hello, It's Me</h3>
            <h1 className="home-name">Varsha Sangama Murthy</h1>
            <h2 className="home-role">
              <span className="home-role-accent">Site Reliability Engineer</span>
            </h2>
            <p className="home-desc">
              Empowering reliable, high-performance systems through a passion for Site Reliability Engineering.
            </p>
            <div className="home-socials">
              <a href="https://github.com/VarshaSMurthy" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://linkedin.com/in/varsha-sangama-murthy" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="mailto:svarshamurthy@gmail.com"><FaEnvelope /></a>
            </div>
            <a href="/resume.pdf" className="home-cv-btn" target="_blank" rel="noopener noreferrer">
              Download CV
            </a>
          </div>
          <div className="home-right">
            <div className="hexagon-glow">
              <img src={process.env.PUBLIC_URL + "/profile.JPG"} alt="Profile" className="home-profile-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
