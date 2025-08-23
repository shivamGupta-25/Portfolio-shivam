// Skills Data
export const skillsData = {
  'Programming Languages': [
    'Python', 'JavaScript', 'C++', 'HTML/CSS', 'LaTeX', 'SQL'
  ],
  'Data Science & Visualization': [
    'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly', 'Tkinter'
  ],
  'Excel & Data Analysis': [
    'Pivot Tables', 'Pivot Charts', 'Power Query', 'VLOOKUP',
    'HLOOKUP', 'XLOOKUP', 'INDEX & MATCH', '...More'
  ],
  'Tools & Platforms': [
    'MS Office', 'WordPress', 'VS Code', 'Git & GitHub'
  ]
};

// Proof of Work Data
export const proofOfWorkData = [
  {
    id: 1,
    title: "VCIS Certificate",
    description: "Vice-Chancellor Internship Scheme Certificate from University of Delhi",
    image: "/certificates/ProofOfWork/VCIS Certificate.jpg"
  },
  {
    id: 2,
    title: "Principal Internship Scheme Certificate",
    description: "Principal Internship Scheme Certificate from Shivaji College",
    image: "/certificates/ProofOfWork/Principal Internship Scheme Certificate.jpg"
  },
  {
    id: 3,
    title: "Letter of Appreciation - Udgeet",
    description: "Letter of Appreciation for Udgeet project work",
    image: "/certificates/ProofOfWork/Letter of Appreciation_Udgeet.jpg"
  }
];

// Experience Data
export const EXPERIENCE_TYPES = {
  INTERNSHIP: "internship",
  FREELANCE: "freelance",
  FULL_TIME: "full-time"
};

export const TYPE_ICONS = {
  [EXPERIENCE_TYPES.INTERNSHIP]: "Building2",
  [EXPERIENCE_TYPES.FREELANCE]: "Code",
  [EXPERIENCE_TYPES.FULL_TIME]: "Briefcase"
};

export const TYPE_BADGE_CLASSES = {
  [EXPERIENCE_TYPES.INTERNSHIP]: "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800",
  [EXPERIENCE_TYPES.FREELANCE]: "bg-green-100 text-green-800 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800",
  [EXPERIENCE_TYPES.FULL_TIME]: "bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800"
};

export const DYNAMIC_COLORS = ['blue', 'green', 'yellow', 'pink', 'purple', 'indigo', 'red', 'emerald', 'orange', 'teal'];

export const experienceData = [
  {
    id: "4",
    title: "Udhmodya, Delhi University",
    company: "Book with UVA (Start-up)",
    period: "Aug 2025 – Present",
    location: "North Campus, New Delhi",
    type: EXPERIENCE_TYPES.INTERNSHIP,
    logoUrl: "/logos/udhmodya.png",
    responsibilities: [
    ],
    technologies: [],
  },
  {
    id: "3",
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
    technologies: ["Microsoft Excel", "Data Analysis", "Database Management"]
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
    technologies: ["Microsoft Office", "Data Organization", "Communication Platforms"]
  },
  {
    id: "1",
    title: "Web Developer",
    company: "Freelance",
    period: "July 2025",
    location: "New Delhi",
    type: EXPERIENCE_TYPES.FREELANCE,
    logoUrl: "/logos/Udhgeet-Logo.png",
    responsibilities: [
      `Developed a fully functional website (udgeet.in) using WordPress and Elementor.`,
      "Optimized website for performance, SEO, and mobile responsiveness."
    ],
    technologies: ["WordPress", "Elementor", "HTML/CSS", "SEO"],
    achievements: [
      "Achieved 95+ PageSpeed Insights score",
      "Delivered project 2 weeks ahead of schedule"
    ]
  }
];

// Education Data
export const EDUCATION_TYPES = {
  MASTERS: "masters",
  GRADUATION: "graduation",
  HIGHER_EDUCATION: "higher education"
};

export const EDUCATION_TYPE_ICONS = {
  [EDUCATION_TYPES.MASTERS]: "GraduationCap",
  [EDUCATION_TYPES.GRADUATION]: "BookOpen",
  [EDUCATION_TYPES.HIGHER_EDUCATION]: "Award"
};

