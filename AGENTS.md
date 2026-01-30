## Project Summary
A modern NGO platform designed to showcase campaigns, facilitate secure donations, and manage volunteer registrations. The platform prioritizes transparency through impact reports and emotional engagement with professional aesthetics.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Database**: Supabase (PostgreSQL)
- **Payments**: Stripe
- **Forms**: React Hook Form + Zod
- **Components**: Shadcn UI (Radix UI)

## Architecture
- `src/app`: Page routes and layouts
- `src/components`: Reusable UI components
  - `ui/`: Base components (shadcn)
  - `home/`: NGO-specific sections
- `src/lib`: Utilities, hooks, and types
- `src/visual-edits`: Orchids Visual Edits integration

## User Preferences
- Responsive and user-friendly design
- Emotional yet professional aesthetic
- Secure donation options
- Transparent impact reports
- Clear CTAs (Donate, Volunteer, Support)

## Project Guidelines
- Follow mobile-first design patterns
- Use meaningful animations with Framer Motion
- Ensure high accessibility (ARIA labels, keyboard navigation)
- No unnecessary comments in code
- Always run lint/typecheck after significant changes

## Common Patterns
- Form validation using Zod schemas
- Data fetching with Supabase client
- Stripe integration via PaymentsAgent
