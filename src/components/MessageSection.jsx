import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import { useTheme } from "next-themes"

const MessageSection = () => {

  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  useGSAP(() => {
    const firstMsgSplit = SplitText.create(".first-message", {
      type: "words"
    });
    const secMsgSplit = SplitText.create(".second-message", {
      type: "words"
    });

    const middleMsgSplit = SplitText.create(".msg-text-scroll", {
      type: "words"
    });

    gsap.to(firstMsgSplit.words, {
      color: isDarkMode ? '#f1f5f9' : '#1e293b',
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".message-content",
        start: "top center",
        end: "42% center",
        // markers: true,
        scrub: true
      }
    });

    gsap.to(middleMsgSplit.words, {
      color: isDarkMode ? '#f1f5f9' : '#1e293b',
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".msg-text-scroll",
        start: "30% center",
        // markers: true,
        end: "101% center",
        scrub: true
      }
    });

    gsap.to(secMsgSplit.words, {
      color: isDarkMode ? '#f1f5f9' : '#1e293b',
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".second-message",
        start: "top center",
        // markers: true,
        end: "bottom center",
        scrub: true
      }
    });

  }, [isDarkMode]);

  return (
    <section className='message-content'>
      <div className='container mx-auto flex-center py-28 relative'>
        <div className='w-full h-full'>
          <div className='msg-wrapper'>
            <h1 className='first-message'>Turning Data</h1>
            <div className='msg-text-scroll'>
              <h2 className='sm:mt-12'>into</h2>
            </div>
            <h1 className='second-message pt-8'>Actionable Insights</h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MessageSection