export const EDUCATION_TYPE_BADGE_CLASSES = {
  [EDUCATION_TYPES.MASTERS]: "bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800",
  [EDUCATION_TYPES.GRADUATION]: "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800",
  [EDUCATION_TYPES.HIGHER_EDUCATION]: "bg-green-100 text-green-800 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800"
};

export const educationData = [
  {
    id: "3",
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
    degree: "BSc. Computer Science",
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
    keySubjects: ["Python","Database Systems", "Data Analysis" ,"Computer Networks", "Web Development", "Operating Systems", "Data Structures"]
  },
  {
    id: "1",
    degree: "Grade: 12th",
    institution: "Plato Public Sr. Sec. School",
    period: "2022",
    location: "New Delhi, India",
    type: EDUCATION_TYPES.HIGHER_EDUCATION,
    logoUrl: "/logos/PlatoLogo.jpeg",
    gpa: "Percentage: 90%",
    // achievements: [
    //   "Outstanding academic performance",
    //   "Strong foundation in science and mathematics"
    // ],
    keySubjects: ["Physics", "Chemistry", "Mathematics", "Computer Science", "English"]
  }
];

// Dock Navigation Data
export const dockNavData = {
  navbar: [
    { href: "#", icon: "HomeIcon", label: "Home" },
    // { href: "#", icon: "PencilIcon", label: "Blog" },
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/shivamGupta-25",
        icon: "github",
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shivam-raj-gupta/",
        icon: "linkedin",
      },
      email: {
        name: "Send Email",
        url: "mailto:guptashivam25oct@gmail.com",
        icon: "email",
      },
    },
  },
};

// Icons Data for Dock Navigation
export const iconsData = {
  calendar: "CalendarIcon",
  email: "MailIcon",
  linkedin: "linkedin",
  x: "x",
  youtube: "youtube",
  github: "github",
};

export const certificate = [
  {
    name: "Advance Excel and Visualization",
    rotation: "md:rotate-[-2deg] rotate-0",
    certificate: "/certificates/General/Certificate - IFACET IITK.jpg"
  },
  {
    name: "Latex Certificate",
    rotation: "md:rotate-[2deg] rotate-0",
    certificate: "/certificates/General/Latex_Certificate.jpg"
  },
  {
    name: "Data Analytics Bootcamp Certificate",
    rotation: "md:rotate-[-2deg] rotate-0",
    certificate: "/certificates/General/Data Analytics Bootcamp Certification of Completion.jpg"
  },
  {
    name: "HackerRank ProblemSolving Basic",
    rotation: "md:rotate-[2deg] rotate-0",
    certificate: "/certificates/General/ProblemSolvingBasics.jpg"
  },
  {
    name: "HackerRank SQL Basic",
    rotation: "md:rotate-[-2deg] rotate-0",
    certificate: "/certificates/General/SQLBasic.jpg"
  },
  {
    name: "HackerRank Python Basic",
    rotation: "md:rotate-[2deg] rotate-0",
    certificate: "/certificates/General/PythonBasics.jpg"
  },
  {
    name: "ARC Tech Member Certificate",
    rotation: "md:rotate-[-2deg] rotate-0",
    certificate: "/certificates/General/ARC Tech Member Certificate.jpg"
  },
  {
    name: "Hindi Pakhwada 2024",
    rotation: "md:rotate-[2deg] rotate-0",
    certificate: "/certificates/General/Hindi Pakhwada 2024.jpg"
  },
  {
    name: "Poster Making Competition",
    rotation: "md:rotate-[-2deg] rotate-0",
    certificate: "/certificates/General/Poster Making Competition.jpg"
  },
  {
    name: "Tedx Certificate",
    rotation: "md:rotate-[2deg] rotate-0",
    certificate: "/certificates/General/Tedx Certificate.jpg"
  },
  {
    name: "UI UX Workshop",
    rotation: "md:rotate-[-2deg] rotate-0",
    certificate: "/certificates/General/UI UX Workshop.jpg"
  }
];
