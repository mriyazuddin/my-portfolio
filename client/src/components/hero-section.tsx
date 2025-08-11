import React from "react";
import { contactInfo, professionalSummary } from "@/data/resume-data";
import { useScroll } from "@/hooks/use-scroll";
import { Mail, Phone, MapPin, Download, ChevronDown, User } from "lucide-react";

/**
 * Hero Section Component
 * Professional introduction with contact information and call-to-action
 * Matches the design reference hero section with animations
 */
export function HeroSection() {
  const { scrollToElement } = useScroll();

  /**
   * Handle resume download
   * In a real implementation, this would download the actual resume file
   */
  const handleResumeDownload = () => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement("a");
    link.href = "/Mohammed_Riyazuddin_Resume.pdf";
    link.download = "Mohammed_Riyazuddin_Resume.pdf";
    link.target = "_blank";

    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    console.log("Resume download initiated");
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center gradient-primary transition-colors duration-300"
      data-testid="hero-section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fade-in">
          {/* Profile Image Placeholder */}
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-400 to-secondary-500 flex items-center justify-center shadow-lg card-hover">
              <User className="w-16 h-16 text-white" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {contactInfo.name.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-primary-600 dark:text-primary-400">
              {contactInfo.name.split(" ").slice(-1)}
            </span>
          </h1>

          {/* Professional Title */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-8">
            {contactInfo.title} & Technical Specialist
          </h2>

          {/* Professional Summary */}
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            {professionalSummary}
          </p>

          {/* Contact Information */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              data-testid="contact-email"
            >
              <Mail className="w-5 h-5" />
              <span>{contactInfo.email}</span>
            </a>

            <a
              href={`tel:${contactInfo.phone}`}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              data-testid="contact-phone"
            >
              <Phone className="w-5 h-5" />
              <span>{contactInfo.phone}</span>
            </a>

            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <MapPin className="w-5 h-5" />
              <span>{contactInfo.location}</span>
            </div>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => scrollToElement("contact")}
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl card-hover"
              data-testid="cta-contact"
            >
              Get In Touch
            </button>

            <button
              onClick={handleResumeDownload}
              className="bg-white dark:bg-gray-800 border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-gray-700 px-8 py-3 rounded-lg font-medium transition-all duration-200 card-hover"
              data-testid="cta-download"
            >
              <Download className="w-5 h-5 mr-2 inline" />
              Download Resume
            </button>
          </div>

          {/* Scroll Down Indicator */}
          <div className="mt-16">
            <button
              onClick={() => scrollToElement("about")}
              className="animate-bounce-gentle text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
              aria-label="Scroll to about section"
              data-testid="scroll-indicator"
            >
              <ChevronDown className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
