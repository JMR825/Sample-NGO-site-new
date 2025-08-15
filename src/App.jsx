import { useState } from 'react'
import Navbar from './assets/components/Navbar'
import Home from './assets/components/Home'
import About from './assets/components/About'
import Form from './assets/components/Form'

function App() {
  return (
    <>
    <Navbar/>
    <main>
      <Home/>
      <About/>
      <Form/>
      </main>
      </>
  )
}

export default App
