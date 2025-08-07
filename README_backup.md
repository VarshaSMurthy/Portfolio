# Varsha Sangama Murthy - Portfolio

A## 📧 Email Setup

### Basic Email Links (Current Implementation)
The portfolio uses direct email contact via `mailto:` links. To customize:

**Update email address** in `src/Home.js`:
```javascript
<a href="mailto:youremail@example.com"><FaEnvelope /></a>
```

### Advanced: EmailJS Contact Form Setup

To add a functional contact form that sends emails directly from your portfolio:

#### 1. Install EmailJS
```bash
npm install @emailjs/browser
```

#### 2. Create EmailJS Account
1. Go to [emailjs.com](https://www.emailjs.com/) and create a free account
2. Connect your email service (Gmail, Outlook, etc.)
3. Create an email service and note the **Service ID**

#### 3. Create Email Template
1. Go to Email Templates → Create New Template
2. Use these variables in your template:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email  
   - `{{subject}}` - Email subject
   - `{{message}}` - Email message
   - `{{to_email}}` - Your email address
3. Save and note the **Template ID**

#### 4. Get Public Key
1. Go to Account → General
2. Copy your **Public Key**

#### 5. Update Contact.js
Replace the current Contact component with EmailJS integration:

```javascript
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.send(
      'YOUR_SERVICE_ID',        // Replace with your service ID
      'YOUR_TEMPLATE_ID',       // Replace with your template ID
      formData,
      'YOUR_PUBLIC_KEY'         // Replace with your public key
    )
    .then(() => {
      alert('Message sent successfully!');
      setFormData({ from_name: '', from_email: '', subject: '', message: '' });
    })
    .catch(() => {
      alert('Failed to send message. Please try again.');
    });
  };

  return (
    <section id="contact" className="section">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={formData.from_name}
          onChange={(e) => setFormData({...formData, from_name: e.target.value})}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={formData.from_email}
          onChange={(e) => setFormData({...formData, from_email: e.target.value})}
          required
        />
        <input
          type="text"
          placeholder="Subject"
          value={formData.subject}
          onChange={(e) => setFormData({...formData, subject: e.target.value})}
          required
        />
        <textarea
          placeholder="Your Message"
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          required
        />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
```

#### 6. Environment Variables (Recommended)
For security, store your keys in environment variables:

1. Create `.env` file in root directory:
```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

2. Update Contact.js to use environment variables:
```javascript
emailjs.send(
  process.env.REACT_APP_EMAILJS_SERVICE_ID,
  process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  formData,
  process.env.REACT_APP_EMAILJS_PUBLIC_KEY
)
```

3. Add `.env` to your `.gitignore` file to keep keys privateonsive portfolio website showcasing my expertise as a Site Reliability Engineer. Built with React.js and featuring a clean, professional design with mobile-responsive layout.

## 🚀 Features

- **Responsive Design** - Mobile hamburger menu, optimized for all device sizes
- **Professional Experience Timeline** - Tab-based navigation through career journey
- **Skills Showcase** - Technical stack with custom icons
- **Contact Integration** - Direct links to LinkedIn, GitHub, and email
- **Mobile-First Design** - Optimized mobile experience

## 🛠️ Technologies Used

- **Frontend**: React.js (^19.1.1), HTML5, CSS3
- **Icons**: React Icons (^5.5.0)
- **Styling**: Custom responsive CSS

## 📦 Installation

1. **Clone the repository:**
```bash
git clone https://github.com/VarshaSMurthy/Portfolio.git
cd Portfolio
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.

## � Email Setup

The portfolio includes direct email contact via `mailto:` links. To customize:

1. **Update email address** in `src/Home.js`:
```javascript
<a href="mailto:youremail@example.com"><FaEnvelope /></a>
```

2. **For contact forms** (optional enhancement):
   - Install EmailJS: `npm install @emailjs/browser`
   - Create account at [emailjs.com](https://www.emailjs.com/)
   - Add service ID, template ID, and public key to Contact component

## 🎨 Customization

### Update Experience Data
Edit `src/experienceData.js`:
```javascript
const experienceData = [
  {
    company: "Your Company",
    title: "Your Role", 
    date: "Start - End Date",
    bullets: ["Achievement 1", "Achievement 2"]
  }
];
```

### Update Personal Information
- **Home.js**: Name, role, description, social links
- **About.js**: Professional background and image
- **Skills.js**: Technical skills and certifications

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Netlify**: Drag `build` folder to Netlify dashboard
- **Vercel**: Install CLI and run `vercel`
- **GitHub Pages**: Add gh-pages package and deploy script

## 📞 Contact

- **Email**: svarshamurthy@gmail.com
- **LinkedIn**: [linkedin.com/in/varsha-sangama-murthy](https://linkedin.com/in/varsha-sangama-murthy)
- **GitHub**: [github.com/VarshaSMurthy](https://github.com/VarshaSMurthy)


