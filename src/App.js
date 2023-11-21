import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import Header from './components/nav/Header'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'
import Testimonial from './components/testimonial/Testimonial'
import Services from './components/services/Services'

function App() {
  return (
    <>
    <Header/>
    <About/>
    <Contact/>
    <Services/>
    <Testimonial/>
    <Footer/>
    
    </>
  )
}

export default App