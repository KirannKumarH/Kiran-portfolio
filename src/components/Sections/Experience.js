import React, { useState } from 'react';
import { Typography, Card, Tag, Row, Col, Modal, Button, Divider } from 'antd';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CalendarOutlined, EnvironmentOutlined, TrophyOutlined, EyeOutlined, CloseOutlined, TeamOutlined, CodeOutlined, RocketOutlined } from '@ant-design/icons';
import portfolioData from '../../data/portfolioData.json';
import './Experience.css';

const { Title, Paragraph } = Typography;

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleViewMore = (experience) => {
    setSelectedExperience(experience);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedExperience(null);
  };

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

  const timelineVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" className="experience-section" ref={ref}>
      <div className="experience-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <Title level={2} className="section-title">Work Experience</Title>
            <div className="section-divider"></div>
            <Paragraph className="section-subtitle">
              My professional journey and the impact I've made along the way
            </Paragraph>
          </motion.div>

          <Row gutter={[40, 40]}>
            <Col xs={24} lg={16}>
              <motion.div variants={timelineVariants}>
                <div className="timeline-container">
                  {portfolioData.experience.map((exp, index) => (
                    <motion.div
                      key={exp.id}
                      className="timeline-item"
                      initial={{ opacity: 0, x: -50 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <div className="timeline-marker">
                        <div className="marker-dot"></div>
                        {index < portfolioData.experience.length - 1 && (
                          <div className="marker-line"></div>
                        )}
                      </div>
                      
                      <Card className="experience-card">
                        <div className="experience-header">
                          <div className="experience-title-section">
                            <Title level={4} className="experience-title">
                              {exp.position}
                            </Title>
                            <Title level={5} className="company-name">
                              {exp.company}
                            </Title>
                          </div>
                          
                          <div className="experience-meta">
                            <div className="meta-item">
                              <CalendarOutlined className="meta-icon" />
                              <span>{exp.duration}</span>
                            </div>
                            <div className="meta-item">
                              <EnvironmentOutlined className="meta-icon" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                        
                        <Paragraph className="experience-description">
                          {exp.description}
                        </Paragraph>
                        
                        <div className="technologies-section">
                          <Title level={5} className="technologies-title">
                            Technologies Used:
                          </Title>
                          <div className="technologies-tags">
                            {exp.technologies.map((tech, techIndex) => (
                              <motion.div
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                transition={{ delay: (index * 0.2) + (techIndex * 0.1) }}
                              >
                                <Tag className="tech-tag">{tech}</Tag>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="achievements-section">
                          <Title level={5} className="achievements-title">
                            <TrophyOutlined className="achievement-icon" />
                            Key Achievements:
                          </Title>
                          <ul className="achievements-list">
                            {exp.achievements.slice(0, 2).map((achievement, achIndex) => (
                              <motion.li
                                key={achIndex}
                                className="achievement-item"
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ delay: (index * 0.2) + (achIndex * 0.1) }}
                              >
                                {achievement}
                              </motion.li>
                            ))}
                            {exp.achievements.length > 2 && (
                              <motion.li
                                className="achievement-item more-indicator"
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ delay: (index * 0.2) + 0.2 }}
                              >
                                +{exp.achievements.length - 2} more achievements...
                              </motion.li>
                            )}
                          </ul>
                        </div>
                        
                        <div className="experience-actions">
                          <Button
                            type="primary"
                            icon={<EyeOutlined />}
                            onClick={() => handleViewMore(exp)}
                            className="view-more-btn"
                          >
                            View More Details
                          </Button>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </Col>

            <Col xs={24} lg={8}>
              <motion.div variants={itemVariants}>
                <Card className="stats-card">
                  <Title level={4} className="stats-title">Career Highlights</Title>
                  
                  <div className="stats-grid">
                    <motion.div
                      className="stat-item"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="stat-number">4+</div>
                      <div className="stat-label">Years Experience</div>
                    </motion.div>
                    
                    <motion.div
                      className="stat-item"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: 0.6 }}
                    >
                      <div className="stat-number">20+</div>
                      <div className="stat-label">Projects Completed</div>
                    </motion.div>
                    
                    <motion.div
                      className="stat-item"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: 0.7 }}
                    >
                      <div className="stat-number">40+</div>
                      <div className="stat-label">Technologies</div>
                    </motion.div>
                    
                    <motion.div
                      className="stat-item"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: 0.8 }}
                    >
                      <div className="stat-number">100%</div>
                      <div className="stat-label">Client Satisfaction</div>
                    </motion.div>
                  </div>
                  
                  <div className="skills-summary">
                    <Title level={5} className="summary-title">Core Competencies</Title>
                    <div className="competency-list">
                      {['Full Stack Development', 'Performance Optimization', 'System Design', 'Database Design', 'AI & ML Development', 'Team Mentoring'].map((skill, index) => (
                        <motion.div
                          key={skill}
                          className="competency-item"
                          initial={{ opacity: 0, x: 20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                          transition={{ delay: 0.9 + (index * 0.1) }}
                        >
                          <div className="competency-dot"></div>
                          <span>{skill}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </div>

      {/* Experience Detail Modal */}
      <Modal
        title={null}
        open={isModalVisible}
        onCancel={handleCloseModal}
        footer={null}
        width={800}
        className="experience-modal"
        closeIcon={<CloseOutlined />}
      >
        {selectedExperience && (
          <div className="modal-content">
            <div className="modal-header">
              <Title level={2} className="modal-title">
                {selectedExperience.position}
              </Title>
              <Title level={3} className="modal-company">
                {selectedExperience.company}
              </Title>
              <div className="modal-meta">
                <div className="meta-item">
                  <CalendarOutlined className="meta-icon" />
                  <span>{selectedExperience.duration}</span>
                </div>
                <div className="meta-item">
                  <EnvironmentOutlined className="meta-icon" />
                  <span>{selectedExperience.location}</span>
                </div>
              </div>
            </div>

            <Divider className="modal-divider" />

            <div className="modal-body">
              <div className="modal-section">
                <Title level={4} className="section-title">
                  <CodeOutlined className="section-icon" />
                  Role Description
                </Title>
                <Paragraph className="modal-description">
                  {selectedExperience.description}
                </Paragraph>
              </div>

              <div className="modal-section">
                <Title level={4} className="section-title">
                  <RocketOutlined className="section-icon" />
                  Key Achievements
                </Title>
                <ul className="modal-achievements">
                  {selectedExperience.achievements.map((achievement, index) => (
                    <li key={index} className="modal-achievement-item">
                      <TrophyOutlined className="achievement-icon" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <Title level={4} className="section-title">
                  <TeamOutlined className="section-icon" />
                  Technologies & Tools
                </Title>
                <div className="modal-technologies">
                  {selectedExperience.technologies.map((tech, index) => (
                    <Tag key={index} className="modal-tech-tag">
                      {tech}
                    </Tag>
                  ))}
                </div>
              </div>

              {selectedExperience.responsibilities && (
                <div className="modal-section">
                  <Title level={4} className="section-title">
                    <TeamOutlined className="section-icon" />
                    Key Responsibilities
                  </Title>
                  <ul className="modal-responsibilities">
                    {selectedExperience.responsibilities.map((responsibility, index) => (
                      <li key={index} className="modal-responsibility-item">
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedExperience.projects && (
                <div className="modal-section">
                  <Title level={4} className="section-title">
                    <RocketOutlined className="section-icon" />
                    Notable Projects
                  </Title>
                  <div className="modal-projects">
                    {selectedExperience.projects.map((project, index) => (
                      <div key={index} className="modal-project">
                        <Title level={5} className="project-title">
                          {project.name}
                        </Title>
                        <Paragraph className="project-description">
                          {project.description}
                        </Paragraph>
                        {project.technologies && (
                          <div className="project-technologies">
                            {project.technologies.map((tech, techIndex) => (
                              <Tag key={techIndex} className="project-tech-tag">
                                {tech}
                              </Tag>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Experience;
