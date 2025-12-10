import React, { useState } from "react";
import { Typography, Card, Tag, Row, Col } from "antd";
import portfolioData from "../../data/portfolioData.json";
import "./Skills.css";

const { Title, Text } = Typography;

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("programming-languages");

  // Ensure skills data exists and is properly structured
  const skillsData = portfolioData.skills || {};

  const categories = [
    {
      key: "programming-languages",
      label: "Programming Languages",
      count: (skillsData.frontend?.filter(skill => 
        ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Python', 'C#', 'Java', 'Dart', 'Kotlin', 'Swift'].includes(skill.name)
      ) || []).length + (skillsData.backend?.filter(skill => 
        ['Python', 'C#', 'Java', 'Dart', 'Golang'].includes(skill.name)
      ) || []).length + (skillsData.app?.filter(skill => 
        ['Kotlin', 'Swift'].includes(skill.name)
      ) || []).length,
    },
    {
      key: "frameworks",
      label: "Frameworks",
      count: (skillsData.frontend?.filter(skill => 
        ['React 19', 'Angular', 'AngularJS', 'Next.js', 'Vue.js', 'Vite', 'Ant Design', 'Zustand', 'TanStack React Query', 'Emotion', 'Tailwind CSS', 'SASS', 'Bootstrap', 'jQuery', 'Streamlit', 'Plotly'].includes(skill.name)
      ) || []).length + (skillsData.backend?.filter(skill => 
        ['.NET Framework 4.8', '.NET Core 6+', 'ASP.NET Web API', 'Entity Framework 6', 'Entity Framework Core', 'Express.js', 'Django', 'FastAPI', 'SQLAlchemy', 'Pydantic', 'REST APIs', 'GraphQL', 'JWT', 'Microservices'].includes(skill.name)
      ) || []).length + (skillsData.app?.filter(skill => 
        ['Flutter', 'React Native', 'Android'].includes(skill.name)
      ) || []).length,
    },
    {
      key: "database",
      label: "Database",
      count: skillsData.database?.length || 0,
    },
    { key: "cloud", label: "Cloud", count: skillsData.cloud?.length || 0 },
    { key: "tools", label: "Tools", count: skillsData.tools?.length || 0 },
    {
      key: "app",
      label: "App Development",
      count: skillsData.app?.length || 0,
    },
    { key: "ai-ml", label: "AI/ML", count: skillsData["ai-ml"]?.length || 0 },
    {
      key: "testing",
      label: "Testing",
      count: skillsData.testing?.length || 0,
    },
    {
      key: "security",
      label: "Security",
      count: skillsData.security?.length || 0,
    },
    {
      key: "development-practices",
      label: "Dev Practices",
      count: skillsData["development-practices"]?.length || 0,
    },
    {
      key: "all",
      label: "All",
      count: Object.values(skillsData).flat().length,
    },
  ];

  const getFilteredSkills = () => {
    if (selectedCategory === "all") {
      return Object.entries(skillsData).flatMap(([category, skills]) =>
        (skills || []).map((skill) => ({ ...skill, category }))
      );
    }
    
    if (selectedCategory === "programming-languages") {
      const programmingLanguages = [
        ...(skillsData.frontend?.filter(skill => 
          ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Python', 'C#', 'Java', 'Dart', 'Kotlin', 'Swift'].includes(skill.name)
        ) || []),
        ...(skillsData.backend?.filter(skill => 
          ['Python', 'C#', 'Java', 'Dart', 'Golang'].includes(skill.name)
        ) || []),
        ...(skillsData.app?.filter(skill => 
          ['Kotlin', 'Swift'].includes(skill.name)
        ) || [])
      ];
      return programmingLanguages.map((skill) => ({
        ...skill,
        category: "programming-languages",
      }));
    }
    
    if (selectedCategory === "frameworks") {
      const frameworks = [
        ...(skillsData.frontend?.filter(skill => 
          ['React 19', 'Angular', 'AngularJS', 'Next.js', 'Vue.js', 'Vite', 'Ant Design', 'Zustand', 'TanStack React Query', 'Emotion', 'Tailwind CSS', 'SASS', 'Bootstrap', 'jQuery', 'Streamlit', 'Plotly'].includes(skill.name)
        ) || []),
        ...(skillsData.backend?.filter(skill => 
          ['.NET Framework 4.8', '.NET Core 6+', 'ASP.NET Web API', 'Entity Framework 6', 'Entity Framework Core', 'Express.js', 'Django', 'FastAPI', 'SQLAlchemy', 'Pydantic', 'REST APIs', 'GraphQL', 'JWT', 'Microservices'].includes(skill.name)
        ) || []),
        ...(skillsData.app?.filter(skill => 
          ['Flutter', 'React Native', 'Android'].includes(skill.name)
        ) || [])
      ];
      return frameworks.map((skill) => ({
        ...skill,
        category: "frameworks",
      }));
    }
    
    return (skillsData[selectedCategory] || []).map((skill) => ({
      ...skill,
      category: selectedCategory,
    }));
  };

  const renderProficiencyDots = (proficiency) => {
    const dots = [];
    for (let i = 1; i <= 5; i++) {
      dots.push(
        <div
          key={i}
          className={`proficiency-dot ${i <= proficiency ? "filled" : "empty"}`}
        />
      );
    }
    return dots;
  };

  const getCategoryDisplayName = (category) => {
    const categoryMap = {
      "programming-languages": "Programming Languages",
      "frameworks": "Frameworks",
      frontend: "Frontend",
      backend: "Backend",
      database: "Database",
      cloud: "Cloud",
      tools: "Tools",
      app: "App Development",
      "ai-ml": "AI/ML",
      testing: "Testing",
      security: "Security",
      "development-practices": "Dev Practices",
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
            Explore my technical skills across different domains and
            technologies
          </Text>
        </div>

        {/* Category Filter */}
        <div className="skills-filter">
          <div className="filter-tags">
            {categories.map((category) => (
              <Tag
                key={category.key}
                className={`filter-tag ${
                  selectedCategory === category.key ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(category.key)}
              >
                {category.label}
                <span className="skill-count">({category.count})</span>
              </Tag>
            ))}
          </div>
        </div>

        {/* Skills Grid Container */}
        <div className="skills-grid-container">
          <div className="skills-grid">
            <Row gutter={[24, 24]}>
              {filteredSkills
                .filter((skill) => skill && skill.name)
                .map((skill, index) => (
                  <Col
                    xs={8}
                    sm={12}
                    md={8}
                    lg={6}
                    xl={4}
                    key={`${skill.name}-${index}`}
                  >
                    <Card
                      className="skill-card"
                      hoverable
                      style={{
                        "--skill-color": skill.color || "#6366F1",
                        animationDelay: `${index * 0.1}s`,
                      }}
                    >
                      <div className="skill-content">
                        {/* Skill Icon */}
                        <div
                          className="skill-icon"
                          style={{ backgroundColor: skill.color || "#6366F1" }}
                        >
                          <span className="icon-emoji">{skill.icon || "🔧"}</span>
                        </div>

                        {/* Skill Name */}
                        <Title level={5} className="skill-name">
                          {skill.name || "Unknown Skill"}
                        </Title>

                        {/* Proficiency Rating */}
                        <div className="proficiency-rating">
                          {renderProficiencyDots(skill.proficiency || 1)}
                        </div>

                        {/* Category Badge */}
                        <div className="skill-category">
                          <Tag className="category-tag" color="blue">
                            {getCategoryDisplayName(skill.category || "unknown")}
                          </Tag>
                        </div>
                      </div>
                    </Card>
                  </Col>
                ))}
            </Row>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
