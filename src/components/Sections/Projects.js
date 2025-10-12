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
              <Row gutter={[30, 30]}>
                {filteredProjects.map((project, index) => (
                  <Col xs={24} sm={12} lg={8} key={project.id}>
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
                              <span className="project-emoji">
                                {project.category === 'Full Stack' && '🚀'}
                                {project.category === 'Frontend' && '🎨'}
                                {project.category === 'Backend' && '⚙️'}
                              </span>
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
                <span className="project-emoji">
                  {selectedProject.category === 'Full Stack' && '🚀'}
                  {selectedProject.category === 'Frontend' && '🎨'}
                  {selectedProject.category === 'Backend' && '⚙️'}
                </span>
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
