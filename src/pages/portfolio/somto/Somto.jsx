import React from 'react'
import style from './Somto.module.css'
import Navbar from '../../../components/navbar/Navbar'
import { Link } from 'react-router-dom'

export default function Somto() {
  return (
    <>
    
    <div className={style.container_somtonavbar}>
          <div className={style.brand}>Portfolio</div>
              <ul className={style.navs}>
                <li>Home</li>
                <li>About Me</li>
                <li>Projects</li>
                <li>Skills</li>
                <li>Experience</li>
                <li>Contact</li>
              </ul>
              <div className={style.nav_connect}>Connect With Me</div>
         </div>


          <div className={style.intro_section}>
            <img src="/images/portfolios/Elonmusk.jpeg" alt="Somto" className={style.somtoprofile_image} />
                <h1>Hello, I'm Okolo Somtochukwu, Junior Frontend Developer based in Nigeria. </h1>
                  <p> I’m a passionate Junior Frontend Developer who loves creating clean, modern, and responsive websites.</p>
                  <p>Scroll down to explore my projects, skills, and experience 🚀</p>
          </div>



    
    
    
    
    </>


  )
}




