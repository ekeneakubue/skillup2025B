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
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Me</a></li>
                    <li>Projects</li>
                    <li>Skills</li>
                    <li>Experience</li>
                    <li>Contact</li>
                  </ul>
                  <div className={style.nav_connect}>Connect With Me</div>
            </div>


              <div id="home" className={style.intro_section}>
                <img src="/images/portfolios/Elonmusk.jpeg" alt="Somto" className={style.somtoprofile_image} />
                    <h1>Hello, I'm Okolo Somtochukwu, junior frontend developer based in Nigeria. </h1>
                      <p> I’m a passionate Junior Frontend Developer who loves creating clean, modern, and responsive websites.</p>
                      <p>Scroll down to explore my projects, skills, and experience 🚀</p>

                  <div className={style.intro_button}>
                    <div className={style.intro_buttonconnect}>Connect With Me</div>
                    <div className={style.intro_buttonresume}>My resume</div>
                  </div>
              </div>


            
              <div id="about" className={style.about}>
                <div className={style.about_title}>
                  <h1>About Me</h1>
                </div>
                <div className={style.about_section}>
                  <div className={style.about_left}>
                    <img src="/images/portfolios/Elonmusk.jpeg" alt="Somto" className={style.about_image} />
                  </div>

  
                  <div className={style.about_right}>
                    <div className={style.about_para}>
                      <p>I am a junior Frontend Developer </p>
                      <p>My passion for frontend development is not only</p>
                  </div>

                  <div className={style.about_skills}>
                    <div className={style.about_skills}><p>HTML & CSS</p></div>
                    <hr className={style.hr}></hr>

                    <div className={style.about_skills}><p>React JS</p></div>
                    <hr className={style.hr}></hr>

                    <div className={style.about_skills}><p>Basic Javascript</p></div>
                    <hr className={style.hr}></hr>

                    <div className={style.about_skills}><p>Basic </p></div>
                    <hr className={style.hr}></hr>
                  </div>
                </div>



                <div className={style.about_achievements}>
                  <div className={style.about_achievement}>
                    <h1>2+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                  </div>
                  <hr />
                  <div className={style.about_achievement}>
                    <h1>20+</h1>
                    <p>PROJECTS COMPLETED</p>
                  </div>
                  <hr />
                  <div className={style.about_achievement}>
                    <h1>15+</h1>
                    <p>HAPPY CLIENTS</p>
                  </div>

          
                </div>





                </div>

              </div>

  </>
  )
}



