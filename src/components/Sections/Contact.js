import React from 'react';
import { Typography, Card, Button, Row, Col } from 'antd';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  MailOutlined, 
  PhoneOutlined, 
  EnvironmentOutlined, 
  GithubOutlined, 
  LinkedinOutlined, 
  TwitterOutlined,
  DownloadOutlined
} from '@ant-design/icons';
import portfolioData from '../../data/portfolioData.json';
import './Contact.css';

const { Title, Paragraph, Text } = Typography;

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });


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


  const contactInfo = [
    {
      icon: <MailOutlined />,
      title: 'Email',
      value: portfolioData.personalInfo.email,
      link: `mailto:${portfolioData.personalInfo.email}`
    },
    {
      icon: <PhoneOutlined />,
      title: 'Phone',
      value: portfolioData.personalInfo.phone,
      link: `tel:${portfolioData.personalInfo.phone}`
    },
    {
      icon: <EnvironmentOutlined />,
      title: 'Location',
      value: portfolioData.personalInfo.location,
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <GithubOutlined />,
      name: 'GitHub',
      url: portfolioData.socialLinks.github,
      color: '#333'
    },
    {
      icon: <LinkedinOutlined />,
      name: 'LinkedIn',
      url: portfolioData.socialLinks.linkedin,
      color: '#0077b5'
    },
    {
      icon: <TwitterOutlined />,
      name: 'Twitter',
      url: portfolioData.socialLinks.twitter,
      color: '#1da1f2'
    }
  ];

  return (
    <section id="contact" className="contact-section" ref={ref}>
      <div className="contact-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <Title level={2} className="section-title">Get In Touch</Title>
            <div className="section-divider"></div>
            <Paragraph className="section-subtitle">
              Ready to work together? Let's discuss your next project
            </Paragraph>
          </motion.div>

          <Row gutter={[40, 40]} className="contact-content" justify="center">
            <Col xs={24} lg={12} xl={10}>
              <motion.div variants={itemVariants}>
                <Card className="contact-info-card">
                  <Title level={4} className="card-title">Contact Information</Title>
                  
                  <div className="contact-info-list">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={info.title}
                        className="contact-info-item"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.5 + (index * 0.1) }}
                      >
                        <div className="info-icon">
                          {info.icon}
                        </div>
                        <div className="info-content">
                          <Text className="info-title">{info.title}</Text>
                          {info.link ? (
                            <a href={info.link} className="info-value">
                              {info.value}
                            </a>
                          ) : (
                            <Text className="info-value">{info.value}</Text>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="social-links-section">
                    <Title level={5} className="social-title">Follow Me</Title>
                    <div className="social-links">
                      {socialLinks.map((social, index) => (
                        <motion.a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-link"
                          style={{ '--social-color': social.color }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ delay: 0.8 + (index * 0.1) }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          {social.icon}
                        </motion.a>
                      ))}
                    </div>
                  </div>

                  <div className="resume-section">
                    <Button
                      type="primary"
                      size="large"
                      icon={<DownloadOutlined />}
                      href={portfolioData.personalInfo.resumeUrl}
                      download
                      className="resume-button"
                    >
                      Download Resume
                    </Button>
                  </div>
                </Card>
              </motion.div>
            </Col>

            {/* <Col xs={24} lg={12}>
              <motion.div variants={itemVariants}>
                <Card className="contact-form-card">
                  <Title level={4} className="card-title">Send Message</Title>
                  
                  <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleSubmit}
                    className="contact-form"
                  >
                    <Row gutter={16}>
                      <Col xs={24} sm={12}>
                        <Form.Item
                          name="name"
                          label="Name"
                          rules={[{ required: true, message: 'Please enter your name' }]}
                        >
                          <Input placeholder="Your name" />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={12}>
                        <Form.Item
                          name="email"
                          label="Email"
                          rules={[
                            { required: true, message: 'Please enter your email' },
                            { type: 'email', message: 'Please enter a valid email' }
                          ]}
                        >
                          <Input placeholder="your.email@example.com" />
                        </Form.Item>
                      </Col>
                    </Row>
                    
                    <Form.Item
                      name="subject"
                      label="Subject"
                      rules={[{ required: true, message: 'Please enter a subject' }]}
                    >
                      <Input placeholder="What's this about?" />
                    </Form.Item>
                    
                    <Form.Item
                      name="message"
                      label="Message"
                      rules={[{ required: true, message: 'Please enter your message' }]}
                    >
                      <TextArea
                        rows={6}
                        placeholder="Tell me about your project or just say hello!"
                      />
                    </Form.Item>
                    
                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        size="large"
                        icon={<SendOutlined />}
                        loading={loading}
                        className="submit-button"
                      >
                        Send Message
                      </Button>
                    </Form.Item>
                  </Form>
                </Card>
              </motion.div>
            </Col> */}
          </Row>

              <motion.div className="github-section" variants={itemVariants}>
                <Card className="github-card">
                  <div className="github-content">
                    <div className="github-header">
                      <GithubOutlined className="github-icon" />
                      <Title level={4} className="github-title">GitHub Activity</Title>
                    </div>
                    
                    <Button
                      type="primary"
                      href="https://github.com/KirannKumarH"
                      target="_blank"
                      rel="noopener noreferrer"
                      icon={<GithubOutlined />}
                      size="large"
                      className="github-button"
                    >
                      View GitHub Profile
                    </Button>
                    
                    <div className="github-stats">
                      <div className="stat-item">
                        <div className="stat-number">100+</div>
                        <div className="stat-label">Contributions</div>
                      </div>
                      <div className="stat-item">
                        <div className="stat-number">16</div>
                        <div className="stat-label">Repositories</div>
                      </div>
                      <div className="stat-item">
                        <div className="stat-number">15+</div>
                        <div className="stat-label">Languages</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
