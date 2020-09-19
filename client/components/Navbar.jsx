import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {

    componentDidMount () {
        window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        const navbar = document.getElementById('navbar')
        console.log(window.pageYOffset)
        if (window.pageYOffset > 1060) {
            navbar.classList.add('navbar-fixed')
            navbar.classList.add('navbar-reveal')

        }
    }

    render () {
        return (
            
            <div role='navbar' className='navbar' id='navbar' onScroll={this.handleScroll()}>
                <a href='#about' className='navbar-about navbar-item'>About</a>
                <p className='navbar-slash navbar-item'> / </p>
                <a href='#work' className='navbar-work navbar-item'>Work</a>
                <p className='navbar-slash navbar-item'> / </p>
                <a href='#contact' className='navbar-contact navbar-item'>Contact</a>
            </div>
        )
    }

}

export default Navbar