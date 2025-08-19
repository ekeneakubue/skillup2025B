import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Portfolio from './pages/portfolio/Portfolio'
import Gallery from './pages/gallery/Gallery'
import Contacts from './pages/contacts/Contacts'
import Ekene from './pages/portfolio/ekene/Ekene'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Home/>} />
        <Route path = '/about' element = {<About/>} />
        <Route path = '/portfolio' element = {<Portfolio />} />
        <Route path = '/gallery' element = {<Gallery />} />
        <Route path = '/ekene' element = {<Ekene />} />
        <Route path = '/contacts' element = {<Contacts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
