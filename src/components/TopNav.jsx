import React from 'react'
import { Button } from './ui/button'

const TopNav = () => {
  return (
    <div className='fixed top-0 left-0 right-0 z-50 md:px-9 md:py-6 p-4 flex justify-between items-center'>
      <img className='md:w-34 w-30 block dark:hidden' src="/Light-Shivam-logo.png" alt="" />
      <img className='md:w-34 w-30 hidden dark:block' src="/Dark-Shivam-logo.png" alt="" />
      <Button className='cursor-pointer font-bold text-lg rounded-full px-6 py-5'>Resume</Button>
    </div>
  )
}

export default TopNav