import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import "./App.css";

function App() {
  useEffect(() => {
    // Handle hash navigation on page load/refresh
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash) {
        // Remove the # from hash
        const elementId = hash.substring(1);
        const element = document.getElementById(elementId);
        if (element) {
          // Small delay to ensure page is fully loaded
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };


    // Update URL hash based on scroll position
    const updateHashOnScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      
      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
          
          if (isVisible) {
            const currentHash = window.location.hash.substring(1);
            if (currentHash !== sectionId) {
              // Update URL without triggering scroll
              window.history.replaceState(null, null, `#${sectionId}`);
            }
          }
        }
      });
    };

    // Throttle scroll events for performance
    let scrollTimeout;
    const handleScroll = () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      scrollTimeout = setTimeout(updateHashOnScroll, 100);
    };

    // Handle on initial load
    handleHashNavigation();

    // Handle browser back/forward navigation
    window.addEventListener('hashchange', handleHashNavigation);
    
    // Handle scroll-based URL updates
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('hashchange', handleHashNavigation);
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, []);

  return (
    <div>
      <Navbar />
      <main>
        <Home />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
