import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./App.css";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function MobileMenuButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLinkClick = (sectionId) => {
    // Scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <>
      <div className="mobile-navbar-flex">
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMenu}>
          <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <div className="mobile-menu-logo">
                <span className="logo-port">Port</span>
                <span className="logo-folio">folio.</span>
              </div>
              <button className="mobile-menu-close" onClick={closeMenu}>
                <FaTimes size={24} />
              </button>
            </div>
            <nav className="mobile-menu-nav">
              {sections.map(section => (
                <button
                  key={section.id}
                  className="mobile-menu-link"
                  onClick={() => handleLinkClick(section.id)}
                >
                  {section.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

export default MobileMenuButton;
