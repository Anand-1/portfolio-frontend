import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Anand Raj - Full Stack Developer Portfolio",
    },
  },
  skills: {
    title: "Skills",
    description: "Key skills that define my professional identity.",
    metadata: {
      title: "Skills",
      description:
        "Anand Raj's technical skills in React, Node.js, TypeScript, and Full Stack Development.",
    },
  },
  projects: {
    title: "Projects",
    description: "Showcasing impactful projects and technical achievements.",
    metadata: {
      title: "Projects",
      description: "Anand Raj's projects in building full stack web applications.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect and explore collaborations.",
    metadata: {
      title: "Contact",
      description: "Contact Anand Raj - Full Stack Developer.",
    },
  },
  contributions: {
    title: "Contributions",
    description: "Open-source contributions and community involvement.",
    metadata: {
      title: "Contributions",
      description:
        "Anand Raj's open-source contributions and community involvement.",
    },
  },
  resume: {
    title: "Resume/CV",
    description: "Professional resume and career overview with 9+ years of full stack development experience.",
    metadata: {
      title: "Resume/CV",
      description: "Anand Raj's comprehensive resume and CV - Full Stack Developer with 9+ years experience in React, Node.js, AWS, and more.",
    },
  },
  blogs: {
    title: "Blogs",
    description:
      "Thoughts on software engineering, web development, and technical insights.",
    metadata: {
      title: "Blogs",
      description:
        "Anand Raj's blog — insights on software engineering, web development, and full stack development.",
    },
  },
  experience: {
    title: "Experience",
    description: "Professional journey and career timeline across Insurance, Banking, and E-commerce.",
    metadata: {
      title: "Experience",
      description:
        "Anand Raj's professional journey spanning 9+ years in full stack development.",
    },
  },
};