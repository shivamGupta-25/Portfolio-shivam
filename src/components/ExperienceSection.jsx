import React, { useState } from "react";
import { MapPin, Calendar, Briefcase, Code, Building2, ExternalLink, ChevronDown, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ResumePDF from "@/Data/ShivamRajGupta_CV.pdf";

// Constants
const EXPERIENCE_TYPES = {
  INTERNSHIP: "internship",
  FREELANCE: "freelance",
  FULL_TIME: "full-time"
};

const TYPE_ICONS = {
  [EXPERIENCE_TYPES.INTERNSHIP]: Building2,
  [EXPERIENCE_TYPES.FREELANCE]: Code,
  [EXPERIENCE_TYPES.FULL_TIME]: Briefcase
};

const TYPE_BADGE_CLASSES = {
  [EXPERIENCE_TYPES.INTERNSHIP]: "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800",
  [EXPERIENCE_TYPES.FREELANCE]: "bg-green-100 text-green-800 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800",
  [EXPERIENCE_TYPES.FULL_TIME]: "bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800"
};

const DYNAMIC_COLORS = ['blue', 'green', 'yellow', 'pink', 'purple', 'indigo', 'red', 'emerald', 'orange', 'teal'];

// Data
const experienceData = [
  {
    id: "1",
    title: "Administrative Intern",
    company: "Vice-Chancellor Internship Scheme, University of Delhi",
    period: "Nov 2024 – May 2025",
    location: "North Campus, New Delhi",
    type: EXPERIENCE_TYPES.INTERNSHIP,
    logoUrl: "/logos/Delhi_University.png",
    responsibilities: [
      "Collected, organized, and validated large datasets to ensure accuracy.",
      "Cleaned and formatted raw data, improving usability and reporting quality."
    ],
    technologies: ["Microsoft Excel", "Data Analysis", "Database Management"],
    achievements: [
      "Improved data processing efficiency by 40%",
      "Handled over 10,000 student records with 99.8% accuracy"
    ]
  },
  {
    id: "2",
    title: "Administrative Intern",
    company: "Principal Internship Scheme - Shivaji College, University of Delhi",
    period: "June 2024 – July 2025",
    location: "New Delhi",
    type: EXPERIENCE_TYPES.INTERNSHIP,
    logoUrl: "/logos/shivaji logo.png",
    responsibilities: [
      "Supported daily administrative operations by preparing and organizing data.",
      "Handled official documentation and correspondence across departments."
    ],
    technologies: ["Microsoft Office", "Data Organization", "Communication Platforms"],
    achievements: [
      "Streamlined document management workflow",
      "Facilitated communication between 5+ departments"
    ]
  },
  {
    id: "3",
    title: "Web Developer",
    company: "Freelance",
    period: "July 2025",
    location: "New Delhi",
    type: EXPERIENCE_TYPES.FREELANCE,
    logoUrl: "/logos/Udhgeet-Logo.png",
    responsibilities: [
      "Developed a fully functional website (udgeet.in) using WordPress and Elementor.",
      "Optimized website for performance, SEO, and mobile responsiveness."
    ],
    technologies: ["WordPress", "Elementor", "HTML/CSS", "SEO"],
    achievements: [
      "Achieved 95+ PageSpeed Insights score",
      "Delivered project 2 weeks ahead of schedule"
    ]
  }
];

// Utility functions
const getTypeIcon = (type) => {
  const IconComponent = TYPE_ICONS[type.toLowerCase()] || TYPE_ICONS[EXPERIENCE_TYPES.FULL_TIME];
  return <IconComponent className="h-3.5 w-3.5" />;
};

const getTypeBadgeClass = (type) => {
  return TYPE_BADGE_CLASSES[type.toLowerCase()] || TYPE_BADGE_CLASSES[EXPERIENCE_TYPES.FULL_TIME];
};

const getDynamicColor = (key) => {
  const colorIndex = key.length % DYNAMIC_COLORS.length;
  return DYNAMIC_COLORS[colorIndex];
};

const capitalizeType = (type) => {
  return type.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

// Sub-components
const TechnologyPreview = ({ technologies, maxVisible = 3, className = "" }) => {
  const visibleTechs = technologies.slice(0, maxVisible);
  const remainingCount = technologies.length - maxVisible;

  return (
    <div className={`flex flex-wrap gap-1 sm:gap-1.5 ${className}`}>
      {visibleTechs.map((tech, idx) => (
        <Badge key={idx} variant="outline" className="text-xs px-2 py-0.5">
          {tech}
        </Badge>
      ))}
      {remainingCount > 0 && (
        <Badge variant="outline" className="text-xs px-2 py-0.5">
          +{remainingCount} more
        </Badge>
      )}
    </div>
  );
};

const ExperienceCardHeader = ({ experience, isExpanded, onToggle }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-start gap-3 sm:gap-4">
      {/* Logo and Title */}
      <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0">
        <div className="relative flex-shrink-0">
          <div className="w-12 h-12 sm:w-16 sm:h-16 p-1 rounded-full bg-muted/50 border flex items-center justify-center">
            <img
              src={experience.logoUrl}
              alt={experience.company}
              className="object-contain w-full h-full"
            />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-start gap-2 mb-2">
            <div className="flex items-start gap-2 flex-wrap">
              <h3 className="text-base sm:text-lg font-semibold tracking-tight leading-tight">
                {experience.title}
              </h3>
              <Badge className={`w-fit text-xs sm:text-sm ${getTypeBadgeClass(experience.type)}`}>
                {getTypeIcon(experience.type)}
                <span className="hidden sm:inline">{capitalizeType(experience.type)}</span>
                <span className="sm:hidden">{capitalizeType(experience.type)}</span>
              </Badge>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggle();
                }}
                className="transition-all duration-200 p-1.5 rounded-md flex-shrink-0 sm:opacity-0 sm:group-hover:opacity-100 opacity-100 scale-100"
                aria-label={isExpanded ? "Collapse details" : "Expand details"}
              >
                {isExpanded ? (
                  <ChevronDown className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                )}
              </button>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-2 sm:mb-3 leading-relaxed">
            {experience.company}
          </p>
          <TechnologyPreview
            technologies={experience.technologies}
            maxVisible={3}
            className="hidden sm:flex"
          />
          <TechnologyPreview
            technologies={experience.technologies}
            maxVisible={2}
            className="sm:hidden"
          />
        </div>
      </div>

      {/* Duration and Location */}
      <div className="flex flex-col gap-1.5 sm:gap-2 text-sm text-muted-foreground lg:text-right lg:flex-shrink-0 lg:w-48">
        <div className="flex items-center gap-1.5 lg:justify-end">
          <Calendar className="h-4 w-4 flex-shrink-0" />
          <span className="font-medium text-xs sm:text-sm">{experience.period}</span>
        </div>
        <div className="flex items-center gap-1.5 lg:justify-end">
          <MapPin className="h-4 w-4 flex-shrink-0" />
          <span className="text-xs sm:text-sm">{experience.location}</span>
        </div>
      </div>
    </div>
  );
};

