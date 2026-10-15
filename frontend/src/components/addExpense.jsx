import { useState } from "react";
import "./addExpense.css";
import API from "../api/api";

function AddExpense({ onAddExpense, onBack }) {
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const response = await API.post(
        "/expenses",
        {
          name: expenseName,
          amount: amount,
          date: date,
          description: description,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(response.data.message);

      onAddExpense(response.data.expense);

    } catch (error) {
      console.error("Add Expense Error:", error);

      alert(
        error.response?.data?.message ||
        "Failed to add expense"
      );
    }
  };

  return (
    <div className="expense-container">
      <div className="expense-box">

        <h1>Add New Expense</h1>

        <form onSubmit={handleSubmit}>

          <label>Expense Name:</label>

          <input
            type="text"
            value={expenseName}
            onChange={(e) =>
              setExpenseName(e.target.value)
            }
            required
          />

          <label>Amount:</label>

          <input
            type="number"
            step="0.01"
            value={amount}
            onChange={(e) =>
              setAmount(e.target.value)
            }
            required
          />

          <label>Date:</label>

          <input
            type="date"
            value={date}
            onChange={(e) =>
              setDate(e.target.value)
            }
            required
          />

          <label>Description:</label>

          <textarea
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
          />

          <button type="submit">
            Add Expense
          </button>

        </form>

      </div>
    </div>
  );
}

export default AddExpense;