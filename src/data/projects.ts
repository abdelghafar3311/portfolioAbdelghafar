export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  problem: string;
  objective: string;
  techStack: string[];
  features: string[];
  role: string;
  image: string;
  demoUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: "Tager",
    title: "Tager Platform",
    shortDescription:
      "Modern e-commerce platform built with Next.js and Express.js",
    description:
      "Tager is one of the most promising projects I’ve been developing — it’s designed to bridge the gap between shop owners and entrepreneurs looking to start or expand their businesses.",
    problem:
      "Tager connects property owners and entrepreneurs, making it easy to rent unused spaces and helping renters efficiently manage their businesses",
    objective:
      "To create a seamless digital platform that connects property owners with entrepreneurs, enabling efficient space utilization and empowering business growth through smart management tools.",
    techStack: [
      "Next.js 15",
      "TypeScript",
      "express.js",
      "TailwindCSS",
      "MongoDB",
      "Node.js",
      "mongoose",
      "JWT",
      "Joi",
      "Cron",
      "Multer",
      "bcrypt.js",
    ],
    features: [
      "Seamless connection between property owners and entrepreneurs",
      "Secure user authentication and data protection with JWT and bcrypt.js",
      "Smart dashboard for product, sales, and report management",
      "Efficient rental management system with support for multiple spaces",
      "Real-time tracking and automated updates using Cron jobs",
      "Form validation and data integrity ensured with Joi",
      "Fast and scalable backend powered by Express.js and MongoDB",
      "Modern, responsive UI built with Next.js, React, and TailwindCSS",
      "Image upload and management handled efficiently via Multer",
      "Server-side rendering for enhanced SEO and performance",
    ],
    role: "Full-stack developer responsible for system architecture, frontend and backend development, API design, authentication, and deployment.",
    image: "Tager",
    demoUrl: "https://tager-frontend.vercel.app/",
    githubUrl: "https://github.com/abdelghafar3311/Tager-Frontend",
  },
  {
    id: "React Cruds",
    title: "React Cruds",
    shortDescription: "A simple CRUD application built with React.js",
    description:
      "This project is based on the philosophy of desktop applications, where it stores sales and purchase data and the number of products, and operates within the customer interface.",
    problem:
      "It solves the problem of inefficient management of sales, purchases, and product tracking within the customer interface.",
    objective:
      "To simplify sales, purchase, and inventory management through an easy-to-use interface that functions like a desktop application.",
    techStack: [
      "React",
      "Vite",
      "TailwindCSS",
      "Bootstrap",
      "React-Bootstrap",
      "React-Router-Dom",
      "React-Toastify",
      "React-Paginate",
      "React-Icons",
      "React-Joyride",
      "UUID",
      "ESLint",
      "PostCSS",
    ],
    features: [
      "Interactive and responsive user interface built with React and Bootstrap",
      "Smooth navigation using React Router",
      "Custom notifications and alerts with React-Toastify",
      "Pagination system for efficient data browsing",
      "User onboarding and guided tours using React-Joyride",
      "Unique ID generation and secure data handling with UUID",
      "Modern styling and fast performance powered by TailwindCSS and Vite",
    ],
    role: "Frontend developer responsible for building the user interface, integrating routing and notifications, and optimizing performance with modern React tools.",
    image: "ReactCruds",
    demoUrl: "https://react-cruds.vercel.app/",
    githubUrl: "https://github.com/abdelghafar3311/React-Cruds",
  },
  {
    id: "Cruds",
    title: "CRUDS",
    shortDescription:
      "A simple CRUD application built with HTML, CSS, and JavaScript",
    description:
      "A straightforward CRUD (Create, Read, Update, Delete) application that allows users to manage data efficiently. Built with HTML, CSS, and JavaScript, it provides a simple and intuitive interface for adding, editing, viewing, and deleting records",
    problem:
      "Existing analytics tools are often bloated, expensive, and difficult to customize for specific business needs.",
    objective:
      "It solves the problem of inefficient data management, providing a simple way to create, read, update, and delete records in an organized manner",
    techStack: ["HTML", "CSS", "JavaScript"],
    features: [
      "Add, edit, view, and delete records easily",
      "User-friendly and intuitive interface",
      "Real-time updates without page reloads",
      "Simple and responsive design using HTML and CSS",
      "Client-side data validation with JavaScript",
      "Lightweight and fast performance",
    ],
    role: "Full-stack developer responsible for building the CRUD functionality, designing the interface, and implementing client-side interactions with JavaScript.",
    image: "CrudsJs",
    demoUrl:
      "https://github.com/abdelghafar3311/CRUDS-JS/archive/refs/heads/main.zip",
    githubUrl: "https://github.com/abdelghafar3311/CRUDS-JS",
  },
  {
    id: "LinkEX",
    title: "Extension-Chrome--Links",
    shortDescription:
      "A Chrome extension that simplifies the process of creating and sharing links",
    description:
      "This project helps you add your links and even make a backup of them, and you can keep your data safe anywhere.",
    problem:
      "This extension solves a problem with a popular extension called Momentum. It compensates for the difficulty of saving important links and allows you to create backups in JSON format and use them on any other device that has the same extension installed.",
    objective:
      "Its purpose is to save important links on your device and share them with others.",
    techStack: ["HTML", "CSS", "JavaScript", "Bootstrap", "FontAwesome Icons"],
    features: [
      "Add and organize important links easily",
      "Create backups of links as JSON files",
      "Restore links on any device with the extension installed",
      "Share saved links with others effortlessly",
      "Enhances productivity by replacing or improving Momentum extension",
      "Securely store data locally for safety and portability",
    ],
    role: "Full-stack developer responsible for building the link management system, implementing backup and restore functionality, and ensuring cross-device compatibility.",
    image: "LinkEX",
    demoUrl:
      "https://github.com/abdelghafar3311/Extension-Chrome--Links/archive/refs/heads/main.zip",
    githubUrl: "https://github.com/abdelghafar3311/Extension-Chrome--Links",
  },
];
