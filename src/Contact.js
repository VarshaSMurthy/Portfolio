import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import { FaLinkedin, FaEnvelope, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const serviceId = 'YOUR_SERVICE_ID';
      const templateId = 'YOUR_TEMPLATE_ID';
      const publicKey = 'YOUR_PUBLIC_KEY';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'svarshamurthy@gmail.com'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      alert('Thank you for your message! I\'ll get back to you soon.');

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Sorry, there was an error sending your message. Please try again or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="about-header-row">
        <span className="about-section-number">05.</span>
        <h2 className="about-title">Contact</h2>
        <div className="about-title-line"></div>
      </div>

      <div className="contact-flex-row">
        {/* Left Side: Contact Info */}
        <div className="contact-info">
          <p className="contact-description">
            Feel free to reach out to me for any questions or opportunities. I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.<br />
          </p>
          <div className="contact-info-list">
            <div>
              <FaMapMarkerAlt className="contact-icon" /> <span>Location</span><br />
              <span className="contact-info-link" style={{paddingTop: '8px', display: 'inline-block'}}>San Jose, CA</span>
            </div>
            <div>
              <FaEnvelope className="contact-icon" /> <span>Email</span><br />
              <a href="mailto:svarshamurthy@gmail.com" className="contact-info-link" style={{paddingTop: '8px', display: 'inline-block'}}>svarshamurthy@gmail.com</a>
            </div>
          </div>
          <div className="contact-socials">
            <span>Follow Me</span>
            <div className="contact-social-icons">
              <a href="https://github.com/VarshaSMurthy" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://linkedin.com/in/varsha-sangama-murthy" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What's this about?"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button type="submit" className="send-button" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      <div className="copyright-section">
        <div className="copyright-content">
          <p className="copyright-text">
            © 2025 Varsha Sangama Murthy. All rights reserved.
          </p>
          <p className="copyright-subtext">
            Built with React.js and passion for clean code.
          </p>
          <div className="copyright-links">
            <a href="mailto:svarshamurthy@gmail.com" className="copyright-link">
              <FaEnvelope /> Email
            </a>
            <span className="copyright-separator">•</span>
            <a href="https://linkedin.com/in/varsha-sangama-murthy" className="copyright-link" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;