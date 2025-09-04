import React from 'react'
import style from './Nnaemeka.module.css'
export default function Nnaemeka() {
  return (
    <div className={style.nna}>
        <div id='Header'>
      <div className={style.Nav}>
        <div className={style.logo}><h2>SOCHI.C</h2></div>

        <div className={style.Nav_item}>
            <a href="/">Home</a>
            <a href="#About">About</a>
            <a href="#">Blog</a>
            <a href="#contact">Contact</a>
            <a href="#">Skills</a>
        </div>

        <div className={style.lang}>
            <a className={style.eng} href="#">Eng</a>
            <a className={style.bri} href="#">Bri</a>
            <a className={style.fra} href="#">Fra</a>
            <a className={style.esp} href="#">Esp</a> 
            <a className={style.ig} href="#">Ig</a>
        </div>
      </div>

      {/* // ...existing code... */}
<div className={style.pic}>
  <img src='./images/portfolios/download.jpg'alt="" />
  <div className={style.watermark}>
    <span className={style.letter}>
      <span className={style.inside}>P</span>
      <span className={style.outside}>P</span>
    </span>
    <span className={style.letter}>
      <span className={style.Trans}>O</span>
    </span>
    <span className={style.letter}>
      <span className={style.Trans}>R</span>
    </span>
    <span className={style.letter}>
      <span className={style.Trans}>T</span>
    </span>
        <span className={style.letter}>
      <span className={style.ins}>A</span>
      <span className={style.out}>A</span>
    </span>
  </div>
</div>
{/* // ...existing code... */}
      </div>

      <div id='About'>
          <div className={style.about}>
          
            <div className={style.img}>
              <img src="./images/portfolios/download.jpg" alt="" />
            </div>
                <div className={style.text}>
                  <h1>I'm Chukwuone Sochima.<br />A Product Designer<br /><span className={style.niger}><p>Based in Nigeria.</p> </span> </h1>
                  <p>I'm Probably the most passionate designer you will ever get to work with. <br />If you need create great projects that needs some amazing skills, I'm your guy.</p>
            <button className={style.btn}>Download CV</button>
          </div>
          </div>
      </div>
    <div id="contact"></div>
<div className={style.contact}>
<h1>CONTACT ME</h1>
<div className={style.gm}>
  <h1>hello@sochisign.com</h1>
  <p>Feel free to contact me with any inquires or questions!</p>
</div>
<div className={style.name}>
  <form>
      <input
        type="email"
        placeholder="Email Address"
        className={style.inputt}
        name="name"
      />
      <input
        type="text"
        placeholder="Name"
        className={style.input}
        name="email"
      />

      <input
        type="text"
        placeholder="Message"
        className={style.message}
        name="message"
      />

      <button type="sumbmit" className={style.bt}>Submit</button>
    </form>
</div>
</div>
     </div>
  )
}
