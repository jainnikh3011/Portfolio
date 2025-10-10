import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, ShoppingCart, Heart, FileText, Users } from 'lucide-react';
import { useTheme } from '../../src/contexts/ThemeContext';
import { useScrollAnimation } from '../../src/hooks/useScrollAnimation';

export default function ProjectsSection() {
  const { isDark } = useTheme();
  const [projectsRef, isProjectsVisible] = useScrollAnimation(0.1);
  const projects = [
    {
      title: 'SwiftCart - E-Commerce Web App',
      description: 'A robust Ecommerce backend with Spring Boot, implementing authentication and role-based access via Spring Security. Features product management, a session-based shopping cart with Spring Data JPA, and optimized order processing in MySQL. Ensured code quality through unit and integration testing using JUnit and Spring Test.',
      technologies: ['Spring Boot', 'Spring Security', 'MySQL', 'JUnit', 'Spring Data JPA', 'Session Management'],
      icon: ShoppingCart,
      link: 'https://github.com/jainnikh3011',
      highlights: ['Role-Based Access', 'Session Cart', 'Unit Testing'],
    },
    {
      title: 'Code4All Community Platform',
      description: 'Co-founded and built a community platform connecting 2000+ coders across state university affiliated colleges. Designed and organized coding contests, fostering collaboration and stimulating coding education for everyone.',
      technologies: ['Community Building', 'Event Management', 'Education', 'Web Development'],
      icon: Users,
      link: 'https://code4all.netlify.app/',
      impact: '2000+ Students Reached',
      highlights: ['Community Platform', 'Contest Management', 'Educational Impact'],
    },
    {
      title: 'In-Hand-Medi: Online Medicine Booking Store',
      description: 'Developed an online pharmacy marketplace with seller, buyer, and admin modules using Java SE, J2EE, and RDBMS. Published and presented at the International Conference on Recent Advances in Science & Technology, Bhopal.',
      technologies: ['Java SE', 'J2EE', 'RDBMS', 'Servlet', 'JSP'],
      icon: Heart,
      achievement: 'Published at International Conference',
      highlights: ['Multi-Module System', 'Conference Publication', 'RDBMS Integration'],
    },
    {
      title: 'Point of Sale System',
      description: 'Developed a comprehensive billing software for offline merchants using Java Core. Features include inventory management, invoice generation, sales tracking, and real-time reporting for business analytics.',
      technologies: ['Java Core', 'Swing', 'File I/O', 'Business Logic'],
      icon: FileText,
      highlights: ['Inventory Management', 'Invoice Generation', 'Sales Analytics'],
    },
  ];

  return (
    <section id="projects" className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-gradient-to-b from-[#0F1B2E] to-[#0A192F]' : 'bg-gradient-to-b from-gray-100 to-white'}`}>
      <div className="max-w-7xl mx-auto">
        <div 
          ref={projectsRef}
          className={`mb-16 text-center transition-all duration-1000 ${
            isProjectsVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className={`text-4xl sm:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Featured Projects
          </h2>
          <div className={`h-1 w-24 mx-auto rounded-full ${isDark ? 'bg-gradient-to-r from-[#64FFDA] to-[#4FD1C7]' : 'bg-gradient-to-r from-blue-600 to-blue-500'}`}></div>
          <p className={`mt-4 text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Innovative solutions showcasing technical expertise and problem-solving skills</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`${isDark ? 'bg-gradient-to-br from-[#112240] to-[#0F1B2E] border-gray-700/50 hover:border-[#64FFDA]/70' : 'bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-blue-500/70'} border transition-all duration-500 p-8 sm:p-10 flex flex-col hover:transform hover:scale-[1.02] shadow-2xl hover:shadow-lg`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`p-4 rounded-xl border ${isDark ? 'bg-gradient-to-br from-[#64FFDA]/20 to-[#4FD1C7]/20 border-[#64FFDA]/30' : 'bg-gradient-to-br from-blue-500/20 to-blue-600/20 border-blue-500/30'}`}>
                  <project.icon className={`w-8 h-8 ${isDark ? 'text-[#64FFDA]' : 'text-blue-600'}`} />
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg transition-all duration-300 ${isDark ? 'text-gray-400 hover:text-[#64FFDA] hover:bg-[#64FFDA]/10' : 'text-gray-500 hover:text-blue-600 hover:bg-blue-100'}`}
                  >
                    {project.link.includes('github') ? (
                      <Github className="w-6 h-6" />
                    ) : (
                      <ExternalLink className="w-6 h-6" />
                    )}
                  </a>
                )}
              </div>

              <h3 className={`text-2xl font-bold mb-4 leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
              
              <p className={`leading-relaxed mb-6 text-base font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {project.description}
              </p>

              {project.highlights && (
                <div className="mb-6">
                  <h4 className={`text-sm font-semibold mb-3 uppercase tracking-wide ${isDark ? 'text-[#64FFDA]' : 'text-blue-600'}`}>Key Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight, idx) => (
                      <Badge key={idx} className={`text-sm font-semibold px-3 py-2 ${isDark ? 'bg-gradient-to-r from-[#64FFDA]/20 to-[#4FD1C7]/20 text-[#64FFDA] border border-[#64FFDA]/40' : 'bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-700 border border-blue-500/40'}`}>
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-3 mb-6">
                {project.achievement && (
                  <Badge className={`w-fit font-semibold px-4 py-2 text-sm ${isDark ? 'bg-gradient-to-r from-purple-500/20 to-purple-600/20 text-purple-300 border border-purple-500/60' : 'bg-gradient-to-r from-purple-500/20 to-purple-600/20 text-purple-700 border border-purple-500/60'}`}>
                    🏆 {project.achievement}
                  </Badge>
                )}

                {project.impact && (
                  <Badge className={`w-fit font-semibold px-4 py-2 text-sm ${isDark ? 'bg-gradient-to-r from-green-500/20 to-green-600/20 text-green-300 border border-green-500/60' : 'bg-gradient-to-r from-green-500/20 to-green-600/20 text-green-700 border border-green-500/60'}`}>
                    📈 {project.impact}
                  </Badge>
                )}
              </div>

              <div className={`border-t pt-6 mt-auto ${isDark ? 'border-gray-700/50' : 'border-gray-200/50'}`}>
                <h4 className={`text-sm font-semibold mb-4 uppercase tracking-wide ${isDark ? 'text-white' : 'text-gray-900'}`}>Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge 
                      key={idx}
                      className={`text-sm font-medium px-3 py-2 transition-all duration-300 ${isDark ? 'bg-gradient-to-r from-[#0A192F] to-[#112240] text-[#64FFDA] border border-[#64FFDA]/40 hover:border-[#64FFDA] hover:bg-[#64FFDA]/10' : 'bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border border-blue-300 hover:border-blue-500 hover:bg-blue-200'}`}
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