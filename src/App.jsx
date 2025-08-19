import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import TopNav from './components/TopNav'
import { DockNav } from './components/DockNav'
import HeroSection from './components/HeroSection'
import MessageSection from './components/MessageSection'

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <>
      <nav>
        <TopNav />
        <DockNav />
      </nav>
      <main>
        <HeroSection />
        <MessageSection />
      </main>
    </>
  )
}

export default App