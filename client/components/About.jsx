import React from 'react'

const About = () => {
    return (
        <>
            <h1 className='about-me' id='about'>About Me</h1>
            <div role='about container' className='about-container' >
                <p className='about-statement'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries.
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