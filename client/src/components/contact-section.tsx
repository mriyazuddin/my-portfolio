import React, { useState } from 'react';
import { contactInfo } from '@/data/resume-data';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Linkedin, 
  Globe,
  CheckCircle,
  AlertCircle
} from 'lucide-react';


/**
 * Contact form data interface
 */
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Contact Section Component
 * Contact information with mailto functionality for direct email communication
 * Matches the design reference contact section
 */
export function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  /**
   * Handle form input changes
   */
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  /**
   * Generate mailto URL with form data
   * This creates a proper mailto link with subject and body pre-filled
   */
  const generateMailtoUrl = (data: ContactFormData): string => {
    const subject = encodeURIComponent(data.subject || 'Portfolio Contact');
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    );
    
    return `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
  };

  /**
   * Handle form submission via mailto
   * Opens user's default email client with pre-filled information
   */
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim()) {
      alert('Please enter your name.');
      return;
    }
    
    if (!formData.email.trim()) {
      alert('Please enter your email address.');
      return;
    }
    
    if (!formData.message.trim()) {
      alert('Please enter a message.');
      return;
    }
    
    // Generate and open mailto link
    const mailtoUrl = generateMailtoUrl(formData);
    window.location.href = mailtoUrl;
  };

  return (
    <section 
      id="contact" 
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
      data-testid="contact-section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to discuss opportunities or have questions about my experience? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-primary-50 dark:hover:bg-gray-700 transition-colors duration-200">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Email</p>
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="text-primary-600 dark:text-primary-400 hover:underline"
                    data-testid="contact-info-email"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-primary-50 dark:hover:bg-gray-700 transition-colors duration-200">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Phone</p>
                  <a 
                    href={`tel:${contactInfo.phone}`}
                    className="text-primary-600 dark:text-primary-400 hover:underline"
                    data-testid="contact-info-phone"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Location</p>
                  <p className="text-gray-600 dark:text-gray-300">{contactInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Connect With Me
              </h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center transition-colors duration-200"
                  aria-label="LinkedIn"
                  data-testid="social-linkedin"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="w-12 h-12 bg-gray-600 hover:bg-gray-700 text-white rounded-lg flex items-center justify-center transition-colors duration-200"
                  aria-label="Email"
                  data-testid="social-email"
                >
                  <Mail className="w-6 h-6" />
                </a>
                
                <a
                  href="#"
                  className="w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-lg flex items-center justify-center transition-colors duration-200"
                  aria-label="Website"
                  data-testid="social-website"
                >
                  <Globe className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Send a Message
            </h3>
            
            <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <p className="text-sm text-blue-700 dark:text-blue-300">
                <CheckCircle className="w-4 h-4 inline mr-2" />
                Clicking "Open Email Client" will launch your default email application with the message pre-filled.
              </p>
            </div>
            
            <form onSubmit={handleFormSubmit} className="space-y-6" data-testid="contact-form">
              {/* Name Field */}
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-200"
                  placeholder="Your full name"
                  data-testid="input-name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-200"
                  placeholder="your.email@example.com"
                  data-testid="input-email"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label 
                  htmlFor="subject" 
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-200"
                  placeholder="What would you like to discuss?"
                  data-testid="input-subject"
                />
              </div>

              {/* Message Field */}
              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-200 resize-vertical"
                  placeholder="Tell me about the opportunity or ask any questions..."
                  data-testid="input-message"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                data-testid="submit-button"
              >
                <Mail className="w-5 h-5" />
                Open Email Client
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
