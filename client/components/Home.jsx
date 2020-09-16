import React from 'react'
import { Link } from 'react-router-dom'

import Opening from './Opening'
import Navbar from './Navbar'
import About from './About'
import Work from './Work'

const Home = () => {
  return (
    <>
      <img className='stars1' src='starGroup1.svg' alt='stars1'/>
      <img className='stars2' src='starGroup2.svg' alt='stars2'/>
      <img className='stars3' src='starGroup3.svg' alt='stars3'/>
      <Opening />
      <Navbar />
      <About />
      <Work />
    </>
  )
}

export default Home
