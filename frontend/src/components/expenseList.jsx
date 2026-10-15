import { useEffect, useState } from "react";
import "./expenseList.css";
import API from "../api/api";

function ExpenseList({
  onUpdate,
  onBack,
}) {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchExpenses = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await API.get("/expenses", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setExpenses(response.data.expenses);
    } catch (error) {
      console.error("Fetch Expenses Error:", error);

      alert(
        error.response?.data?.message ||
        "Failed to load expenses"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await API.delete(`/expenses/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Expense deleted successfully");

      fetchExpenses();
    } catch (error) {
      console.error("Delete Expense Error:", error);

      alert(
        error.response?.data?.message ||
        "Failed to delete expense"
      );
    }
  };

  if (loading) {
    return (
      <div className="expense-list-container">
        <div className="expense-list-box">
          <h1>Expense List</h1>
          <p className="no-expenses">
            Loading expenses...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="expense-list-container">
      <div className="expense-list-box">

        <h1>Expense List</h1>

        {expenses.length === 0 ? (
          <p className="no-expenses">
            No expenses found.
          </p>
        ) : (
          expenses.map((expense) => (
            <div
              className="expense-item"
              key={expense.id}
            >
              <h2>{expense.name}</h2>

              <p>
                <strong>Amount:</strong> $
                {expense.amount}
              </p>

              <p>
                <strong>Date:</strong> {expense.date}
              </p>

              <p>
                <strong>Description:</strong>{" "}
                {expense.description}
              </p>

              <div className="expense-buttons">
                <button
                  className="update-button"
                  onClick={() => onUpdate(expense)}
                >
                  Update
                </button>

                <button
                  className="delete-button"
                  onClick={() =>
                    handleDelete(expense.id)
                  }
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}

        <button
          className="back-home-button"
          onClick={onBack}
        >
          Back to Home
        </button>

      </div>
    </div>
  );
}

export default ExpenseList;