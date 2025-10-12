# 🚀 Modern Portfolio Website

A stunning, responsive portfolio website built with React, Ant Design, and Framer Motion. Features smooth animations, modern design, and a data-driven approach for easy content management.

## ✨ Features

- **🎨 Modern Design**: Clean, elegant interface with gradient backgrounds and smooth animations
- **📱 Fully Responsive**: Optimized for all devices from mobile to desktop
- **⚡ Smooth Animations**: Powered by Framer Motion for engaging user experience
- **🎯 Data-Driven**: Easy content management through JSON configuration
- **🔧 Tech Stack Showcase**: Animated tech stack with skill levels
- **📊 GitHub Integration**: GitHub contributions calendar and statistics
- **📧 Contact Form**: Functional contact form with validation
- **📄 Resume Download**: Direct resume download functionality
- **🌙 Accessibility**: WCAG compliant with proper focus management

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **UI Library**: Ant Design
- **Animations**: Framer Motion
- **Icons**: Ant Design Icons, React Icons
- **Styling**: CSS3 with custom animations
- **Routing**: React Router DOM
- **GitHub**: React GitHub Calendar

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📝 Customization

### Updating Content

All content is managed through the `src/data/portfolioData.json` file. Simply update this file to customize:

#### Personal Information
```json
{
  "personalInfo": {
    "name": "Your Name",
    "title": "Your Title",
    "email": "your.email@example.com",
    "phone": "+1 (555) 123-4567",
    "location": "Your City, Country",
    "resumeUrl": "/resume.pdf"
  }
}
```

#### Adding Projects
```json
{
  "projects": [
    {
      "id": 1,
      "title": "Project Name",
      "description": "Project description",
      "technologies": ["React", "Node.js", "MongoDB"],
      "githubUrl": "https://github.com/username/project",
      "liveUrl": "https://project-demo.com",
      "category": "Full Stack",
      "featured": true
    }
  ]
}
```

#### Adding Experience
```json
{
  "experience": [
    {
      "id": 1,
      "company": "Company Name",
      "position": "Your Position",
      "duration": "2022 - Present",
      "location": "City, Country",
      "description": "Job description",
      "technologies": ["React", "TypeScript", "AWS"],
      "achievements": [
        "Achievement 1",
        "Achievement 2"
      ]
    }
  ]
}
```

#### Updating Tech Stack
```json
{
  "techStack": [
    {
      "name": "React",
      "icon": "react",
      "color": "#61DAFB",
      "level": "Expert"
    }
  ]
}
```

### Customizing Colors

Update the color scheme by modifying the CSS custom properties in the component files:

```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --accent-color: #1890ff;
}
```

### Adding New Sections

1. Create a new component in `src/components/Sections/`
2. Add the component to `App.js`
3. Update the navigation in `Header.js`
4. Add corresponding styles

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   └── resume.pdf (add your resume here)
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Header.js
│   │   │   ├── Header.css
│   │   │   ├── Footer.js
│   │   │   └── Footer.css
│   │   └── Sections/
│   │       ├── Hero.js
│   │       ├── Hero.css
│   │       ├── About.js
│   │       ├── About.css
│   │       ├── Experience.js
│   │       ├── Experience.css
│   │       ├── Projects.js
│   │       ├── Projects.css
│   │       ├── Contact.js
│   │       └── Contact.css
│   ├── data/
│   │   └── portfolioData.json
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🎨 Design Features

### Hero Section
- Animated tech stack with rotating icons
- Typed.js integration for dynamic text
- Gradient backgrounds with floating shapes
- Social media links with hover effects

### About Section
- Skills categorization with animated tags
- Education and certifications display
- Profile information with contact details

### Experience Section
- Timeline layout with animated markers
- Company information and achievements
- Technology tags with hover effects
- Career statistics sidebar

### Projects Section
- Filterable project grid
- Modal popups for detailed views
- Technology tags and live links
- Featured project highlighting

### Contact Section
- Functional contact form
- GitHub contributions calendar
- Social media integration
- Resume download functionality

## 🚀 Deployment

### Netlify (Recommended)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `build`

### Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

### GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json**
   ```json
   {
     "homepage": "https://KirannKumarH.github.io/portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

## 🔧 Configuration

### GitHub Contributions

Update the GitHub username in `Contact.js`:

```javascript
<GitHubCalendar
  username="KirannKumarH" // Replace with your GitHub username
  // ... other props
/>
```

### Contact Form

The contact form is currently set up for demonstration. To make it functional:

1. **EmailJS Integration**
   ```bash
   npm install @emailjs/browser
   ```

2. **Update Contact.js**
   ```javascript
   import emailjs from '@emailjs/browser';
   
   const handleSubmit = async (values) => {
     try {
       await emailjs.send(
         'YOUR_SERVICE_ID',
         'YOUR_TEMPLATE_ID',
         values,
         'YOUR_PUBLIC_KEY'
       );
       message.success('Message sent successfully!');
     } catch (error) {
       message.error('Failed to send message.');
     }
   };
   ```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🎯 Performance Optimization

- Lazy loading for images
- Optimized animations with Framer Motion
- CSS-in-JS for better performance
- Minimal bundle size with tree shaking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Ant Design](https://ant.design/) for the UI components
- [Framer Motion](https://www.framer.com/motion/) for animations
- [React GitHub Calendar](https://github.com/grubersjoe/react-github-calendar) for GitHub integration
- [Typed.js](https://github.com/mattboldt/typed.js/) for typing animations

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to:

- Open an issue on GitHub
- Contact me through the portfolio contact form
- Reach out on social media

---

**Made with ❤️ and lots of coffee**