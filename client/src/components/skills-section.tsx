import React, { useEffect, useState } from 'react';
import { technicalSkills, tools, languages } from '@/data/resume-data';
import { 
  Globe, 
  Github, 
  Code, 
  Server, 
  BarChart3, 
  Headphones,
  FileCode,
  Chrome
} from 'lucide-react';

/**
 * Skills Section Component
 * Technical stack showcase with animated progress bars and tool icons
 * Matches the design reference skills layout
 */
export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animations when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('skills');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  /**
   * Get appropriate icon for each tool
   */
  const getToolIcon = (toolName: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      'WordPress': <FileCode className="w-8 h-8" />,
      'Zendesk': <Headphones className="w-8 h-8" />,
      'GitHub': <Github className="w-8 h-8" />,
      'DevTools': <Code className="w-8 h-8" />,
      'DNS': <Server className="w-8 h-8" />,
      'Analytics': <BarChart3 className="w-8 h-8" />,
    };
    
    return iconMap[toolName] || <Globe className="w-8 h-8" />;
  };

  /**
   * Get category label styling for skill levels
   */
  const getCategoryStyles = (category: string) => {
    const styleMap: Record<string, string> = {
      'expert': 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
      'advanced': 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
      'intermediate': 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200',
      'beginner': 'bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200',
    };
    
    return styleMap[category] || styleMap.beginner;
  };

  /**
   * Get language proficiency styling
   */
  const getLanguageStyles = (proficiency: string) => {
    const styleMap: Record<string, string> = {
      'native': 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
      'proficient': 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
      'intermediate': 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200',
      'beginner': 'bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200',
    };
    
    return styleMap[proficiency] || styleMap.beginner;
  };

  return (
    <section 
      id="skills" 
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
      data-testid="skills-section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Skills & Technical Stack
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills with Progress Bars */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Technical Expertise
            </h3>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="skill-item"
                  style={{ animationDelay: `${index * 100}ms` }}
                  data-testid={`skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900 dark:text-white">
                      {skill.name}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${getCategoryStyles(skill.category)}`}>
                      {skill.category.charAt(0).toUpperCase() + skill.category.slice(1)}
                    </span>
                  </div>
                  
                  <div className="skill-bar">
                    <div
                      className={`skill-fill ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 100}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Platforms */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Tools & Platforms
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
              {tools.map((tool, index) => (
                <div
                  key={tool.name}
                  className="group p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-primary-50 dark:hover:bg-gray-700 transition-all duration-300 hover:shadow-md text-center card-hover"
                  style={{ animationDelay: `${index * 100}ms` }}
                  data-testid={`tool-${tool.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="mb-3 text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300 flex justify-center">
                    {getToolIcon(tool.name)}
                  </div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Language Proficiency */}
            <div className="mt-12">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Languages
              </h4>
              
              <div className="space-y-4">
                {languages.map((language, index) => (
                  <div
                    key={language.name}
                    className="flex justify-between items-center"
                    style={{ animationDelay: `${index * 100}ms` }}
                    data-testid={`language-${language.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <span className="font-medium text-gray-900 dark:text-white">
                      {language.name}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLanguageStyles(language.proficiency)}`}>
                      {language.proficiency.charAt(0).toUpperCase() + language.proficiency.slice(1)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
