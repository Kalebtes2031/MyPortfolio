import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  django,
  expo,
  aws,
  cpp,
  docker,
  firebase,
  postgresql,
  mysql,
  stripe,
  reactnative,
  activetechnologies,
  waltatechnology,
  hptechlogo,
  marketplacepro,
  dineandbook,
  vidshare,
  findmepic,
  kabthyason,
  python,
  c,
  andualem,
  pastorermi,
  kabthchatbot,
  artwalldesigner,
  popcornly,
  connectopia,
  pms,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Introduction",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Mobile App Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "Django",
    icon: django,
  },

  {
    name: "React Native",
    icon: reactnative,
  },
  {
    name: "Expo",
    icon: expo,
  },

  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Docker",
    icon: docker,
  },

  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Firebase",
    icon: firebase,
  },

  {
    name: "Stripe",
    icon: stripe,
  },

  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },

  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Python",
    icon: python,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Active Technologies PLC",
    icon: activetechnologies,
    iconBg: "#383E56",
    website: "activetechet.com",
    date: "24 Sept 2024 - present",
    points: [
      "Built and deployed cross-platform mobile applications using React Native and Expo. Deployed mobile apps via Expo to Google Play and App Store.",
      "Designed and maintained responsive web applications using React.js, Next.js, and Tailwind CSS.",
      "Developed and integrated scalable RESTful APIs with Node.js/Express.js and Django/DRF.",
      "Managed MongoDB and PostgreSQL databases, optimizing schemas and queries for performance.",
      "Worked in an Agile team, participating in sprint planning, code reviews, and documentation.",
      "Ensured smooth releases, reliable performance, and long-term maintainability across both web and mobile platforms.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Walta Technologies",
    icon: waltatechnology,
    iconBg: "#383E56",
    website: "waltatechnologies.com",
    date: "8 July 2023 - 22 Sept 2023",
    points: [
      "Developed a dynamic e-commerce website using React and Next.js, optimizing server-side rendering for fast performance and SEO benefits.",
      "Collaborating effectively with cross-functional teams, including designers and developers, to ensure cohesive development.",
      "Integrating authentication components and implementing secure database storage solutions.",
      "Committed to maintaining high code quality and following best practices in software development.",
      "Actively participating in team discussions, code reviews, and evaluations to drive continuous improvement.",
      "Engaging in remote meetings to facilitate collaboration and communication among distributed teams.",
    ],
  },
  {
    title: "Corporate Venture Capital & Business Analytics Extern",
    company_name: "HP Tech Ventures",
    icon: hptechlogo,
    iconBg: "#E6DEDD",
    website: "hptechventures.com",
    date: "Aug 2024 - Sep 2024",
    points: [
      "Leveraged data analysis techniques to evaluate startup potential, enhancing my ability to work with data-driven solutions in software engineering.",
      "Gained experience with business models and competitive analysis, skills that are crucial for understanding user needs and translating them into technical solutions.",
      "Collaborated remotely with a diverse team, applying agile principles to complete tasks efficiently, similar to software development workflows.",
      "Developed strong problem-solving abilities by assessing risks and projecting financial outcomes, which can be translated into solving complex technical problems in engineering.",
      "Presented analytical findings and actionable recommendations, enhancing my ability to communicate complex technical concepts to both technical and non-technical stakeholders.",
      "Gained hands-on experience with tools and methodologies that can be applied in software engineering, particularly in data-driven development and decision-making processes.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "He is disciplined, communicative, and outgoing. He excels in teamwork, adapting well to diverse environments.",
    name: "Ermiyas Ayele",
    designation: "Pastor and Head Leader ",
    company: "Ayat Full Gospel Church",
    image: pastorermi,
  },
  {
    testimonial:
      "Kaleb is a skilled and reliable developer who consistently delivers quality work. He’s been a valuable part of our team at Active Technologies.",
    name: "Andualem Leggesse",
    designation: "CEO",
    company: "Active Technologies PLC",
    image: andualem,
  },
];

