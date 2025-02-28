import React, { useEffect, useState } from "react";
import { getAllExpenses } from "../api/expenses";
import ExpenseCard from "../components/ExpenseCard";
import { Link } from "react-router-dom";

const Home = () => {
  const [expenses, setExpense] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getExpenses = async () => {
        console.log("Fetching expenses ")
      const data = await getAllExpenses();
      if (data) {
        setLoading(false)
        setExpense(data);
      }
    };
    getExpenses();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="mt-6 px-6">
        <div className="w-full flex justify-between">
            <h2 className="font-bold text-xl">All Expenses</h2>
            <Link to='/new-expense'><p className="px-4 py-2 rounded-md bg-zinc-800 text-white font-bold">Add New</p></Link>
        </div>
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {expenses && expenses.map((expense) => <ExpenseCard key={expense._id} expense={expense} />)}
    </div>
    </div>
  );
};

export default Home;
