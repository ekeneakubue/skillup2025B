import React from 'react'
import style from './Portfolio.module.css'
import Navbar from '../../components/navbar/Navbar'
import PortfolioCard from '../../components/portfolioCard/PortfolioCard'

export default function Portfolio() {
  return (
    <div>
        <Navbar/>
        <div className={style.card_container}>
            <div className={style.page_title}>Our Team</div>
            <div className={style.instructor_cards}>
              <section>
                <PortfolioCard 
                  img = './images/portfolios/Ekene.png'
                  name = 'Ekene Akubue' 
                  path='Frontend Engineer'
                />
                <PortfolioCard 
                  img = './images/portfolios/Ekene.png'
                  name = 'Chiedozie Ezenwa' 
                  path='Frontend Engineer'
                />
              </section>
            </div>
            <div className={style.student_cards}>
              <section>
                <PortfolioCard 
                  img = './images/portfolios/johnmary.jpg'
                  name = 'JohnMary Nwokolo' 
                  path='Rookie developer'
                />
                
              </section>
            </div>
        </div>
    </div>
  )
}
