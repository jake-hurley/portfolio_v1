import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {

    aboutClick = () => {
        document.getElementById('about').scrollIntoView() 
    }

    workClick = () => {
        document.getElementById('work').scrollIntoView() 
    }

    contactClick = () => {
        document.getElementById('contact').scrollIntoView() 
    }

    componentDidMount () {
        window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        const navbar = document.getElementById('navbar')
        const fakenavbar = document.getElementById('fake-navbar')
        if (window.pageYOffset > 900) {
            navbar.classList.add('navbar-fixed')
            navbar.classList.add('navbar-reveal')

            
        }
    }

    render () {
        return (
            <div role='navbar' className='navbar' id='navbar' onScroll={this.handleScroll()}>
                <a className='navbar-about navbar-item' onClick={this.aboutClick}>About</a>
                <p className='navbar-slash navbar-item'> / </p>
                <a className='navbar-work navbar-item' onClick={this.workClick}>Work</a>
                <p className='navbar-slash navbar-item'> / </p>
                <a className='navbar-contact navbar-item' onClick={this.contactClick}>Contact</a>
            </div>
        )
    }

}

export default Navbar