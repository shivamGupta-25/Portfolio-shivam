import React from 'react'
import { Button } from './ui/button'

const TopNav = () => {
  return (
    <div className='fixed top-0 left-0 right-0 z-50 px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 lg:px-9 lg:py-6 xl:px-12 xl:py-6'>
      <div className='flex justify-between items-center max-w-7xl mx-auto'>
        {/* Logo with responsive sizing */}
        <div className='flex-shrink-0'>
          <img className='h-8 w-auto sm:h-9 md:h-10 lg:h-12 block dark:hidden'
            src="/Light-Shivam-logo.png"
            alt="Shivam Logo"
          />
          <img className='h-8 w-auto sm:h-9 md:h-10 lg:h-12 hidden dark:block'
            src="/Dark-Shivam-logo.png"
            alt="Shivam Logo"
          />
        </div>

        {/* Resume Button with responsive sizing */}
        <Button className='cursor-pointer font-medium sm:font-semibold md:font-bold text-sm sm:text-base md:text-lg rounded-full px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 lg:px-8 lg:py-4 transition-all duration-200 hover:scale-105 active:scale-95'>
          Resume
        </Button>
      </div>
    </div>
  )
}

export default TopNav