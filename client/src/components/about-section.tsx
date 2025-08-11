import React from 'react';
import { expertiseAreas } from '@/data/resume-data';
import { CheckCircle } from 'lucide-react';

/**
 * About Section Component
 * Showcases professional background and areas of expertise
 * Follows the design reference layout and styling
 */
export function AboutSection() {
  return (
    <section 
      id="about" 
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
      data-testid="about-section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Professional Summary */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Professional Background
            </h3>
            
            <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                With over 5 years of experience in customer success and technical support, 
                I specialize in managing customer relationships, resolving complex platform issues, 
                and driving product adoption across SaaS and digital platforms.
              </p>
              
              <p>
                My expertise spans cross-functional collaboration, customer communication, 
                and data analysis, with a proven track record of simplifying technical concepts 
                and contributing to support process improvements.
              </p>
              
              <p>
                I'm passionate about bridging the gap between technical solutions and user needs, 
                ensuring seamless experiences for customers while driving business growth.
              </p>
            </div>
          </div>

          {/* Areas of Expertise Grid */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Areas of Expertise
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {expertiseAreas.map((area, index) => (
                <div
                  key={area.name}
                  className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-primary-50 dark:hover:bg-gray-700 transition-all duration-200 card-hover"
                  style={{ animationDelay: `${index * 100}ms` }}
                  data-testid={`expertise-${area.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <CheckCircle className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {area.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
