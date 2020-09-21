import React from 'react'

const About = () => {
    return (
        <>
            <h1 className='about-me' id='about'>About Me</h1>
            <div role='about container' className='about-container' >
                <p className='nice-to-meet-you'>
                Nice to meet you!
                </p>
                <p className='about-statement'>
                I am a 23 year old Full Stack Developer living in Auckland New Zealand. With a background in Visual Effects and Digital Design, I love making creative technology with great user experience in mind.
                When I am not at work, I use my free time to make fun side projects that channel my creativity side and improve my skills as a dev.
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