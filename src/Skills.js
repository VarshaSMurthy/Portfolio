import React from "react";
import dockerIcon from "./custom-icons/docker";
import kubernetesIcon from "./custom-icons/kubernetes";
import jenkinsIcon from "./custom-icons/jenkins";
import ckaIcon from "./custom-icons/cka";
import angularIcon from "./custom-icons/angular";
import ansibleIcon from "./custom-icons/ansible";
import terraformIcon from "./custom-icons/terraform";
import awsIcon from "./custom-icons/aws";
import gitIcon from "./custom-icons/git";
import githubIcon from "./custom-icons/github"; 
import linuxIcon from "./custom-icons/linux";
import htmlIcon from "./custom-icons/html";
import grafanaIcon from "./custom-icons/grafana";
import prometheusIcon from "./custom-icons/prometheus";
import vmwareIcon from "./custom-icons/vmware";
import pythonIcon from "./custom-icons/python";
import cssIcon from "./custom-icons/css";
import bashIcon from "./custom-icons/bash";
import mysqlIcon from "./custom-icons/mysql";
import typescriptIcon from "./custom-icons/typescript";
import redhatIcon from "./custom-icons/redhat";
import ubuntuIcon from "./custom-icons/ubuntu";
import logscaleIcon from "./custom-icons/logscale";
import helmIcon from "./custom-icons/helm";
import argoIcon from "./custom-icons/argo";
import flaskIcon from "./custom-icons/flask";
import reactIcon from "./custom-icons/react";


// Skill groups
const skillGroups = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", icon: <img src={pythonIcon} alt="Python" style={{ width: 50, height: 50 }} /> },
      { name: "TypeScript", icon: <img src={typescriptIcon} alt="TypeScript" style={{ width: 50, height: 50 }} /> },
      { name: "Bash", icon: <img src={bashIcon} alt="Bash" style={{ width: 50, height: 50 }} /> },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "HTML5", icon: <img src={htmlIcon} alt="HTML5" style={{ width: 50, height: 50 }} /> },
      { name: "CSS3", icon: <img src={cssIcon} alt="CSS3" style={{ width: 50, height: 50 }} /> },
      { name: "Angular", icon: <img src={angularIcon} alt="Angular" style={{ width: 50, height: 50 }} /> },
      { name: "MySQL", icon: <img src={mysqlIcon} alt="MySQL" style={{ width: 60, height: 60 }} /> },
      { name: "Flask", icon: <img src={flaskIcon} alt="Flask" style={{ width: 50, height: 50 }} /> },
      { name: "React", icon: <img src={reactIcon} alt="React" style={{ width: 50, height: 50 }} /> },

    ],
  },
  {
    title: "DevOps and Cloud",
    skills: [
      { name: "Jenkins", icon: <img src={jenkinsIcon} alt="Jenkins" style={{ width: 60, height: 60 }} /> },
      { name: "Ansible", icon: <img src={ansibleIcon} alt="Ansible" style={{ width: 50, height: 50 }} /> },
      { name: "Terraform", icon: <img src={terraformIcon} alt="Terraform" style={{ width: 50, height: 50 }} /> },
      { name: "Git", icon: <img src={gitIcon} alt="Git" style={{ width: 50, height: 50 }} /> },
      { name: "GitHub", icon: <img src={githubIcon} alt="GitHub" style={{ width: 50, height: 50, background: "#fff", borderRadius: "5px", border: "1px solid #eee" }} /> },
      { name: "AWS", icon: <img src={awsIcon} alt="AWS" style={{ width: 50, height: 50, background: "#fff", borderRadius: "5px", border: "1px solid #eee" }} /> },
      { name: "Helm", icon: <img src={helmIcon} alt="Helm" style={{ width: 50, height: 50 }} /> },
      { name: "ArgoCD", icon: <img src={argoIcon} alt="ArgoCD" style={{ width: 50, height: 50 }} /> },
    ],
  },
  {
    title: "Operating Systems",
    skills: [
      { name: "Linux", icon: <img src={linuxIcon} alt="Linux" style={{ width: 50, height: 50 }} /> },
      { name: "Red Hat", icon: <img src={redhatIcon} alt="Red Hat" style={{ width: 50, height: 50 }} /> },
      { name: "Ubuntu", icon: <img src={ubuntuIcon} alt="Ubuntu" style={{ width: 50, height: 50 }} /> },
    ],
  },
  {
    title: "Monitoring Solution",
    skills: [
      { name: "Prometheus", icon: <img src={prometheusIcon} alt="Prometheus" style={{ width: 50, height: 50 }} /> },
      { name: "Grafana", icon: <img src={grafanaIcon} alt="Grafana" style={{ width: 50, height: 50 }} /> },
      { name: "LogScale", icon: <img src={logscaleIcon} alt="LogScale" style={{ width: 60, height: 60 }} /> },
    ],
  },
  {
    title: "Containerization",
    skills: [
      { name: "Docker", icon: <img src={dockerIcon} alt="Docker" style={{ width: 50, height: 50 }} /> },
      { name: "Kubernetes", icon: <img src={kubernetesIcon} alt="Kubernetes" style={{ width: 50, height: 50 }} /> },
    ],
  },
  {
    title: "Virtualization",
    skills: [
      { name: "VMware", icon: <img src={vmwareIcon} alt="VMware" style={{ width: 50, height: 50, background: "#fff", borderRadius: "5px", border: "1px solid #eee" }} /> },
    ],
  },
];

// Separate certifications section
const certifications = {
  title: "Certifications",
  skills: [
    { name: "Certified Kubenetes Administrator", icon: <img src={ckaIcon} alt="CKA" style={{ width: 80, height: 80 }} /> },
  ],
};

function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="about-header-row">
        <span className="about-section-number">03.</span>
        <h2 className="about-title">Skills and Certifications</h2>
        <div className="about-title-line"></div>
      </div>
      <div className="skills-group-list">
        {skillGroups.map((group) => (
          <div key={group.title} className="skills-card">
            <h3 className="skills-card-title">{group.title}</h3>
            <div className="skills-card-separator"></div>
            <div className="skills-grid">
              {group.skills.map((skill) => (
                <div key={skill.name} className="skill-item" title={skill.name}>
                  {skill.icon}
                  <span className="skill-tooltip">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Certifications section - full width */}
      <div className="certifications-section">
        <div className="skills-card certifications-card">
          <h3 className="skills-card-title">{certifications.title}</h3>
          <div className="skills-card-separator"></div>
          <div className="skills-grid">
            {certifications.skills.map((skill) => (
              <div key={skill.name} className="skill-item" title={skill.name}>
                {skill.icon}
                <span className="skill-tooltip">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;