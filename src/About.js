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
              My journey in the tech industry has been driven by a passion for building reliable, scalable, and high-performing systems—spanning both infrastructure and application domains. Currently, as an Application Site Reliability Engineer at NetApp, I focus on ensuring the health, performance, and resilience of critical applications through advanced monitoring, automation, and incident management. I develop APIs for application health, define SLIs and SLOs, and implement automated RCA processes to minimize downtime.
            </p>
          </div>
          <div className="about-image-container">
            <div className="about-image-bg"></div>
            <img
              src="/profile.JPG"
              alt="About"
              className="about-image"
            />
          </div>
        </div>
        <div className="about-description-box about-full-width">
          <p className="about-description">
              In addition to application reliability, I have extensive experience working with infrastructure automation, cloud deployment, and system monitoring tools such as Terraform, Jenkins, Ansible, Prometheus, and Grafana. My previous roles at Tesla, ESRI, and Bosch provided me with a strong foundation in infrastructure automation, large-scale deployment, and system optimization, complementing my application-focused responsibilities.
          </p><br />
          <p className="about-description">
            With a Master's in Computer Science from Arizona State University, I am passionate about leveraging my skills across both infrastructure and application layers to deliver resilient, efficient, and scalable solutions. When I'm not optimizing systems or automating workflows, I enjoy exploring new technologies, mentoring peers, and continuously pushing the boundaries of operational excellence.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
