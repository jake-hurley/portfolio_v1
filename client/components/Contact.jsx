import React from 'react'

const Contact = () => {
    return (
        <div role='contact container' className='contact-container' id='contact'>
            <h1 className='contact'>Contact</h1>
            <h3 className='email'>Email: jshurley97@gmail.com</h3>
            <h3 className='phone'>Phone: 027 254 8604</h3>
            <a target='_blank' href='https://github.com/jake-hurley'><img src='/icons/github.svg' alt='github-icon' className='socials'/></a>
            <a target='_blank' href='https://www.linkedin.com/in/jake-hurley97/'><img src='/icons/linkedin.svg' alt='linkedin-icon' className='socials'/></a>
        </div>
    )
}

export default Contact