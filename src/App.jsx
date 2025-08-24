import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger, ScrollSmoother } from 'gsap/all'
import TopNav from './components/TopNav'
import { DockNav } from './components/DockNav'
import HeroSection from './components/HeroSection'
import MessageSection from './components/MessageSection'
import About from './components/AboutSection'
import Skills from './components/SkillsSection'
import Experience from './components/ExperienceSection'
import EducationSection from './components/EducationSection'
import CertificationSection from './components/CertificateSection'
import ProjectSection from './components/ProjectSection'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    })
  })
  return (
    <>
      <nav>
        <TopNav />
        <DockNav />
      </nav>
      <main id='smooth-wrapper'>
        <div id='smooth-content'>
          <HeroSection />
          <MessageSection />
          <About />
          <Skills />
          <Experience />
          <EducationSection />
          <ProjectSection />
          <CertificationSection />
        </div>
      </main>
    </>
  )
}

export default App