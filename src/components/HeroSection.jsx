import React from 'react'
import { Button } from '@/components/ui/button'
import gsap from 'gsap'
import { useGSAP } from "@gsap/react"
import { SplitText } from 'gsap/all';

const HeroSection = () => {

  const scrollToSkills = () => {
    const projectSection = document.getElementById('project-section');
    if (projectSection) {
      // Use window.scrollTo for more reliable smooth scrolling
      const projectTop = projectSection.offsetTop;
      window.scrollTo({
        top: projectTop,
        behavior: 'smooth',
      });
    }
  };

  useGSAP(() => {
    const titleSplit = SplitText.create(".hero-title", {
      type: "chars",
    });

    const tl = gsap.timeline({
      delay: 1,
    });

    tl.to(".hero-content", {
      opacity: 1,
      y: 0,
      ease: "power1.inOut"
    }).to(".hero-text-scroll", {
      duration: 1,
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      ease: 'circ.out'
    }, "-=0.5")
      .from(titleSplit.chars, {
        yPercent: 200,
        stagger: 0.02,
        ease: "power2.out"
      }, "-=0.5");

    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
        start: "1% top",
        end: "bottom top",
        scrub: true
      },
    });

    heroTl.to(".hero-container", {
      rotate: 7,
      scale: 0.9,
      yPercent: 30,
      ease: "power1.inOut"
    })
  });

  return (
    <section id="hero" className="bg-primary overflow-hidden">
      <div className="hero-container">
        <div className="hero-content opacity-0 ">
          <div className="overflow-hidden">
            <h1 className="hero-title">Shivam Gupta</h1>
          </div>
          <div
            style={{
              clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)',
            }} className="hero-text-scroll">
            <div className="hero-subtitle">
              <h1>
                Data Analyst
              </h1>
            </div>
          </div>
          <h2 className='font-sans'>
            Transforming complex data into actionable insights. Specializing in analytics, visualization, and data-driven decision making.
          </h2>

          <Button
            className="hero-button font-sans font-extrabold"
            onClick={scrollToSkills}>
            Explore My Work
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection