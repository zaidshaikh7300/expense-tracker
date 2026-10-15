import "./home.css";

function Home({ onAddExpense, onExpenseList }) {
  return (
    <div className="home-container">
      <div className="home-box">
        <h1>Welcome to Expense Tracker</h1>

        <div className="home-links">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onAddExpense();
            }}
          >
            Add Expense
          </a>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onExpenseList();
            }}
          >
            Expense List
          </a>
        </div>

        <p>
          Track and manage your expenses effectively. Use the navigation links
          to add new expenses or view your expense history.
        </p>
      </div>
    </div>
  );
}

export default Home;