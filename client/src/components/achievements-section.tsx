import React from 'react';
import { achievements } from '@/data/resume-data';
import { 
  Award, 
  BookOpen, 
  GraduationCap, 
  Globe, 
  Ticket, 
  FileText, 
  Users, 
  TrendingUp 
} from 'lucide-react';

/**
 * Achievements Section Component
 * Key accomplishments with impact metrics and detailed descriptions
 * Matches the design reference achievements layout
 */
export function AchievementsSection() {
  /**
   * Get appropriate icon for each achievement
   */
  const getAchievementIcon = (iconName: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      'ticket': <Ticket className="w-8 h-8" />,
      'file-alt': <FileText className="w-8 h-8" />,
      'chalkboard-teacher': <GraduationCap className="w-8 h-8" />,
      'globe-asia': <Globe className="w-8 h-8" />,
      'award': <Award className="w-8 h-8" />,
      'book': <BookOpen className="w-8 h-8" />,
      'users': <Users className="w-8 h-8" />,
      'trending-up': <TrendingUp className="w-8 h-8" />,
    };
    
    return iconMap[iconName] || <Award className="w-8 h-8" />;
  };

  /**
   * Additional detailed achievements for the bottom section
   */
  const detailedAchievements = [
    {
      title: 'Customer Satisfaction Excellence',
      description: 'Consistently maintained 90%+ CSAT scores while handling 500+ tickets monthly, demonstrating exceptional problem-solving skills and customer relationship management.',
      icon: 'award',
      bgColor: 'bg-primary-100 dark:bg-primary-900',
      iconColor: 'text-primary-600 dark:text-primary-400',
    },
    {
      title: 'Documentation Leadership',
      description: 'Led the Documentation Guild initiative, creating and revamping over 100 customer-facing documentation assets to improve user support experience and self-service capabilities.',
      icon: 'book',
      bgColor: 'bg-secondary-100 dark:bg-secondary-900',
      iconColor: 'text-secondary-600 dark:text-secondary-400',
    },
    {
      title: 'Training & Development',
      description: 'Delivered multiple training sessions to team members, resulting in improved resolution times and enhanced team capabilities across the support organization.',
      icon: 'chalkboard-teacher',
      bgColor: 'bg-green-100 dark:bg-green-900',
      iconColor: 'text-green-600 dark:text-green-400',
    },
    {
      title: 'Regional Growth Initiative',
      description: 'Successfully developed APAC workforce through a comprehensive 6-month talent acquisition initiative, supporting regional growth objectives and team expansion.',
      icon: 'globe-asia',
      bgColor: 'bg-orange-100 dark:bg-orange-900',
      iconColor: 'text-orange-600 dark:text-orange-400',
    },
  ];

  return (
    <section 
      id="achievements" 
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
      data-testid="achievements-section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Key Achievements
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        {/* Achievement Metrics Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
              data-testid={`achievement-metric-${achievement.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 card-hover">
                <div className="mb-4 text-primary-600 dark:text-primary-400 flex justify-center">
                  {getAchievementIcon(achievement.icon)}
                </div>
                
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {achievement.metric}
                </div>
                
                <div className="text-gray-600 dark:text-gray-300 font-medium mb-2">
                  {achievement.title}
                </div>
                
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {achievement.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {detailedAchievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className="animate-fade-in"
              style={{ animationDelay: `${(index + 3) * 200}ms` }}
              data-testid={`achievement-detail-${achievement.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 card-hover">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 ${achievement.bgColor} rounded-lg flex items-center justify-center`}>
                      <div className={achievement.iconColor}>
                        {getAchievementIcon(achievement.icon)}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
