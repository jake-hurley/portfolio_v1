import React from 'react'

const Opening = () => {

  function clickHandler () {
    document.getElementById('work').scrollIntoView() 
  }

  function aboutClick () {
    document.getElementById('about').scrollIntoView() 
}

  return (
    <>
      <h1 className='jake-hurley'>Jake Hurley</h1>
      <div role='job-title-container' className='job-title-container'>
        <img className='job-title-line-1' src='jobTitleLine.svg' alt='job-title-line'/>
        <h3 className='job-title'>Full Stack Developer <span className='job-title-slash'> / </span> Digital Designer</h3>
        <img className='job-title-line-2' src='jobTitleLine.svg' alt='job-title-line'/>
      </div>

      <div role='resume-box' className='resume-box option-box'>
        <a target='_blank' className='resume-link' href='/Jake_Hurley_resume.pdf'><h3 className='option-text'>Resume / CV</h3></a>
      </div>

      <div role='about-me-link' className='about-me-box option-box'>
        <h3 className='option-text' onClick={() => clickHandler()}>My Work</h3>
      </div>

      <img className='cta-arrow bounce' src='arrow.svg' alt='call-to-action-arrow' onClick={()=> aboutClick()}/>
    </>
  )
}

export default Opening
