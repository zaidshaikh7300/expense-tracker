import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import pool from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import expenseRoutes from "./routes/expenseRoutes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Expense Tracker API is running",
  });
});

app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/expenses",
  expenseRoutes
);

const startServer = async () => {
  try {
    const connection =
      await pool.getConnection();

    console.log(
      "MySQL database connected successfully"
    );

    connection.release();

    app.listen(PORT, () => {
      console.log(
        `Server running on http://localhost:${PORT}`
      );
    });
  } catch (error) {
    console.error(
      "Database connection failed:",
      error.message
    );
  }
};

startServer();