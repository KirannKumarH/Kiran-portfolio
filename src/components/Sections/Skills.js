import React, { useState } from 'react';
import { Typography, Card, Tag, Row, Col } from 'antd';
import portfolioData from '../../data/portfolioData.json';
import './Skills.css';

const { Title, Text } = Typography;

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Ensure skills data exists and is properly structured
  const skillsData = portfolioData.skills || {};
  
  const categories = [
    { key: 'all', label: 'All', count: Object.values(skillsData).flat().length },
    { key: 'frontend', label: 'Frontend', count: skillsData.frontend?.length || 0 },
    { key: 'backend', label: 'Backend', count: skillsData.backend?.length || 0 },
    { key: 'database', label: 'Database', count: skillsData.database?.length || 0 },
    { key: 'cloud', label: 'Cloud', count: skillsData.cloud?.length || 0 },
    { key: 'tools', label: 'Tools', count: skillsData.tools?.length || 0 },
    { key: 'web3', label: 'Web3', count: skillsData.web3?.length || 0 },
    { key: 'ai-ml', label: 'AI/ML', count: skillsData['ai-ml']?.length || 0 }
  ];

  const getFilteredSkills = () => {
    if (selectedCategory === 'all') {
      return Object.entries(skillsData).flatMap(([category, skills]) =>
        (skills || []).map(skill => ({ ...skill, category }))
      );
    }
    return (skillsData[selectedCategory] || []).map(skill => ({ ...skill, category: selectedCategory }));
  };

  const renderProficiencyDots = (proficiency) => {
    const dots = [];
    for (let i = 1; i <= 5; i++) {
      dots.push(
        <div
          key={i}
          className={`proficiency-dot ${i <= proficiency ? 'filled' : 'empty'}`}
        />
      );
    }
    return dots;
  };

  const getCategoryDisplayName = (category) => {
    const categoryMap = {
      'frontend': 'Frontend',
      'backend': 'Backend',
      'database': 'Database',
      'cloud': 'Cloud',
      'tools': 'Tools',
      'web3': 'Web3',
      'ai-ml': 'AI/ML'
    };
    return categoryMap[category] || category;
  };

  const filteredSkills = getFilteredSkills();

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        {/* Section Header */}
        <div className="section-header">
          <Title level={2} className="section-title">
            Skills & Expertise
          </Title>
          <div className="section-divider"></div>
          <Text className="section-subtitle">
            Explore my technical skills across different domains and technologies
          </Text>
        </div>

        {/* Category Filter */}
        <div className="skills-filter">
          <div className="filter-tags">
            {categories.map((category) => (
              <Tag
                key={category.key}
                className={`filter-tag ${selectedCategory === category.key ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.key)}
              >
                {category.label}
                <span className="skill-count">({category.count})</span>
              </Tag>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          <Row gutter={[24, 24]}>
            {filteredSkills.filter(skill => skill && skill.name).map((skill, index) => (
              <Col xs={24} sm={12} md={8} lg={6} xl={4} key={`${skill.name}-${index}`}>
                <Card
                  className="skill-card"
                  hoverable
                  style={{
                    '--skill-color': skill.color || '#6366F1',
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="skill-content">
                    {/* Skill Icon */}
                    <div className="skill-icon" style={{ backgroundColor: skill.color || '#6366F1' }}>
                      <span className="icon-emoji">{skill.icon || '🔧'}</span>
                    </div>

                    {/* Skill Name */}
                    <Title level={5} className="skill-name">
                      {skill.name || 'Unknown Skill'}
                    </Title>

                    {/* Proficiency Rating */}
                    <div className="proficiency-rating">
                      {renderProficiencyDots(skill.proficiency || 1)}
                    </div>

                    {/* Category Badge */}
                    <div className="skill-category">
                      <Tag className="category-tag" color="blue">
                        {getCategoryDisplayName(skill.category || 'unknown')}
                      </Tag>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

      </div>
    </section>
  );
};

export default Skills;
