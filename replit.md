# Portfolio Website - Mohammed Riyazuddin

## Overview

A modern, responsive portfolio website built for Mohammed Riyazuddin, a Customer Success and Technical Support Specialist with 5+ years of experience in SaaS platforms. The application showcases professional experience, technical skills, achievements, and provides a contact interface for potential opportunities.

The portfolio is designed as a single-page application with smooth scrolling navigation between sections, featuring a clean, professional design with dark/light theme support and accessibility considerations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern component patterns
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system and CSS variables for theming
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **State Management**: TanStack Query for server state management and React hooks for local state
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **Architecture Pattern**: RESTful API design with modular route structure
- **Storage Interface**: Abstracted storage layer with in-memory implementation (ready for database integration)
- **Development Server**: Vite middleware integration for seamless development experience

### Component Structure
- **Layout Components**: Navigation, Hero, About, Experience, Skills, Achievements, Contact sections
- **UI Components**: Complete shadcn/ui component library for consistent design
- **Custom Hooks**: Scroll tracking, theme management, toast notifications, mobile detection
- **Data Layer**: Structured resume data with TypeScript interfaces for type safety

### Design System
- **Theme Support**: CSS custom properties for light/dark mode with system preference detection
- **Typography**: Inter font family with responsive scaling
- **Color Palette**: Primary blue (#3B82F6) and secondary purple (#8B5CF6) with neutral grays
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Animation**: CSS transitions and keyframe animations for smooth interactions

### Development Architecture
- **Monorepo Structure**: Shared types and schemas between client/server
- **Path Aliases**: Configured for clean imports (@/ for client, @shared for shared code)
- **Hot Reload**: Vite HMR for instant development feedback
- **Error Handling**: Runtime error overlay for development debugging

## External Dependencies

### Core Technologies
- **React**: Frontend framework with hooks and modern patterns
- **TypeScript**: Static typing for development confidence
- **Express.js**: Backend web framework
- **Vite**: Build tool and development server

### Database & ORM
- **Drizzle ORM**: Type-safe database toolkit configured for PostgreSQL
- **Neon Database**: Serverless PostgreSQL provider integration
- **Database Schema**: User management with UUID primary keys

### UI & Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Accessible UI primitives for complex components
- **shadcn/ui**: Pre-built component library
- **Lucide React**: Icon library for consistent iconography

### State & Data Management
- **TanStack Query**: Server state management with caching
- **React Hook Form**: Form state management with validation
- **Zod**: Runtime type validation and schema definition

### Development Tools
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for production
- **PostCSS**: CSS processing with Autoprefixer
- **Wouter**: Lightweight routing library

### Session & Authentication (Ready)
- **connect-pg-simple**: PostgreSQL session store for Express sessions
- **crypto**: UUID generation for secure user identification

The application is structured for easy extension with user authentication, content management, and additional portfolio features while maintaining clean separation of concerns and type safety throughout the stack.