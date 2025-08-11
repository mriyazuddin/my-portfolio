import React, { useState } from 'react';
import { useScroll } from '@/hooks/use-scroll';
import { ThemeToggle } from './theme-provider';
import { navigationLinks, contactInfo } from '@/data/resume-data';
import { Menu, X } from 'lucide-react';

/**
 * Navigation Header Component
 * Fixed navigation with responsive design, theme toggle, and smooth scrolling
 * Matches the design reference navigation functionality
 */
export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrolled, scrollToElement } = useScroll();

  /**
   * Handle navigation link clicks for smooth scrolling
   */
  const handleNavClick = (href: string) => {
    // Extract the element ID from href (remove #)
    const elementId = href.replace('#', '');
    scrollToElement(elementId);
    
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  /**
   * Toggle mobile menu visibility
   */
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  /**
   * Close mobile menu (used for outside clicks)
   */
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700' 
          : 'bg-transparent'
      }`}
      data-testid="navigation"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name section */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToElement('hero')}
              className="text-xl font-bold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
              data-testid="logo-button"
            >
              {contactInfo.name}
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-medium"
                data-testid={`nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </button>
            ))}
            
            {/* Theme Toggle for Desktop */}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Controls */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Mobile Theme Toggle */}
            <ThemeToggle className="p-2" />
            
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              data-testid="mobile-menu-button"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
            <div className="flex flex-col space-y-3">
              {navigationLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="px-3 py-2 rounded-lg text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-medium"
                  data-testid={`mobile-nav-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Overlay for mobile menu (closes menu when clicked) */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 z-[-1] md:hidden"
          onClick={closeMobileMenu}
          data-testid="mobile-menu-overlay"
        />
      )}
    </nav>
  );
}
