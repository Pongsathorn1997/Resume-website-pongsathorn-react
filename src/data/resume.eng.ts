import type { Resume } from "../types/resume";

export const resume: Resume = {
  name: "Pongsathorn Permkanjaroen",
  nickname: "Jui",
  title: "Frontend Developer",
  focus: "Angular-focused",
  contact: {
    phone: "062-313-6688",
    email: "pongsathorn.pem@gmail.com",
    location: "Thailand",
  },
  summary:
    "Frontend Developer with 4 years and 3 month of professional experience, specializing in building enterprise-scale web applications using Angular. Experienced in working on-site with PTTEP for over 1 year and 7 months, contributing to a procurement and marketplace platform supporting competitive bidding between internal procurement teams and vendors. Focused on building clean, stable, and business-oriented user interfaces with strong attention to usability and maintainability.",
  experience: [
    {
      role: "Intermediate Frontend Developer",
      type: "On-site",
      company: "PTTEP",
      companyLogo: "../assets/logos/pttep.svg",
      via: "via The Gang Technology Co., Ltd.",
      period: "2024 – Present",
      bullets: [
        "Worked on-site with PTTEP for over 1 year and 5 months",
        "Developed and maintained a procurement marketplace system",
        "Built reusable Angular components and modules",
        "Implemented Microsoft Authentication (Azure AD & Azure AD B2C)",
        "Integrated authentication with role-based routing and business logic",
        "Collaborated with Backend, UX, and Business teams in Agile environments",
      ],
    },
    {
      role: "Intermediate Frontend Developer",
      type: "Full-time",
      company: "The Gang Technology Co., Ltd.",
      companyLogo: "../assets/logos/the-gang.jpg",
      via: "",
      period: "2023 – 2024",
      bullets: [
        "Promoted from Junior to Intermediate Frontend Developer",
        "Took ownership of multiple Angular-based enterprise projects",
        "Improved UI structure and code quality for maintainability and scalability",
        "Participated in requirement analysis and effort estimation",
      ],
    },
    {
      role: "Junior Frontend Developer",
      type: "Remote",
      company: "The Gang Technology Co., Ltd.",
      companyLogo: "../assets/logos/the-gang.jpg",
      via: "",
      period: "2022 – 2023",
      bullets: [
        "Developed UI using Angular and resolved existing system bugs",
        "Supported feature development and system testing",
        "Gained hands-on experience with Agile development processes",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Mahidol University International College",
      location: "Thailand",
      period: "2017 – 2021",
    },
  ],
  skills: {
    "Frontend Development": [
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Responsive Design",
      "Angular",
      "Vue",
      "Astro",
      "Ant Design Angular",
      "Tailwind CSS",
      "Bootstrap",
      "Bulma",
    ],
    "Authentication & Security": [
      "Microsoft Authentication",
      "Azure AD",
      "Azure AD B2C",
      "MSAL for Angular",
      "Token lifecycle management",
      "Role-based access control",
    ],
    Testing: ["Angular Unit Test", "Jasmine", "Karma", "Playwright (E2E)"],
    "Tools & Workflow": ["Git", "GitLab", "Jira", "Figma", "Agile / Scrum"],
  },
  projects: [
    {
      name: "Procurement Marketplace Platform",
      client: "PTTEP",
      bullets: [
        "Enterprise web application for procurement and competitive bidding processes",
        "Enabled vendors to submit proposals based on price, delivery time, and quantity requirements",
        "Supported procurement teams in comparing offers and selecting optimal vendors",
        "Developed frontend architecture using Angular with scalable and maintainable structure",
        "Integrated Microsoft Authentication (Azure AD for internal users / Azure AD B2C for vendors)",
        "Designed role-based access control and routing based on user types",
      ],
    },
    {
      name: "Reporting Systems",
      client: "Enterprise",
      bullets: [
        "Internal reporting platform for creating, editing, and viewing business data",
        "Developed dynamic forms and data-driven UI components",
        "Focused on data accuracy and system reliability",
      ],
    },
    {
      name: "Timebinder",
      client: "Internal",
      bullets: [
        "Internal system for work-hour tracking and leave management",
        "Implemented permission-based features and notification workflows",
        "Developed responsive UI supporting both desktop and mobile usage",
      ],
    },
    {
      name: "Ruammit Application",
      client: "Marketplace",
      bullets: [
        "Marketplace-style web application for wholesalers and general traders",
        "Supported product management and order workflows (cash-on-delivery model)",
        "Built frontend using Angular with a focus on real user usability",
      ],
    },
  ],
  additional:
    "Experienced in enterprise-scale systems with a strong understanding of procurement and marketplace business processes. Detail-oriented in UI quality, performance optimization, and maintainable architecture. Committed to continuous learning and open to expanding expertise across both frontend and backend to improve overall system efficiency and scalability.",
};
