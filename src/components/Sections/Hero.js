import React, { useEffect, useState } from 'react';
import { Button, Typography, Space } from 'antd';
import { DownloadOutlined, GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
// Removed react-typed dependency
import portfolioData from '../../data/portfolioData.json';
import profileImage from '../../assets/profile.png';
import './Hero.css';

const { Title, Paragraph } = Typography;

const Hero = () => {
  const [currentTechIndex, setCurrentTechIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTechIndex((prev) => (prev + 1) % portfolioData.techStack.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const techVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="floating-shapes">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="floating-shape"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-text" variants={itemVariants}>
            <motion.div
              className="greeting"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="wave">👋</span> Hello, I'm
            </motion.div>
            
            <Title level={1} className="hero-title">
              {portfolioData.personalInfo.name}
            </Title>
            
            <div className="typed-container">
              <div className="typed-text">
                {['Full Stack Developer', 'AI Engineer', 'Problem Solver', 'Tech Enthusiast' , 'App Developer'][currentTechIndex % 5]}
              </div>
            </div>
            
            <Paragraph className="hero-description">
              {portfolioData.personalInfo.description}
            </Paragraph>
            
            <Space size="large" className="hero-buttons">
              <Button
                type="primary"
                size="large"
                icon={<DownloadOutlined />}
                className="cta-button"
                href={portfolioData.personalInfo.resumeUrl}
                download
              >
                Download Resume
              </Button>
              <Button
                size="large"
                className="contact-button"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </Space>
            
            <div className="social-links">
              <motion.a
                href={portfolioData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <GithubOutlined />
              </motion.a>
              <motion.a
                href={portfolioData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <LinkedinOutlined />
              </motion.a>
              <motion.a
                href={portfolioData.socialLinks.email}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <MailOutlined />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div className="hero-visual" variants={itemVariants}>
            <div className="profile-section">
              {/* Profile Image */}
              <motion.div 
                className="profile-image-container"
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 100, 
                  damping: 15,
                  delay: 0.5 
                }}
              >
                <div className="profile-image-wrapper">
                  <img 
                    src={profileImage} 
                    alt={portfolioData.personalInfo.name}
                    className="profile-image"
                  />
                  <div className="profile-glow"></div>
                  <div className="profile-outline"></div>
                </div>
              </motion.div>



              {/* Background Decorative Elements */}
              <div className="profile-decorations">
                <motion.div 
                  className="decoration-circle decoration-1"
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                />
                <motion.div 
                  className="decoration-circle decoration-2"
                  animate={{ 
                    rotate: -360,
                    scale: [1.1, 1, 1.1]
                  }}
                  transition={{ 
                    rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                />
                <motion.div 
                  className="decoration-circle decoration-3"
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                    scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                  }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
          style={{ cursor: 'pointer' }}
        >
          <div className="scroll-arrow">↓</div>
          <span>Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
