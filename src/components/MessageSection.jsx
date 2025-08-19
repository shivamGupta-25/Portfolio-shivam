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

    const paragraphSplit = SplitText.create(".message-content p", {
      type: "words, lines",
      linesClass: "paragraph-line"
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

    const revealTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".msg-text-scroll",
        start: "center center",
        end: "bottom center",
        // markers: true,
        scrub: true
      }
    })
    revealTl.to(".msg-text-scroll", {
      duration: 1,
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      ease: "circ.inOut"
    });


    const paragraphTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".message-content p",
        start: "top center"
      }
    });
    paragraphTl.from(paragraphSplit.words, {
      yPercent: 300,
      rotate: 3,
      ease: "power1.inOut",
      duration: 1,
      stagger: 0.01
    })
  }, [isDarkMode]);

  return (
    <section className='message-content'>
      <div className='container mx-auto flex-center py-28 relative'>
        <div className='w-full h-full'>
          <div className='msg-wrapper'>
            <h1 className='first-message'>Turning Data</h1>

            <div style={{
              clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
            }} className='msg-text-scroll'>
              <div className='md:pb-5 pb-3 px-5'>
                <h2 className='text-slate-700 dark:text-slate-100'>into</h2>
              </div>
            </div>
            <h1 className='second-message'>Actionable Insights</h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MessageSection