const projects = [

  // popcornly
  {
    name: "Popcornly",
    description:
      "Production-ready mobile movie discovery app with AI-powered recommendations, Firebase backend, authentication, and CI-tested scalable architecture.",
    tags: [
      { name: "React Native", color: "blue-text-gradient" },
      { name: "Firebase", color: "pink-text-gradient" },
      { name: "OpenAI", color: "white" },
      { name: "Expo", color: "green-text-gradient" },
    ],
    image: popcornly,
    source_code_link: "https://github.com/Kalebtes2031/Popcornly",
  },
  // artwalldesigner
  {
    name: "Art Wall Designer",
    description:
      "Interactive e-commerce platform allowing users to visualize artwork on their walls with drag-and-drop editing, real-time customization, Stripe payments, and role-based dashboards.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "TypeScript", color: "white" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
    ],
    image: artwalldesigner,
    source_code_link: "https://artwalldesigner.onrender.com/",
  },
  // pms
  {
    name: "Project Management System",
    description:
      "Fullstack SaaS-style platform for managing teams and workflows with role-based access, Kanban boards, and scalable REST API architecture.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Django", color: "green-text-gradient" },
      { name: "TanStack Query", color: "pink-text-gradient" },
      { name: "Tailwind", color: "white" },
    ],
    image: pms,
    source_code_link: "#",
  },
  // connectopia
  {
    name: "Connectopia",
    description:
      "AI-powered matchmaking platform with real-time messaging, intelligent preference-based matching, and production-grade observability, testing, and CI/CD pipelines.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "Socket.IO", color: "white" },
      { name: "PostgreSQL", color: "pink-text-gradient" },
    ],
    image: connectopia,
    source_code_link: "https://github.com/Kalebtes2031/connectopia",
  },
  // kabth App
  {
    name: "Kabth App",
    description:
      "Real-world e-commerce and delivery ecosystem with customer mobile app, real-time order tracking, and admin dashboard for managing vendors and logistics.",
    tags: [
      { name: "React Native", color: "blue-text-gradient" },
      { name: "Firebase", color: "pink-text-gradient" },
      { name: "Django", color: "green-text-gradient" },
      { name: "Expo", color: "white" },
    ],
    image: kabthyason,
    source_code_link: "https://github.com/Kalebtes2031/FinalizedYason",
  },

  {
    name: "AI Automation Chatbot",
    description:
      "Fullstack AI chatbot with real-time, context-aware conversations, Markdown-rendered responses, and persistent chat history using LLM integration.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Django", color: "green-text-gradient" },
      { name: "Hugging Face", color: "white" },
    ],
    image: kabthchatbot,
    source_code_link: "https://github.com/Kalebtes2031/Chatbot",
  },

  // Optional (keep if you want more projects displayed)

  {
    name: "FindMe",
    description:
      "Facial recognition-based search and rescue system with image matching, filtering, and real-time notifications for locating missing persons.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Flutter", color: "white" },
      { name: "Firebase", color: "pink-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
    ],
    image: findmepic,
    source_code_link:
      "https://github.com/CapStoneProject-Missing-People/Missing-individual",
  },

  {
    name: "VidShare",
    description:
      "Mobile video sharing platform enabling users to upload, explore, and manage content with a modern UI and backend powered by Appwrite.",
    tags: [
      { name: "React Native", color: "blue-text-gradient" },
      { name: "Appwrite", color: "pink-text-gradient" },
      { name: "Expo", color: "white" },
    ],
    image: vidshare,
    source_code_link: "https://github.com/Kalebtes2031/NativeExpoApp",
  },

  {
    name: "Marketplace Pro",
    description:
      "Automated price tracking platform that monitors product changes and sends email alerts using cron jobs and web scraping tools.",
    tags: [
      { name: "Next.js", color: "white" },
      { name: "MongoDB", color: "green-text-gradient" },
      { name: "Tailwind", color: "pink-text-gradient" },
    ],
    image: marketplacepro,
    source_code_link: "https://github.com/Kalebtes2031/MarketPlacePro",
  },

  {
    name: "Dine and Book",
    description:
      "Restaurant platform for browsing menus, placing orders, and booking reservations with a seamless user experience.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Django", color: "green-text-gradient" },
      { name: "REST API", color: "violet-text-gradient" },
      { name: "Tailwind", color: "pink-text-gradient" },
    ],
    image: dineandbook,
    source_code_link: "https://github.com/Kalebtes2031/DineAndBook",
  },
];

export { services, technologies, experiences, testimonials, projects };
