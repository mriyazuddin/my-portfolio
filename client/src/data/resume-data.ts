/**
 * Resume data extracted from Mohammed Riyazuddin's PDF resume
 * This file contains all the professional information, experience, skills, and contact details
 * organized in a structured format for easy consumption by React components
 */

export interface ContactInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
  website?: string;
}

export interface ExpertiseArea {
  name: string;
  icon: string;
}

export interface TechnicalSkill {
  name: string;
  level: number; // 1-100 percentage
  category: 'expert' | 'advanced' | 'intermediate' | 'beginner';
}

export interface Tool {
  name: string;
  icon: string;
  category: string;
}

export interface Language {
  name: string;
  proficiency: 'native' | 'proficient' | 'intermediate' | 'beginner';
}

export interface Achievement {
  title: string;
  description: string;
  icon: string;
  metric?: string;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
}

// Contact information extracted from the resume
export const contactInfo: ContactInfo = {
  name: "Mohammed Riyazuddin",
  title: "Support Engineer",
  email: "contact@riyaz.blog",
  phone: "+91 863-922-7538",
  location: "Hyderabad, India",
  linkedin: "https://www.linkedin.com/in/mriyazuddin1/", // URL would be added when available
};

// Professional summary from the resume
export const professionalSummary = `Experienced Customer Success and Technical Support Engineer with over 5 years of success managing customer relationships, resolving complex WordPress/WooCommerce issues, and driving product adoption. Skilled in cross-functional collaboration, customer communication, and data analysis. Adept at simplifying technical concepts, supporting campaign delivery, and contributing to support process improvement.`;

// Areas of expertise from the resume
export const expertiseAreas: ExpertiseArea[] = [
  { name: "Product Support", icon: "headphones" },
  { name: "Technical Support", icon: "settings" },
  { name: "Technical Documentation", icon: "file-text" },
  { name: "Project Management", icon: "briefcase" },
  { name: "People Management", icon: "users" },
  { name: "Training", icon: "graduation-cap" },
  { name: "Troubleshooting", icon: "wrench" },
  { name: "Process Improvement", icon: "trending-up" },
  { name: "Analytical Thinking", icon: "brain" },
  { name: "Strategic Planning", icon: "target" },
  { name: "Debugging", icon: "bug" },
  { name: "Customer Service", icon: "smile" },
];

// Technical skills with proficiency levels
export const technicalSkills: TechnicalSkill[] = [
  { name: "WordPress & WooCommerce", level: 85, category: "advanced" },
  { name: "HTML, CSS & JavaScript", level: 80, category: "advanced" },
  // { name: "APIs & Integration", level: 80, category: "advanced" },
  { name: "Git & GitHub", level: 65, category: "intermediate" },
  { name: "DNS & Hosting", level: 90, category: "advanced" },
  { name: "Browser DevTools", level: 65, category: "intermediate" },
  { name: "Zendesk", level: 95, category: "expert" },
  { name: "Office Applications", level: 95, category: "expert" },
  { name: "Domains", level: 90, category: "expert"},
];

// Tools and platforms
export const tools: Tool[] = [
  { name: "WordPress", icon: "wordpress", category: "CMS" },
  { name: "Zendesk", icon: "life-ring", category: "Support" },
  { name: "GitHub", icon: "github", category: "Development" },
  { name: "DevTools", icon: "code", category: "Development" },
  { name: "DNS", icon: "server", category: "Infrastructure" },
  { name: "Analytics", icon: "chart-line", category: "Analysis" },
];

// Language proficiencies
export const languages: Language[] = [
  { name: "English", proficiency: "proficient" },
  { name: "Hindi & Urdu", proficiency: "native" },
];

// Key achievements from the resume
export const achievements: Achievement[] = [
  {
    title: "High-Volume Ticket Resolution",
    description: "Consistently resolved 500+ tickets/month while maintaining 90%+ CSAT scores",
    icon: "ticket",
    metric: "500+",
  },
  {
    title: "Documentation Excellence",
    description: "Improved user support experience by creating and updating over 100 customer-facing documentation assets within the Documentation Guild",
    icon: "file-alt",
    metric: "100+",
  },
  {
    title: "Team Training & Development",
    description: "Delivered multiple trainings to upskill the team, resulting in improvement in resolution rate and time",
    icon: "chalkboard-teacher",
    metric: "Multiple",
  },
  {
    title: "Regional Workforce Development",
    description: "Developed APAC workforce through a 6-month talent acquisition initiative, supporting regional growth objectives",
    icon: "globe-asia",
    metric: "6 Months",
  },
];

// Professional experience from the resume
export const experiences: Experience[] = [
  {
    company: "Automattic",
    position: "Happiness Engineer",
    location: "Remote",
    startDate: "June 2019",
    endDate: "April 2025",
    description: "Resolved customer inquiries via email (Zendesk) and live chat supporting WordPress.com and WooCommerce platforms, enhancing user satisfaction and product usability. Troubleshot and optimized WooCommerce plugins and extensions, including payment gateways (Stripe, PayPal, WooPayments), synchronization tools (Square, Google, Facebook), and advanced modules like Bookings and Subscriptions. Resolved issues related to website hosting, domain management, DNS configuration, email integration, and plugin/theme functionality on WordPress. Enhanced onboarding and learning experience for new hires by revising and maintaining training materials as part of the training guild.",
    achievements: [
      "Improved customer experience by resolving technical issues and guiding users in building visually engaging websites via expert support on domains, themes, hosting, and plugins",
      "Resolved 500+ tickets/month while maintaining 90%+ CSAT scores",
      "Improved user support experience by revamping over 100 customer-facing documentation assets within the Documentation Guild",
      "Developed APAC workforce through a 6-month talent acquisition initiative, supporting regional growth objectives",
      "Delivered multiple trainings to the team, resulting in improvement in resolution time",
    ],
  },
  {
    company: "ESW Capital",
    position: "Customer Support Manager",
    location: "Remote",
    startDate: "April 2018",
    endDate: "August 2018",
    description: "Transitioned a support process from a newly acquired company to ESW Support model.",
    achievements: [],
  },
  {
    company: "Teradata India Pvt. Ltd",
    position: "Technical Support Associate VI",
    location: "Hyderabad",
    startDate: "September 2016",
    endDate: "March 2018",
    description: "Lead a small group of support agents.",
    achievements: [],
  },
  {
    company: "Deloitte",
    position: "Various Roles",
    location: "Hyderabad",
    startDate: "August 2005",
    endDate: "September 2016",
    description: "Started as a support agent on the front lines (Call Center) providing IT support. Went on to lead a team later.",
    achievements: [],
  },
];

// Education information
export const education: Education = {
  degree: "Bachelor of Computer Applications",
  institution: "Osmania University",
  location: "Hyderabad, India",
};

// Navigation links for the website
export const navigationLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];
