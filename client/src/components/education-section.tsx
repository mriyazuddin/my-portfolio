import React from 'react';
import { education } from '@/data/resume-data';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

/**
 * Education Section Component
 * Displays educational background and qualifications
 * Matches the design reference styling for consistency
 */
export function EducationSection() {
  return (
    <section 
      id="education" 
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
      data-testid="education-section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Education
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        {/* Education Card */}
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 card-hover">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                {/* Education Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  </div>
                </div>

                {/* Education Details */}
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {education.degree}
                  </h3>
                  
                  <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold mb-3">
                    {education.institution}
                  </p>
                  
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <MapPin className="w-4 h-4" />
                    <span>{education.location}</span>
                  </div>
                </div>

                {/* Additional Education Info */}
                <div className="flex-shrink-0 text-right">
                  <div className="bg-white dark:bg-gray-900 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                      Field of Study
                    </p>
                    <p className="text-gray-900 dark:text-white font-semibold">
                      Computer Applications
                    </p>
                  </div>
                </div>
              </div>

              {/* Education Description */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Bachelor of Computer Applications program provided comprehensive foundation in computer science, 
                  programming, software development, and information technology. The curriculum covered essential 
                  topics including programming languages, database management, web technologies, and system analysis, 
                  which formed the technical foundation for my career in support engineering and technical support.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Qualifications or Certifications */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Development
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
            {/* Professional Experience Learning */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    Continuous Learning
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    2005 - Present
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Over 5+ years of hands-on experience with WordPress, WooCommerce, web technologies, 
                and customer support platforms gained through professional roles at leading tech companies.
              </p>
            </div>

            {/* Training and Development */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    Team Training
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Training Guild Member
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Active member of training guilds, delivering multiple training sessions and 
                maintaining learning materials for team development and process improvement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}