const ExperienceDetails = ({ experience }) => {
  const standardFields = ['id', 'title', 'company', 'period', 'location', 'type', 'logoUrl', 'responsibilities', 'technologies', 'achievements'];

  return (
    <div className="border-t pt-4 sm:pt-6 space-y-4 sm:space-y-6">
      {/* Key Responsibilities */}
      <div>
        <h4 className="font-medium mb-2 sm:mb-3 text-sm flex items-center gap-2">
          <ExternalLink className="h-4 w-4 text-primary flex-shrink-0" />
          Key Responsibilities
        </h4>
        <ul className="space-y-2 ml-4 sm:ml-6">
          {experience.responsibilities.map((responsibility, idx) => (
            <li key={idx} className="flex items-start gap-2 sm:gap-3 text-sm text-muted-foreground">
              <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span className="leading-relaxed">{responsibility}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Technologies */}
      <div>
        <h4 className="font-medium mb-2 sm:mb-3 text-sm flex items-center gap-2">
          <Code className="h-4 w-4 text-primary flex-shrink-0" />
          Technologies & Tools
        </h4>
        <div className="flex flex-wrap gap-1.5 ml-4 sm:ml-6">
          {experience.technologies.map((tech, idx) => (
            <Badge key={idx} variant="secondary" className="text-xs px-2 py-0.5">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Achievements */}
      {experience.achievements && (
        <div>
          <h4 className="font-medium mb-2 sm:mb-3 text-sm flex items-center gap-2">
            <div className="h-4 w-4 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
              <div className="h-2 w-2 rounded-full bg-white" />
            </div>
            Key Achievements
          </h4>
          <ul className="space-y-2 ml-4 sm:ml-6">
            {experience.achievements.map((achievement, idx) => (
              <li key={idx} className="flex items-start gap-2 sm:gap-3 text-sm text-muted-foreground">
                <div className="h-1.5 w-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                <span className="leading-relaxed">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Additional Information */}
      {Object.entries(experience).map(([key, value]) => {
        if (standardFields.includes(key) || !value || (Array.isArray(value) && value.length === 0)) {
          return null;
        }

        const color = getDynamicColor(key);
        const fieldName = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');

        return (
          <div key={key}>
            <h4 className="font-medium mb-2 sm:mb-3 text-sm flex items-center gap-2">
              <div className={`h-4 w-4 rounded-full bg-${color}-500 flex items-center justify-center flex-shrink-0`}>
                <div className="h-2 w-2 rounded-full bg-white" />
              </div>
              {fieldName}
            </h4>
            {Array.isArray(value) ? (
              <ul className="space-y-2 ml-4 sm:ml-6">
                {value.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 sm:gap-3 text-sm text-muted-foreground">
                    <div className={`h-1.5 w-1.5 rounded-full bg-${color}-500 mt-2 flex-shrink-0`} />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="ml-4 sm:ml-6">
                <span className="text-sm text-muted-foreground leading-relaxed">{value}</span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

const ExperienceCard = ({ experience }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="group py-4 px-3 sm:py-6 sm:px-4 cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setIsExpanded(!isExpanded);
        }
      }}
    >
      <ExperienceCardHeader
        experience={experience}
        isExpanded={isExpanded}
        onToggle={() => setIsExpanded(!isExpanded)}
      />

      {/* Expandable Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[500px] opacity-100 mt-4 sm:mt-6' : 'max-h-0 opacity-0'
          }`}
      >
        <ExperienceDetails experience={experience} />
      </div>
    </div>
  );
};

const ExperienceHeader = () => (
  <div className="text-center sm:text-left mb-8 font-sans">
    <h2 className="text-5xl font-extrabold sm:text-3xl lg:text-5xl tracking-tight">
      Experience
    </h2>
    <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-2xl">
      A comprehensive overview of my professional journey, showcasing technical expertise
      and impactful contributions across various roles.
    </p>
  </div>
);

const ExperienceList = () => (
  <div className="space-y-1 sm:space-y-2">
    {experienceData.map((exp, index) => (
      <div key={exp.id}>
        <ExperienceCard experience={exp} />
        {index < experienceData.length - 1 && (
          <hr className="bg-muted mx-3 sm:mx-4" />
        )}
      </div>
    ))}
  </div>
);

const CallToAction = () => {
  const openResume = () => {
    window.open(ResumePDF, "_blank");
  };

  return (
    <div className="mt-8 sm:mt-12 text-center">
      <p className="text-sm text-muted-foreground mb-3 sm:mb-4">
        Want to see the complete picture?
      </p>
      <Button
        size="lg"
        className="gap-2 text-sm sm:text-base cursor-pointer"
        onClick={openResume}
      >
        <ExternalLink className="h-4 w-4" />
        Download Resume
      </Button>
    </div>
  );
};

export default function Experience() {
  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 lg:py-16 font-sans">
      <div className="mx-auto max-w-4xl">
        <ExperienceHeader />
        <ExperienceList />
        <CallToAction />
      </div>
    </section>
  );
}