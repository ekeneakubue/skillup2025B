
import React, { useState, useEffect } from 'react'
import style from './Munachi.module.css'
export default function Munachi2() {
    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowNav(window.scrollY > 100); // Show nav after scrolling 100px
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const [showButton, setShowButton] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <>
            <div className={style.container}>
                <div className={`${style.nav} ${showNav ? style.show_nav : ''}`}>
                    <div className={style.brands}>
                        <div className={style.brand}>M</div>
                        <div className={style.brand_name}>Munachimso</div>
                    </div>
                    <div className={style.nav_items}>
                        <div className={style.home}>Home</div>
                        <div className={style.about}><a href="#target">About Me</a></div>
                        <div className={style.projects}><a href="#target2">Projects</a></div>
                        <div className={style.contact}><a href="#target4">Contact Me</a></div>
                        <div className={style.skills}><a href="#target3">My Skills</a></div>
                    </div>
                </div>
                <div className={style.hero}>
                    <div className={style.left_hero_section}>
                        <div className={style.up}>
                            <div className={style.hero_title}>Hello! I'm</div>
                            <div className={style.hero_title_2}>Krisagbedo Munachimso</div>
                            <p className={style.hero_content}>A Nigerian Based Frontend Developer. I make user friendly, beautiful and responsive websites through well crafted coding.</p>
                            <button className={style.hero_hire_btn}>Hire Me</button>
                            <button className={style.hero_about_btn}><a href="#target">About Me</a></button>
                        </div>
                        <div className={style.down}>
                            <div className={style.a}>
                                <h1>2 Yrs</h1>
                                Experience
                            </div>
                            <div className={style.b}>
                                <h1>3+</h1>
                                Projects completed
                            </div>
                            <div className={style.c}>
                                <h1>10+</h1>
                                Happy Clients
                            </div>
                        </div>
                    </div>
                    <div className={style.right_hero_section}>
                        <img src="public/images/portfolios/Munachi.jpg" alt="" className={style.munachi} />
                    </div>
                </div>
                <section id='target' className={style.about_section}>
                    <div className={style.about_left_section}>
                        <img src="public/images/portfolios/Munachi.jpg" alt="" className={style.munachi2} />
                        <div className={style.sm_holder}>
                            <img src="public/images/munachi-icons/facebook.png" alt="" className={style.icon} />
                            <img src="public/images/munachi-icons/discord.png" alt="" className={style.icon} />
                            <img src="public/images/munachi-icons/instagram.png" alt="" className={style.icon} />
                            <img src="public/images/munachi-icons/twitter.png" alt="" className={style.icon} />
                            <img src="public/images/munachi-icons/link.png" alt="" className={style.icon} />
                        </div>
                    </div>
                    <div className={style.line}></div>
                    <div className={style.about_right_section}>
                        <h1 className={style.writeup_title}>I am a  <span>Frontend Developer</span></h1>
                        <p className={style.writeup}>I design and develop services for customers specializing creating stylish, modern websites, web services and online stores.
                        </p>
                        <p className={style.writeup}>I design and develop services for customers specializing creating stylish, modern websites, web services.</p>
                        <div className={style.about_btn_holder}>
                            <button className={style.cv_btn}><img src="public/images/munachi-icons/download.png" alt="" className={style.icon2} />Download CV</button>
                            <button className={style.pro_btn}><a href="#target2">My Projects</a></button>
                        </div>
                    </div>
                </section>
                <section className={style.projects_section}>
                    <p className={style.projects_title} id='target2'>Projects</p>
                    <p className={style.projects_writeup}>Here are a few design projects I've worked on recently.</p>
                    <div className={style.projects_holder}>
                        <div className={style.project_1}>
                            <img src="public/images/munachi-icons/random.png" alt="" className={style.random_1} />
                            <p className={style.project_1_title}>HTMl & CSS Design</p>
                            <h1 className={style.project_1_title2}>SkillUp Blog</h1>
                            <p className={style.project_1_content}>A website made for UNN</p>
                            <button className={style.project_1_check}>Check It Out <img src="public/images/munachi-icons/for.png" alt="" className={style.for} /></button>
                        </div>
                        <div className={style.project_2}>
                            <img src="public/images/munachi-icons/random2.png" alt="" className={style.random_1} />
                            <p className={style.project_1_title}>HTMl & CSS Design</p>
                            <h1 className={style.project_1_title2}>Result Summary</h1>
                            <p className={style.project_1_content}>A simple HTML & CSS Result Summary Design</p>
                            <button className={style.project_1_check}>Check It Out <img src="public/images/munachi-icons/for.png" alt="" className={style.for} /></button>
                        </div>
                        <div className={style.project_3}>
                            <img src="public/images/munachi-icons/random3.png" alt="" className={style.random_1} />
                            <p className={style.project_1_title}>C++ Design</p>
                            <h1 className={style.project_1_title2}>Simple C++ Calculator</h1>
                            <p className={style.project_1_content}>A simple C++ Addition Calculator</p>
                            <button className={style.project_1_check}>Check It Out <img src="public/images/munachi-icons/for.png" alt="" className={style.for} /></button>
                        </div>
                    </div>

                </section>
                <section id='target3' className={style.skill_section}>
                    <h1 className={style.skill_title}>My Skills</h1>
                    <div className={style.skill_holder}>
                        <div className={style.html}>
                            <img src="public/images/munachi-icons/html.png" alt="" className={style.skill_icon} />
                            <h1 className={style.skill_name}>HTML</h1>
                            <div className={style.html_bar}>
                                <div className={style.html_bar_2}></div>
                            </div>
                            <p className={style.score}>89%</p>
                        </div>
                        <div className={style.html}>
                            <img src="public/images/munachi-icons/css.png" alt="" className={style.skill_icon} />
                            <h1 className={style.skill_name}>CSS</h1>
                            <div className={style.html_bar}>
                                <div className={style.css_bar_2}></div>
                            </div>
                            <p className={style.score}>72%</p>
                        </div>
                        <div className={style.html}>
                            <img src="public/images/munachi-icons/c-.png" alt="" className={style.skill_icon} />
                            <h1 className={style.skill_name}>C++</h1>
                            <div className={style.html_bar}>
                                <div className={style.c_bar_2}></div>
                            </div>
                            <p className={style.score}>30%</p>
                        </div>
                        <div className={style.html}>
                            <img src="public/images/munachi-icons/js.png" alt="" className={style.skill_icon} />
                            <h1 className={style.skill_name}>JS</h1>
                            <div className={style.html_bar}>
                                <div className={style.js_bar_2}></div>
                            </div>
                            <p className={style.score}>60%</p>
                        </div>
                        <div className={style.html}>
                            <img src="public/images/munachi-icons/react.png" alt="" className={style.skill_icon} />
                            <h1 className={style.skill_name}>React</h1>
                            <div className={style.html_bar}>
                                <div className={style.react_bar_2}></div>
                            </div>
                            <p className={style.score}>50%</p>
                        </div>
                        <button className={style.con_btn}><a href="#target4">Contact Me</a></button>
                    </div>
                </section>
                <section className={style.happy}>
                    <h1 className={style.happy1}>Happy Clients</h1>
                    <p className={style.happy2}>I've had the pleasure of working with a diverse range of companies, from startups to established brands.</p>
                    <div className={style.marquee_holder}>
                        <div className={style.marquee}>
                            <img src="public/images/munachi-icons/facebooki.png" alt="" className={style.skill_i} />
                            <img src="public/images/munachi-icons/spotifyi.png" alt="" className={style.skill_i} />
                            <img src="public/images/munachi-icons/linkedini.png" alt="" className={style.skill_i} />
                            <img src="public/images/munachi-icons/googlei.png" alt="" className={style.skill_i} />
                            <img src="public/images/munachi-icons/microsofti.png" alt="" className={style.skill_i} />
                            <img src="public/images/munachi-icons/netflixi.png" alt="" className={style.skill_i} />
                            <img src="public/images/munachi-icons/nvidiai.png" alt="" className={style.skill_i} />
                            <img src="public/images/munachi-icons/facebooki.png" alt="" className={style.skill_i} />
                            <img src="public/images/munachi-icons/spotifyi.png" alt="" className={style.skill_i} />
                            <img src="public/images/munachi-icons/linkedini.png" alt="" className={style.skill_i} />
                            <img src="public/images/munachi-icons/googlei.png" alt="" className={style.skill_i} />
                            <img src="public/images/munachi-icons/microsofti.png" alt="" className={style.skill_i} />
                            <img src="public/images/munachi-icons/netflixi.png" alt="" className={style.skill_i} />
                            <img src="public/images/munachi-icons/nvidiai.png" alt="" className={style.skill_i} />
                        </div>
                    </div>

                </section>
                <section id='target4' className={style.contact_section}>
                    <div className={style.contact_left_section}>
                        <h1 className={style.contact_title}>Let's discuss your Project</h1>
                        <p className={style.contact_under_title}>I'm available for freelance work. Drop me a line if you have a project you think i'd be good for it.</p>
                        <div className={style.con_holder}>
                            <div className={style.add}>
                                <img src="public/images/munachi-icons/location.png" alt="" className={style.logo2} />
                                <div className={style.add2}>
                                    <h1 className={style.add_title}>Address:</h1>
                                    <p className={style.add_undertitle}>Enugu, Nigeria</p>
                                </div>
                            </div>
                            <div className={style.email}>
                                <img src="public/images/munachi-icons/email.png" alt="" className={style.logo2} />
                                <div className={style.add2}>
                                    <h1 className={style.add_title}>Email:</h1>
                                    <p className={style.add_undertitle}>krisagbedom@gmail.com</p>
                                </div>
                            </div>
                            <div className={style.email}>
                                <img src="public/images/munachi-icons/call.png" alt="" className={style.logo2} />
                                <div className={style.add2}>
                                    <h1 className={style.add_title}>Call Me Now:</h1>
                                    <p className={style.add_undertitle}>+ (234) 08036868498</p>
                                </div>
                            </div>
                            <div className={style.sm_holder2}>
                                <img src="public/images/munachi-icons/facebook.png" alt="" className={style.icon2} />
                                <img src="public/images/munachi-icons/discord.png" alt="" className={style.icon2} />
                                <img src="public/images/munachi-icons/instagram.png" alt="" className={style.icon2} />
                                <img src="public/images/munachi-icons/twitter.png" alt="" className={style.icon2} />
                                <img src="public/images/munachi-icons/link.png" alt="" className={style.icon2} />
                            </div>
                        </div>
                    </div>
                    <div className={style.contact_right_section}>
                        <p className={style.contact_title2}>I'm always open to discussing product design work or partnership opportunities.</p>
                        <form action="">
                            <input type="text" className={style.lol} placeholder='Name*' />
                            <br />
                            <input type="email" className={style.lol} placeholder='Email*' required />
                            <br />
                            <input type="email" className={style.lol} placeholder='Location*' required />
                            <br />
                            <div className={style.form2}>
                                <input type="email" className={style.lol2} placeholder='Budget*' required />
                                <input type="email" className={style.lol2} placeholder='Subject*' required />
                            </div>
                            <input type="email" className={style.lol} placeholder='Message*' required />
                            <button className={style.send}>Submit<img src="public/images/munachi-icons/send.png" alt="" className={style.icon2} /></button>
                        </form>
                    </div>
                </section>
                <footer>
                    <div className={style.brand2}>
                        <div className={style.brand3}>M</div>
                        <div className={style.brand_name2}>Munachimso</div>
                    </div>
                    <div className={style.nav_items2}>
                        <div className={style.home2}>Home</div>
                        <div className={style.about2}><a href="#target">About Me</a></div>
                        <div className={style.projects2}><a href="#target2">Projects</a></div>
                        <div className={style.contact2}><a href="#target4">Contact</a></div>
                        <div className={style.skills2}><a href="#target3">My Skills</a></div>
                    </div>
                    <div className={style.d}>
                        Copyright &copy; 2025 Munachi's Portfolio.
                    </div>
                </footer>
                {(
                    <button
                        className={`${style.back_to_top} ${showButton ? style.show : ''}`}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <img src="public/images/munachi-icons/up.png" alt="" className={style.icon9}/>
                    </button>
                )}
            </div>
        </>
    )
}
