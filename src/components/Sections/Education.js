import React from 'react';
import { Typography, Card, Row, Col, Tag } from 'antd';
import { BookOutlined, TrophyOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import portfolioData from '../../data/portfolioData.json';
import './Education.css';

const { Title, Text } = Typography;

const Education = () => {
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

  return (
    <section className="education-section" id="education">
      <div className="education-container">
        <motion.div
          className="education-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div className="section-header" variants={itemVariants}>
            <Title level={2} className="section-title">
              Education & Certifications
            </Title>
            <div className="section-divider"></div>
            <Text className="section-subtitle">
              My academic background and professional certifications
            </Text>
          </motion.div>

          <Row gutter={[32, 32]}>
            {/* Education Section */}
            <Col xs={24} lg={12}>
              <motion.div variants={itemVariants}>
                <Card className="education-card">
                  <div className="card-header">
                    <div className="card-icon">
                      <BookOutlined />
                    </div>
                    <Title level={3} className="card-title">
                      Education
                    </Title>
                  </div>
                  
                  <div className="education-list">
                    {portfolioData.education.map((edu, index) => (
                      <motion.div
                        key={index}
                        className="education-item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="education-content-item">
                          <div className="education-degree">
                            {edu.degree}
                          </div>
                          <div className="education-institution">
                            {edu.institution}
                          </div>
                          <div className="education-year">
                            {edu.year}
                          </div>
                          {edu.description && (
                            <div className="education-description">
                              {edu.description}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </Col>

            {/* Certifications Section */}
            <Col xs={24} lg={12}>
              <motion.div variants={itemVariants}>
                <Card className="certifications-card">
                  <div className="card-header">
                    <div className="card-icon">
                      <TrophyOutlined />
                    </div>
                    <Title level={3} className="card-title">
                      Certifications
                    </Title>
                  </div>
                  
                  <div className="certifications-list">
                    {portfolioData.certifications.map((cert, index) => (
                      <motion.div
                        key={index}
                        className="certification-item"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="certification-content">
                          <div className="certification-name">
                            {cert.name}
                          </div>
                          <div className="certification-issuer">
                            {cert.issuer}
                          </div>
                          <div className="certification-year">
                            <Tag color="blue">{cert.year}</Tag>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
