import React from 'react';
import { Card } from '@/components/ui/card';
import { GraduationCap, MapPin, Award, Users, ExternalLink } from 'lucide-react';
import { useTheme } from '../../src/contexts/ThemeContext';
import { useScrollAnimation } from '../../src/hooks/useScrollAnimation';

export default function AboutSection() {
  const { isDark } = useTheme();
  const [aboutRef, isAboutVisible] = useScrollAnimation(0.1);
  const [cardsRef, isCardsVisible] = useScrollAnimation(0.1);
  const [code4allRef, isCode4allVisible] = useScrollAnimation(0.1);
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={aboutRef}
          className={`mb-12 transition-all duration-1000 ${
            isAboutVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className={`text-3xl sm:text-4xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            About Me
          </h2>
          <div className={`h-1 w-20 ${isDark ? 'bg-[#64FFDA]' : 'bg-blue-600'}`}></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-200' : 'text-gray-600'}`}>
              I'm a passionate Software Developer based in Bengaluru, currently working as a Systems Engineer 
              at TCS, where I specialize in building robust backend systems using Spring Boot and microservices architecture.
            </p>

            <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-200' : 'text-gray-600'}`}>
              With a strong foundation in Java and Spring ecosystem, I focus on developing scalable, 
              secure, and efficient RESTful APIs. My expertise includes implementing authentication mechanisms, 
              optimizing database operations with MySQL and Redis, and following Agile methodologies to deliver high-quality software.
            </p>

            <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-200' : 'text-gray-600'}`}>
              Beyond my professional work, I'm deeply committed to giving back to the coding community. 
              I believe in the power of education and collaboration to transform lives through technology.
            </p>
          </div>

          <div className="space-y-6">
            <Card className={`${isDark ? 'bg-[#112240] border-gray-800 hover:border-[#64FFDA]/50' : 'bg-white border-gray-200 hover:border-blue-500/50'} transition-all duration-300 p-6`}>
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${isDark ? 'bg-[#64FFDA]/10' : 'bg-blue-100'}`}>
                  <GraduationCap className={`w-6 h-6 ${isDark ? 'text-[#64FFDA]' : 'text-blue-600'}`} />
                </div>
                <div>
                  <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Education</h3>
                  <p className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>B.Tech. Information Technology</p>
                  <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>University Institute of Technology, RGPV</p>
                  <p className={`text-sm mt-1 ${isDark ? 'text-[#64FFDA]' : 'text-blue-600'}`}>CGPA: 8.5/10 | 2018-2022</p>
                </div>
              </div>
            </Card>

            <Card className={`${isDark ? 'bg-[#112240] border-gray-800 hover:border-[#64FFDA]/50' : 'bg-white border-gray-200 hover:border-blue-500/50'} transition-all duration-300 p-6`}>
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${isDark ? 'bg-[#64FFDA]/10' : 'bg-blue-100'}`}>
                  <MapPin className={`w-6 h-6 ${isDark ? 'text-[#64FFDA]' : 'text-blue-600'}`} />
                </div>
                <div>
                  <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Location</h3>
                  <p className={`${isDark ? 'text-gray-200' : 'text-gray-700'}`}>Bengaluru, Karnataka</p>
                  <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>Available for remote opportunities</p>
                </div>
              </div>
            </Card>

            <Card className={`${isDark ? 'bg-[#112240] border-gray-800 hover:border-[#64FFDA]/50' : 'bg-white border-gray-200 hover:border-blue-500/50'} transition-all duration-300 p-6`}>
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${isDark ? 'bg-[#64FFDA]/10' : 'bg-blue-100'}`}>
                  <Award className={`w-6 h-6 ${isDark ? 'text-[#64FFDA]' : 'text-blue-600'}`} />
                </div>
                <div>
                  <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Recognition</h3>
                  <p className={`${isDark ? 'text-gray-200' : 'text-gray-700'}`}>TCS Gems 2023 Awardee</p>
                  <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>Top 40 global coders at TCS</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Code4All Section */}
        <div className="mt-12">
          <Card className={`${isDark ? 'bg-gradient-to-br from-[#112240] to-[#1a3a52] border-[#64FFDA]/30' : 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-300/30'} p-8 sm:p-10 relative overflow-hidden`}>
            <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl ${isDark ? 'bg-[#64FFDA]/5' : 'bg-blue-500/5'}`}></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-4 rounded-xl ${isDark ? 'bg-[#64FFDA]/10' : 'bg-blue-100'}`}>
                  <Users className={`w-8 h-8 ${isDark ? 'text-[#64FFDA]' : 'text-blue-600'}`} />
                </div>
                <div>
                  <h3 className={`text-2xl sm:text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Code4All Initiative</h3>
                  <p className={`font-medium ${isDark ? 'text-[#64FFDA]' : 'text-blue-600'}`}>Co-founder & Community Leader</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-100' : 'text-gray-700'}`}>
                  Co-founded <span className={`font-semibold ${isDark ? 'text-[#64FFDA]' : 'text-blue-600'}`}>Code4All</span>, a thriving community 
                  initiative dedicated to democratizing coding education and making programming accessible to everyone. 
                  As a founding team member, I work alongside passionate coders to stimulate coding culture across educational institutions.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                  <div className={`p-4 rounded-lg border ${isDark ? 'bg-[#0A192F]/50 border-gray-700' : 'bg-white/50 border-gray-300'}`}>
                    <p className={`text-3xl font-bold mb-1 ${isDark ? 'text-[#64FFDA]' : 'text-blue-600'}`}>2000+</p>
                    <p className={`${isDark ? 'text-gray-200' : 'text-gray-700'}`}>Students Reached</p>
                  </div>
                  <div className={`p-4 rounded-lg border ${isDark ? 'bg-[#0A192F]/50 border-gray-700' : 'bg-white/50 border-gray-300'}`}>
                    <p className={`text-3xl font-bold mb-1 ${isDark ? 'text-[#64FFDA]' : 'text-blue-600'}`}>Multiple</p>
                    <p className={`${isDark ? 'text-gray-200' : 'text-gray-700'}`}>Coding Contests Organized</p>
                  </div>
                </div>

                <p className={`leading-relaxed ${isDark ? 'text-gray-200' : 'text-gray-600'}`}>
                  Through Code4All, we've successfully designed and organized coding competitions 
                  with participation from students across state university-affiliated colleges, 
                  fostering a vibrant ecosystem of learning, collaboration, and innovation.
                </p>
              </div>

              <a
                href="https://code4all.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#64FFDA] text-[#0A192F] rounded-lg font-semibold hover:bg-[#64FFDA]/90 transition-all duration-300 hover:scale-105"
              >
                Visit Code4All
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}