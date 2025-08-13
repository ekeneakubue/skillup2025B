import React from 'react'
import style from './Navbar.module.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <div className={style.header_container}>
            <div className={style.brand}>UNN ICT SkillUp</div>
            <div className={style.navs}>
                <Link to = '/'>
                    <div className={style.nav_item}>Home</div>
                </Link>
                <Link to = '/about'>
                    <div className={style.nav_item}>About Us</div>
                </Link>
                <Link to = '/portfolio'>
                    <div className={style.nav_item}>Portfolio</div>
                </Link>
                <Link to = '/gallery'>
                    <div className={style.nav_item}>Gallery</div>
                </Link>
                <Link to = '/contacts'>
                    <div className={style.nav_item}>Contact Us</div>
                </Link>                
            </div>
        </div>
    </div>
  )
}
