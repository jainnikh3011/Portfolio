import React from 'react';
import { Card } from '@/components/ui/card';
import { Code, Database, Cloud, Settings, CheckCircle } from 'lucide-react';
import { useTheme } from '../../src/contexts/ThemeContext';
import { useScrollAnimation } from '../../src/hooks/useScrollAnimation';

export default function SkillsSection() {
  const { isDark } = useTheme();
  const [skillsRef, isSkillsVisible] = useScrollAnimation(0.1);
  const technicalSkills = [
    { name: 'Java', level: 95, category: 'Languages' },
    { name: 'Spring Boot', level: 90, category: 'Frameworks' },
    { name: 'Microservices Architecture', level: 85, category: 'Architecture' },
    { name: 'MySQL', level: 88, category: 'Databases' },
    { name: 'Spring Security', level: 85, category: 'Security' },
    { name: 'Hibernate & JPA', level: 87, category: 'ORM' },
    { name: 'Redis Caching', level: 80, category: 'Performance' },
    { name: 'RESTful APIs', level: 92, category: 'APIs' },
    { name: 'OAuth2 & JWT', level: 83, category: 'Authentication' },
    { name: 'AWS Cloud', level: 78, category: 'Cloud' },
    { name: 'Git & Version Control', level: 90, category: 'Tools' },
    { name: 'Agile Methodologies', level: 88, category: 'Methodologies' },
  ];

  const skillCategories = [
    {
      title: 'Backend Development',
      icon: Code,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      skills: ['Spring Boot', 'Java', 'J2EE', 'Microservices'],
    },
    {
      title: 'Database & Caching',
      icon: Database,
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      skills: ['MySQL', 'Spring Data JPA', 'Hibernate', 'Redis'],
    },
    {
      title: 'Security & Auth',
      icon: Settings,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
      skills: ['OAuth2', 'JWT', 'Spring Security', 'Encryption'],
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'text-orange-400',
      bgColor: 'bg-orange-400/10',
      skills: ['AWS', 'Linux/Unix', 'Maven', 'GitLab'],
    },
  ];

  const tools = [
    'Spring Boot',
    'Microservices',
    'REST APIs',
    'OAuth2',
    'JWT',
    'Spring Security',
    'Hibernate',
    'MySQL',
    'Redis',
    'Maven',
    'Git',
    'Agile',
    'AWS',
    'JUnit',
    'Spring Test',
    'Eclipse',
    'IntelliJ',
    'VSCode',
  ];

  return (
    <section id="skills" className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-gradient-to-b from-[#0A192F] to-[#0F1B2E]' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
      <div className="max-w-6xl mx-auto">
        <div 
          ref={skillsRef}
          className={`mb-16 text-center transition-all duration-1000 ${
            isSkillsVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className={`text-4xl sm:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Skills & Expertise
          </h2>
          <div className={`h-1 w-24 mx-auto rounded-full ${isDark ? 'bg-gradient-to-r from-[#64FFDA] to-[#4FD1C7]' : 'bg-gradient-to-r from-blue-600 to-blue-500'}`}></div>
          <p className={`mt-4 text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Technical proficiency across modern development technologies</p>
        </div>

        {/* Technical Proficiency with Progress Bars */}
        <div className="mb-16">
          <h3 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>Technical Proficiency</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>{skill.name}</span>
                  <span className={`text-sm font-semibold ${isDark ? 'text-[#64FFDA]' : 'text-blue-600'}`}>{skill.level}%</span>
                </div>
                <div className={`h-3 rounded-full overflow-hidden border ${isDark ? 'bg-[#112240] border-gray-800' : 'bg-gray-200 border-gray-300'}`}>
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ease-out relative ${isDark ? 'bg-gradient-to-r from-[#64FFDA] to-blue-500' : 'bg-gradient-to-r from-blue-500 to-blue-600'}`}
                    style={{ width: `${skill.level}%` }}
                  >
                    <div className={`absolute inset-0 animate-pulse ${isDark ? 'bg-white/20' : 'bg-white/30'}`}></div>
                  </div>
                </div>
                <p className={`text-xs ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>{skill.category}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Categories */}
        <div className="mb-16">
          <h3 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>Core Competencies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={index}
                className={`${isDark ? 'bg-[#112240] border-gray-800 hover:border-[#64FFDA]/50' : 'bg-white border-gray-200 hover:border-blue-500/50'} transition-all duration-300 p-6 hover:transform hover:scale-105`}
              >
                <div className="flex flex-col space-y-4">
                  <div className={`p-4 ${category.bgColor} rounded-xl w-fit`}>
                    <category.icon className={`w-8 h-8 ${category.color}`} />
                  </div>
                  <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{category.title}</h3>
                  <div className="space-y-2">
                    {category.skills.map((skill, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className={`w-4 h-4 flex-shrink-0 ${isDark ? 'text-[#64FFDA]' : 'text-blue-600'}`} />
                        <p className={`text-sm ${isDark ? 'text-gray-200' : 'text-gray-600'}`}>{skill}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Tools & Technologies */}
        <Card className={`${isDark ? 'bg-gradient-to-br from-[#112240] to-[#0F1B2E] border-gray-700/50 hover:border-[#64FFDA]/50' : 'bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-blue-500/50'} border transition-all duration-300 p-8 mb-12 shadow-2xl`}>
          <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Tools & Technologies</h3>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool, index) => (
              <div
                key={index}
                className={`px-4 py-2 rounded-lg border transition-all duration-300 cursor-default hover:transform hover:scale-105 font-medium ${isDark ? 'bg-gradient-to-r from-[#0A192F] to-[#112240] text-[#64FFDA] border-[#64FFDA]/40 hover:border-[#64FFDA] hover:bg-[#64FFDA]/10' : 'bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border-blue-300 hover:border-blue-500 hover:bg-blue-200'}`}
              >
                {tool}
              </div>
            ))}
          </div>
        </Card>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className={`${isDark ? 'bg-gradient-to-br from-[#112240] to-[#1a3a52] border-[#64FFDA]/30' : 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-300/30'} p-6 text-center hover:transform hover:scale-105 transition-all duration-300`}>
            <p className={`text-5xl font-bold mb-2 ${isDark ? 'text-[#64FFDA]' : 'text-blue-600'}`}>3+</p>
            <p className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>Years Experience</p>
          </Card>
          <Card className={`${isDark ? 'bg-gradient-to-br from-[#112240] to-[#1a3a52] border-[#64FFDA]/30' : 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-300/30'} p-6 text-center hover:transform hover:scale-105 transition-all duration-300`}>
            <p className={`text-5xl font-bold mb-2 ${isDark ? 'text-[#64FFDA]' : 'text-blue-600'}`}>15+</p>
            <p className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>Projects Completed</p>
          </Card>
          <Card className={`${isDark ? 'bg-gradient-to-br from-[#112240] to-[#1a3a52] border-[#64FFDA]/30' : 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-300/30'} p-6 text-center hover:transform hover:scale-105 transition-all duration-300`}>
            <p className={`text-5xl font-bold mb-2 ${isDark ? 'text-[#64FFDA]' : 'text-blue-600'}`}>3+</p>
            <p className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>Certifications</p>
          </Card>
        </div>
      </div>
    </section>
  );
}