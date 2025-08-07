import React, { useState } from "react";
import experienceData from "./experienceData";

function Experience() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = experienceData[activeIdx];

  return (
    <section id="experience" className="section experience-section">
      <div className="about-header-row">
        <span className="about-section-number">02.</span>
        <h2 className="about-title">Experience</h2>
        <div className="about-title-line"></div>
      </div>
      <div className="experience-content">
        <div className="experience-tabs">
          {experienceData.map((exp, idx) => (
            <button
              key={exp.company}
              className={`experience-tab${idx === activeIdx ? " active" : ""}`}
              onClick={() => setActiveIdx(idx)}
            >
              {exp.companyShort}
            </button>
          ))}
        </div>
        <div className="experience-details">
          <h3>
            <span className="job-title">{active.title}</span>
            {" "}
            <a
              href={active.companyUrl}
              className="company-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              @ {active.company}
            </a>
          </h3>
          <div className="job-date">{active.date}</div>
          <ul className="job-bullets">
            {active.bullets.map((b, i) => (
              <li key={i}>
                <span className="job-bullet-icon">▹</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;