import React from "react";
import style from "./Soch.module.css";
export default function Soch() {
  return (
    <div id="home" className={style.home}>
      <div className={style.navbar}>
        {/* <img src="images/portfolios/bunny.jpeg" alt="" /> */}
        <ul className={style.nav_menu}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
        <div className={style.nav_connect}>Connect with me</div>
      </div>
      <div className={style.hero}>
        <img src="images/portfolios/sochi.jpg" alt="" />
        <h1>
          <span>I'm Nnaemeka Chukwuone, </span>Junior Frontend Developer based in
          Nigeria and Uk
        </h1>
        <p>
          I am a frontend developer from Enugu state, Nigeria and also part of
          agencies working for the uk company's for 5 yrs
        </p>
        <div className={style.hero_action}>
          <div className={style.hero_connect}>Connect with me</div>
          <div className={style.hero_resume}>My resume</div>
        </div>
        <div id="about" className={style.me}></div>
        <div className={style.about}>
          <div className={style.about_title}>
            <h1>About me</h1>
            {/*<img src="images/portfolios/sochi.jpg" alt="" /> */}
          </div>
          <div className={style.about_sections}>
            <img src="/images/portfolios/sochi.jpg" alt="" />
            <div className={style.about_left}>
               <div className={style.about_right}>
            <div className={style.about_para}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                voluptate, voluptas sed illo nisi quis dolorum nam ab
                consectetur. Libero exercitationem quaerat minus, adipisci
                magnam culpa iste nisi reiciendis enim.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit,
                reiciendis id laudantium esse maiores deserunt ea! Eveniet quod
                excepturi quas, facere aspernatur nemo magni itaque dignissimos
                cumque sed illum sit!
              </p>
            </div>
        </div>
      
         
            <div className={style.about_skills}>
              <div className={style.about_skill}>
                <p>HTML & CSS</p>
                <hr style={{ width: "50%" }} />
              </div>
              <div className={style.about_skill}>
                <p>REACT JS</p>
                <hr style={{ width: "70%" }} />
              </div>
              <div className={style.about_skill}>
                <p>NEXT JS</p>
                <hr style={{ width: "60%" }} />
              </div>
              <div className={style.about_skill}>
                <p>PYTHON</p>
                <hr style={{ width: "50%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.about_achievements}>
        <div className={style.about_achievement}>
          <h1>10+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className={style.about_achievement}>
          <h1>50+</h1>
          <p>PROJECT COMPLETED</p>
        </div>
        <hr />
        <div className={style.about_achievement}>
          <h1>2+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
        </div>
        </div>
  );
}
