import React from 'react'

function componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
}

const About = () => {

    function reachOutLink () {
        document.getElementById('contact').scrollIntoView() 
    }

    return (
        <>
            <h1 className='about-me' id='about'>About Me</h1>
            <div role='about container' className='about-container' >
                <p className='nice-to-meet-you'>
                    Nice to meet you!
                </p>
                <p className='about-statement'>
                    I am a 23 year old Junior <span className='span'>Full Stack Developer</span> living on Aucklands North Shore. 
                    I love building creative technology with the personal goal of <span className='span'>always improving</span> the quality of my code as well as <span className='span'>creating greater User Experiences</span>. 
                    Being a Junior Developer, I am eager to dive into new technology and working environments because above all, <span className='span'>I want to learn</span>. So if you want to chat please <span className='span' onClick={() => reachOutLink()}>REACH OUT TO ME!</span> 
                </p>
                <div role='tech stack icons' className='stack-icons'>
                    <img src='/icons/javascript.svg' alt='javascript-icon' className='icon'/>
                    <img src='/icons/react.svg' alt='react-icon' className='icon'/>
                    <img src='/icons/node.svg' alt='node-icon' className='icon'/>
                    <img src='/icons/html.svg' alt='html-icon' className='icon'/>
                    <img src='/icons/css.svg' alt='css-icon' className='icon'/>
                    <img src='/icons/sqlite.svg' alt='sqlite-icon' className='icon'/>
                    <img src='/icons/firebase.svg' alt='firebase-icon' className='icon'/>
                    <img src='/icons/redux.svg' alt='redux-icon' className='icon'/>
                </div>
            </div>
        </>
    )
}

export default About