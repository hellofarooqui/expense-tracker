
import React from 'react'
import { Link } from 'react-router-dom'

const ExpenseCard = ({expense}) => {
  return (
    <Link to={`edit/${expense.Id}`} state={{expense:expense}}>
      
    <div className='rounded-lg overflow-hidden border shadow-md flex w-full justify-between items-center p-4 '>
        <p className='inline text-zinc-500 w-[20%]'  >{expense.amount}</p>
        <p className='flex-1 text-center'>{expense.category}</p>
        <p className='inline text-zinc-500 w-[20%] text-end' >{expense.date}</p>
    </div>
    </Link>
  )
}

export default ExpenseCard