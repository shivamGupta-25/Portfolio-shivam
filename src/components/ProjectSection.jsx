import React, { useState } from "react";
import { Globe, ChevronDown, ChevronRight, Calendar, FolderOpen, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectDATA } from "@/Data/Data.jsx";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Utility functions
const getProjectIcon = (project) => {
  // Check if project has website link
  if (project.links && project.links.some(link => link.type === "Website")) {
    return <Globe className="h-4 w-4" />;
  }
  return <FolderOpen className="h-4 w-4" />;
};

const getProjectBadgeClass = (project) => {
  // Different badge styles based on project type
  if (project.type === "Website") {
    return "bg-green-100 text-green-800 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800";
  }
  if (project.type === "Application") {
    return "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800";
  }
  if (project.type === "Analysis Project") {
    return "bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800";
  }
  return "bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-950 dark:text-gray-300 dark:border-gray-800";
};

// Sub-components
const ProjectLinks = ({ links }) => {
  if (!links || links.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {links.map((link, idx) => (
        <Button
          key={idx}
          variant="outline"
          size="sm"
          className="gap-2 text-xs h-8 px-3 bg-gradient-to-r from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10 border-primary/30 hover:border-primary/50 text-primary hover:text-primary/90 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 font-medium"
          onClick={() => window.open(link.href, "_blank")}
        >
          {link.icon}
          {link.type}
        </Button>
      ))}
    </div>
  );
};

