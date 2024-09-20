import React from 'react'
import NavBar from './components/NavBar'
import LandingPage from './components/LandingPage'
import Work from './components/Work'

const App = () => {
  return (
    <div className='font-[TWKLausanne]'>
      <NavBar />
      <LandingPage />
      <Work />
    </div>
  )
}

export default App