import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useTheme } from '../src/contexts/ThemeContext';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Download,
  Code,
  Award,
  Briefcase,
  GraduationCap,
  ExternalLink,
  ChevronDown
} from 'lucide-react';

import HeroSection from '../Component/Portfolio/Herosection.jsx';
import AboutSection from '../Component/Portfolio/AboutSection.jsx';
import ExperienceSection from '../Component/Portfolio/ExperienceSection.jsx';
import SkillsSection from '../Component/Portfolio/SkillsSection.jsx';
import ProjectsSection from '../Component/Portfolio/ProjectSection.jsx';
import AwardsSection from '../Component/Portfolio/AwardSection.jsx';
import ContactSection from '../Component/Portfolio/ContactSection.jsx';
import Navigation from '../Component/Portfolio/Navigation.jsx';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const { isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'awards', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-[#0A192F]' : 'bg-gray-50'}`}>
      <Navigation activeSection={activeSection} />
      
      <div className="relative">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <AwardsSection />
        <ContactSection />
      </div>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 z-50 ${isDark ? 'bg-[#64FFDA] text-[#0A192F]' : 'bg-blue-600 text-white'}`}
      >
        <ChevronDown className="w-6 h-6 rotate-180" />
      </button>
    </div>
  );
}