import React from 'react'
import style from './Somto.module.css'
import { Link } from 'react-router-dom'



export default function Somto() {
  return (
  <>
    
        <div className={style.container_somtonavbar}>
              <div className={style.brand}></div>
                  <ul className={style.navs}>
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#projects">PROJECTS</a></li>
                    <li><a href="#skills">SERVICES</a></li>
                    <li><a href="#experience">EXPERIENCE</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                  </ul>
                  <div className={style.nav_connect}><a href="#connectwithme">Connect with Me</a></div>
        </div>


              <div id="home" className={style.intro_section}>
                <img src="/images/portfolios/Elonmusk.jpeg" alt="Somto" className={style.somtoprofile_image} />
                    <h1><span>Hello, I'm Okolo Somtochukwu,</span> a junior frontend developer based in Nigeria. </h1>
                      <p> I’m a passionate Junior Frontend Developer who loves creating clean, modern, and responsive websites.</p>
                      <p> Scroll down to explore my projects, skills, and experience 🚀</p>
                  <div className={style.intro_button}>
                    <div className={style.intro_buttonconnect}>Connect with Me</div>
                    <div className={style.intro_buttonresume}>My resume</div>
                  </div>
              </div>


            
              <div id="about" className={style.about}>
                <div className={style.about_title}>
                  <h1>About Me</h1>
                </div>
                
                  <div className={style.about_para}>
                      <p>I am an experienced Junior Frontend Developer with over two years of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organization, contributing to their success and growth.</p>
                      <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
                  </div>

                  <div className={style.about_skills}>
                    <div className={style.about_skill}><p>HTML & CSS</p><hr style={{width:"70%"}} /></div>
                    <div className={style.about_skill}><p>React JS</p><hr style={{width:"40%"}} /></div>
                    <div className={style.about_skill}><p>Basic Javascript</p><hr style={{width:"60%"}} /></div>
                    <div className={style.about_skill}><p>Basic Python</p><hr style={{width:"50%"}} /></div>
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
              



              <div id="projects" className={style.container_projects}>
                  <div  className={style.container_project_title}>
                    <h1 >My latest Work</h1>
                  </div>
                  <div className={style.project_images}>
                      <img src="/images/somtoimages/template.jpg" />
                      <img src="/images/somtoimages/template.jpg" />
                      <img src="/images/somtoimages/template.jpg" />
                      <img src="/images/somtoimages/template.jpg" />
                      <img src="/images/somtoimages/template.jpg" />
                      <img src="/images/somtoimages/template.jpg" />
                      <img src="/images/somtoimages/template.jpg" />
                      <img src="/images/somtoimages/template.jpg" />
                      <img src="/images/somtoimages/template.jpg" />
                      <img src="/images/somtoimages/template.jpg" />
                      <img src="/images/somtoimages/template.jpg" />
                      <img src="/images/somtoimages/template.jpg" />
                  </div>
                      <div  className={style.project_showmore}>
                        <p>Show More</p>
                      </div>
                    </div>

                

                
                <div id="skills" className={style.skills}>
                  <div className={style.skills_title}>
                    <h1>My Services</h1>
                        <div className={style.skills_images}>
                          <p className={style.skills_p}>Web design</p>
                          <p className={style.skills_p}>Graphics design</p>
                          <p className={style.skills_p}>Social Media</p>
                          <p className={style.skills_p}>App design</p>
                          <p className={style.skills_p}>Digital marketing</p>
                          <p className={style.skills_p}>Content writing</p>
                      </div>

                  </div>

                </div>



                <div id="experience" className={style.experience}>
                  <h1>My Experience</h1>
                  <p>I have 2 years of experience in multiple companies like Microsoft, Tesla and Apple.</p>
                  <div className={style.experience_images}>
                      <img src="/images/somtoimages/microsoft-company-culture-1.jpg" />
                      <img src="/images/somtoimages/tesla-gigafactory-4-europe.jpg" />
                      <img src="/images/somtoimages/apple-success-story.jpg" />
                  </div>
                </div>


                <div id="contact" className={style.contact}>
                  <div className={style.contact_title}>
                    <h1>Get in touch</h1>
                  </div>

                  <div className={style.contact_section}>
                    <div className={style.contact_left}>
                    <h1>Let's talk</h1>
                    <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime. </p>
                  

                        <div className={style.contact_details}>
                          <div className={style.contact_detail}>
                            <p>greatstackdev@gmail.com</p>
                          </div>
                          <div className={style.contact_detail}>
                            <p>+234-7057-169-423</p>
                          </div>
                          <div className={style.contact_detail}>
                            <p>Enugu State, Nigeria</p>
                          </div>
                        </div>
                  </div>
                   <form id="connectwithme" className={style.contact_right}>
                          <label htmlFor=''>Your Name</label>
                          <input type="text" placeholder='Enter your name' name='name'></input>
                          <label htmlFor=''>Your Email</label>
                          <input type="email" placeholder='Enter your email' name='email'></input>
                          <label htmlFor=''>Write your message here</label>
                          <textarea type="message" rows='8' placeholder='Enter your message here' name='name'></textarea>
                          <button type='submit' className={style.contact_submit}>Submit now</button>
                        </form>
                </div>
              </div>
        



              <hr style={{width:"100%"}} />
              <div className={style.footer}>
                <p className={style.footer_bottom}> © 2025 Okolo Somto. All rights reserved</p>
                <div className={style.footer_bottom_right}>
                  <p>Term of Services</p>
                  <p>Privacy Policy</p>

                </div>


              </div>





  </>
  )
}



