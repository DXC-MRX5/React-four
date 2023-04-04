import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Students from './Students'
import Contact from './Contact'

const Routing = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/students' element={<Students/>}/>
            <Route path='/contactus' element={<Contact/>}/>
        </Routes>
    </>
  )
}

export default Routing