import React from 'react';
import NavBar from '../Components/NavBar'
import HeroImg from '../Components/HeroImg'
import Footer from '../Components/Footer';
import Project1 from '../Components/Project1'
import About from '../Components/AboutContent'
import Form from '../Components/Form';
const Home = () => {
  return (
    <div>
      <NavBar/>
      <HeroImg/>
      <About/>
      <Project1/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Home
