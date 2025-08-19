import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './components/ui/theme-provider'
import { SmoothCursor } from "@/components/ui/smooth-cursor";

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <SmoothCursor />
    <App />
  </ThemeProvider>
)
