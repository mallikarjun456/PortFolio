import "./FooterStyles.css"

import React from 'react'
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaTwitter } from "react-icons/fa"
import { FaPhone } from "react-icons/fa"
import { MdEmail } from "react-icons/md";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>Navyagan Society,Paudgaon</p>
                            <p>Pune,Maharashtra</p>
                        </div>
                    </div>
                    <div className="phone" >
                        <h4>
                            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            9834814121
                        </h4>
                    </div>

                    <div className="email">
                        <h4>
                            <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            mallikarjuntugawe10@gmail.com
                        </h4>
                    </div>


                </div>


                <div className="right">
                    <h4>
                        About me
                    </h4>
                    <p>
                        This is me Malliakrjun Tugawe. I want to become a Full stack developer in reputable organization. and I love to doing projects and building applications from the scratch.
                    </p>
                    <div className="social">
                    <a href="https://github.com/mallikarjun456" target="_blank"> <FaGithub size={30} style={{ color: "#fff", marginRight: "2rem" }} /></a>  /
                    <a href="https://www.linkedin.com/in/mallikarjun-tugawe-941a6b2a1/" target="_blank"><FaLinkedin size={30} style={{ color: "#fff", marginRight: "2rem" }} /> </a> 
                    <a href="mailto:mallikarjuntugawe10@gmail.com" target="_blank">                     <MdEmail size={30} style={{ color: "#fff", marginRight: "2rem" }} /> </a> 
                    {/* <MdEmail size={30} style={{ color: "#fff", marginRight: "2rem" }} /> */}
                    {/* <FaLinkedin size={30} style={{ color: "#fff", marginRight: "2rem" }} /> */}
                    {/* <FaTwitter size={30} style={{ color: "#fff", marginRight: "2rem" }} /> */}
                    {/* <p>Check out my GitHub profile: <a href="https://github.com/your-username" target="_blank">GitHub</a></p> */}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
