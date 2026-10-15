import express from "express";

import authMiddleware from "../middleware/authMiddleware.js";

import {
  addExpense,
  getExpenses,
  getExpenseById,
  updateExpense,
  deleteExpense,
} from "../controllers/expenseController.js";

const router = express.Router();

router.use(authMiddleware);

router.post("/", addExpense);

router.get("/", getExpenses);

router.get("/:id", getExpenseById);

router.put("/:id", updateExpense);

router.delete("/:id", deleteExpense);

export default router;