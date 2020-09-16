import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {
    return (
        <div role='navbar' className='navbar'>
            <a href='#about' className='navbar-about navbar-item'>About</a>
            <p className='navbar-slash navbar-item'> / </p>
            <a href='#work' className='navbar-work navbar-item'>Work</a>
            <p className='navbar-slash navbar-item'> / </p>
            <a href='#contact' className='navbar-contact navbar-item'>Contact</a>
        </div>
    )

}

export default Navbar