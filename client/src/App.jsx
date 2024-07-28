import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import HeroSection from './components/HeroSection.jsx'
import SecondPage from './components/SecondPage.jsx'
import MeetOurTeamPage from './components/MeetOurTeamPage.jsx'
import TryITRightNow from './components/TryITRightNow.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <>
    <div className="w-full h-screen bg-white">
      <Navbar />
      <HeroSection />
      <SecondPage />
      <MeetOurTeamPage />
      <TryITRightNow />
      <Footer />
    </div>
    </>
  )
}

export default App