const ProjectCardHeader = ({ project, isExpanded, onToggle, hasContent }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-start gap-3 sm:gap-4">
      <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0">
        <div className="relative flex-shrink-0">
          <div className="relative w-12 h-12 sm:w-16 sm:h-16 p-1 rounded-full border flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 dark:from-blue-950 dark:via-blue-900 dark:to-blue-800 border-blue-300/50 dark:border-blue-600/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 group backdrop-blur-sm">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent dark:from-white/5 dark:to-transparent"></div>
            <div className="relative text-blue-700 dark:text-blue-200 group-hover:text-blue-600 dark:group-hover:text-blue-100 transition-colors duration-300 drop-shadow-sm">
              {project.icon}
            </div>
            <div className="absolute inset-0 rounded-full border border-white/30 dark:border-white/10"></div>
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-start gap-2 mb-2">
            <div className="flex items-start gap-2 flex-wrap">
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold tracking-tight leading-tight">
                {project.title}
              </h3>
              <Badge className={`w-fit text-xs px-2 py-0.5 ${getProjectBadgeClass(project)}`}>
                {getProjectIcon(project)}
                <span className="hidden sm:inline">{project.type}</span>
                <span className="sm:hidden">{project.type}</span>
              </Badge>
              {hasContent && (
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
              )}
            </div>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3 leading-relaxed line-clamp-2">
            {project.description}
          </p>
          {/* All Technologies Displayed in Header */}
          <div className="flex flex-wrap gap-1 sm:gap-1.5">
            {project.technologies.map((tech, idx) => (
              <Badge key={idx} variant="outline" className="text-xs px-2 py-0.5">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Date and Links */}
      <div className="flex flex-col gap-1.5 sm:gap-2 text-sm text-muted-foreground lg:text-right lg:flex-shrink-0 lg:w-48">
        <div className="flex items-center gap-1.5 lg:justify-end">
          <Calendar className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
          <span className="font-medium text-xs sm:text-sm">{project.dates}</span>
        </div>
        <div className="flex flex-col gap-1.5 lg:items-end">
          <ProjectLinks links={project.links} />
        </div>
      </div>
    </div>
  );
};

const ProjectDetails = ({ project, isExpanded }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = React.useRef(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      } else {
        videoRef.current.play();
        setIsVideoPlaying(true);
      }
    }
  };

  // Stop video when accordion closes
  React.useEffect(() => {
    if (!isExpanded && videoRef.current) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }
  }, [isExpanded]);

  return (
    <div className="border-t pt-3 sm:pt-4 lg:pt-6 space-y-3 sm:space-y-4 lg:space-y-6">
      {/* Full Description */}
      <div>
        <h4 className="font-medium mb-2 sm:mb-3 text-sm flex items-center gap-2">
          <FolderOpen className="h-4 w-4 text-primary flex-shrink-0" />
          Project Overview
        </h4>
        <div className="ml-2 sm:ml-4 lg:ml-6">
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>

      {/* Project Video Preview */}
      {project.video && (
        <div>
          <h4 className="font-medium mb-3 sm:mb-4 lg:mb-6 text-sm flex items-center gap-2">
            <Play className="h-4 w-4 text-primary flex-shrink-0" />
            Project Preview
          </h4>
          <div className="ml-2 sm:ml-4 lg:ml-6">
            <div className="relative group">
              <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto sm:mx-0">
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-muted/30 sm:border-2 p-2">
                  {project.video.endsWith('.mp4') || project.video.endsWith('.webm') || project.video.endsWith('.mov') ? (
                    <div className="relative">
                      <video
                        ref={videoRef}
                        src={project.video}
                        className="w-full h-auto rounded-lg object-cover"
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        onEnded={() => setIsVideoPlaying(false)}
                        onPause={() => setIsVideoPlaying(false)}
                      />
                      <button
                        type="button"
                        aria-label={isVideoPlaying ? "Pause video" : "Play video"}
                        className="absolute inset-0 flex items-center justify-center cursor-pointer border-0 bg-transparent p-0 text-center"
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePlayVideo();
                        }}>
                        <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black/50 backdrop-blur-sm border border-white/30 shadow-lg hover:bg-black/60 transition-all duration-200">
                          {isVideoPlaying ? (
                            <div className="flex items-center justify-center gap-1">
                              <div className="w-1.5 h-6 bg-white rounded-sm"></div>
                              <div className="w-1.5 h-6 bg-white rounded-sm"></div>
                            </div>
                          ) : (
                            <Play className="w-6 h-6 text-white fill-white ml-1" />
                          )}
                        </div>
                      </button>
                    </div>
                  ) :
                    (<img
                      src={project.video}
                      alt={project.title}
                      className="w-full h-auto rounded-lg sm:rounded-xl object-cover transition-all duration-700 hover:scale-110"
                    />)
                  }
                  <Badge className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-black/50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm opacity-100">
                    {project.dates}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Check if project has any details to show
  const hasDetails = () => {
    return (
      project.description ||
      (project.technologies && project.technologies.length > 0) ||
      (project.links && project.links.length > 0) ||
      project.video
    );
  };

  const hasContent = hasDetails();

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
    // Refresh ScrollTrigger after accordion animation completes
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 350); // Slightly longer than the CSS transition duration
  };

  return (
    <div
      className={`group py-3 px-2 sm:py-4 sm:px-3 lg:py-6 lg:px-4 ${hasContent ? 'cursor-pointer' : ''}`}
      onClick={hasContent ? handleToggle : undefined}
      role={hasContent ? "button" : undefined}
      tabIndex={hasContent ? 0 : undefined}
      onKeyDown={hasContent ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleToggle();
        }
      } : undefined}
    >
      <ProjectCardHeader
        project={project}
        isExpanded={isExpanded}
        onToggle={hasContent ? handleToggle : undefined}
        hasContent={hasContent}
      />

      {/* Expandable Content - Only render if there are details */}
      {hasContent && (
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[800px] opacity-100 mt-3 sm:mt-4 lg:mt-6' : 'max-h-0 opacity-0'
            }`}
        >
          <ProjectDetails project={project} isExpanded={isExpanded} />
        </div>
      )}
    </div>
  );
};

const ProjectHeader = () => (
  <div className="text-center sm:text-left mb-6 sm:mb-8 font-sans">
    <h2 className="text-5xl font-extrabold sm:text-3xl lg:text-5xl tracking-tight">
      Projects
    </h2>
    <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto sm:mx-0">
      A showcase of my technical projects, demonstrating problem-solving skills,
      technical expertise, and passion for building innovative solutions.
    </p>
  </div>
);

const ProjectList = () => (
  <div className="space-y-1 sm:space-y-2">
    {ProjectDATA.map((project, index) => (
      <div key={project.title}>
        <ProjectCard project={project} />
        {index < ProjectDATA.length - 1 && (
          <hr className="bg-muted mx-2 sm:mx-3 lg:mx-4" />
        )}
      </div>
    ))}
  </div>
);

export default function ProjectSection() {
  return (
    <section id="project-section" className="py-6 px-2 sm:py-8 sm:px-3 lg:py-12 lg:px-4 xl:py-16 font-sans">
      <div className="mx-auto max-w-4xl">
        <ProjectHeader />
        <ProjectList />
      </div>
    </section>
  );
}