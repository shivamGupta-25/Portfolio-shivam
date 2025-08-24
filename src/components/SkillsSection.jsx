import React from 'react'
import { Badge } from '@/components/ui/badge'
import { useMediaQuery } from "react-responsive"
import { skillsData } from '@/Data/Data.jsx'

const Skills = () => {
  const allSkills = Object.values(skillsData).flat()
  
  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  return (
    <section className="skills-container h-auto p-4 sm:p-6 lg:p-8 py-6 sm:py-8 lg:py-12 max-w-5xl mx-auto font-sans">
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