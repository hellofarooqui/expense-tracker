import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { addExpense } from '../api/expenses'

const defaultExpense = {
  amount : "",
  category : "",
  date : ""
}
const NewExpense = () => {
  const navigate = useNavigate()
  const [newExpense,setNewExpense] = useState(defaultExpense)

  const handleAddSubmit = async (e) => {
    e.preventDefault()
    console.log(newExpense)

    const response = await addExpense(newExpense)

    if(!response){
      console.log("Error in adding")
      return
    }

    console.log("added")
    navigate("/")

  }
  return (
    <div className='w-[1200px] max-w-[1200px] mx-auto py-6'>
      <h2 className='font-bold text-xl'>Add New Expense</h2>
      <form onSubmit={handleAddSubmit} className='flex flex-col gap-y-4 mt-6'>
        <input defaultValue={newExpense.amount} onChange={(e)=>setNewExpense({...newExpense, amount:e.target.value})} className='p-2 rounded-md border-2 shadow-sm outline-none focus:border-zinc-400 bg-transparent' placeholder='Amount'/>
        <input defaultValue={newExpense.category} onChange={(e)=>setNewExpense({...newExpense, category:e.target.value})} className='p-2 rounded-md border-2 shadow-sm outline-none focus:border-zinc-400 bg-transparent' placeholder='Category'/>
        <input defaultValue={newExpense.date} onChange={(e)=>setNewExpense({...newExpense, date:e.target.value})} className='p-2 rounded-md border-2 shadow-sm outline-none focus:border-zinc-400 bg-transparent' placeholder='Date'/>
        <button type='submit' className='bg-zinc-900 text-white font-bold px-6 py-2 self-end rounded-md'>Save</button>
      </form>
    </div>
  )
}

export default NewExpense