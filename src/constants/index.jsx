import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";
import project5 from "../assets/project5.webp";
import project6 from "../assets/project6.webp";
import personImage from "../assets/testimonial.webp";

import {
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiNodeTree,
} from "@remixicon/react";
import {
  RiDatabaseLine,
  RiCodeSSlashLine,
  RiGitBranchLine,
} from "@remixicon/react";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Saqib Ali",
  role: "Software Developer",
  subheading:
    "A motivated and passionate Master’s student in Information Technology Management with a solid foundation in software development. Seeking to leverage my skills and knowledge in a challenging development role to create innovative,user-friendly web applications.",
};

export const PROJECTS = [
  {
    id: 1,
    title: "EV-SITE",
    description:
      "A beautiful and dynamic Landing Page Electric Vehicle with click button of video",
    techStack: ["React", 'CSS', 'React Hooks'],
    imgSrc: project1,
    link: "https://ev-website-chi.vercel.app",
  },
  {
    id: 2,
    title: "IPHONE",
    description:
      "The Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects. From custom animations to animated 3D models.",
    techStack: ["React", "Redux", 'GSAP', 'Three.js'],
    imgSrc: project2,
    link: "https://iphone-web-nu.vercel.app/",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects and skills. Fully responsive and optimized for performance.",
    techStack: ["Next.js", "Tailwind CSS"],
    imgSrc: project3,
    link: "https://next-js-portfolio-puce-ten.vercel.app/",
  },
  {
    id: 4,
    title: "Beautiful Landing Page",
    description:
      "Dynamic PageBuilt a fully dynamic and responsive website for personal practice using React.js and Tailwind CSS.",
    techStack: ['React','Tailwind CSS'],
    imgSrc: project4,
    link: "https://virtual-website-landing-page.vercel.app/",
  },
  {
    id: 5,
    title: "Chat Session",
    description:
      "This project is a React-based web application designed to display and manage chat sessions. Users can view a list of chat sessions filtered by date range, with detailed information such as creation date, last update, user ID, and message count.",
    techStack: ['React', 'CSS', 'React Router'],
    imgSrc: project5,
    link: "https://chat-session.vercel.app/",
  },
  {
    id: 6,
    title: "Movie Site",
    description:
      "I'm excited to share my passion for film with my network!  I've built an interactive movie website using React.js,and CSS. This project allows you to:Explore movies in a dynamic way: Experience a user-friendly interface that responds seamlessly to your interactions",
    techStack: ['React', 'React Hooks', 'CSS'],
    imgSrc: project6,
    link: "https://movie-site-mu.vercel.app/",
  },
];

export const SKILLS = [
  {
    name: "HTML5",
    icon: <RiHtml5Line className="text-orange-600" />,
  },
  {
    name: "CSS3",
    icon: <RiCss3Line className="text-blue-500" />,
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptLine className="text-yellow-500" />,
  },
  {
    name: "React",
    icon: <RiReactjsLine className="text-blue-400" />,
  },
  {
    name: "Node.js",
    icon: <RiNodeTree className="text-green-500" />,
  },
  {
    name: "MongoDB",
    icon: <RiDatabaseLine className="text-green-600" />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiCodeSSlashLine className="text-teal-400" />,
  },
  {
    name: "Git",
    icon: <RiGitBranchLine className="text-orange-500" />,
  }
  
];

export const EXPERIENCES = [
  {
    yearRange: "2020 - 2021",
    role: "Junior Frontend Development",
    company: "Impact Software Solution",
    description:
      "UI Development: Designed and developed user interfaces for web applications using React.API Integration: Collaborated with backend developers to integrate frontend components with Node.js APIs.",
    techStack: ["Javascript", "React.js", "Next.js", "Version Control"],
  },
];

export const EDUCATION = [
  {
    id: 1,
    degree: "Master In Information Technology And Management",
    institution: "Berlin School of Business And Innovation",
    duration: "2023 - current",
    description:
      "Graduated with honors in Computer Science, focusing on algorithms, data structures, and web development. Completed a capstone project on scalable cloud architectures.",
  },
  
  {
    id: 3,
    degree: "Certified Frontend Developer",
    institution: "Codecademy",
    duration: "2024",
    description:
      "Earned a certification in advanced Frontend development, including Javascript, React js, Tailwind Css, Git, and performance optimization.",
  },
];


