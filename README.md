# 📋 Task Management System

<div align="center">

![Task Management System](https://img.shields.io/badge/Task%20Management-System-6C63FF?style=for-the-badge&logo=trello&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=for-the-badge&logo=next.js&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

**A modern, full-stack Task Management System built with Next.js & Node.js/Express.**  
Designed for teams and individuals who need clarity, collaboration, and control over their work.

[🎨 View Figma Design](https://www.figma.com/design/Szc4ZlQUXsoDPO4YqGXIHK/Task-Management-System--Community-?node-id=0-1&t=VByhwhK5OjffOzS4-1) · [🐛 Report Bug](../../issues) · [✨ Request Feature](../../issues)

</div>

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Design Reference](#-design-reference)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [API Reference](#-api-reference)
- [Design System](#-design-system)
- [Screens & Pages](#-screens--pages)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

The **Task Management System** is a production-ready web application that empowers teams to plan, track, and complete work efficiently. It combines an intuitive Kanban board, rich task management workflows, real-time collaboration, and insightful analytics — all within a clean, accessible interface.

This project is fully designed in Figma (Community file) and implemented using a modern JavaScript stack:

- **Frontend:** Next.js 14 (App Router) + React 18
- **Backend:** Node.js + Express REST API
- **Design Source:** [Figma Community File](https://www.figma.com/design/Szc4ZlQUXsoDPO4YqGXIHK/Task-Management-System--Community-?node-id=0-1&t=VByhwhK5OjffOzS4-1)

---

## 🎨 Design Reference

All UI components, screens, layouts, and design tokens are sourced from the official Figma Community file.

| Resource | Link |
|---|---|
| 🖼 Figma Design File | [Open in Figma](https://www.figma.com/design/Szc4ZlQUXsoDPO4YqGXIHK/Task-Management-System--Community-?node-id=0-1&t=VByhwhK5OjffOzS4-1) |
| 📐 Design System | Components, colors, and typography are documented in the [Design System](#-design-system) section |
| 🧩 Component Library | See the Figma file's component page for all reusable UI elements |

> **Note:** The design is fully open to the community. If you are contributing UI changes, please match your implementation to the Figma specifications exactly.

---

## ✨ Features

### 🗂 Task & Project Management
- **Create, edit, and delete tasks** with title, description, due date, priority, and assignees
- **Multi-project support** — organize tasks under separate projects/workspaces
- **Task priorities** — Urgent, High, Medium, Low with visual indicators
- **Task statuses** — To Do, In Progress, In Review, Done

### 📊 Views & Visualization
- **Kanban Board** — drag-and-drop tasks across status columns
- **List View** — sortable and filterable table of all tasks
- **Dashboard** — summary cards, progress stats, and activity feed
- **Calendar View** — visualize tasks and deadlines on a monthly calendar

### 👥 Team Collaboration
- **Team Member Management** — invite members, assign roles (Admin, Member, Viewer)
- **Task Assignment** — assign one or multiple team members to a task
- **Comments & Mentions** — discuss tasks inline with `@mention` support
- **Activity Log** — full audit trail of all changes to tasks and projects

### 🔔 Notifications
- In-app notification center
- Deadline reminders and assignment alerts
- Mention notifications

### 🔐 Authentication & Authorization
- Secure sign-up / sign-in with JWT authentication
- Role-based access control (RBAC) per project
- Protected routes on both frontend and backend

### ⚙️ Settings
- User profile management (name, avatar, email, password)
- Workspace/project settings
- Notification preferences

---

## 🛠 Tech Stack

### Frontend
| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | 14.x | React framework with App Router & SSR |
| [React](https://react.dev/) | 18.x | UI component library |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Static typing |
| [Tailwind CSS](https://tailwindcss.com/) | 3.x | Utility-first CSS framework |
| [shadcn/ui](https://ui.shadcn.com/) | Latest | Accessible, composable UI components |
| [Zustand](https://zustand-demo.pmnd.rs/) | 4.x | Lightweight state management |
| [React Query](https://tanstack.com/query) | 5.x | Server state, caching & sync |
| [dnd kit](https://dndkit.com/) | 6.x | Drag-and-drop for Kanban board |
| [Axios](https://axios-http.com/) | 1.x | HTTP client |
| [date-fns](https://date-fns.org/) | 3.x | Date utilities |
| [Lucide React](https://lucide.dev/) | Latest | Icon library |

### Backend
| Technology | Version | Purpose |
|---|---|---|
| [Node.js](https://nodejs.org/) | 20.x LTS | JavaScript runtime |
| [Express](https://expressjs.com/) | 4.x | Web application framework |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Static typing |
| [Prisma](https://www.prisma.io/) | 5.x | ORM & database toolkit |
| [PostgreSQL](https://www.postgresql.org/) | 15.x | Primary database |
| [JWT](https://jwt.io/) | — | Authentication tokens |
| [bcrypt](https://github.com/kelektiv/node.bcrypt.js) | — | Password hashing |
| [Zod](https://zod.dev/) | 3.x | Schema validation |
| [Multer](https://github.com/expressjs/multer) | — | File/avatar uploads |
| [Nodemailer](https://nodemailer.com/) | — | Email notifications |

### DevOps & Tools
| Technology | Purpose |
|---|---|
| Docker + Docker Compose | Containerized development & deployment |
| ESLint + Prettier | Code linting & formatting |
| Husky + lint-staged | Pre-commit hooks |
| Jest + React Testing Library | Unit & integration tests |
| GitHub Actions | CI/CD pipelines |

---

## 📁 Project Structure

```
task-management-system/
│
├── apps/
│   ├── web/                        # Next.js 14 Frontend
│   │   ├── app/
│   │   │   ├── (auth)/
│   │   │   │   ├── login/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── register/
│   │   │   │       └── page.tsx
│   │   │   ├── (dashboard)/
│   │   │   │   ├── layout.tsx
│   │   │   │   ├── dashboard/
│   │   │   │   │   └── page.tsx       # Overview & analytics
│   │   │   │   ├── projects/
│   │   │   │   │   ├── page.tsx       # Project list
│   │   │   │   │   └── [id]/
│   │   │   │   │       ├── board/
│   │   │   │   │       │   └── page.tsx   # Kanban board
│   │   │   │   │       ├── list/
│   │   │   │   │       │   └── page.tsx   # List view
│   │   │   │   │       └── calendar/
│   │   │   │   │           └── page.tsx   # Calendar view
│   │   │   │   ├── tasks/
│   │   │   │   │   ├── page.tsx       # All tasks
│   │   │   │   │   └── [id]/
│   │   │   │   │       └── page.tsx   # Task detail
│   │   │   │   ├── team/
│   │   │   │   │   └── page.tsx       # Team members
│   │   │   │   ├── notifications/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── settings/
│   │   │   │       └── page.tsx
│   │   │   ├── globals.css
│   │   │   └── layout.tsx
│   │   ├── components/
│   │   │   ├── ui/                    # shadcn/ui base components
│   │   │   ├── layout/
│   │   │   │   ├── Sidebar.tsx
│   │   │   │   ├── Header.tsx
│   │   │   │   └── NotificationPanel.tsx
│   │   │   ├── dashboard/
│   │   │   │   ├── StatsCard.tsx
│   │   │   │   ├── ActivityFeed.tsx
│   │   │   │   └── ProgressChart.tsx
│   │   │   ├── board/
│   │   │   │   ├── KanbanBoard.tsx
│   │   │   │   ├── KanbanColumn.tsx
│   │   │   │   └── TaskCard.tsx
│   │   │   ├── tasks/
│   │   │   │   ├── TaskForm.tsx
│   │   │   │   ├── TaskDetail.tsx
│   │   │   │   ├── TaskList.tsx
│   │   │   │   └── TaskFilters.tsx
│   │   │   └── team/
│   │   │       ├── MemberCard.tsx
│   │   │       └── InviteMember.tsx
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── store/
│   │   ├── types/
│   │   └── tailwind.config.ts
│   │
│   └── api/                        # Node.js + Express Backend
│       ├── src/
│       │   ├── controllers/
│       │   │   ├── auth.controller.ts
│       │   │   ├── task.controller.ts
│       │   │   ├── project.controller.ts
│       │   │   ├── user.controller.ts
│       │   │   └── notification.controller.ts
│       │   ├── middleware/
│       │   │   ├── auth.middleware.ts
│       │   │   ├── validate.middleware.ts
│       │   │   └── error.middleware.ts
│       │   ├── routes/
│       │   │   ├── auth.routes.ts
│       │   │   ├── task.routes.ts
│       │   │   ├── project.routes.ts
│       │   │   └── user.routes.ts
│       │   ├── services/
│       │   ├── utils/
│       │   ├── prisma/
│       │   │   └── schema.prisma
│       │   └── index.ts
│       ├── .env.example
│       └── package.json
│
├── packages/
│   └── shared/                     # Shared types & utilities
│       └── types/
│           └── index.ts
│
├── docker-compose.yml
├── .github/
│   └── workflows/
│       └── ci.yml
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure the following tools are installed on your machine:

- **Node.js** `>= 20.x` — [Download](https://nodejs.org/)
- **npm** `>= 10.x` or **pnpm** `>= 9.x`
- **PostgreSQL** `>= 15.x` (or use Docker)
- **Git**

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/task-management-system.git
cd task-management-system
```

### 2. Install Dependencies

```bash
# Install all workspace dependencies (root)
npm install

# Or with pnpm (recommended)
pnpm install
```

### 3. Configure Environment Variables

Copy the example environment files and fill in your values:

```bash
# Frontend
cp apps/web/.env.example apps/web/.env.local

# Backend
cp apps/api/.env.example apps/api/.env
```

See the [Environment Variables](#-environment-variables) section for all required values.

### 4. Set Up the Database

```bash
# Option A: Using Docker (recommended)
docker-compose up -d db

# Option B: Use your local PostgreSQL instance
# (make sure DATABASE_URL in apps/api/.env is correct)
```

Run Prisma migrations and seed initial data:

```bash
cd apps/api
npx prisma migrate dev --name init
npx prisma db seed
```

### 5. Run the Application

```bash
# From project root — starts both frontend and backend
npm run dev
```

Or run each app individually:

```bash
# Frontend (Next.js) → http://localhost:3000
cd apps/web && npm run dev

# Backend (Express) → http://localhost:5000
cd apps/api && npm run dev
```

### 6. (Optional) Full Docker Setup

```bash
# Build and start all services (frontend, backend, postgres)
docker-compose up --build
```

---

## 🔐 Environment Variables

### Frontend — `apps/web/.env.local`

```env
# API base URL
NEXT_PUBLIC_API_URL=http://localhost:5000/api

# Next Auth (if used)
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret_here
```

### Backend — `apps/api/.env`

```env
# Server
PORT=5000
NODE_ENV=development

# Database
DATABASE_URL=postgresql://postgres:password@localhost:5432/task_management_db

# Authentication
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRES_IN=7d

# Email (Nodemailer)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_email@example.com
SMTP_PASS=your_email_password

# File Uploads (optional — Cloudinary or local)
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

# Frontend URL (for CORS)
CLIENT_URL=http://localhost:3000
```

---

## 📡 API Reference

Base URL: `http://localhost:5000/api`

All protected routes require the `Authorization: Bearer <token>` header.

### Authentication

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/auth/register` | Register a new user |
| `POST` | `/auth/login` | Log in and receive JWT |
| `POST` | `/auth/logout` | Invalidate token |
| `GET` | `/auth/me` | Get current user info |
| `PATCH` | `/auth/password` | Change password |

### Projects

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/projects` | List all user projects |
| `POST` | `/projects` | Create a new project |
| `GET` | `/projects/:id` | Get project by ID |
| `PATCH` | `/projects/:id` | Update project details |
| `DELETE` | `/projects/:id` | Delete a project |
| `GET` | `/projects/:id/members` | List project members |
| `POST` | `/projects/:id/members` | Invite a member |

### Tasks

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/projects/:id/tasks` | List all tasks in a project |
| `POST` | `/projects/:id/tasks` | Create a task |
| `GET` | `/tasks/:id` | Get task by ID |
| `PATCH` | `/tasks/:id` | Update a task |
| `DELETE` | `/tasks/:id` | Delete a task |
| `PATCH` | `/tasks/:id/status` | Update task status |
| `PATCH` | `/tasks/:id/assign` | Assign/unassign members |
| `POST` | `/tasks/:id/comments` | Add a comment |
| `GET` | `/tasks/:id/comments` | List task comments |

### Users

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/users/profile` | Get current user profile |
| `PATCH` | `/users/profile` | Update profile |
| `POST` | `/users/avatar` | Upload avatar |

### Notifications

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/notifications` | Get all notifications |
| `PATCH` | `/notifications/:id/read` | Mark as read |
| `DELETE` | `/notifications/all` | Clear all notifications |

---

## 🎨 Design System

All visual design tokens, components, and patterns are derived from the [Figma Community File](https://www.figma.com/design/Szc4ZlQUXsoDPO4YqGXIHK/Task-Management-System--Community-?node-id=0-1&t=VByhwhK5OjffOzS4-1).

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--color-primary` | `#6C63FF` | Primary actions, active states, links |
| `--color-primary-hover` | `#574FD6` | Primary hover state |
| `--color-secondary` | `#F3F4F6` | Secondary backgrounds |
| `--color-success` | `#22C55E` | Success states, "Done" status |
| `--color-warning` | `#F59E0B` | Warnings, "In Review" status |
| `--color-danger` | `#EF4444` | Errors, delete actions, Urgent priority |
| `--color-info` | `#3B82F6` | Info states, "In Progress" status |
| `--color-text-primary` | `#111827` | Main body text |
| `--color-text-secondary` | `#6B7280` | Muted/helper text |
| `--color-border` | `#E5E7EB` | Dividers, input borders |
| `--color-bg` | `#FFFFFF` | Page background |
| `--color-surface` | `#F9FAFB` | Card / panel backgrounds |

### Priority Colors

| Priority | Color | Badge |
|---|---|---|
| 🔴 Urgent | `#EF4444` | Red |
| 🟠 High | `#F97316` | Orange |
| 🟡 Medium | `#EAB308` | Yellow |
| 🟢 Low | `#22C55E` | Green |

### Status Colors

| Status | Color |
|---|---|
| ⬜ To Do | `#9CA3AF` |
| 🔵 In Progress | `#3B82F6` |
| 🟡 In Review | `#F59E0B` |
| ✅ Done | `#22C55E` |

### Typography

| Style | Font | Size | Weight |
|---|---|---|---|
| Page Title | `Inter` | `24px` | `700` |
| Section Heading | `Inter` | `18px` | `600` |
| Card Title | `Inter` | `14px` | `600` |
| Body | `Inter` | `14px` | `400` |
| Caption / Label | `Inter` | `12px` | `400` |
| Button | `Inter` | `14px` | `500` |

### Spacing Scale

```css
--spacing-1: 4px;
--spacing-2: 8px;
--spacing-3: 12px;
--spacing-4: 16px;
--spacing-5: 20px;
--spacing-6: 24px;
--spacing-8: 32px;
--spacing-10: 40px;
--spacing-12: 48px;
--spacing-16: 64px;
```

### Border Radius

```css
--radius-sm:  4px;   /* Tags, badges */
--radius-md:  8px;   /* Cards, inputs */
--radius-lg:  12px;  /* Modals, dropdowns */
--radius-xl:  16px;  /* Panels */
--radius-full: 9999px; /* Avatar, pills */
```

---

## 🖥 Screens & Pages

The following screens are designed in the Figma file and implemented in the application:

| Screen | Route | Description |
|---|---|---|
| **Login** | `/login` | User authentication page |
| **Register** | `/register` | New account creation |
| **Dashboard** | `/dashboard` | Summary stats, recent tasks, activity feed |
| **Projects** | `/projects` | All projects with status overview |
| **Kanban Board** | `/projects/:id/board` | Drag-and-drop task board by status |
| **List View** | `/projects/:id/list` | Tabular task list with filters and sorting |
| **Calendar View** | `/projects/:id/calendar` | Monthly calendar with task deadlines |
| **Task Detail** | `/tasks/:id` | Full task detail, comments, activity log |
| **Team Members** | `/team` | Member management and roles |
| **Notifications** | `/notifications` | In-app notification center |
| **Settings** | `/settings` | Profile, workspace, and preferences |

---

## 🧪 Running Tests

```bash
# Run all tests
npm run test

# Run frontend tests only
cd apps/web && npm run test

# Run backend tests only
cd apps/api && npm run test

# Run tests in watch mode
npm run test:watch

# Coverage report
npm run test:coverage
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** your feature branch
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Implement** your changes — make sure your UI matches the [Figma design](https://www.figma.com/design/Szc4ZlQUXsoDPO4YqGXIHK/Task-Management-System--Community-?node-id=0-1&t=VByhwhK5OjffOzS4-1) exactly
4. **Test** your changes
   ```bash
   npm run test
   ```
5. **Lint** your code
   ```bash
   npm run lint
   ```
6. **Commit** with a conventional commit message
   ```bash
   git commit -m "feat: add drag-and-drop to kanban board"
   ```
7. **Push** to your branch
   ```bash
   git push origin feature/your-feature-name
   ```
8. Open a **Pull Request** against `main`

### Commit Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/):

| Type | Description |
|---|---|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation changes |
| `style` | Formatting (no code change) |
| `refactor` | Code refactoring |
| `test` | Adding/updating tests |
| `chore` | Build process or tooling changes |

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- UI Design from the [Figma Community](https://www.figma.com/community)
- Component system powered by [shadcn/ui](https://ui.shadcn.com/)
- Drag-and-drop via [dnd kit](https://dndkit.com/)
- Icons by [Lucide](https://lucide.dev/)

---

<div align="center">

Made with ❤️ — aligned with the [Figma Community Design](https://www.figma.com/design/Szc4ZlQUXsoDPO4YqGXIHK/Task-Management-System--Community-?node-id=0-1&t=VByhwhK5OjffOzS4-1)

</div>
