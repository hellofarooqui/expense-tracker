import { Banknote, CalendarDays } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const ExpenseCard = ({expense}) => {
  return (
    <Link to={`edit/${expense.Id}`} state={{expense:expense}}>
      
    <div className='rounded-lg overflow-hidden border shadow-md'>
        <p className='w-fulll bg-zinc-800 text-white px-6 py-2'>{expense.category}</p>
        <p className='px-4 py-2 flex items-center gap-2 font-semibold text-xl'><Banknote className='inline text-zinc-500' /> {expense.amount}</p>
        <p className='px-4 py-2 flex items-center gap-2 font-semibold text-zinc-600'><CalendarDays className='inline text-zinc-500' />{expense.date}</p>
    </div>
    </Link>
  )
}

export default ExpenseCard