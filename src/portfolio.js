/* Personal portfolio data for RIAD MAHAMUD PIASH */

// Website related settings
const settings = {
  isSplash: false,
};

// Home Page
const greeting = {
  title: "RIAD MAHAMUD PIASH",
  logo_name: "RM PIASH",
  nickname: "Mechanical Engineer",
  subTitle:
    "Mechanical Engineer focused on Digital Twin systems, intelligent robotics, physics-based modeling, battery thermal estimation, and AI-enabled autonomous systems.",
  resumeLink: "https://rmpiash3.github.io/CV_of_RIAD_MAHAMUD_PIASH.pdf",
  portfolio_repository: "https://github.com/rmpiash3",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/rmpiash3",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rmpiash4",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/rmpiash3/",
    fontAwesomeIcon: "fa-facebook-f",
    backgroundColor: "#1877F2",
  },
  {
    name: "Gmail",
    link: "mailto:riadmahamudpiash@gmail.com",
    fontAwesomePrefix: "fas",
    fontAwesomeIcon: "fa-envelope",
    backgroundColor: "#D14836",
  },
];

const skills = {
  data: [
    {
      title: "Digital Twin & Physics-Based Modeling",
      fileName: "DataScienceImg",
      skills: [
        "- Building physics-based system models for real-time engineering insight.",
        "- Working with Extended Kalman Filter based state estimation for battery thermal systems.",
        "- Connecting MATLAB modeling, simulation, and AI workflows for intelligent monitoring.",
      ],
      softwareSkills: [
        {
          skillName: "MATLAB",
          fontAwesomeClassname: "vscode-icons:file-type-matlab",
          style: { color: "#e16737" },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: { color: "#3776AB" },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "simple-icons:pytorch",
          style: { color: "#EE4C2C" },
        },
        {
          skillName: "YOLO",
          fontAwesomeClassname: "mdi:crosshairs-gps",
          style: { color: "#16A34A" },
        },
      ],
    },
    {
      title: "Robotics & Autonomous Systems",
      fileName: "AndroidImg",
      skills: [
        "- Developing concepts for autonomous waste collection, obstacle avoidance, and return-to-base operation.",
        "- Designing agri-robot systems for disease detection and self-remedy workflows.",
        "- Combining sensing, mechanical design, and AI logic for practical assistive robots.",
      ],
      softwareSkills: [
        {
          skillName: "Autonomous Systems",
          fontAwesomeClassname: "mdi:robot-industrial",
          style: { color: "#0F766E" },
        },
        {
          skillName: "Machine Learning",
          fontAwesomeClassname: "mdi:brain",
          style: { color: "#7C3AED" },
        },
        {
          skillName: "Image Processing",
          fontAwesomeClassname: "mdi:image-search",
          style: { color: "#2563EB" },
        },
        {
          skillName: "Control Systems",
          fontAwesomeClassname: "mdi:tune-variant",
          style: { color: "#D97706" },
        },
      ],
    },
    {
      title: "Mechanical Design & Simulation",
      fileName: "DesignImg",
      skills: [
        "- Modeling mechanical systems with CATIA V5, SolidWorks, and AutoCAD.",
        "- Using ANSYS CFD and engineering simulation to understand fluid and thermal behavior.",
        "- Preparing research-grade reports and technical documentation with LaTeX and MS Office.",
      ],
      softwareSkills: [
        {
          skillName: "ANSYS",
          fontAwesomeClassname: "simple-icons:ansys",
          style: { color: "#FFB71B" },
        },
        {
          skillName: "CATIA V5",
          fontAwesomeClassname: "mdi:cube-scan",
          style: { color: "#1D4ED8" },
        },
        {
          skillName: "SolidWorks",
          fontAwesomeClassname: "mdi:cube-outline",
          style: { color: "#B91C1C" },
        },
        {
          skillName: "AutoCAD",
          fontAwesomeClassname: "simple-icons:autodesk",
          style: { color: "#0696D7" },
        },
        {
          skillName: "LaTeX",
          fontAwesomeClassname: "simple-icons:latex",
          style: { color: "#008080" },
        },
      ],
    },
  ],
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Digital Twin & State Estimation",
      progressPercentage: "86%",
    },
    {
      Stack: "Mechanical Modeling & Simulation",
      progressPercentage: "88%",
    },
    {
      Stack: "Robotics & Autonomous Systems",
      progressPercentage: "82%",
    },
    {
      Stack: "Research & Technical Writing",
      progressPercentage: "90%",
    },
  ],
};

