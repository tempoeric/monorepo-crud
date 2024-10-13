# Project Management App (Monorepo)

This is a monorepo project built with **React** (frontend) and **Express** (backend), using **Supabase** for PostgreSQL. The app supports project management with CRUD functionality and uses **Headless UI** and **Tailwind CSS** for the UI.

## Setup

### Prerequisites
- **Node.js** (v14+)
- **npm** (v7+)
- **Supabase** account

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Create `.env` in the backend folder with:

```
SUPABASE_URL=your-supabase-url
SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

### 3. Set Up Supabase

Create a projects table in Supabase with the following SQL:

```
CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(20) DEFAULT 'active',
  priority INT DEFAULT 1,
  owner_id UUID REFERENCES auth.users(id)
);
```

### 4. Run the Project

To start both the frontend and backend concurrently:

```
npm run start
```


API Endpoints
- GET /api/projects: Fetch all projects.
- POST /api/projects: Create a new project.
- GET /api/projects/:id: Get project by ID.
- PUT /api/projects/:id: Update project by ID.
- DELETE /api/projects/:id: Delete project by ID.
