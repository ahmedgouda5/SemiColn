<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f0c29,50:302b63,100:24243e&height=220&section=header&text=Task%20Management%20System&fontSize=38&fontColor=ffffff&desc=React%20%7C%20Vite%20%7C%20Node.js%20%7C%20Express%20%7C%20Supabase&descSize=17&descAlignY=72&descFontColor=a78bfa" />
</p>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&pause=1000&color=A78BFA&center=true&vCenter=true&width=600&lines=Full-Stack+Task+Management+App;React+19+%2B+Vite+%2B+TypeScript;Node.js+%26+Express+REST+API;Supabase+%7C+Zustand+%7C+Shadcn+UI;Figma-Driven+Component+Design" alt="Typing SVG" />
</p>

<p align="center">
  A beautifully designed, production-ready task management system — built pixel-perfect from a Figma Community file.
</p>

<p align="center">
  <a href="https://www.figma.com/design/Szc4ZlQUXsoDPO4YqGXIHK/Task-Management-System--Community-?node-id=0-1&t=VByhwhK5OjffOzS4-1">
    <img src="https://img.shields.io/badge/Figma-Design%20Reference-F24E1E?style=for-the-badge&logo=figma&logoColor=white" />
  </a>
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Vite-7.x-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Supabase-Database-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind%20CSS-4.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" />
</p>

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

## 🌟 Overview

