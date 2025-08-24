import React, { useState, useRef } from 'react'
import ContactForm from './ContactForm'

const TopNav = () => {
  const [isHovered, setIsHovered] = useState(false)
  const logoRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!logoRef.current) return

    const rect = logoRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY

    // Calculate rotation based on cursor position
    const rotateY = (mouseX / rect.width) * 20
    const rotateX = -(mouseY / rect.height) * 20

    logoRef.current.style.transform = `
      perspective(1000px) 
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg) 
      translateZ(${isHovered ? '20px' : '0px'})
      scale(${isHovered ? '1.05' : '1'})
    `
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    if (logoRef.current) {
      logoRef.current.style.transform = `
        perspective(1000px) 
        rotateX(0deg) 
        rotateY(0deg) 
        translateZ(0px)
        scale(1)
      `
    }
  }

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 md:px-9 md:py-6 p-4 flex justify-between items-center">
      <div
        ref={logoRef}
        className={`
          relative cursor-pointer transition-all duration-300 ease-out
          ${isHovered
            ? 'drop-shadow-[0_20px_35px_rgba(0,0,0,0.25)] dark:drop-shadow-[0_20px_35px_rgba(255,255,255,0.1)]'
            : 'drop-shadow-[0_4px_6px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_4px_6px_rgba(255,255,255,0.05)]'
          }
        `}
        style={{
          transformStyle: 'preserve-3d',
          transition: 'filter 0.3s ease, drop-shadow 0.3s ease'
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleLogoClick}
      >
        {/* Light theme logo */}
        <img
          className="md:w-34 w-30 block dark:hidden"
          src="/Light-Shivam-logo.png"
          alt="Shivam Logo Light"
          draggable={false}
        />

        {/* Dark theme logo */}
        <img
          className="md:w-34 w-30 hidden dark:block"
          src="/Dark-Shivam-logo.png"
          alt="Shivam Logo Dark"
          draggable={false}
        />

        {/* Glow effect on hover */}
        <div
          className={`
            absolute inset-0 rounded-lg transition-opacity duration-300 blur-xl -z-10
            ${isHovered
              ? 'opacity-30 bg-gradient-to-r from-slate-400 via-slate-500 to-slate-500'
              : 'opacity-0'
            }
          `}
        />
      </div>

      <div className='overflow-hidden font-sans'>
        <ContactForm />
      </div>
    </div>
  )
}

export default TopNav