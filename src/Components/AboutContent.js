import "./AboutContentStyles.css"

import React from 'react'
import { Link } from "react-router-dom"
import React1 from "../assests/react1.jpg"
const AboutContent = () => {
  return (
    <div className="about">
    <div className="left">
    <h1>Who Am I?</h1>
    <p>Hello! Myself Mallikarjun Tugawe. I done my graduation in 2023 Computer Science. As from college days I love to Create web applications from the Scratch, so for that reason my mainly interest in web development.</p>
    <Link to="./contact"><button className="btn">Contact</button></Link>
    </div>
    <div className="right">
    <div className="img-container">
    <div className="img stack top">
     <img src={React1} className="img" alt="true"/>
    </div>
    </div>
    

    </div>
      
    </div>
  )
}

export default AboutContent
