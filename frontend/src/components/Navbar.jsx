import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-screen bg-zinc-800 text-white'>
        <div className='w-full flex justify-between px-8 py-4'>
            <Link to="/"><h1 className='text-xl font-bold'>Expense Tracker</h1></Link>
            <div>
                <ul className='flex gap-4 items-center'>
                    <li><Link to='/'>Home</Link></li>
                    <li>Logout</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar