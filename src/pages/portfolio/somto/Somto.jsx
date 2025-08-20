import React from 'react'
import style from './Somto.module.css'
import Navbar from '../../../components/navbar/Navbar'
import { Link } from 'react-router-dom'

export default function Somto() {
  return (
    /*<div>
      
        <div className={style.header_container}>
                    <div className={style.brand}>MY PORTFOLIO</div>
                    <div className={style.navs}>
                        <Link to = '/home'>
                            <div className={style.nav_item}>HOME</div>
                        </Link>
                        <Link to = '/skills'>
                            <div className={style.nav_item}>SKILLS</div>
                        </Link>
                        <Link to = '/experience'>
                            <div className={style.nav_item}>EXPERIENCE</div>
                        </Link>
                        <Link to = '/about'>
                            <div className={style.nav_item}>ABOUT</div>
                        </Link>
                        <Link to = '/contact'>
                            <div className={style.nav_item}>CONTACT</div>
                        </Link>                
                    </div>
                </div>

    </div>*/


        <div className={style.container_somtonavbar}>
          <ul>
            li*5
            

            <li className={style.brand}>UNN ICT SkillUp</li>
          </ul>
        </div>







  )
}




