import React from "react";
import "./App.css";

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="about-header-row">
        <span className="about-section-number">01.</span>
        <h2 className="about-title">About Me</h2>
        <div className="about-title-line"></div>
      </div>
      <div className="about-content-row">
        <div className="about-top-row">
          <div className="about-description-box">
            <p className="about-description">
              My journey in the tech industry has been driven by a passion for building reliable, scalable, and high-performing systems—spanning both infrastructure and application domains. Currently, as an Application Site Reliability Engineer at NetApp, I focus on ensuring the health, performance, and resilience of critical applications through advanced monitoring, automation, and incident management. I develop APIs for application health, define SLIs and SLOs, and implement RCA processes to minimize downtime.
            </p><br />

            <p className="about-description">
              Beyond application reliability, I have extensive experience in infrastructure automation, cloud deployment, and system monitoring, working with tools such as Terraform, Jenkins, Ansible, Prometheus, and Grafana. My previous roles at Tesla, ESRI, and Bosch provided me with a strong foundation in large-scale infrastructure automation, deployment, and system optimization—complementing my application-focused responsibilities.
            </p><br />
          </div>
          <div className="about-image-container">
            <div className="about-image-bg"></div>
            <img
              src={process.env.PUBLIC_URL + "/profile.JPG"}
              alt="About"
              className="about-image"
            />
          </div>
        </div>
        <div className="about-description-box about-full-width">
            <p className="about-description">
              Collaboration is at the heart of my work; I thrive in dynamic, cross-functional teams where I can contribute ideas, learn from others, and help drive projects forward. I am passionate about mentoring and sharing knowledge, whether it's guiding peers through technical challenges, leading workshops, or fostering a culture of continuous improvement.
            </p><br />

            <p className="about-description">
              With a Master's in Computer Science from Arizona State University, I am committed to leveraging my skills across both infrastructure and application layers to deliver resilient, efficient, and scalable solutions. My curiosity drives me to explore emerging technologies, experiment with creative projects, and stay engaged with the latest trends in DevOps and reliability engineering.
            </p>
        </div>
      </div>
    </section>
  );
}

export default About;
