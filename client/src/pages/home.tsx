import React from 'react';
import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { ExperienceSection } from '@/components/experience-section';
import { SkillsSection } from '@/components/skills-section';
import { EducationSection } from '@/components/education-section';
import { AchievementsSection } from '@/components/achievements-section';
import { ContactSection } from '@/components/contact-section';

/**
 * Home Page Component
 * Main portfolio page that combines all sections
 * This is the primary landing page for the portfolio website
 */
export function HomePage() {
  return (
    <>
      {/* Fixed Navigation Header */}
      <Navigation />

      {/* Main Content Sections */}
      <main>
        {/* Hero section with professional introduction */}
        <HeroSection />

        {/* About section with background and expertise */}
        <AboutSection />

        {/* Professional experience timeline */}
        <ExperienceSection />

        {/* Skills and technical stack showcase */}
        <SkillsSection />

        {/* Educational background and qualifications */}
        <EducationSection />

        {/* Key achievements and metrics */}
        <AchievementsSection />

        {/* Contact form and information */}
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-12 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 mb-4">
              © 2024 Mohammed Riyazuddin. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Built with React, TypeScript, and Tailwind CSS • Designed for accessibility and performance
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
