import React from 'react'
import Header from './components/nav/Header'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'
import Testimonial from './components/testimonial/Testimonial'
import Services from './components/services/Services'
import Home from './components/home/Home'

function App() {
  return (
    <>
    <Header/>
    <Home/>
    <About/>
    <Contact/>
    <Services/>
    <Testimonial/>
    <Footer/>
    
    </>
  )
}

export default App