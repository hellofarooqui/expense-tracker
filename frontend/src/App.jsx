import { useState } from "react";
import axios from "axios";
import Login from "./pages/Login";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");



  if (!token) {
    return (<Login setToken={setToken}/>)
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to Expense Tracker</h1>
      <p>You’re logged in!</p>
      <button onClick={() => {
        setToken("");
        localStorage.removeItem("token");
      }}>Logout</button>
    </div>
  );
}

export default App;