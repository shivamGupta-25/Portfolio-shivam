import React, { useEffect, useState } from 'react'
import { PopoverForm, PopoverFormButton, PopoverFormSeparator } from '@/components/ui/popover-form.jsx'
import { Button } from './ui/button'

const ContactForm = () => {
  const [open, setOpen] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  // Prevent body scrolling when form is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      setShowSuccess(false)
      setLoading(false)
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [open])

  useEffect(() => {
    if (!showSuccess) return
    const timer = setTimeout(() => {
      setOpen(false)
    }, 1200)
    return () => clearTimeout(timer)
  }, [showSuccess])

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setShowSuccess(true)
    }, 900)
  }

  return (
    <PopoverForm
      title="Contact me"
      open={open}
      setOpen={setOpen}
      showSuccess={showSuccess}
      showCloseButton
      height="320px"
      openChild={(
        <div className="flex h-full flex-col">
          <div className="relative h-8 px-4">
            <PopoverFormSeparator />
          </div>
          <form onSubmit={handleSubmit} className="flex flex-1 flex-col gap-3 p-4 pt-2">
            <div className="grid gap-1">
              <label className="text-xs text-muted-foreground" htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="h-8 rounded-md border border-input bg-background px-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
              />
            </div>
            <div className="grid gap-1">
              <label className="text-xs text-muted-foreground" htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="h-8 rounded-md border border-input bg-background px-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
              />
            </div>
            <div className="grid gap-1">
              <label className="text-xs text-muted-foreground" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={3}
                required
                placeholder="How can I help?"
                className="rounded-md border border-input bg-background p-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background resize-none"
              />
            </div>
            <div className="mt-auto flex items-center gap-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Cancel
              </button>
              <PopoverFormButton loading={loading} text="Send" />
            </div>
          </form>
        </div>
      )}
    />
  )
}

export default ContactForm