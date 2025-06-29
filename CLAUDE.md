# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Architecture

This is a React + Vite + TypeScript project using:

- UI Components: Radix UI primitives with Tailwind CSS styling
- Routing: React Router
- Form Handling: React Hook Form with Zod validation
- State Management: TanStack Query
- Backend: Supabase
- Charts/Visualization: Recharts
- Date Handling: date-fns

## Development Guidelines

### Code Quality and Organization
- Keep components focused and small (< 50 lines)
- Use TypeScript strict mode for type safety
- Follow established src/ directory structure
- Implement responsive designs using Tailwind breakpoints
- Use console.log for development debugging

### Component Creation
- Create new files for each component under appropriate src/components/ subdirectory
- Use shadcn/ui components as primary UI building blocks
- Follow atomic design structure (atoms in ui/, molecules and organisms in components/)
- Maintain consistent file naming (PascalCase for components)

### State Management
- Use React Query for all server state and caching
- Implement global state with contexts (see AuthContext, ThemeContext)
- Use custom hooks for shared logic
- Leverage React Query's caching capabilities

### Error Handling
- Use toast notifications (Sonner/Toaster) for user feedback
- Implement proper error handling in async operations
- Log errors for debugging during development
- Provide user-friendly error messages via toast

### Performance
- Use React Router for code-splitting
- Implement proper lazy loading for routes
- Follow React hooks best practices
- Use React.memo for expensive renders

### Security
- Use Supabase auth flows
- Implement proper input validation with Zod
- Sanitize all displayed data
- Follow authentication best practices

### Documentation
- Keep component structure organized
- Document API integrations
- Follow consistent file organization
- Maintain clear component boundaries