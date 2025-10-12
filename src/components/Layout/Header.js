import React, { useState, useEffect } from 'react';
import { Layout, Menu, Button, Drawer } from 'antd';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import './Header.css';

const { Header: AntHeader } = Layout;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { key: 'home', label: 'Home' },
    { key: 'skills', label: 'Skills' },
    { key: 'experience', label: 'Experience' },
    { key: 'projects', label: 'Projects' },
    { key: 'education', label: 'Education' },
    { key: 'contact', label: 'Contact' }
  ];

  const handleMenuClick = (e) => {
    const element = document.getElementById(e.key);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <AntHeader className={`portfolio-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <motion.div
          className="logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="logo-text">Kiran</span>
        </motion.div>

        <div className="desktop-menu">
          <Menu
            mode="horizontal"
            items={menuItems}
            onClick={handleMenuClick}
            className="header-menu"
          />
        </div>

        <Button
          className="mobile-menu-button"
          icon={<MenuOutlined />}
          onClick={() => setIsMobileMenuOpen(true)}
        />

        <Drawer
          title={
            <div className="drawer-header">
              <span className="logo-text">Kiran</span>
              <Button
                icon={<CloseOutlined />}
                onClick={() => setIsMobileMenuOpen(false)}
                className="close-button"
              />
            </div>
          }
          placement="right"
          onClose={() => setIsMobileMenuOpen(false)}
          open={isMobileMenuOpen}
          className="mobile-drawer"
        >
          <Menu
            mode="vertical"
            items={menuItems}
            onClick={handleMenuClick}
            className="mobile-menu"
          />
        </Drawer>
      </div>
    </AntHeader>
  );
};

export default Header;
