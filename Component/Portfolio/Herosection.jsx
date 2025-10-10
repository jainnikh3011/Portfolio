import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { useTheme } from '../../src/contexts/ThemeContext';
import { useScrollAnimation } from '../../src/hooks/useScrollAnimation';

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Nikhil Jain';
  const { isDark } = useTheme();
  const [heroRef, isHeroVisible] = useScrollAnimation(0.1);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="space-y-2">
              <p className={`font-mono text-sm sm:text-base animate-fade-in-down ${isDark ? 'text-[#64FFDA]' : 'text-blue-600'}`}>
                Hi, my name is
              </p>
              
              {/* Animated Name with Typewriter Effect */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="inline-block">
                  {displayedText.split('').map((char, index) => (
                    <span
                      key={index}
                      className={`inline-block animate-character-fade ${isDark ? 'text-gray-100' : 'text-gray-900'}`}
                      style={{
                        animationDelay: `${index * 0.1}s`,
                      }}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </span>
                  ))}
                  <span className={`inline-block w-1 h-16 sm:h-20 lg:h-24 ml-1 animate-cursor ${isDark ? 'bg-[#64FFDA]' : 'bg-blue-600'}`}></span>
                </span>
              </h1>
              
              {/* Animated Software Developer with Gradient */}
              <div className="overflow-hidden">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold animate-slide-in-left">
                  <span className={`bg-clip-text text-transparent animate-gradient bg-[length:200%_auto] ${isDark ? 'bg-gradient-to-r from-gray-400 via-[#64FFDA] to-gray-400' : 'bg-gradient-to-r from-gray-600 via-blue-600 to-gray-600'}`}>
                    Software Developer
                  </span>
                </h2>
              </div>
            </div>

            <p className={`text-lg leading-relaxed max-w-2xl animate-fade-in ${isDark ? 'text-gray-200' : 'text-gray-600'}`} style={{ animationDelay: '1.5s' }}>
              Systems Engineer at TCS specializing in building exceptional digital experiences. 
              Currently focused on developing scalable backend systems with Spring Boot and microservices architecture.
            </p>

            <div className="flex items-center gap-4 pt-4 animate-fade-in" style={{ animationDelay: '1.8s' }}>
              <a
                href="https://github.com/jainnikh3011"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-400 hover:text-[#64FFDA] hover:bg-[#64FFDA]/10 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/nikhiljain3011"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-400 hover:text-[#64FFDA] hover:bg-[#64FFDA]/10 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:nikhiljain3011@gmail.com"
                className="p-3 text-gray-400 hover:text-[#64FFDA] hover:bg-[#64FFDA]/10 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>

            <div className="pt-4 animate-fade-in" style={{ animationDelay: '2s' }}>
              <Button
                onClick={scrollToAbout}
                className="bg-gradient-to-r from-[#64FFDA] to-[#4dd8b8] text-[#0A192F] border-2 border-[#64FFDA] hover:from-[#4dd8b8] hover:to-[#64FFDA] px-8 py-6 text-base font-bold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#64FFDA]/40 transform hover:translate-y-[-2px]"
              >
                Get to know me
              </Button>
            </div>
          </div>

          {/* Right Column - Image with Hover Animation */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in-right">
            <div 
              className="relative group cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-[#64FFDA] via-blue-500 to-purple-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition duration-700 animate-pulse"></div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#64FFDA]/20 to-blue-500/20 rounded-2xl"></div>
                
                {/* Main Profile Image - Optimized sizes */}
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68ad37dc862220a168c7aff4/8d01645ea_Nikhil_Profile_pic.jpg"
                  alt="Nikhil Jain"
                  className={`relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-cover rounded-2xl shadow-2xl border-4 border-[#64FFDA]/30 group-hover:border-[#64FFDA]/60 transition-all duration-500 ${
                    isHovered ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                  }`}
                />

                {/* Animated Hi Overlay - Optimized sizes */}
                <div 
                  className={`absolute inset-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-[#112240] to-[#0A192F] rounded-2xl border-4 border-[#64FFDA] flex items-center justify-center transition-all duration-500 ${
                    isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                  }`}
                >
                  <div className="text-center space-y-4 sm:space-y-6 px-4">
                    {/* Waving Hand Animation - Responsive size */}
                    <div className="text-5xl sm:text-6xl lg:text-8xl animate-wave inline-block">
                      👋
                    </div>
                    
                    {/* Greeting Text - Responsive sizes */}
                    <div className="space-y-1 sm:space-y-2">
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#64FFDA] animate-pulse">
                        Hi There!
                      </h3>
                      <p className="text-lg sm:text-xl text-gray-300 font-medium">
                        I'm Nikhil
                      </p>
                      <p className="text-sm sm:text-base text-gray-400">
                        Let's build something amazing!
                      </p>
                    </div>

                    {/* Animated Circles */}
                    <div className="flex justify-center gap-2">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#64FFDA] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#64FFDA] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#64FFDA] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Status Badge */}
                <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-gradient-to-br from-[#64FFDA] to-[#4dd8b8] text-[#0A192F] px-4 py-3 sm:px-5 sm:py-4 rounded-xl font-bold shadow-2xl group-hover:scale-105 transition-transform duration-300 border-2 border-[#64FFDA]/50">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#0A192F] rounded-full animate-pulse"></div>
                    <div className="text-left">
                      <p className="text-xs sm:text-sm font-extrabold leading-tight">Available for Work</p>
                      <p className="text-[10px] sm:text-xs font-medium opacity-90 leading-tight">Actively Appearing for Interviews</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CSS for animations */}
              <style jsx>{`
                @keyframes wave {
                  0% { transform: rotate(0deg); }
                  10% { transform: rotate(14deg); }
                  20% { transform: rotate(-8deg); }
                  30% { transform: rotate(14deg); }
                  40% { transform: rotate(-4deg); }
                  50% { transform: rotate(10deg); }
                  60% { transform: rotate(0deg); }
                  100% { transform: rotate(0deg); }
                }

                @keyframes cursor-blink {
                  0%, 100% { opacity: 1; }
                  50% { opacity: 0; }
                }

                @keyframes character-fade {
                  from {
                    opacity: 0;
                    transform: translateY(-20px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }

                @keyframes fade-in-down {
                  from {
                    opacity: 0;
                    transform: translateY(-20px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }

                @keyframes fade-in {
                  from {
                    opacity: 0;
                  }
                  to {
                    opacity: 1;
                  }
                }

                @keyframes fade-in-right {
                  from {
                    opacity: 0;
                    transform: translateX(50px);
                  }
                  to {
                    opacity: 1;
                    transform: translateX(0);
                  }
                }

                @keyframes slide-in-left {
                  from {
                    transform: translateX(-100%);
                    opacity: 0;
                  }
                  to {
                    transform: translateX(0);
                    opacity: 1;
                  }
                }

                @keyframes gradient-shift {
                  0% {
                    background-position: 0% 50%;
                  }
                  50% {
                    background-position: 100% 50%;
                  }
                  100% {
                    background-position: 0% 50%;
                  }
                }

                .animate-wave {
                  animation: wave 1.5s infinite;
                  transform-origin: 70% 70%;
                  display: inline-block;
                }

                .animate-cursor {
                  animation: cursor-blink 1s step-end infinite;
                }

                .animate-character-fade {
                  animation: character-fade 0.5s ease-out forwards;
                  opacity: 0;
                }

                .animate-fade-in-down {
                  animation: fade-in-down 0.8s ease-out forwards;
                }

                .animate-fade-in {
                  animation: fade-in 1s ease-out forwards;
                  opacity: 0;
                }

                .animate-fade-in-right {
                  animation: fade-in-right 1s ease-out forwards;
                }

                .animate-slide-in-left {
                  animation: slide-in-left 1s ease-out forwards;
                  animation-delay: 1.2s;
                  opacity: 0;
                }

                .animate-gradient {
                  animation: gradient-shift 3s ease infinite;
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[#64FFDA] animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}