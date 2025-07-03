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
  redux,
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
  meta,
  starbucks,
  activetechnologies,
  waltatechnology,
  hptechlogo,
  tesla,
  shopify,
  carrent,
  marketplacepro,
  dineandbook,
  vidshare,
  findmepic,
  kabthyason,
  jobit,
  tripguide,
  threejs,
  python,
  c,
  user,
  businessman,
  andualem,
  pastorermi,
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
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
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
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "django",
    icon: django,
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
  {
    name: "Expo",
    icon: expo,
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

  {
    name: "Kabth App",
    description:
      "I developed Kabth, a mobile app for customers to shop from Yason Supermarket, along with a delivery app featuring real-time map tracking. I also built an admin panel for managing orders & vendors assign delivery agents and prepare items, while delivery personnel handle fulfillment efficiently.",
    tags: [
      {
        name: "React-native",
        color: "blue-text-gradient",
      },
      {
        name: "Expo",
        color: "white",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
      {
        name: "Django.js",
        color: "green-text-gradient",
      },
    ],
    image: kabthyason,
    source_code_link: "https://github.com/Kalebtes2031/FinalizedYason",
  },
  {
    name: "FindMe",
    description:
      "This is mobile app and has its own admin dashboard website. This project aims to help in search and rescue operations by leveraging facial recognition technology to assist in finding missing persons. The system supports image-based searches, filtering, and real-time notifications.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Flutter",
        color: "white",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
    ],
    image: findmepic,
    source_code_link: "https://github.com/CapStoneProject-Missing-People/Missing-individual",
  },

  {
    name: "VidShare",
    description:
      "This mobile app, built with Expo, React Native, and Appwrite(backend), lets users upload, share, and explore videos. Users can upload videos from their devices, access their content, and discover the latest videos from others, all within a sleek and responsive interface.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "appwrite",
        color: "pink-text-gradient",
      },
      {
        name: "expo",
        color: "white",
      },
    ],
    image: vidshare,
    source_code_link: "https://github.com/Kalebtes2031/NativeExpoApp",
  },
  {
    name: "Market place pro",
    description:
      "Developed using Next.js and Bright Data's webunlocker, this web application is designed to assist users in making informed decisions. It notifies users via email when a product drops in price and helps competitors by alerting them when the product is out of stock, all managed through cron jobs.",
    tags: [
      {
        name: "Next.js",
        color: "white",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: marketplacepro,
    source_code_link: "https://github.com/Kalebtes2031/MarketPlacePro",
  },
  {
    name: "Dine and Book",
    description:
      "web application lets you effortlessly browse menus, place orders, and book reservations for special occasions. Whether you’re dining in, ordering out, or planning an event, our platform makes it easy to enjoy great meals and secure your spot for memorable celebrations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "violet-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: dineandbook,
    source_code_link: "https://github.com/Kalebtes2031/DineAndBook",
  },
];

export { services, technologies, experiences, testimonials, projects };
