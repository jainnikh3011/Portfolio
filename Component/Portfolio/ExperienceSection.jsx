import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar } from 'lucide-react';
import { useTheme } from '../../src/contexts/ThemeContext';
import { useScrollAnimation } from '../../src/hooks/useScrollAnimation';

export default function ExperienceSection() {
  const { isDark } = useTheme();
  const [expRef, isExpVisible] = useScrollAnimation(0.1);
  const experiences = [
    {
      title: 'Systems Engineer',
      company: 'TCS, Bengaluru',
      period: 'July 2022 - Present',
      type: 'Full-time',
      description: 'Software Developer, Research & Development',
      achievements: [
        'Developed and optimized Spring Boot RESTful APIs to ensure efficient, secure & improved communication & performance',
        'Designed key low-level components, including classes, interfaces, and workflows, ensuring scalability, modularity, and maintainability in a microservices architecture',
        'Implemented Spring Data JPA and Hibernate for seamless database interaction with MySQL, optimizing queries, caching with Redis, and transaction management',
        'Secured APIs with OAuth2, JWT, and Spring Security for robust authentication, authorization, and encryption',
        'Implemented Agile methodologies, participating in sprint planning, daily stand-ups, and retrospectives to deliver high-quality software on schedule',
      ],
      technologies: ['Spring Boot', 'Java', 'MySQL', 'Redis', 'OAuth2', 'JWT', 'Microservices', 'Hibernate'],
    },
    {
      title: 'Java Development',
      company: 'InterThrillEasy Pvt Ltd',
      period: 'Apr 2021 - July 2021',
      type: 'Internship',
      description: 'Software Development Intern',
      achievements: [
        'Developed APIs to fetch Google Admin data using Java that were used in the organization by various services',
        'Created web applications using Spring Boot, Hibernate and Thymeleaf',
      ],
      technologies: ['Java', 'Spring Boot', 'Hibernate', 'Thymeleaf', 'REST APIs'],
    },
  ];

  return (
    <section id="experience" className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-gradient-to-b from-[#0A192F] to-[#0F1B2E]' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
      <div className="max-w-6xl mx-auto">
        <div 
          ref={expRef}
          className={`mb-16 text-center transition-all duration-1000 ${
            isExpVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className={`text-4xl sm:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Professional Experience
          </h2>
          <div className={`h-1 w-24 mx-auto rounded-full ${isDark ? 'bg-gradient-to-r from-[#64FFDA] to-[#4FD1C7]' : 'bg-gradient-to-r from-blue-600 to-blue-500'}`}></div>
          <p className={`mt-4 text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Building innovative solutions with cutting-edge technologies</p>
        </div>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className={`${isDark ? 'bg-gradient-to-br from-[#112240] to-[#0F1B2E] border-gray-700/50 hover:border-[#64FFDA]/70' : 'bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-blue-500/70'} border transition-all duration-500 p-8 sm:p-10 shadow-2xl hover:shadow-lg`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8 gap-6">
                <div className="space-y-3 flex-1">
                  <h3 className={`text-2xl sm:text-3xl font-bold leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>{exp.title}</h3>
                  <p className={`font-semibold text-xl ${isDark ? 'text-[#64FFDA]' : 'text-blue-600'}`}>{exp.company}</p>
                  <p className={`text-lg font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{exp.description}</p>
                </div>
                <div className="flex flex-col sm:flex-row lg:flex-col items-start gap-3">
                  <Badge className={`px-4 py-2 text-sm font-bold shadow-lg ${isDark ? 'bg-gradient-to-r from-[#64FFDA]/20 to-[#4FD1C7]/20 text-white border border-[#64FFDA]/60' : 'bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-600 border border-blue-500/60'}`}>
                    <Calendar className="w-4 h-4 mr-2" />
                    {exp.period}
                  </Badge>
                  <Badge className={`px-4 py-2 text-sm font-bold shadow-lg ${isDark ? 'bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-white border border-blue-500/60' : 'bg-gradient-to-r from-green-500/20 to-green-600/20 text-green-600 border border-green-500/60'}`}>
                    {exp.type}
                  </Badge>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Key Achievements:</h4>
                {exp.achievements.map((achievement, idx) => (
                  <div key={idx} className={`flex items-start gap-4 p-4 rounded-lg border ${isDark ? 'bg-[#0A192F]/50 border-gray-700/30' : 'bg-gray-50/50 border-gray-200/30'}`}>
                    <div className={`w-3 h-3 rounded-full mt-2 flex-shrink-0 ${isDark ? 'bg-gradient-to-r from-[#64FFDA] to-[#4FD1C7]' : 'bg-gradient-to-r from-blue-500 to-blue-600'}`}></div>
                    <p className={`leading-relaxed text-base font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{achievement}</p>
                  </div>
                ))}
              </div>

              <div className={`border-t pt-6 ${isDark ? 'border-gray-700/50' : 'border-gray-200/50'}`}>
                <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Technologies Used:</h4>
                <div className="flex flex-wrap gap-3">
                  {exp.technologies.map((tech, idx) => (
                    <Badge 
                      key={idx}
                      className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${isDark ? 'bg-gradient-to-r from-[#0A192F] to-[#112240] text-white border border-[#64FFDA]/40 hover:border-[#64FFDA] hover:bg-[#64FFDA]/10' : 'bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border border-blue-300 hover:border-blue-500 hover:bg-blue-200'}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}