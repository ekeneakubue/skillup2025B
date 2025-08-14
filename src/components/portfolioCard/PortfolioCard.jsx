import React from 'react'
import style from './PortfolioCard.module.css'

export default function PortfolioCard(props) {
  return (
    <div>
        <div className={style.card}>
            <img src={props.img} alt="" />
            <div className={style.card_body}>
            <div className={style.card_name}>{props.name}</div>
            <div className={style.card_path}>{props.path}</div>
            <div className={style.card_btn}>Hire Me</div>
            </div>
        </div>
    </div>
  )
}
