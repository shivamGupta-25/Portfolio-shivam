import React from "react";
import { GraduationCap, Award, BookOpen, ExternalLink
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Constants
const EDUCATION_TYPES = {
  MASTERS: "masters",
  GRADUATION: "graduation",
  HIGHER_EDUCATION: "higher education"
};

const TYPE_ICONS = {
  [EDUCATION_TYPES.MASTERS]: GraduationCap,
  [EDUCATION_TYPES.GRADUATION]: BookOpen,
  [EDUCATION_TYPES.HIGHER_EDUCATION]: Award
};

const TYPE_BADGE_CLASSES = {
  [EDUCATION_TYPES.MASTERS]: "bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800",
  [EDUCATION_TYPES.GRADUATION]: "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800",
  [EDUCATION_TYPES.HIGHER_EDUCATION]: "bg-green-100 text-green-800 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800"
};

// Data
const educationData = [
  {
    id: "1",
    degree: "Master of Operational Research",
    institution: "Department of Operational Research, University of Delhi",
    period: "2025 – Present",
    location: "New Delhi, India",
    type: EDUCATION_TYPES.MASTERS,
    logoUrl: "/logos/Delhi_University.png",
    gpa: "",
    achievements: [
      "Currently pursuing advanced research in operational optimization",
      "Specializing in mathematical modeling and data analysis"
    ],
    keySubjects: ["Operations Research", "Mathematical Modeling", "Data Analysis", "Optimization"]
  },
  {
    id: "2",
    degree: "BSc Computer Science",
    institution: "Shivaji College, University of Delhi",
    period: "2022 – 2025",
    location: "New Delhi, India",
    type: EDUCATION_TYPES.GRADUATION,
    logoUrl: "/logos/shivaji logo.png",
    gpa: "CGPA: 8.2/10",
    achievements: [
      "Graduated with distinction",
      "Completed comprehensive computer science curriculum"
    ],
    keySubjects: ["Data Structures", "Algorithms", "Database Systems", "Web Development", "Software Engineering"]
  },
  {
    id: "3",
    degree: "Grade: 12th",
    institution: "Plato Public Sr. Sec. School",
    period: "2022",
    location: "New Delhi, India",
    type: EDUCATION_TYPES.HIGHER_EDUCATION,
    logoUrl: "/logos/PlatoLogo.jpeg",
    gpa: "Percentage: 90%",
    achievements: [
      "Outstanding academic performance",
      "Strong foundation in science and mathematics"
    ],
    keySubjects: ["Physics", "Chemistry", "Mathematics", "Computer Science", "English"]
  }
];

// Utility functions
const getTypeIcon = (type) => {
  const IconComponent = TYPE_ICONS[type.toLowerCase()] || TYPE_ICONS[EDUCATION_TYPES.GRADUATION];
  return <IconComponent className="h-3.5 w-3.5" />;
};

const getTypeBadgeClass = (type) => {
  return TYPE_BADGE_CLASSES[type.toLowerCase()] || TYPE_BADGE_CLASSES[EDUCATION_TYPES.GRADUATION];
};

const capitalizeType = (type) => {
  return type.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

// Sub-components
const SubjectPreview = ({ subjects, maxVisible = 4, className = "" }) => {
  const visibleSubjects = subjects.slice(0, maxVisible);
  const remainingCount = subjects.length - maxVisible;

  return (
    <div className={`flex flex-wrap gap-1 sm:gap-1.5 ${className}`}>
      {visibleSubjects.map((subject, idx) => (
        <Badge key={idx} variant="outline" className="text-xs px-2 py-0.5">
          {subject}
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

const EducationCard = ({ education }) => {
  return (
    <div className="group py-4 px-3 sm:py-6 sm:px-4">
      <div className="flex flex-col lg:flex-row lg:items-start gap-3 sm:gap-4">
        {/* Logo and Title */}
        <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0">
          <div className="relative flex-shrink-0">
            <div className="w-12 h-12 sm:w-16 sm:h-16 p-1 rounded-full bg-muted/50 border flex items-center justify-center">
              <img
                src={education.logoUrl}
                alt={education.institution}
                className="object-contain w-full h-full rounded-full"
              />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-start gap-2 mb-2">
              <div className="flex items-start gap-2 flex-wrap">
                <h3 className="text-base sm:text-lg font-semibold tracking-tight leading-tight">
                  {education.degree}
                </h3>
                <Badge className={`w-fit text-xs sm:text-sm ${getTypeBadgeClass(education.type)}`}>
                  {getTypeIcon(education.type)}
                  <span className="hidden sm:inline">{capitalizeType(education.type)}</span>
                  <span className="sm:hidden">{capitalizeType(education.type)}</span>
                </Badge>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2 sm:mb-3 leading-relaxed">
              {education.institution}
            </p>
            <SubjectPreview
              subjects={education.keySubjects}
              maxVisible={4}
              className="hidden sm:flex"
            />
            <SubjectPreview
              subjects={education.keySubjects}
              maxVisible={3}
              className="sm:hidden"
            />
          </div>
        </div>

        {/* Duration and Location */}
        <div className="flex flex-col gap-1.5 sm:gap-2 text-sm text-muted-foreground lg:text-right lg:flex-shrink-0 lg:w-48">
          <div className="flex items-center gap-1.5 lg:justify-end">
            {/* <Calendar className="h-4 w-4 flex-shrink-0" /> */}
            <span className="font-medium text-xs sm:text-sm">{education.period}</span>
          </div>
          <div className="flex items-center gap-1.5 lg:justify-end">
            {/* <MapPin className="h-4 w-4 flex-shrink-0" /> */}
            <span className="text-xs sm:text-sm">{education.location}</span>
          </div>
          {education.gpa && (
            <div className="flex items-center gap-1.5 lg:justify-end">
              <Badge className="bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-950 dark:text-amber-300 dark:border-amber-800 text-xs sm:text-sm font-medium px-2 py-1">
                <Award className="h-3 w-3 flex-shrink-0" />
                {education.gpa}
              </Badge>
            </div>
          )}
        </div>
      </div>

      {/* Achievements */}
      {/* {education.achievements && (
        <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t">
          <h4 className="font-medium mb-2 sm:mb-3 text-sm flex items-center gap-2">
            <div className="h-4 w-4 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
              <div className="h-2 w-2 rounded-full bg-white" />
            </div>
            Key Achievements
          </h4>
          <ul className="space-y-2 ml-4 sm:ml-6">
            {education.achievements.map((achievement, idx) => (
              <li key={idx} className="flex items-start gap-2 sm:gap-3 text-sm text-muted-foreground">
                <div className="h-1.5 w-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                <span className="leading-relaxed">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      )} */}
    </div>
  );
};

const EducationHeader = () => (
  <div className="text-center sm:text-left mb-8">
    <h2 className="text-5xl font-extrabold sm:text-3xl lg:text-5xl tracking-tight">
      Education
    </h2>
    <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-2xl">
      My academic background showcasing continuous learning and specialization
      in computer science and operational research.
    </p>
  </div>
);

const EducationList = () => (
  <div className="space-y-4 sm:space-y-6">
    {educationData.map((education, index) => (
      <div key={education.id}>
        <EducationCard education={education} />
        {index < educationData.length - 1 && (
          <hr className="bg-muted mx-3 sm:mx-4" />
        )}
      </div>
    ))}
  </div>
);

const CallToAction = () => (
  <div className="mt-8 sm:mt-12 text-center">
    <p className="text-sm text-muted-foreground mb-3 sm:mb-4">
      Want to learn more about my academic background?
    </p>
    <Button size="lg" className="gap-2 text-sm sm:text-base">
      <ExternalLink className="h-4 w-4" />
      View Certificates
    </Button>
  </div>
);

export default function EducationSection() {
  return (
    <section className="py-8 px-3 sm:py-12 sm:px-4 lg:py-16 font-sans">
      <div className="mx-auto max-w-4xl">
        <EducationHeader />
        <EducationList />
        {/* <CallToAction /> */}
      </div>
    </section>
  );
}