import React from 'react'
import { Badge } from '@/components/ui/badge'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import { useMediaQuery } from "react-responsive"
import { skillsData } from '@/Data/Data.jsx'

const Skills = () => {
  const allSkills = Object.values(skillsData).flat()
  
  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  useGSAP(() => {
    // Animation constants
    const animationConfig = {
      title: {
        y: isTablet ? 40 : 50,
        duration: isTablet ? 0.9 : 0.8,
        stagger: 0.1,
      },
      description: {
        y: isTablet ? 25 : 30,
        duration: isTablet ? 0.7 : 0.6,
        stagger: 0.02,
      },
      skills: {
        y: 20,
        duration: 0.6,
        stagger: 0.03,
      },
    };

    // Scroll trigger configuration
    const scrollTriggerOptions = {
      trigger: ".skills-container",
      start: isTablet ? "top 80%" : "top 85%",
      end: isTablet ? "+=100%" : "+=150%",
      // scrub: true,
      // markers: true
    };

    const mainTl = gsap.timeline({
      scrollTrigger: scrollTriggerOptions,
    });

    // Create split text instances
    const skillsTitle = SplitText.create(".skills-header h2", {
      type: "words"
    });

    const skillsDescription = SplitText.create(".skills-header p", {
      type: "words, lines",
    });

    // Title animation
    mainTl.fromTo(skillsTitle.words, {
      y: animationConfig.title.y,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      color: "var(--primary)",
      ease: "power2.out",
      stagger: animationConfig.title.stagger,
      duration: animationConfig.title.duration,
    }, 0);

    // Description animation
    mainTl.fromTo(skillsDescription.words, {
      y: animationConfig.description.y,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      color: "var(--muted-foreground)",
      ease: "power2.out",
      stagger: animationConfig.description.stagger,
      duration: animationConfig.description.duration,
    }, 0.15);

    // Desktop skills animation
    mainTl.fromTo(".desktop-skills .skill-category", {
      opacity: 0,
      y: animationConfig.skills.y,
    }, {
      opacity: 1,
      y: 0,
      ease: "power2.out",
      stagger: 0.1,
      duration: animationConfig.skills.duration,
    }, 0.5);

    // Mobile skills animation
    mainTl.fromTo(".mobile-skills .skill-badge", {
      opacity: 0,
      y: animationConfig.skills.y,
      scale: 0.8,
    }, {
      opacity: 1,
      y: 0,
      scale: 1,
      ease: "power2.out",
      stagger: animationConfig.skills.stagger,
      duration: animationConfig.skills.duration,
    }, 0.3);
  });

  return (
    <section id="skills-section" className="skills-container h-auto p-4 sm:p-6 lg:p-8 py-6 sm:py-8 lg:py-12 max-w-5xl mx-auto font-sans">
      <div className="skills-header text-center sm:text-left mb-8">
        <h2 className="text-5xl font-extrabold sm:text-3xl lg:text-5xl tracking-tight">
          Skills
        </h2>
        <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-2xl">
          Comprehensive expertise in data analysis, visualization, and statistics
          for extracting meaningful insights from complex datasets.
        </p>
      </div>

      {/* Desktop: Categorized Layout */}
      <div className="desktop-skills hidden lg:block">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="skill-category space-y-4">
              <h3 className="text-lg font-semibold border-b border-border pb-2">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="default">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile/Tablet: Simple Layout */}
      <div className="mobile-skills block lg:hidden">
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start">
          {allSkills.map((skill) => (
            <Badge key={skill} variant="default" className="skill-badge">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills