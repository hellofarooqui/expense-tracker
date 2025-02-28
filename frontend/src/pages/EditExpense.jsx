import React, { useState } from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import { addExpense, deleteExpense, updateExpense } from '../api/expenses'

const EditExpense = () => {
  const location = useLocation()
  const expense = location.state.expense
  const navigate = useNavigate()
  const [newExpense,setNewExpense] = useState(expense)

  const handleCancel = () => {
    navigate("/")
  }

  const handleDelete = async () => {
    const response = await deleteExpense(newExpense._id)

    if(!response){
      console.log("Error in deleting")
      return
    }

    console.log("deleted")
    navigate("/")
  }

  const handleUpdateSubmit = async (e) => {
    e.preventDefault()
    console.log(newExpense)

    const response = await updateExpense(newExpense)

    if(!response){
      console.log("Error in updating")
      return
    }

    console.log("updated")
    navigate("/")

  }
  return (
    <div className='w-[1200px] max-w-[1200px] mx-auto py-6'>
      <div className='flex w-full justify-between items-center'>
      <h2 className='font-bold text-xl'>Update Expense</h2>
      <div className='flex gap-x-4 items-center'>
      <button onClick={handleCancel} className='bg-blue-900 text-white font-bold px-6 py-2 self-end rounded-md'>Cancel</button>
      <button onClick={handleDelete} className='bg-red-900 text-white font-bold px-6 py-2 self-end rounded-md'>Delete</button>
      </div>
      </div>
      <form onSubmit={handleUpdateSubmit} className='flex flex-col gap-y-4 mt-6'>
        <input defaultValue={newExpense.amount} onChange={(e)=>setNewExpense({...newExpense, amount:e.target.value})} className='p-2 rounded-md border-2 shadow-sm outline-none focus:border-zinc-400 bg-transparent' placeholder='Amount'/>
        <input defaultValue={newExpense.category} onChange={(e)=>setNewExpense({...newExpense, category:e.target.value})} className='p-2 rounded-md border-2 shadow-sm outline-none focus:border-zinc-400 bg-transparent' placeholder='Category'/>
        <input defaultValue={newExpense.date} onChange={(e)=>setNewExpense({...newExpense, date:e.target.value})} className='p-2 rounded-md border-2 shadow-sm outline-none focus:border-zinc-400 bg-transparent' placeholder='Date'/>
        <button type='submit' className='bg-zinc-900 text-white font-bold px-6 py-2 self-end rounded-md'>Save</button>
      </form>
    </div>
  )
}

export default EditExpense