import React from 'react'
import { DockNav } from './components/DockNav'
import { Button } from './components/ui/button'
import TopNav from './components/TopNav'

const App = () => {
  return (
    <>
      <nav>
        <TopNav />
        <DockNav />
      </nav>
      <main>
        <div className="flex min-h-svh flex-col items-center justify-center">
          <Button>Click me</Button>
        </div>
      </main>
    </>
  )
}

export default App