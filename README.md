# Semicoln 🚀

Semicoln is a Project Management Web Application inspired by Jira, built to help teams manage workspaces, boards, and tasks in an organized and scalable way.

> ⚠️ The project is still under development and new features are being added continuously.

---

## ✨ Features

- Manage workspaces, boards, and tasks
- Track task status and workflow
- Assign tasks to developers (in progress)
- Authentication system (JWT-based)
- Responsive design (mobile, tablet, desktop)
- Reusable and scalable UI components

---

## 🛠️ Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Zustand
- React Hook Form + Zod
- React Router
- Axios
- Tailwind CSS
- shadcn/ui

### Backend

- Node.js
- Express
- TypeScript
- MongoDB + Mongoose
- JWT
- bcrypt

---

## 📂 Project Structure

```
src/
├── features/
│   ├── auth/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services.ts
│   │   ├── types.ts
│   │   └── index.ts
│   │
│   └── tasks/
│       ├── components/
│       ├── hooks/
│       ├── api.ts
│       ├── types.ts
│       └── index.ts
│
├── shared/
│   ├── components/
│   ├── hooks/
│   ├── ui/
│   └── utils/
│
├── pages/
├── store/
├── assets/
└── styles/
```

---

## 🏗️ Architecture

The project follows a **feature-based architecture** where each feature is isolated with its own components, hooks, services, and types.  
This makes the application easier to scale, maintain, and extend.

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ahmedgouda5/SemiColn.git
cd SemiColn
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

---

## 📝 License

This project is licensed under the MIT License.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

## 👨‍💻 Author

**Ahmed Gouda**  
GitHub: [@ahmedgouda5](https://github.com/ahmedgouda5)
