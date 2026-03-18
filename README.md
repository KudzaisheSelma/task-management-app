# Task Management App

A beautifully designed productivity tool helping teams organize workflows with drag-and-drop boards, analytics, and collaborative features.

## Tech Stack
- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Auth**: NextAuth.js

## Getting Started
```bash
npm install
cp .env.example .env
# Add DATABASE_URL and NEXTAUTH_SECRET
npx prisma db push
npm run dev
```

## Features
- Kanban boards with drag-and-drop
- Task assignment and due dates
- Team collaboration and comments
- Analytics and progress tracking
- Dark/light mode
