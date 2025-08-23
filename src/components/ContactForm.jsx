import React, { useEffect, useState } from 'react'
import { PopoverForm, PopoverFormButton, PopoverFormSeparator } from '@/components/ui/popover-form.jsx'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const ContactForm = () => {
  const [open, setOpen] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const form = useRef();

  // Prevent body scrolling when form is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      setShowSuccess(false)
      setLoading(false)
      setError('')
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
      const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
      const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

      const result = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      });

      if (result.status === 200) {
        console.log('SUCCESS!');
        setShowSuccess(true);
        form.current.reset();
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.log('FAILED...', error);
      setError('Failed to send email. Please try again later.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <PopoverForm
      title="Contact me"
      open={open}
      setOpen={setOpen}
      showSuccess={showSuccess}
      showCloseButton
      height="400px"
      openChild={(
        <div className="flex h-full flex-col">
          <div className="relative h-8 px-4">
            <PopoverFormSeparator />
          </div>
          <form ref={form} onSubmit={handleSubmit} className="flex flex-1 flex-col gap-3 p-4 pt-2">
            {error && (
              <div className="text-sm mt-2 text-center text-white bg-destructive p-1 rounded-sm border border-destructive">
                {error}
              </div>
            )}
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
              <label className="text-xs text-muted-foreground" htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                placeholder="Subject"
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