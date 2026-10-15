# Expense Tracker

A full-stack web application to manage personal expenses, built with React, Node.js, Express.js, and MySQL.

## Features

- User registration and login
- Add and manage expenses
- View expense records
- Update and delete expenses
- JWT-based authentication
- MySQL database integration

## Tech Stack

**Frontend**
- React
- Vite
- Axios
- Bootstrap

**Backend**
- Node.js
- Express.js
- MySQL
- JWT Authentication
- bcryptjs

## Project Structure

```text
expense-tracker/
├── frontend/
│   ├── public/
│   ├── src/
│   ├── .env.example
│   └── package.json
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── .env.example
│   ├── database.sql
│   ├── package.json
│   └── server.js
├── .gitignore
└── README.md
```

## Prerequisites

- Node.js and npm
- MySQL Server
- Git

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/zaidshaikh7300/expense-tracker.git
cd expense-tracker
```

### 2. Set up the database

1. Start your MySQL server.
2. Create the database and import the SQL script from `backend/database.sql`.
3. Configure your database credentials in `backend/.env`.

### 3. Set up the backend

```bash
cd backend
npm install
```

Create a `.env` file using `.env.example` and configure your local database credentials and JWT secret.

Start the backend in development mode:

```bash
npm run dev
```

The backend runs on the port configured in your `.env` file.

### 4. Set up the frontend

Open a second terminal from the project root:

```bash
cd frontend
npm install
```

Create a `.env` file using `frontend/.env.example` and configure the API URL.

Start the frontend:

```bash
npm run dev
```

Open the local URL displayed by Vite in your terminal.

## Environment Variables

Configure the required environment variables in the frontend and backend `.env` files.

Never commit real credentials, database passwords, or JWT secrets to GitHub.

## License

No license has been specified yet.
