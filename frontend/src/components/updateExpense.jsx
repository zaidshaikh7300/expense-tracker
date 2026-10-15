// import "./updateExpense.css";

// function UpdateExpense() {
//   return (
//     <div className="update-expense-container">
//       <div className="update-expense-box">

//         <h1>Update Expense</h1>

//         <form>
//           <label>Expense Name:</label>
//           <input
//             type="text"
//             defaultValue="Lunch with Friends"
//           />

//           <label>Amount:</label>
//           <input
//             type="number"
//             defaultValue="15.00"
//           />

//           <label>Date:</label>
//           <input
//             type="date"
//             defaultValue="2024-06-09"
//           />

//           <label>Description:</label>
//           <textarea defaultValue="Lunch at the downtown café." />

//           <button type="submit">
//             Update Expense
//           </button>
//         </form>

//       </div>
//     </div>
//   );
// }

// export default UpdateExpense;

import { useState } from "react";
import "./updateExpense.css";

function UpdateExpense({
  expense,
  onUpdate,
  onBack,
}) {
  const [expenseName, setExpenseName] = useState(
    expense.name
  );

  const [amount, setAmount] = useState(
    expense.amount
  );

  const [date, setDate] = useState(
    expense.date
  );

  const [description, setDescription] = useState(
    expense.description
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedExpense = {
      id: expense.id,
      name: expenseName,
      amount: amount,
      date: date,
      description: description,
    };

    onUpdate(updatedExpense);
  };

  return (
    <div className="update-expense-container">
      <div className="update-expense-box">

        <h1>Update Expense</h1>

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
            Update Expense
          </button>

          <button
            type="button"
            className="update-back-button"
            onClick={onBack}
          >
            Back
          </button>
        </form>

      </div>
    </div>
  );
}

export default UpdateExpense;