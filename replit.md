# GradeGen Pro - Student Grade Management System

## Overview

GradeGen Pro is a modern, multi-page student grade generating system designed for educational institutions. It provides a comprehensive solution for calculating student grades, generating reports, and tracking academic performance with an intuitive user interface.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a **full-stack architecture** with clear separation between client and server components:

### Frontend Architecture
- **React + TypeScript SPA** using Vite as the build tool
- **Client-side routing** with Wouter for navigation between pages
- **Component-based architecture** using modern React patterns (hooks, functional components)
- **Styling** with Tailwind CSS and shadcn/ui component library
- **State management** using React hooks and TanStack Query for server state

### Backend Architecture
- **Express.js server** with TypeScript support
- **RESTful API structure** with routes prefixed under `/api`
- **Memory-based storage** for development (easily replaceable with database)
- **Development-first approach** with hot reloading via Vite integration

### Database Strategy
- **Drizzle ORM** configured for PostgreSQL
- **Schema-first approach** with type generation from database schema
- **Migration support** through drizzle-kit
- Currently using **in-memory storage** for development with easy database integration path

## Key Components

### Page Structure
1. **Home Page** - Welcome message, feature overview, navigation
2. **Grade Entry Page** - Student information form and subject marks input
3. **Results Page** - Grade calculations, visual analytics, PDF export
4. **History Page** - Past grade entries with CRUD operations
5. **About Page** - Project information and technology stack

### Core Features
- **Real-time grade calculation** with instant validation
- **Interactive data visualization** using Chart.js
- **PDF report generation** with html2pdf.js
- **Local storage persistence** for grade history
- **Responsive design** optimized for all device sizes
- **Dark/Light theme toggle** with system preference detection
- **Form validation** with comprehensive error handling

### UI/UX Components
- **Component library** based on Radix UI primitives
- **Consistent design system** with CSS custom properties
- **Accessibility-first approach** with proper ARIA labels
- **Loading states and error boundaries** for better UX

## Data Flow

1. **Grade Entry**: Student information and marks entered through validated forms
2. **Real-time Calculation**: Grades calculated instantly using predefined algorithms
3. **Local Storage**: Data persisted to browser localStorage for history tracking
4. **Visualization**: Charts generated from calculated data for better insights
5. **Export**: PDF reports generated from displayed results

### Grade Calculation Logic
- **Percentage calculation** based on total marks vs maximum possible marks
- **Letter grade assignment** using standard grading scale (A-F)
- **GPA calculation** with 4.0 scale mapping
- **Color-coded display** for visual grade differentiation

## External Dependencies

### Frontend Libraries
- **React ecosystem**: React 18+ with TypeScript support
- **Styling**: Tailwind CSS with PostCSS processing
- **UI Components**: Radix UI primitives via shadcn/ui
- **Charts**: Chart.js for data visualization
- **PDF Generation**: html2pdf.js for report exports
- **Icons**: Font Awesome for consistent iconography

### Backend Dependencies
- **Server Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Development Tools**: tsx for TypeScript execution, Vite for frontend bundling

### Development Tools
- **Build System**: Vite with React plugin
- **Type Checking**: TypeScript with strict configuration
- **Code Quality**: ESLint configuration (implied by project structure)
- **Development Server**: Hot reload with Vite middleware integration

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React app to static assets in `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Single Deployment**: Combined static serving and API in production

### Production Architecture
- **Static file serving** for frontend assets
- **Express API routes** for backend functionality  
- **Environment-based configuration** for database connections
- **Database migrations** handled through drizzle-kit

### Development Workflow
- **Hot reloading** for frontend changes via Vite
- **Server restart** for backend changes via tsx
- **Database schema changes** applied through `npm run db:push`
- **Type safety** maintained across client-server boundary through shared schemas

The application is designed to be easily deployable to platforms like Replit, Vercel, or traditional hosting providers with minimal configuration changes required for production deployment.