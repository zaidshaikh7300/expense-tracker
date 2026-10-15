import pool from "../config/db.js";

export const addExpense = async (req, res) => {
  try {
    const {
      name,
      amount,
      date,
      description,
    } = req.body;

    if (!name || !amount || !date) {
      return res.status(400).json({
        message:
          "Name, amount and date are required",
      });
    }

    const [result] = await pool.query(
      `INSERT INTO expenses
      (user_id, name, amount, date, description)
      VALUES (?, ?, ?, ?, ?)`,
      [
        req.user.id,
        name,
        amount,
        date,
        description || null,
      ]
    );

    const [newExpense] = await pool.query(
      "SELECT * FROM expenses WHERE id = ?",
      [result.insertId]
    );

    res.status(201).json({
      message: "Expense added successfully",
      expense: newExpense[0],
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};

export const getExpenses = async (req, res) => {
  try {
    const [expenses] = await pool.query(
      `SELECT
        id,
        name,
        amount,
        date,
        description,
        created_at
       FROM expenses
       WHERE user_id = ?
       ORDER BY date DESC, id DESC`,
      [req.user.id]
    );

    res.json({
      expenses,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};

export const getExpenseById = async (req, res) => {
  try {
    const { id } = req.params;

    const [expenses] = await pool.query(
      `SELECT *
       FROM expenses
       WHERE id = ?
       AND user_id = ?`,
      [id, req.user.id]
    );

    if (expenses.length === 0) {
      return res.status(404).json({
        message: "Expense not found",
      });
    }

    res.json({
      expense: expenses[0],
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};

export const updateExpense = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      name,
      amount,
      date,
      description,
    } = req.body;

    if (!name || !amount || !date) {
      return res.status(400).json({
        message:
          "Name, amount and date are required",
      });
    }

    const [result] = await pool.query(
      `UPDATE expenses
       SET name = ?,
           amount = ?,
           date = ?,
           description = ?
       WHERE id = ?
       AND user_id = ?`,
      [
        name,
        amount,
        date,
        description || null,
        id,
        req.user.id,
      ]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Expense not found",
      });
    }

    const [updatedExpense] =
      await pool.query(
        "SELECT * FROM expenses WHERE id = ?",
        [id]
      );

    res.json({
      message: "Expense updated successfully",
      expense: updatedExpense[0],
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};

export const deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;

    const [result] = await pool.query(
      `DELETE FROM expenses
       WHERE id = ?
       AND user_id = ?`,
      [id, req.user.id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Expense not found",
      });
    }

    res.json({
      message: "Expense deleted successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};