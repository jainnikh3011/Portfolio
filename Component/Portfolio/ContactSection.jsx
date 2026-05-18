import React, { useState } from 'react';
import resumePdf from '../../Resource/NikhilIUpdatedResume.pdf';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Github, Linkedin, Download, Copy, Check } from 'lucide-react';
import { useScrollAnimation } from '../../src/hooks/useScrollAnimation';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [contactRef, isContactVisible] = useScrollAnimation(0.1);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A192F]">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={contactRef}
          className={`mb-12 text-center transition-all duration-1000 ${
            isContactVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-[#64FFDA] mx-auto mb-4"></div>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto leading-relaxed">
            I'm currently looking for new opportunities and my inbox is always open. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-[#112240] border-gray-800 hover:border-[#64FFDA]/50 transition-all duration-300 p-6 text-center hover:transform hover:scale-105">
            <div className="flex flex-col items-center gap-3">
              <div className="p-3 bg-[#64FFDA]/10 rounded-lg">
                <Mail className="w-6 h-6 text-[#64FFDA]" />
              </div>
              <div className="w-full">
                <p className="text-gray-300 text-sm mb-2 font-medium">Email</p>
                <p className="text-white text-sm mb-2 break-all">nikhiljain3011@gmail.com</p>
                <button
                  onClick={() => copyToClipboard('nikhiljain3011@gmail.com', 'email')}
                  className="text-[#64FFDA] text-xs hover:underline flex items-center gap-1 mx-auto"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3 h-3" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" /> Copy
                    </>
                  )}
                </button>
              </div>
            </div>
          </Card>

          <Card className="bg-[#112240] border-gray-800 hover:border-[#64FFDA]/50 transition-all duration-300 p-6 text-center hover:transform hover:scale-105">
            <div className="flex flex-col items-center gap-3">
              <div className="p-3 bg-[#64FFDA]/10 rounded-lg">
                <Phone className="w-6 h-6 text-[#64FFDA]" />
              </div>
              <div className="w-full">
                <p className="text-gray-300 text-sm mb-2 font-medium">Phone</p>
                <p className="text-white text-sm mb-2">+91 9669548216</p>
                <button
                  onClick={() => copyToClipboard('+91 9669548216', 'phone')}
                  className="text-[#64FFDA] text-xs hover:underline flex items-center gap-1 mx-auto"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3 h-3" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" /> Copy
                    </>
                  )}
                </button>
              </div>
            </div>
          </Card>

          <Card className="bg-[#112240] border-gray-800 hover:border-[#64FFDA]/50 transition-all duration-300 p-6 text-center hover:transform hover:scale-105">
            <div className="flex flex-col items-center gap-3">
              <div className="p-3 bg-[#64FFDA]/10 rounded-lg">
                <MapPin className="w-6 h-6 text-[#64FFDA]" />
              </div>
              <div>
                <p className="text-gray-300 text-sm mb-2 font-medium">Location</p>
                <p className="text-white text-sm">Bengaluru, Karnataka</p>
                <p className="text-gray-300 text-xs mt-1">India</p>
              </div>
            </div>
          </Card>

          <Card className="bg-[#112240] border-gray-800 hover:border-[#64FFDA]/50 transition-all duration-300 p-6 text-center hover:transform hover:scale-105">
            <div className="flex flex-col items-center gap-3">
              <div className="p-3 bg-[#64FFDA]/10 rounded-lg">
                <Download className="w-6 h-6 text-[#64FFDA]" />
              </div>
              <div>
                <p className="text-gray-300 text-sm mb-2 font-medium">Resume</p>
                <a
                  href={resumePdf}
                  download
                  className="text-[#64FFDA] text-xs hover:underline font-medium"
                >
                  Download PDF
                </a>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center space-y-6">
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/jainnikh3011"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-[#112240] border border-gray-800 hover:border-[#64FFDA]/50 rounded-lg text-gray-400 hover:text-[#64FFDA] transition-all duration-300 hover:transform hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/nikhiljain3011"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-[#112240] border border-gray-800 hover:border-[#64FFDA]/50 rounded-lg text-gray-400 hover:text-[#64FFDA] transition-all duration-300 hover:transform hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:nikhiljain3011@gmail.com"
              className="p-4 bg-[#112240] border border-gray-800 hover:border-[#64FFDA]/50 rounded-lg text-gray-400 hover:text-[#64FFDA] transition-all duration-300 hover:transform hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <Button
            asChild
            className="bg-gradient-to-r from-[#64FFDA] to-[#4dd8b8] text-[#0A192F] border-2 border-[#64FFDA] hover:from-[#4dd8b8] hover:to-[#64FFDA] px-8 py-6 text-base font-bold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#64FFDA]/40 transform hover:translate-y-[-2px]"
          >
            <a href="mailto:nikhiljain3011@gmail.com">
              Say Hello
            </a>
          </Button>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-300 text-sm">
            Designed & Built by Nikhil Jain
          </p>
          <p className="text-gray-400 text-xs mt-2">
            © 2024 All rights reserved
          </p>
        </div>
      </div>
    </section>
  );
}