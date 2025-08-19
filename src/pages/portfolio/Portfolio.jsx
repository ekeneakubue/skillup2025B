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
                  img = './images/portfolios/Chukwuemeka.jpg'
                  name = 'Chukwuemeka Olelewe' 
                  path='Fullstack developer'
                /> 
                 <PortfolioCard
                    path= 'Froontend Developer'
                    img = './images/portfolios/Elonmusk.jpeg'
                    name = 'Okolo Somto'
                 />               
                <PortfolioCard 
                  img = './images/portfolios/John.jpg'
                  name = 'Abel, John Chiemerie' 
                  path = "Frontend Developer"
                />
                <PortfolioCard
                  img = './public/images/portfolios/Daberechi .jpg'
                  name = 'Angela Dabere' 
                  path='Junior Frontend Engineer'
                />
                <PortfolioCard
                  img = './images/portfolios/johnmary.jpg'
                  name = 'JohnMary Nwokolo' 
                  path='Rookie developer'
                />
                <PortfolioCard 
                  img = './images/portfolios/Munachi.jpg'
                  name = 'Munachi, Krisagbedo'
                  path='Frontend Engineer'
                />
                <PortfolioCard 
                  img = './images/portfolios/favour.jpg'
                  name = 'chukwubuike, Ndubuisi' 
                  path='Junior Frontend Engineer'
                />
              </section>
            </div>
        </div>
    </div>
  )
}
