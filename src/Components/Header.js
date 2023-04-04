import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='navBar'>
      <p><Link className='links' to='/'>Home</Link></p>
      <p><Link className='links' to='/students'>Students</Link></p>
      <p><Link className='links' to='/contactus'>Contact Us</Link></p>
    </div>
  )
}

export default Header