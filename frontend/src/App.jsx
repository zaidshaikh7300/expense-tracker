// import "./app.css";
// import { useState } from "react";
// import Login from "./components/login";
// import Register from "./components/register";
// import Home from "./components/home";
// import AddExpense from "./components/addExpense";
// import ExpenseList from "./components/expenseList";
// import UpdateExpense from "./components/updateExpense";

// function App() {
//   const [page, setPage] = useState("login");

//   const [selectedExpense, setSelectedExpense] =
//     useState(null);

//   return (
//     <>
//       {page === "login" && (
//         <Login
//           onRegister={() =>
//             setPage("register")
//           }
//           onLogin={() =>
//             setPage("home")
//           }
//         />
//       )}

//       {page === "register" && (
//         <Register
//           onLogin={() =>
//             setPage("login")
//           }
//         />
//       )}

//       {page === "home" && (
//         <Home
//           onAddExpense={() =>
//             setPage("addExpense")
//           }
//           onExpenseList={() =>
//             setPage("expenseList")
//           }
//         />
//       )}

//       {page === "addExpense" && (
//         <AddExpense
//           onAddExpense={() =>
//             setPage("expenseList")
//           }
//           onBack={() =>
//             setPage("home")
//           }
//         />
//       )}

//       {page === "expenseList" && (
//         <ExpenseList
//           onUpdate={(expense) => {
//             setSelectedExpense(expense);
//             setPage("updateExpense");
//           }}
//           onBack={() =>
//             setPage("home")
//           }
//         />
//       )}

//       {page === "updateExpense" &&
//         selectedExpense && (
//           <UpdateExpense
//             expense={selectedExpense}
//             onUpdate={() =>
//               setPage("expenseList")
//             }
//             onBack={() =>
//               setPage("expenseList")
//             }
//           />
//         )}
//     </>
//   );
// }

// export default App;




// import "./app.css";
// import { useEffect, useState } from "react";

// import Login from "./components/login";
// import Register from "./components/register";
// import Home from "./components/home";
// import AddExpense from "./components/addExpense";
// import ExpenseList from "./components/expenseList";
// import UpdateExpense from "./components/updateExpense";

// function App() {
//   const [page, setPage] = useState("login");

//   const [selectedExpense, setSelectedExpense] = useState(null);

//   // First page
//   useEffect(() => {
//     window.history.replaceState(
//       { page: "login" },
//       "",
//       "/"
//     );

//     const handleBack = (event) => {
//       if (event.state?.page) {
//         setPage(event.state.page);
//       }
//     };

//     window.addEventListener("popstate", handleBack);

//     return () => {
//       window.removeEventListener("popstate", handleBack);
//     };
//   }, []);

//   // Page change + browser history
//   const navigate = (newPage) => {
//     window.history.pushState(
//       { page: newPage },
//       "",
//       `/${newPage}`
//     );

//     setPage(newPage);
//   };

//   return (
//     <>
//       {page === "login" && (
//         <Login
//           onRegister={() => navigate("register")}
//           onLogin={() => navigate("home")}
//         />
//       )}

//       {page === "register" && (
//         <Register
//           onLogin={() => navigate("login")}
//         />
//       )}

//       {page === "home" && (
//         <Home
//           onAddExpense={() =>
//             navigate("addExpense")
//           }
//           onExpenseList={() =>
//             navigate("expenseList")
//           }
//         />
//       )}

//       {page === "addExpense" && (
//         <AddExpense
//           onAddExpense={() =>
//             navigate("expenseList")
//           }
//           onBack={() =>
//             navigate("home")
//           }
//         />
//       )}

//       {page === "expenseList" && (
//         <ExpenseList
//           onUpdate={(expense) => {
//             setSelectedExpense(expense);
//             navigate("updateExpense");
//           }}
//           onBack={() =>
//             navigate("home")
//           }
//         />
//       )}

//       {page === "updateExpense" &&
//         selectedExpense && (
//           <UpdateExpense
//             expense={selectedExpense}
//             onUpdate={() =>
//               navigate("expenseList")
//             }
//             onBack={() =>
//               navigate("expenseList")
//             }
//           />
//         )}
//     </>
//   );
// }

// export default App;


import "./app.css";
import { useEffect, useState } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Login from "./components/login";
import Register from "./components/register";
import Home from "./components/home";
import AddExpense from "./components/addExpense";
import ExpenseList from "./components/expenseList";
import UpdateExpense from "./components/updateExpense";

function App() {
  const [page, setPage] = useState("login");
  const [selectedExpense, setSelectedExpense] = useState(null);

  useEffect(() => {
    window.history.replaceState(
      { page: "login" },
      "",
      "/"
    );

    const handleBack = (event) => {
      if (event.state?.page) {
        setPage(event.state.page);
      }
    };

    window.addEventListener("popstate", handleBack);

    return () => {
      window.removeEventListener("popstate", handleBack);
    };
  }, []);

  const navigate = (newPage) => {
    window.history.pushState(
      { page: newPage },
      "",
      `/${newPage}`
    );

    setPage(newPage);
  };

  return (
    <>
      {page === "login" && (
        <Login
          onRegister={() => navigate("register")}
          onLogin={() => {
            navigate("home");
          }}
        />
      )}

      {page === "register" && (
        <Register
          onLogin={() => navigate("login")}
        />
      )}

      {page === "home" && (
        <Home
          onAddExpense={() =>
            navigate("addExpense")
          }
          onExpenseList={() =>
            navigate("expenseList")
          }
        />
      )}

      {page === "addExpense" && (
        <AddExpense
          onAddExpense={() =>
            navigate("expenseList")
          }
          onBack={() =>
            navigate("home")
          }
        />
      )}

      {page === "expenseList" && (
        <ExpenseList
          onUpdate={(expense) => {
            setSelectedExpense(expense);
            navigate("updateExpense");
          }}
          onBack={() =>
            navigate("home")
          }
        />
      )}

      {page === "updateExpense" &&
        selectedExpense && (
          <UpdateExpense
            expense={selectedExpense}
            onUpdate={() =>
              navigate("expenseList")
            }
            onBack={() =>
              navigate("expenseList")
            }
          />
        )}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
    </>
  );
}

export default App;