**Semicoln** is a full-stack Task Management System built with **React 19 + Vite** on the frontend and **Node.js + Express** on the backend. The UI is implemented pixel-perfect from the [Figma Community design file](https://www.figma.com/design/Szc4ZlQUXsoDPO4YqGXIHK/Task-Management-System--Community-?node-id=0-1&t=VByhwhK5OjffOzS4-1), featuring a Kanban board, list view, calendar, team management, and a rich dashboard — all within a clean, accessible, dark/light-mode-ready interface.

```
Frontend  →  React 19 + Vite + TypeScript + Tailwind CSS v4 + shadcn/ui
Backend   →  Node.js + Express + TypeScript
Database  →  Supabase (PostgreSQL)
Auth      →  Supabase Auth
State     →  Zustand
Forms     →  React Hook Form + Zod
Routing   →  React Router DOM v7
```

---

## 🎨 Design Reference

All UI screens, components, layout grids, color tokens, and typography are sourced from the official Figma Community file.

| Resource             | Link                                                                                                                                     |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 🖼 Figma Design File | [Open in Figma](https://www.figma.com/design/Szc4ZlQUXsoDPO4YqGXIHK/Task-Management-System--Community-?node-id=0-1&t=VByhwhK5OjffOzS4-1) |
| 🎨 Design Tokens     | Colors, spacing, radius, and typography documented in [Design System](#-design-system)                                                   |
| 🧩 Components        | All reusable UI elements are in the Figma file's component page                                                                          |

> **Contributor Note:** Any UI change must match the Figma specification exactly — use the Inspect panel for spacing, font sizes, and color tokens before submitting a PR.

## ✨ Features

### 🗂 Task & Project Management

- **Create, edit, delete tasks** with title, description, due date, priority, and assignees
- **Multi-project workspaces** — organize tasks under separate projects
- **Task priorities** — Urgent, High, Medium, Low with visual color indicators
- **Task statuses** — To Do · In Progress · In Review · Done
- **Rich task detail** — full description, attachments, due date picker, and metadata

### 📊 Multiple Views

- **Kanban Board** — drag-and-drop task cards across status columns
- **List View** — sortable, filterable tabular view of all tasks
- **Calendar View** — monthly calendar visualization of deadlines using `react-day-picker`
- **Dashboard** — summary stats cards, progress charts, and activity feed

### 👥 Team Collaboration

- **Team Management** — invite members, assign project roles (Admin · Member · Viewer)
- **Task Assignment** — assign one or multiple team members per task
- **Comments & Mentions** — inline discussion with `@mention` support
- **Activity Log** — full audit trail per task and project

### 🔔 Notifications

- In-app notification center with unread badge count
- Deadline reminder alerts
- Assignment and mention notifications via `react-toastify`

### 🎨 UI/UX

- **Dark / Light Mode** — system-aware theme switching via `next-themes`
- **Fully Responsive** — mobile, tablet, and desktop layouts
- **Accessible** — built on Radix UI primitives and shadcn/ui components
- **Smooth Animations** — powered by `tw-animate-css`

### 🔐 Authentication & Authorization

- Supabase Auth — email/password and OAuth providers
- Protected routes via React Router DOM v7 guards
- Role-based access control (RBAC) per project

## 🛠 Tech Stack

### Frontend

| Package                                                             | Version    | Purpose                                |
| ------------------------------------------------------------------- | ---------- | -------------------------------------- |
| [React](https://react.dev/)                                         | `^19.2.4`  | UI component library                   |
| [Vite](https://vitejs.dev/)                                         | `^7.3.1`   | Build tool & lightning-fast dev server |
| [TypeScript](https://www.typescriptlang.org/)                       | `~5.9.3`   | Static type safety                     |
| [React Router DOM](https://reactrouter.com/)                        | `^7.13.0`  | Client-side routing                    |
| [Tailwind CSS](https://tailwindcss.com/)                            | `^4.1.18`  | Utility-first CSS framework            |
| [shadcn/ui](https://ui.shadcn.com/)                                 | `^3.8.4`   | Accessible component system            |
| [Radix UI](https://www.radix-ui.com/)                               | `^1.4.3`   | Headless accessible UI primitives      |
| [class-variance-authority](https://cva.style/docs)                  | `^0.7.1`   | Component variant management           |
| [clsx](https://github.com/lukeed/clsx)                              | `^2.1.1`   | Conditional className utility          |
| [tailwind-merge](https://github.com/dcastil/tailwind-merge)         | `^3.4.0`   | Tailwind class conflict resolver       |
| [tw-animate-css](https://github.com/new-divos/tw-animate-css)       | `^1.4.0`   | Tailwind animation utilities           |
| [Zustand](https://zustand-demo.pmnd.rs/)                            | `^5.0.11`  | Lightweight global state management    |
| [React Hook Form](https://react-hook-form.com/)                     | `^7.71.1`  | Performant, flexible form handling     |
| [Zod](https://zod.dev/)                                             | `^4.3.6`   | TypeScript-first schema validation     |
| [@hookform/resolvers](https://github.com/react-hook-form/resolvers) | `^5.2.2`   | Zod ↔ React Hook Form adapter          |
| [Supabase JS](https://supabase.com/docs/reference/javascript)       | `^2.95.3`  | Database, auth, and storage client     |
| [Axios](https://axios-http.com/)                                    | `^1.13.5`  | HTTP client for the Express API        |
| [date-fns](https://date-fns.org/)                                   | `^4.1.0`   | Date formatting & manipulation         |
| [react-day-picker](https://react-day-picker.js.org/)                | `^9.13.2`  | Calendar / date picker component       |
| [Lucide React](https://lucide.dev/)                                 | `^0.563.0` | Clean, consistent icon set             |
| [react-icons](https://react-icons.github.io/react-icons/)           | `^5.5.0`   | Extended multi-library icon collection |
| [react-toastify](https://fkhadra.github.io/react-toastify/)         | `^11.0.5`  | Toast notification system              |
| [next-themes](https://github.com/pacocoursey/next-themes)           | `^0.4.6`   | Dark / light theme management          |

### Backend

| Package                                              | Version     | Purpose                             |
| ---------------------------------------------------- | ----------- | ----------------------------------- |
| [Node.js](https://nodejs.org/)                       | `^20.x LTS` | JavaScript runtime                  |
| [Express](https://expressjs.com/)                    | `^4.x`      | REST API framework                  |
| [TypeScript](https://www.typescriptlang.org/)        | `~5.x`      | Static type safety                  |
| [Supabase](https://supabase.com/)                    | —           | PostgreSQL database + Auth provider |
| [Zod](https://zod.dev/)                              | `^4.x`      | Request body validation             |
| [JWT](https://jwt.io/)                               | —           | Custom token handling               |
| [bcrypt](https://github.com/kelektiv/node.bcrypt.js) | —           | Password hashing                    |
| [CORS](https://github.com/expressjs/cors)            | —           | Cross-origin request handling       |
| [dotenv](https://github.com/motdotla/dotenv)         | —           | Environment variable loading        |
| [Nodemailer](https://nodemailer.com/)                | —           | Email notification delivery         |

### DevOps & Tooling

| Tool                | Purpose                            |
| ------------------- | ---------------------------------- |
| ESLint + Prettier   | Code linting and auto-formatting   |
| Husky + lint-staged | Pre-commit quality gates           |
| GitHub Actions      | CI/CD pipeline (lint, test, build) |
| Docker Compose      | Containerized local development    |

---

## 📁 Project Structure

```
semicoln/
│
├── src/                              # React + Vite Frontend
│   ├── assets/                       # Static assets (images, fonts, icons)
│   │
│   ├── components/
│   │   ├── ui/                       # shadcn/ui generated base components
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── avatar.tsx
│   │   │   ├── calendar.tsx
│   │   │   └── ...
│   │   ├── layout/
│   │   │   ├── Sidebar.tsx           # Main navigation sidebar
│   │   │   ├── Header.tsx            # Top bar with search & notifications
│   │   │   ├── ThemeToggle.tsx       # Dark / light mode switcher
│   │   │   └── NotificationPanel.tsx
│   │   ├── dashboard/
│   │   │   ├── StatsCard.tsx
│   │   │   ├── ProgressChart.tsx
│   │   │   └── ActivityFeed.tsx
│   │   ├── board/
│   │   │   ├── KanbanBoard.tsx       # Drag-and-drop board container
│   │   │   ├── KanbanColumn.tsx      # Status column
│   │   │   └── TaskCard.tsx          # Draggable task card
│   │   ├── tasks/
│   │   │   ├── TaskForm.tsx          # Create / edit task modal
│   │   │   ├── TaskDetail.tsx        # Task side panel
│   │   │   ├── TaskList.tsx          # Tabular list view
│   │   │   ├── TaskFilters.tsx       # Filter & sort controls
│   │   │   └── PriorityBadge.tsx     # Priority color chip
│   │   ├── team/
│   │   │   ├── MemberCard.tsx
│   │   │   └── InviteModal.tsx
│   │   └── common/
│   │       ├── PageHeader.tsx
│   │       ├── EmptyState.tsx
│   │       └── ConfirmDialog.tsx
│   │
│   ├── pages/
│   │   ├── auth/
│   │   │   ├── LoginPage.tsx
│   │   │   └── RegisterPage.tsx
│   │   ├── DashboardPage.tsx
│   │   ├── ProjectsPage.tsx
│   │   ├── BoardPage.tsx
│   │   ├── ListPage.tsx
│   │   ├── CalendarPage.tsx
│   │   ├── TaskDetailPage.tsx
│   │   ├── TeamPage.tsx
│   │   ├── NotificationsPage.tsx
│   │   └── SettingsPage.tsx
│   │
│   ├── routes/
│   │   ├── index.tsx                 # Root router (React Router v7)
│   │   ├── ProtectedRoute.tsx        # Auth guard wrapper
│   │   └── AppLayout.tsx             # Shared shell layout
│   │
│   ├── store/                        # Zustand stores
│   │   ├── authStore.ts
│   │   ├── taskStore.ts
│   │   ├── projectStore.ts
│   │   └── uiStore.ts
│   │
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   ├── useTasks.ts
│   │   ├── useProjects.ts
│   │   └── useNotifications.ts
│   │
│   ├── lib/
│   │   ├── supabase.ts               # Supabase client initialization
│   │   ├── axios.ts                  # Axios instance + interceptors
│   │   └── utils.ts                  # clsx + twMerge helpers
│   │
│   ├── types/
│   │   └── index.ts
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── server/                           # Node.js + Express Backend
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── auth.controller.ts
│   │   │   ├── task.controller.ts
│   │   │   ├── project.controller.ts
│   │   │   ├── user.controller.ts
│   │   │   └── notification.controller.ts
│   │   ├── middleware/
│   │   │   ├── auth.middleware.ts
│   │   │   ├── validate.middleware.ts
│   │   │   └── error.middleware.ts
│   │   ├── routes/
│   │   │   ├── auth.routes.ts
│   │   │   ├── task.routes.ts
│   │   │   ├── project.routes.ts
│   │   │   └── user.routes.ts
│   │   ├── services/
│   │   │   ├── supabase.service.ts
│   │   │   └── email.service.ts
│   │   ├── utils/
│   │   └── index.ts
│   ├── .env.example
│   └── package.json
│
├── public/
├── index.html
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── .eslintrc.json
├── docker-compose.yml
└── README.md
```

## 🚀 Getting Started

### Prerequisites

| Tool             | Version       | Download                              |
| ---------------- | ------------- | ------------------------------------- |
| Node.js          | `>= 20.x LTS` | [nodejs.org](https://nodejs.org/)     |
| npm              | `>= 10.x`     | Bundled with Node.js                  |
| Git              | Latest        | [git-scm.com](https://git-scm.com/)   |
| Supabase Account | —             | [supabase.com](https://supabase.com/) |

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/semicoln.git
cd semicoln
```

### 2. Install Frontend Dependencies

```bash
npm install
```

### 3. Install Backend Dependencies

```bash
cd server
npm install
cd ..
```

### 4. Configure Environment Variables

```bash
# Frontend
cp .env.example .env.local

# Backend
cp server/.env.example server/.env
```

Fill in your values — see [Environment Variables](#-environment-variables).

### 5. Set Up Supabase

1. Create a new project at [supabase.com](https://supabase.com/)
2. Navigate to **Settings → API** and copy your `Project URL` and `anon public` key
3. Run the SQL schema found in `server/supabase/schema.sql` inside the Supabase SQL Editor

### 6. Start the Development Servers

```bash
# Frontend → http://localhost:5173
npm run dev

# Backend → http://localhost:5000
cd server && npm run dev
```

Or start both from the root with:

```bash
npm run dev:all
```

### 7. Build for Production

```bash
# Frontend
npm run build
npm run preview

# Backend
cd server && npm run build && npm start
```

---

## 🔐 Environment Variables

### Frontend — `.env.local`

```env
# Supabase
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Express API
VITE_API_URL=http://localhost:5000/api
```

### Backend — `server/.env`

```env
# Server
PORT=5000
NODE_ENV=development

# Supabase (server-side only — never expose on frontend)
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# JWT
JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRES_IN=7d

# CORS
CLIENT_URL=http://localhost:5173

# Email (Nodemailer)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_email@example.com
SMTP_PASS=your_email_password
SMTP_FROM="Task Manager <noreply@example.com>"
```

> ⚠️ Never commit `.env` or `.env.local` files. Both are included in `.gitignore`.

## 📡 API Reference

**Base URL:** `http://localhost:5000/api`

All protected endpoints require:

```
Authorization: Bearer <jwt_token>
```

### 🔑 Authentication

| Method  | Endpoint         | Auth | Description        |
| ------- | ---------------- | ---- | ------------------ |
| `POST`  | `/auth/register` | ❌   | Register new user  |
| `POST`  | `/auth/login`    | ❌   | Login, receive JWT |
| `POST`  | `/auth/logout`   | ✅   | Invalidate session |
| `GET`   | `/auth/me`       | ✅   | Get current user   |
| `PATCH` | `/auth/password` | ✅   | Update password    |

### 📁 Projects

| Method   | Endpoint                     | Auth | Description          |
| -------- | ---------------------------- | ---- | -------------------- |
| `GET`    | `/projects`                  | ✅   | List user's projects |
| `POST`   | `/projects`                  | ✅   | Create project       |
| `GET`    | `/projects/:id`              | ✅   | Get project detail   |
| `PATCH`  | `/projects/:id`              | ✅   | Update project       |
| `DELETE` | `/projects/:id`              | ✅   | Delete project       |
| `GET`    | `/projects/:id/members`      | ✅   | List members         |
| `POST`   | `/projects/:id/members`      | ✅   | Invite member        |
| `DELETE` | `/projects/:id/members/:uid` | ✅   | Remove member        |

### ✅ Tasks

| Method   | Endpoint              | Auth | Description               |
| -------- | --------------------- | ---- | ------------------------- |
| `GET`    | `/projects/:id/tasks` | ✅   | List project tasks        |
| `POST`   | `/projects/:id/tasks` | ✅   | Create task               |
| `GET`    | `/tasks/:id`          | ✅   | Get task detail           |
| `PATCH`  | `/tasks/:id`          | ✅   | Update task               |
| `DELETE` | `/tasks/:id`          | ✅   | Delete task               |
| `PATCH`  | `/tasks/:id/status`   | ✅   | Change task status        |
| `PATCH`  | `/tasks/:id/assign`   | ✅   | Assign / unassign members |
| `GET`    | `/tasks/:id/comments` | ✅   | List comments             |
| `POST`   | `/tasks/:id/comments` | ✅   | Add comment               |

### 👤 Users

| Method  | Endpoint         | Auth | Description    |
| ------- | ---------------- | ---- | -------------- |
| `GET`   | `/users/profile` | ✅   | Get profile    |
| `PATCH` | `/users/profile` | ✅   | Update profile |
| `POST`  | `/users/avatar`  | ✅   | Upload avatar  |

### 🔔 Notifications

| Method   | Endpoint                  | Auth | Description           |
| -------- | ------------------------- | ---- | --------------------- |
| `GET`    | `/notifications`          | ✅   | Get all notifications |
| `PATCH`  | `/notifications/:id/read` | ✅   | Mark as read          |
| `PATCH`  | `/notifications/read-all` | ✅   | Mark all as read      |
| `DELETE` | `/notifications/clear`    | ✅   | Clear all             |

## 🎨 Design System

All tokens are extracted from the [Figma Community File](https://www.figma.com/design/Szc4ZlQUXsoDPO4YqGXIHK/Task-Management-System--Community-?node-id=0-1&t=VByhwhK5OjffOzS4-1).

### Color Palette

| Token                    | Hex       | Usage                             |
| ------------------------ | --------- | --------------------------------- |
| `--color-primary`        | `#7C3AED` | Primary actions, active nav, CTAs |
| `--color-primary-hover`  | `#6D28D9` | Hover on primary elements         |
| `--color-accent`         | `#A78BFA` | Highlights, focus rings           |
| `--color-success`        | `#22C55E` | Done status, success states       |
| `--color-warning`        | `#F59E0B` | In Review status, warnings        |
| `--color-danger`         | `#EF4444` | Urgent priority, delete actions   |
| `--color-info`           | `#3B82F6` | In Progress status, info states   |
| `--color-text-primary`   | `#0F172A` | Main body text (light mode)       |
| `--color-text-secondary` | `#64748B` | Muted / helper text               |
| `--color-border`         | `#E2E8F0` | Input borders, dividers           |
| `--color-bg`             | `#FFFFFF` | Page background (light)           |
| `--color-bg-dark`        | `#0F0C29` | Page background (dark)            |
| `--color-surface`        | `#F8FAFC` | Card surface (light)              |
| `--color-surface-dark`   | `#1E1B4B` | Card surface (dark)               |

### Task Priority

| Priority  | Badge Color | Hex       |
| --------- | ----------- | --------- |
| 🔴 Urgent | Red         | `#EF4444` |
| 🟠 High   | Orange      | `#F97316` |
| 🟡 Medium | Yellow      | `#EAB308` |
| 🟢 Low    | Green       | `#22C55E` |

### Task Status

| Status         | Badge Color | Hex       |
| -------------- | ----------- | --------- |
| ⬜ To Do       | Slate       | `#94A3B8` |
| 🔵 In Progress | Blue        | `#3B82F6` |
| 🟡 In Review   | Amber       | `#F59E0B` |
| ✅ Done        | Green       | `#22C55E` |

### Typography

| Style           | Size   | Weight | Usage              |
| --------------- | ------ | ------ | ------------------ |
| Page Title      | `24px` | `700`  | Screen headings    |
| Section Heading | `18px` | `600`  | Section titles     |
| Card Title      | `14px` | `600`  | Task / card names  |
| Body            | `14px` | `400`  | General content    |
| Caption         | `12px` | `400`  | Labels, timestamps |
| Button          | `14px` | `500`  | CTA labels         |

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
--radius-sm: 4px; /* Tags, badges */
--radius-md: 8px; /* Inputs, buttons, cards */
--radius-lg: 12px; /* Modals, dropdowns */
--radius-xl: 16px; /* Side panels */
--radius-full: 9999px; /* Avatars, pill chips */
```

## 🖥 Screens & Pages

| Screen            | Route                    | Description                           |
| ----------------- | ------------------------ | ------------------------------------- |
| **Login**         | `/login`                 | User sign-in with Supabase Auth       |
| **Register**      | `/register`              | New account creation                  |
| **Dashboard**     | `/dashboard`             | Summary stats, charts, activity feed  |
| **Projects**      | `/projects`              | All workspaces with progress overview |
| **Kanban Board**  | `/projects/:id/board`    | Drag-and-drop status columns          |
| **List View**     | `/projects/:id/list`     | Filterable & sortable task table      |
| **Calendar**      | `/projects/:id/calendar` | Monthly deadline visualization        |
| **Task Detail**   | `/tasks/:id`             | Full task info, comments, activity    |
| **Team**          | `/team`                  | Members, roles, invitations           |
| **Notifications** | `/notifications`         | Notification center                   |
| **Settings**      | `/settings`              | Profile, workspace, preferences       |

## 🧪 Running Tests

```bash
# Run all tests
npm run test

# Watch mode
npm run test:watch

# Coverage report
npm run test:coverage
```

## 🤝 Contributing

Contributions are welcome and appreciated! Please follow these steps:

1. **Fork** this repository
2. **Create** your feature branch
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Match the Figma design** — use the Inspect panel for exact spacing, sizes, and color values
4. **Lint** before committing
   ```bash
   npm run lint
   ```
5. **Commit** using Conventional Commits
   ```bash
   git commit -m "feat: add drag-and-drop to kanban board"
   ```
6. **Push** your branch
   ```bash
   git push origin feature/your-feature-name
   ```
7. Open a **Pull Request** against `main`

### Commit Types

| Type       | Description                             |
| ---------- | --------------------------------------- |
| `feat`     | New feature                             |
| `fix`      | Bug fix                                 |
| `docs`     | Documentation only                      |
| `style`    | Formatting, no logic change             |
| `refactor` | Code restructure without feature change |
| `test`     | Adding or updating tests                |
| `chore`    | Build process or config changes         |

## 🙏 Acknowledgments

- 🎨 UI Design from the [Figma Community](https://www.figma.com/community)
- ⚡ Powered by [Vite](https://vitejs.dev/) — the fastest frontend tooling
- 🧩 Component system by [shadcn/ui](https://ui.shadcn.com/)
- 🗄 Backend database & auth by [Supabase](https://supabase.com/)
- 🎯 Icons by [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)

---

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f0c29,50:302b63,100:24243e&height=120&section=footer&fontColor=ffffff" />
</p>
