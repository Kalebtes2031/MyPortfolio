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
  cpp,
  docker,
  meta,
  starbucks,
  hptechlogo,
  tesla,
  shopify,
  carrent,
  marketplacepro,
  dineandbook,
  vidshare,
  findmepic,
  jobit,
  tripguide,
  threejs,
  python,
  c,
  user,
  businessman,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Wordpress Developer",
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
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Walta Technologies",
    icon: starbucks,
    iconBg: "#383E56",
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
    name: "Ermias",
    designation: "Pastor and Head Leader ",
    company: "Ayat Full Gospel Church",
    image: businessman,
  },
];

const projects = [

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
