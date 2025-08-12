import React from "react";

const projects = [
  {
    title: "Personal Portfolio",
    description: "A responsive portfolio website showcasing my projects, skills, and experience with modern design and smooth animations.",
    image: process.env.PUBLIC_URL + "/portfolio.png",
    tech: ["React", "CSS3", "JavaScript"],
    demo: "#",
    code: "https://github.com/VarshaSMurthy/Portfolio"
  },
  {
    title: "Handwritten Digit Recognition App",
    description: "An Android application for CSE535: Mobile Computing that recognizes handwritten digits using machine learning models and peer-to-peer computing with master-slave architecture.",
    image: process.env.PUBLIC_URL + "/handwriting.jpg",
    tech: ["Android", "Java", "Machine Learning", "P2P Computing"],
    code: "https://github.com/VarshaSMurthy/MobileComputing"
  },
  {
    title: "Brain Boundary Extraction from rs-fMRI",
    description: "A data mining project that extracts brain boundaries from resting state functional magnetic resonance imaging (rs-fMRI) scans using Python, OpenCV, and image processing techniques.",
    image: process.env.PUBLIC_URL + "/brain.png",
    tech: ["Python", "OpenCV", "NumPy", "Image Processing"],
    code: "https://github.com/VarshaSMurthy/DataMining"
  }
];

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="about-header-row">
        <span className="about-section-number">04.</span>
        <h2 className="about-title">My Projects</h2>
        <div className="about-title-line"></div>
      </div>

      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div className="projects-card" key={idx}>
            <img src={project.image} alt={project.title} className="projects-card-img" />
            <div className="projects-card-body">
              <h3 className="projects-card-title">{project.title}</h3>
              <p className="projects-card-desc">{project.description}</p>
              <div className="projects-card-tech">
                {project.tech.map((tech, i) => (
                  <span className="projects-tech-tag" key={i}>{tech}</span>
                ))}
              </div>
              <div className="projects-card-links">
                {project.demo && project.demo !== "#" && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="projects-link">
                    Live Demo
                  </a>
                )}
                <a href={project.code} target="_blank" rel="noopener noreferrer" className="projects-link">
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;