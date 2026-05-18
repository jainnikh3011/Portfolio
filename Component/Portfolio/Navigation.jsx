import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

export default function Navigation({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'awards', label: 'Awards' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-[#0A192F]/95 backdrop-blur-sm z-50 border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-[#64FFDA] font-bold text-xl tracking-tight">
              NJ
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-[#64FFDA] bg-[#64FFDA]/10'
                      : 'text-gray-400 hover:text-[#64FFDA] hover:bg-[#64FFDA]/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href={resumeUrl}
                download
                className="ml-4 px-4 py-2 bg-transparent border-2 border-[#64FFDA] text-[#64FFDA] rounded-lg text-sm font-medium hover:bg-[#64FFDA]/10 transition-all duration-300"
              >
                Resume
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-gray-400 hover:text-[#64FFDA] hover:bg-[#64FFDA]/10 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-800/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-[#64FFDA] bg-[#64FFDA]/10'
                      : 'text-gray-400 hover:text-[#64FFDA] hover:bg-[#64FFDA]/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href={resumeUrl}
                download
                className="block w-full text-center px-3 py-2 border-2 border-[#64FFDA] text-[#64FFDA] rounded-lg text-base font-medium hover:bg-[#64FFDA]/10 transition-all duration-300 mt-4"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}