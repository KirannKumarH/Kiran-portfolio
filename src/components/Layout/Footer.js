import React from 'react';
import { Layout, Typography, Space } from 'antd';
import { HeartOutlined, GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import portfolioData from '../../data/portfolioData.json';
import './Footer.css';

const { Footer: AntFooter } = Layout;
const { Text } = Typography;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <AntFooter className="portfolio-footer">
      <div className="footer-container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="footer-main">
            <div className="footer-info">
              <Text className="footer-name">{portfolioData.personalInfo.name}</Text>
              <Text className="footer-title">{portfolioData.personalInfo.title}</Text>
              <Text className="footer-description">
                Building amazing digital experiences with passion and creativity.
              </Text>
            </div>
            
            <div className="footer-links">
              <Text className="footer-links-title">Quick Links</Text>
              <div className="footer-nav">
                <a href="#home" className="footer-link">Home</a>
                <a href="#about" className="footer-link">About</a>
                <a href="#experience" className="footer-link">Experience</a>
                <a href="#projects" className="footer-link">Projects</a>
                <a href="#contact" className="footer-link">Contact</a>
              </div>
            </div>
            
            <div className="footer-social">
              <Text className="footer-social-title">Connect With Me</Text>
              <Space size="large" className="social-icons">
                <motion.a
                  href={portfolioData.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <GithubOutlined />
                </motion.a>
                <motion.a
                  href={portfolioData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <LinkedinOutlined />
                </motion.a>
                <motion.a
                  href={portfolioData.socialLinks.email}
                  className="social-icon"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <MailOutlined />
                </motion.a>
              </Space>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-copyright">
              <Text className="copyright-text">
                © {currentYear} {portfolioData.personalInfo.name}. Made with{' '}
                <HeartOutlined className="heart-icon" /> and lots of coffee.
              </Text>
            </div>
            <div className="footer-tech">
              <Text className="tech-text">
                Built with React, Ant Design & Framer Motion
              </Text>
            </div>
          </div>
        </motion.div>
      </div>
    </AntFooter>
  );
};

export default Footer;
