# Varsha Sangama Murthy - Portfolio

A modern, responsive portfolio website showcasing my expertise as a Site Reliability Engineer. Built with React.js and featuring a clean, professional design with smooth animations and mobile-responsive layout.

## 🚀 Features

- **Modern Design** - Clean, professional UI with cyan accent theme (#38e6fe)
- **Fully Responsive** - Mobile hamburger menu, optimized for all device sizes
- **Interactive Experience Timeline** - Tab-based navigation through my professional journey
- **Skills Showcase** - Organized skill cards with tech stack visualization
- **Professional About Section** - Detailed background with justified text alignment
- **Contact Integration** - Direct links to LinkedIn, GitHub, and email
- **Smooth Navigation** - Single-page application with smooth scrolling
- **Mobile-First Design** - Optimized mobile experience with dedicated navigation

## 🛠️ Technologies Used

- **Frontend**: React.js (^19.1.1), HTML5, CSS3
- **Icons**: React Icons (FaLinkedin, FaGithub, FaEnvelope, FaBars, FaTimes)
- **Styling**: Custom CSS with responsive design and mobile breakpoints
- **Build Tool**: Create React App with React Scripts (5.0.1)
- **Deployment**: Ready for deployment on Netlify, Vercel, or GitHub Pages

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/my-portfolio.git
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Install React Icons (if not already included):
```bash
npm install react-icons
```

4. Start the development server:
```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 📋 Current Dependencies

### **Core Dependencies**
- **React** (^19.1.1) - Main frontend library
- **React DOM** (^19.1.1) - React rendering library
- **React Scripts** (5.0.1) - Build scripts and configuration

### **UI Dependencies**
- **react-icons** (^5.5.0) - Icon library for navigation and social links

### **Development & Testing**
- **@testing-library/react** (^16.3.0) - React testing utilities
- **@testing-library/jest-dom** (^6.6.4) - Jest DOM testing matchers
- **@testing-library/user-event** (^13.5.0) - User interaction testing
- **web-vitals** (^2.1.4) - Performance monitoring

4. Start the development server:
```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 📋 Dependencies Overview

### **Core Dependencies**
- **React** (^19.1.1) - Main frontend library
- **React DOM** (^19.1.1) - React rendering library
- **React Scripts** (5.0.1) - Build scripts and configuration

### **Feature Dependencies**
- **@emailjs/browser** (^4.4.1) - Email functionality for contact form
- **react-icons** (^5.5.0) - Icon library for UI components
- **react-router-dom** (^7.7.1) - Client-side routing (optional)

### **Development & Testing**
- **@testing-library/react** (^16.3.0) - React testing utilities
- **@testing-library/jest-dom** (^6.6.4) - Jest DOM testing matchers
- **@testing-library/user-event** (^13.5.0) - User interaction testing
- **web-vitals** (^2.1.4) - Performance monitoring

### **Quick Install All**
If you want to install all packages at once:
```bash
npm install @emailjs/browser react-icons react-router-dom @testing-library/react @testing-library/jest-dom @testing-library/user-event web-vitals
```

## 🏗️ Project Structure

```
src/
├── About.js             # About section with professional background
├── App.js               # Main application component
├── App.css              # Comprehensive styles and responsive design
├── Contact.js           # Contact section with social links
├── Experience.js        # Professional experience with tab navigation
├── experienceData.js    # Experience data (NetApp, Tesla, ASU, ESRI, Bosch)
├── Home.js              # Hero section with introduction
├── MobileMenuButton.js  # Mobile hamburger menu component
├── Navbar.js            # Desktop navigation bar
├── Portfolio.js         # Projects showcase section
├── Skills.js            # Technical skills and certifications
├── index.js             # Application entry point
└── reportWebVitals.js   # Performance monitoring
```

## 👩‍💻 About the Developer

**Varsha Sangama Murthy** - Site Reliability Engineer

Currently working at **NetApp** as a Site Reliability Engineer, with previous experience at **Tesla**, **Arizona State University**, **ESRI**, and **Bosch Global Software Technologies**. Specializing in infrastructure automation, monitoring solutions, and large-scale system deployment.

### Professional Background:
- **NetApp** (Sep 2024 - Present) - Site Reliability Engineer
- **Tesla** (Jan 2024 - May 2024) - Software Engineer Intern  
- **ASU** (Oct 2022 - Dec 2023) - ETS Linux Support
- **ESRI** (May 2023 - Aug 2023) - Software Developer Intern
- **Bosch** (Aug 2019 - Jul 2022) - Software Engineer

## 🎨 Customization

### Theme Colors
The portfolio uses a cyan-blue accent theme:
```css
/* Primary accent color */
:root {
  --accent-color: #38e6fe;
  --background-dark: #10131a;
  --card-background: #191c22;
}
```

### Mobile Navigation
Features a responsive hamburger menu that activates at 900px breakpoint:
- Desktop: Full navigation bar
- Mobile: Hamburger menu with overlay

### Experience Data
Update your experience in `src/experienceData.js`:
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

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag the `build` folder to Netlify
3. Configure custom domain (optional)

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
```json
"homepage": "https://yourusername.github.io/my-portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
3. Deploy: `npm run deploy`

## 🔧 Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

## 📞 Contact

Feel free to reach out for collaborations or opportunities:
- **Email**: your.email@example.com
- **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)
- **GitHub**: [Your GitHub Profile](https://github.com/yourusername)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Icons provided by various open source icon libraries
- Design inspiration from modern portfolio websites
- Built with Create React App

---

**Note**: Remember to replace placeholder values with your actual information before deployment!