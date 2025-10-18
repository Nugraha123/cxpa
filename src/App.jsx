import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Gallery from './components/Gallery'
import Contact from './components/Contact'



function App() {
  return (
    <div>
    <Home/>
    <Navbar/>
    <About/>
    <Gallery/>
    <Contact/>
    </div>
  )
}

export default App