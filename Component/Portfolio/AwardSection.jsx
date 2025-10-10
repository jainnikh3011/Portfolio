
import React from 'react';
import { Card } from '@/components/ui/card';
import { Award, Trophy, FileBadge } from 'lucide-react';
import { useScrollAnimation } from '../../src/hooks/useScrollAnimation';

export default function AwardsSection() {
  const [awardsRef, isAwardsVisible] = useScrollAnimation(0.1);
  const awards = [
    {
      title: 'TCS Gems 2023',
      issuer: 'Tata Consultancy Services',
      description: 'Recognized for being one of the top 40 global coders at TCS',
      year: '2023',
      icon: Trophy,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
    },
    {
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      description: 'CLF-001 Certification demonstrating cloud computing expertise',
      year: 'Sep 2023',
      icon: FileBadge, // Changed from Certificate to FileBadge
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
    },
    {
      title: 'CodeCult 2020 Winner',
      issuer: 'ACM RGTU',
      description: 'Winner of Intercollege Coding competition organized by ACM RGTU',
      year: '2020',
      icon: Award,
      color: 'text-[#64FFDA]',
      bgColor: 'bg-[#64FFDA]/10',
    },
  ];

  return (
    <section id="awards" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A192F]">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={awardsRef}
          className={`mb-12 transition-all duration-1000 ${
            isAwardsVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Awards & Certifications
          </h2>
          <div className="h-1 w-20 bg-[#64FFDA]"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <Card 
              key={index}
              className="bg-[#112240] border-gray-800 hover:border-[#64FFDA]/50 transition-all duration-300 p-6 hover:transform hover:scale-105"
            >
              <div className={`p-4 ${award.bgColor} rounded-xl w-fit mb-4`}>
                <award.icon className={`w-8 h-8 ${award.color}`} />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{award.title}</h3>
              <p className="text-[#64FFDA] text-sm mb-3">{award.issuer}</p>
              <p className="text-gray-200 text-sm leading-relaxed mb-4">{award.description}</p>
              <p className="text-gray-300 text-sm font-medium">{award.year}</p>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-200 text-lg">
            Continuously learning and growing in the field of software development
          </p>
        </div>
      </div>
    </section>
  );
}
