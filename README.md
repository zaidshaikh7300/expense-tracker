
# Expense Tracker

A full-stack application to manage personal expenses.

## Tech Stack

### Frontend
- React
- Vite
- Axios
- Bootstrap

### Backend
- Node.js
- Express.js
- MySQL
- JWT Authentication

## Project Structure

- `frontend/` - React frontend
- `backend/` - Express backend
- `backend/database.sql` - Database setup script

## Prerequisites

- Node.js and npm
- MySQL

## Setup

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
cd jforce
```

### 2. Setup backend

```bash
cd backend
npm install
```

Create a `.env` file using `.env.example`
and configure your local database credentials.

```bash
npm run
```

Run the appropriate start script listed in
`backend/package.json`.

### 3. Setup frontend

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Create the frontend `.env` file using `.env.example`.

## Database

Create the required MySQL database and import
`backend/database.sql`.

## Security

Never commit `.env` files, passwords, or secrets.
