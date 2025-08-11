import React from 'react';
import { experiences } from '@/data/resume-data';
import { Star } from 'lucide-react';

/**
 * Experience Section Component
 * Professional experience timeline with detailed role descriptions
 * Implements the timeline design from the reference
 */
export function ExperienceSection() {
  return (
    <section 
      id="experience" 
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
      data-testid="experience-section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-primary-200 dark:bg-primary-800"></div>

          {experiences.map((experience, index) => (
            <div
              key={`${experience.company}-${experience.position}`}
              className="relative flex items-center mb-12 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
              data-testid={`experience-${experience.company.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>
              
              {/* Content Card */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${
                index % 2 === 0 
                  ? 'md:pr-8 md:text-right' 
                  : 'md:pl-8 md:ml-auto'
              }`}>
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 card-hover">
                  {/* Company and Position Info */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {experience.position}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold mb-1">
                      {experience.company}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {experience.startDate} – {experience.endDate} • {experience.location}
                    </p>
                  </div>

                  {/* Role Description */}
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                    {experience.description}
                  </p>

                  {/* Key Accomplishments */}
                  {experience.achievements && experience.achievements.length > 0 && (
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li
                          key={achievementIndex}
                          className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                        >
                          <Star className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
