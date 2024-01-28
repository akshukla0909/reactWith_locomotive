import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'

const App = () => {
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white'>
       <Navbar/>      
       <LandingPage/>
      <div className='w-full h-screen bg-red-100'></div>
    </div>
  )
}

export default App