// Language Skill
const sLanguage = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "MATLAB",
      progressPercentage: "88%",
    },
    {
      Stack: "Python",
      progressPercentage: "82%",
    },
    {
      Stack: "PyTorch",
      progressPercentage: "72%",
    },
    {
      Stack: "YOLO",
      progressPercentage: "75%",
    },
    {
      Stack: "LaTeX",
      progressPercentage: "78%",
    },
  ],
};

// Tools Skill
const tools = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "CATIA V5",
      progressPercentage: "84%",
    },
    {
      Stack: "SolidWorks",
      progressPercentage: "82%",
    },
    {
      Stack: "AutoCAD",
      progressPercentage: "80%",
    },
    {
      Stack: "ANSYS CFD",
      progressPercentage: "78%",
    },
    {
      Stack: "MATLAB / Simulink",
      progressPercentage: "86%",
    },
    {
      Stack: "MS Office",
      progressPercentage: "88%",
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "Dhaka University of Engineering and Technology (DUET)",
      subtitle: "Bachelor of Science (B.Sc.) in Mechanical Engineering",
      logo_path: "duet_logo.png",
      alt_name: "DUET",
      duration: "Oct 2021 - Oct 2025",
      cgpa: "3.34 / 4.00",
      descriptions: [
        "- Focused on mechanical engineering fundamentals, thermal systems, fluid mechanics, design, and intelligent systems.",
        "- Built research interest around digital twin systems, battery thermal modeling, computational materials, and AI for autonomous systems.",
        "- Active in robotics, engineering society, language club, and student welfare association leadership.",
      ],
      website_link: "https://duet.ac.bd/",
    },
    {
      title: "BCMC College of Engineering & Technology",
      subtitle: "Diploma in Marine Technology",
      logo_path: "bcmc_logo.png",
      alt_name: "BCMC College of Engineering & Technology",
      duration: "July 2016 - Feb 2021",
      cgpa: "3.86 / 4.00",
      descriptions: [
        "- Achieved Merit Position 2 out of 70 students.",
        "- Built a strong foundation in marine technology, engine systems, maintenance, and engineering drawing.",
        "- Completed practical training in IC engine overhauling and marine engine overhauling.",
      ],
      website_link: "https://www.bcmc.edu.bd/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Deep Learning for Images with PyTorch",
      subtitle: "- DataCamp, Nov 2024",
      logo_path: "data_science.svg",
      certificate_link:
        "https://rmpiash3.github.io/certificates/deep-learning-for-images-with-pytorch.pdf",
      alt_name: "DataCamp",
      color_code: "#FEE2E2",
    },
    {
      title: "Image Processing in Python",
      subtitle: "- DataCamp, Nov 2024",
      logo_path: "programmer.svg",
      certificate_link:
        "https://rmpiash3.github.io/certificates/image-processing-in-python.pdf",
      alt_name: "DataCamp",
      color_code: "#E0F2FE",
    },
    {
      title: "Understanding Machine Learning",
      subtitle: "- DataCamp, Nov 2024",
      logo_path: "skill.svg",
      certificate_link:
        "https://rmpiash3.github.io/certificates/understanding-machine-learning.pdf",
      alt_name: "DataCamp",
      color_code: "#FCE7F3",
    },
    {
      title: "Python Data Analysis Course for Beginners",
      subtitle: "- Udemy, Dec 2024",
      logo_path: "developerActivity.svg",
      certificate_link:
        "https://rmpiash3.github.io/certificates/python-data-analysis-course-for-beginners.pdf",
      alt_name: "Udemy",
      color_code: "#FFEDD5",
    },
    {
      title: "Intermediate Python",
      subtitle: "- DataCamp, Nov 2024",
      logo_path: "programmer.svg",
      certificate_link:
        "https://rmpiash3.github.io/certificates/intermediate-python.pdf",
      alt_name: "DataCamp",
      color_code: "#DCFCE7",
    },
    {
      title: "Introduction to Python",
      subtitle: "- DataCamp, Nov 2024",
      logo_path: "programmer.svg",
      certificate_link:
        "https://rmpiash3.github.io/certificates/introduction-to-python.pdf",
      alt_name: "DataCamp",
      color_code: "#DBEAFE",
    },
    {
      title: "Introduction to Excel",
      subtitle: "- DataCamp, Nov 2024",
      logo_path: "blogs_image.svg",
      certificate_link:
        "https://rmpiash3.github.io/certificates/introduction-to-excel.pdf",
      alt_name: "DataCamp",
      color_code: "#F0FDFA",
    },
    {
      title: "English for Everyday",
      subtitle: "- 10 Minute School, Nov 2024",
      logo_path: "manOnTable.svg",
      certificate_link:
        "https://rmpiash3.github.io/certificates/english-for-everyday.pdf",
      alt_name: "10 Minute School",
      color_code: "#FFE4E6",
    },
    {
      title: "Presentation & Public Speaking",
      subtitle: "- 10 Minute School, Nov 2024",
      logo_path: "talksCardBack.svg",
      certificate_link:
        "https://rmpiash3.github.io/certificates/presentation-and-public-speaking.pdf",
      alt_name: "10 Minute School",
      color_code: "#FEF3C7",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Teaching, Mentoring, Training and Leadership",
  description:
    "Mechanical engineer with active research, teaching, mentoring, robotics leadership, and hands-on training experience across tidal energy systems, CAD, programming, thermodynamics, fluid mechanics, vehicle maintenance, PLC, and engine systems.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Current Work",
      experiences: [
        {
          title:
            "Research Assistant - Sustainable Electricity Generation from Tidal Lagoons",
          company: "Dhaka University of Engineering & Technology",
          company_url: "https://duet.ac.bd/",
          logo_path: "duet_logo.png",
          duration: "May 2026 - Present",
          location: "Gazipur, Dhaka, Bangladesh (On-site)",
          description:
            "Working as a Research Assistant on the project Sustainable Electricity Generation from Tidal Lagoons at Dhaka University of Engineering & Technology, Gazipur. The project focuses on low-head tidal energy harvesting, water storage through tidal lagoon systems, and power generation using an Archimedes Screw Turbine.",
          features: [
            "- Developing project concepts and hydraulic design analysis.",
            "- Planning turbine geometry and CAD modeling workflows.",
            "- Preparing performance estimation and technical documentation.",
          ],
          color: "#0F766E",
        },
      ],
    },
    {
      title: "Teaching & Mentoring",
      experiences: [
        {
          title: "Lecturer (Part-Time), Department of Marine Technology",
          company: "BCMC College of Engineering & Technology",
          company_url: "https://www.bcmc.edu.bd/",
          logo_path: "bcmc_logo.png",
          duration: "Mar 2020 - July 2021",
          location: "Bangladesh",
          description:
            "Taught Mechanical Engineering Drawing, Computer-Aided Design (CAD), and Computer Programming Language Sessional with Python and MATLAB.",
          features: [
            "- Mentored students in engineering drawing and CAD workflows.",
            "- Supported hands-on programming sessions using Python and MATLAB.",
          ],
          color: "#5E6A75",
        },
        {
          title: "Lecturer, Department of Mechanical Engineering",
          company: "NEXUS",
          company_url: "https://www.linkedin.com/",
          logo_path: "programmer.svg",
          duration: "Dec 2021 - Dec 2022",
          location: "Bangladesh",
          description:
            "Delivered courses and mentoring support on Mechanics, Thermodynamics, Fluid Mechanics, and Drawing.",
          features: [
            "- Helped students build conceptual clarity across core mechanical engineering subjects.",
            "- Prepared course guidance for problem solving and technical drawing practice.",
          ],
          color: "#4B5563",
        },
      ],
    },
    {
      title: "Training & Industry Exposure",
      experiences: [
        {
          title: "Industrial Attachment Training",
          company: "Bangladesh Road Transport Corporation (BRTC)",
          company_url: "https://brtc.gov.bd/",
          logo_path: "experience.svg",
          duration: "Mar 2025 - April 2025",
          location: "Bangladesh",
          description:
            "Completed vehicle maintenance and repair training with practical exposure to automotive systems.",
          features: [
            "- Studied maintenance workflow, diagnosis, and repair practices.",
            "- Connected mechanical design knowledge with real vehicle service operations.",
          ],
          color: "#667085",
        },
        {
          title: "Industrial Internship",
          company: "National Engineering Development Limited",
          company_url: "https://www.linkedin.com/",
          logo_path: "developerActivity.svg",
          duration: "Feb 2020 - May 2020",
          location: "Bangladesh",
          description:
            "Completed an industrial internship focused on Programmable Logic Controller (PLC) systems.",
          features: [
            "- Worked with industrial control concepts and automation fundamentals.",
            "- Gained exposure to applied engineering systems in industry settings.",
          ],
          color: "#596579",
        },
      ],
    },
    {
      title: "Leadership",
      experiences: [
        {
          title: "Executive Member",
          company: "DUET Robotics Club",
          company_url: "https://duet.ac.bd/",
          logo_path: "duet_logo.png",
          duration: "DUET",
          location: "Gazipur, Bangladesh",
          description:
            "Contributed to robotics activities, project collaboration, and technical community building at DUET.",
          features: [
            "- Worked around autonomous robotics, assistive systems, and competition projects.",
            "- Participated in a technical culture focused on applied engineering problem solving.",
          ],
          color: "#708090",
        },
        {
          title: "Vice President",
          company: "Kapotakkho Student Welfare Association",
          company_url: "https://duet.ac.bd/",
          logo_path: "manOnTable.svg",
          duration: "DUET",
          location: "Gazipur, Bangladesh",
          description:
            "Served in a student welfare leadership role while continuing academic and research work.",
          features: [
            "- Supported student engagement, coordination, and welfare activities.",
            "- Also involved with DUET English Language Club and DUET Society of Mechanical Engineering.",
          ],
          color: "#6B7280",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "A selection of robotics, autonomous systems, digital-twin, and AI projects from competitions, university work, and ongoing research. These projects connect mechanical engineering with intelligent sensing, modeling, and real-world system behavior.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "RM_PIASH.webp",
    description:
      "I am open to research collaboration, robotics and digital twin projects, teaching or mentoring opportunities, and engineering roles related to intelligent systems, simulation, and mechanical design.",
  },
  blogSection: {
    title: "Research Focus",
    subtitle:
      "My current interests include digital twin systems, physics-based modeling, AI for autonomous systems, battery thermal modeling, computational materials, and MATLAB-based modeling.",
    link: "https://rmpiash3.github.io/#/projects",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Gazipur, Bangladesh",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/place/Gazipur,+Bangladesh",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+880 1575 62 58 55",
  },
};

const openSource = {
  githubUserName: "rmpiash3",
  githubConvertedToken: "",
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  techStack,
  sLanguage,
  tools,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  openSource,
};
