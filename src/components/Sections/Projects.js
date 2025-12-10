import React, { useState } from 'react';
import { Typography, Card, Tag, Button, Row, Col, Tabs, Modal } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GithubOutlined, EyeOutlined, LinkOutlined } from '@ant-design/icons';
import portfolioData from '../../data/portfolioData.json';
import './Projects.css';

const { Title, Paragraph } = Typography;
const { TabPane } = Tabs;

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [showAllAchievements, setShowAllAchievements] = useState(false);
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  const categories = ['All', ...new Set(portfolioData.projects.map(project => project.category))];

  const filteredProjects = activeFilter === 'All' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(project => project.category === activeFilter);

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

  const projectVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setShowAllAchievements(false);
    setShowAllFeatures(false);
  };

  return (
    <section id="projects" className="projects-section" ref={ref}>
      <div className="projects-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <Title level={2} className="section-title">Featured Projects</Title>
            <div className="section-divider"></div>
            <Paragraph className="section-subtitle">
              A showcase of my recent work and creative solutions
            </Paragraph>
          </motion.div>

          <motion.div className="projects-filter" variants={itemVariants}>
            <Tabs
              activeKey={activeFilter}
              onChange={setActiveFilter}
              className="filter-tabs"
              centered
            >
              {categories.map(category => (
                <TabPane tab={category} key={category} />
              ))}
            </Tabs>
          </motion.div>

          <motion.div className="projects-grid" variants={containerVariants}>
            <AnimatePresence mode="wait">
              <Row gutter={[30, 30]} justify="start">
                {filteredProjects.map((project, index) => (
                  <Col xs={24} sm={12} md={8} lg={8} xl={8} key={project.id}>
                    <motion.div
                      variants={projectVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      layout
                    >
                      <Card
                        className={`project-card ${project.featured ? 'featured' : ''}`}
                        hoverable
                        onClick={() => handleProjectClick(project)}
                        cover={
                          <div className="project-image">
                            <div className="image-placeholder">
                              <img 
                                src={project.image || `/project-banner/${project.id === 1 ? 'neuraleye' : 
                                  project.id === 2 ? 'tracklink' : 
                                  project.id === 3 ? 'seronic' : 
                                  project.id === 4 ? 'portfolio' : 
                                  project.id === 5 ? 'ai-chatbot' :
                                  project.id === 6 ? 'proforma' : 'neuraleye'}.png`}
                                alt={project.title}
                                className="project-banner-image"
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                  e.target.nextElementSibling.style.display = 'flex';
                                }}
                              />
                              <div className="fallback-emoji" style={{display: 'none'}}>
                                <span className="project-emoji">
                                  {project.category === 'Full Stack' && '🚀'}
                                  {project.category === 'Frontend' && '🎨'}
                                  {project.category === 'Backend' && '⚙️'}
                                  {project.category === 'AI/ML' && '🧠'}
                                  {project.category === 'Mobile' && '📱'}
                                </span>
                              </div>
                            </div>
                            {project.featured && (
                              <div className="featured-badge">Featured</div>
                            )}
                            <div className="project-overlay">
                              <div className="overlay-buttons">
                                <Button
                                  type="primary"
                                  icon={<EyeOutlined />}
                                  className="overlay-button"
                                >
                                  View Details
                                </Button>
                              </div>
                            </div>
                          </div>
                        }
                      >
                        <div className="project-content">
                          <div className="project-header">
                            <Title level={4} className="project-title">
                              {project.title}
                            </Title>
                            <Tag className="project-category">
                              {project.category}
                            </Tag>
                          </div>
                          
                          <Paragraph className="project-description">
                            {project.description}
                          </Paragraph>
                          
                          <div className="project-technologies">
                            {project.technologies.slice(0, 4).map(tech => (
                              <Tag key={tech} className="tech-tag">
                                {tech}
                              </Tag>
                            ))}
                            {project.technologies.length > 4 && (
                              <Tag className="more-tech">
                                +{project.technologies.length - 4} more
                              </Tag>
                            )}
                          </div>
                          
                          <div className="project-actions">
                            <Button
                              type="text"
                              icon={<GithubOutlined />}
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="action-button"
                              onClick={(e) => e.stopPropagation()}
                            >
                              Code
                            </Button>
                            {project.liveUrl && (
                              <Button
                                type="text"
                                icon={<LinkOutlined />}
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="action-button"
                                onClick={(e) => e.stopPropagation()}
                              >
                                Live Demo
                              </Button>
                            )}
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </AnimatePresence>
          </motion.div>

          <motion.div className="projects-cta" variants={itemVariants}>
            <Card className="cta-card">
              <div className="cta-content">
                <Title level={3} className="cta-title">
                  Interested in working together?
                </Title>
                <Paragraph className="cta-description">
                  I'm always excited to take on new challenges and create amazing digital experiences.
                </Paragraph>
                <Button
                  type="primary"
                  size="large"
                  className="cta-button"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Let's Collaborate
                </Button>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>

      <Modal
        title={selectedProject?.title}
        open={!!selectedProject}
        onCancel={handleCloseModal}
        footer={null}
        className="project-modal"
        width={800}
      >
        {selectedProject && (
          <div className="modal-content">
            <div className="modal-image">
              <div className="image-placeholder">
                <img 
                  src={`/project-banner/${selectedProject.id === 1 ? 'neuraleye' : 
                    selectedProject.id === 2 ? 'proforma' : 
                    selectedProject.id === 3 ? 'seronic' : 
                    selectedProject.id === 4 ? 'ai-chatbot' : 
                    selectedProject.id === 5 ? 'portfolio' : 'proforma'}.png`}
                  alt={selectedProject.title}
                  className="project-banner-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="fallback-emoji" style={{display: 'none'}}>
                  <span className="project-emoji">
                    {selectedProject.category === 'Full Stack' && '🚀'}
                    {selectedProject.category === 'Frontend' && '🎨'}
                    {selectedProject.category === 'Backend' && '⚙️'}
                    {selectedProject.category === 'AI/ML' && '🧠'}
                    {selectedProject.category === 'Mobile' && '📱'}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="modal-details">
              <div className="modal-meta">
                <Tag className="project-category">
                  {selectedProject.category}
                </Tag>
                {selectedProject.featured && (
                  <Tag color="gold">Featured</Tag>
                )}
              </div>
              
              <Paragraph className="modal-description">
                {selectedProject.description}
              </Paragraph>
              
              <div className="modal-technologies">
                <Title level={5}>Technologies Used:</Title>
                <div className="technologies-list">
                  {selectedProject.technologies.map(tech => (
                    <Tag key={tech} className="tech-tag">
                      {tech}
                    </Tag>
                  ))}
                </div>
              </div>

              {selectedProject.achievements && selectedProject.achievements.length > 0 && (
                <div className="modal-achievements">
                  <Title level={5}>Key Achievements:</Title>
                  <ul className="achievements-list">
                    {(showAllAchievements ? selectedProject.achievements : selectedProject.achievements.slice(0, 10)).map((achievement, index) => (
                      <li key={index} className="achievement-item">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                  {selectedProject.achievements.length > 10 && (
                    <div className="read-more-section">
                      <Button
                        type="link"
                        onClick={() => setShowAllAchievements(!showAllAchievements)}
                        className="read-more-button"
                      >
                        {showAllAchievements ? 'Show Less' : `Read More (+${selectedProject.achievements.length - 10} more)`}
                      </Button>
                    </div>
                  )}
                </div>
              )}

              {selectedProject.features && selectedProject.features.length > 0 && (
                <div className="modal-features">
                  <Title level={5}>Key Features:</Title>
                  <ul className="features-list">
                    {(showAllFeatures ? selectedProject.features : selectedProject.features.slice(0, 10)).map((feature, index) => (
                      <li key={index} className="feature-item">
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {selectedProject.features.length > 10 && (
                    <div className="read-more-section">
                      <Button
                        type="link"
                        onClick={() => setShowAllFeatures(!showAllFeatures)}
                        className="read-more-button"
                      >
                        {showAllFeatures ? 'Show Less' : `Read More (+${selectedProject.features.length - 10} more)`}
                      </Button>
                    </div>
                  )}
                </div>
              )}
              
              <div className="modal-actions">
                <Button
                  type="primary"
                  icon={<GithubOutlined />}
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="large"
                >
                  View Code
                </Button>
                {selectedProject.liveUrl && (
                  <Button
                    icon={<LinkOutlined />}
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="large"
                  >
                    Live Demo
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Projects;
