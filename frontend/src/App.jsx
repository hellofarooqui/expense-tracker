import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import NewExpense from './pages/NewExpense'
import Login from './pages/Login'
import Signup from './pages/Signup'
import EditExpense from './pages/EditExpense'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout/>}>
          <Route path='/' element={<Home/>} />
          <Route path="/new-expense" element={<NewExpense/>}/>
          <Route path="/edit/:id" element={<EditExpense/>}/>
        </Route>

        <Route path='/login' element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App