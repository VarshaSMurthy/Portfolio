import React, { useEffect, useState } from "react";
import MobileMenuButton from "./MobileMenuButton";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // adjust offset for navbar height
      let current = "home";
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop <= scrollPosition) {
          current = section.id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="main-navbar">
        <div className="main-logo">
          <span className="logo-port">Port</span>
          <span className="logo-folio">folio.</span>
        </div>
        <ul className="main-nav-links">
          {sections.map(section => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={activeSection === section.id ? "active" : ""}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <MobileMenuButton />
    </>
  );
}

export default Navbar;
