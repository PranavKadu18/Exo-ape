import React from 'react'
import NavBar from './components/NavBar'
import LandingPage from './components/LandingPage'
import Work from './components/Work'
import PlayReel from './components/PlayReel'
import SpreadNews from './components/SpreadNews'
import OurStory from './components/OurStory'

import LocomotiveScroll from 'locomotive-scroll';


const App = () => {

  const locomotiveScroll = new LocomotiveScroll();


  return (
    <div className='font-[TWKLausanne] overflow-x-hidden'>
      <NavBar />
      <LandingPage />
      <Work />
      <PlayReel />
      <SpreadNews />
      <OurStory />
    </div>
  )
}

export default App