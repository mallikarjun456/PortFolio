import React from 'react'

import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer';
import HeroImg2 from '../Components/HeroImg2';
import Project1 from '../Components/Project1';

const Project = () => {
  return (
    <div>
      <NavBar/>
      <HeroImg2 heading = "PROJECTS." text = "Some of my most recent works"/>
      <Project1/>
      <Footer/>
    </div>
  )
}

export default Project
