import React, { useEffect, useState } from "react";
import { getAllExpenses } from "../api/expenses";
import ExpenseCard from "../components/ExpenseCard";
import { Link } from "react-router-dom";
import { Banknote, CalendarDays } from 'lucide-react'

const Home = () => {
  const [expenses, setExpense] = useState([]);
  const [total,setTotal] = useState(0)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getExpenses = async () => {
        console.log("Fetching expenses ")
      const data = await getAllExpenses();
      if (data) {
        setLoading(false)
        setExpense(data);

        setTotal(data.reduce((total,expense) => total+expense.amount, 0))
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
        <div className="flex justify-between p-4 text-2xl border-2 rounded-lg mt-6">
          <h2 className="font-bold">Total</h2>
          <p>{total}</p>
        </div>
    <div className="mt-4 grid grid-cols-1 gap-4">
    <div className='rounded-lg overflow-hidden bg-zinc-900 text-white flex w-full justify-between items-center p-4 '>
        <p > Amount</p>
        <p >Category</p>
        <p >Date</p>
    </div>
      {expenses && expenses.map((expense) => <ExpenseCard key={expense._id} expense={expense} />)}
    </div>
    </div>
  );
};

export default Home;
