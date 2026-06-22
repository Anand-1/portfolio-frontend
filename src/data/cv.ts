export const cvData = {
  header: {
    name: "Anand Raj",
    title: "Full Stack Developer",
    contact: {
      email: "anandrajj10@gmail.com",
      phone: "+91-8929178338",
      location: "Bangalore, India",
      linkedin: "https://www.linkedin.com/in/anandrajdev/",
    },
  },
  
  professionalSummary: "Full Stack Developer with 9+ years of experience designing, building, and deploying end-to-end web applications across Insurance, Banking & E-commerce. Strong expertise in React, TypeScript, Node.js, and KOA on the frontend and backend, with hands-on experience in REST API design, middleware services, cloud infrastructure (AWS), and database management (PostgreSQL, MongoDB, DynamoDB). Proven ability to lead teams, implement Test Driven Development (TDD), enforce accessibility standards, and deliver CI/CD-driven deployments at scale.",

  technicalSkills: {
    frontend: ["React 18", "Redux-Toolkit", "TypeScript", "JavaScript (ES5/ES6)", "HTML5", "CSS3", "SCSS", "Webpack", "Babel", "Gulp", "Tailwind CSS", "MaterialUI", "Formik", "Storybook"],
    backend: ["Node.js", "KOA", "Express.js", "REST API Design", "Middleware Services", "JWT Authentication"],
    databases: ["PostgreSQL", "MongoDB", "DynamoDB", "AWS RDS"],
    cloudDevOps: ["AWS (Lambda, EC2, S3, API Gateway, DynamoDB, CDK)", "Docker", "GitHub Actions", "Jenkins", "BitBucket Pipelines"],
    testing: ["Jest", "React Testing Library", "Playwright", "Cypress", "X-Ray", "TDD"],
    accessibility: ["Axe DevTools", "NVDA", "Lighthouse", "WCAG 2.1"],
    architecture: ["Micro Frontend", "SPA", "Server-less", "CI/CD", "Agile/Scrum"],
    tools: ["Git", "JIRA", "X-Ray", "Confluence", "Axe DevTools", "Postman"],
  },

  workExperience: [
    {
      company: "Publicis Sapient",
      duration: "May 2025 – April 2026",
      position: "Full Stack Developer",
      client: "Lloyds Bank",
      responsibilities: [
        "Developed and maintained full stack micro frontend applications for Claims History (customer claims records) and Policies (policy creation and quote generation) using React 18, KOA, TypeScript, and middleware services.",
        "Designed and built RESTful middleware APIs using KOA to bridge frontend applications with backend data sources, improving response times and decoupling service layers.",
        "Implemented Formik for complex, multi-step form workflows in the Policies department covering quotes, policy creation, and customer data entry.",
        "Led Test Driven Development (TDD) across the team using Jest, React Testing Library, and Playwright, producing stable, reliable, and maintainable full stack code.",
        "Integrated a logging service into the application stack to capture user behaviour data, enabling data-driven decisions for backend and frontend development.",
        "Analysed and redesigned user journeys across Claims and Policies to simplify flows and improve end-to-end completion rates.",
        "Enforced WCAG 2.1 accessibility compliance across the stack using Axe DevTools, NVDA, and Lighthouse.",
        "Configured and maintained GitHub Actions CI/CD pipelines for both frontend and backend deployments; coordinated sprint and QA cycles in JIRA and XRay.",
      ],
      technologies: "React 18, KOA, Node.js, Redux-Toolkit, TypeScript, JavaScript (ES5/ES6), Formik, Jest, React Testing Library, Playwright, AWS Lambda, API Gateway, DynamoDB, GitHub Actions, JIRA, XRay, HTML5, CSS3, SCSS",
    },
    {
      company: "Cigres",
      duration: "Apr 2024 – Jan 2025",
      position: "Product Engineer (Full Stack)",
      client: "Allstate",
      responsibilities: [
        "Built end-to-end micro frontend Insurance application using React / Redux on the frontend and Node.js / AWS Lambda on the backend, deployed from scratch.",
        "Designed and integrated RESTful APIs connecting the frontend to DynamoDB via API Gateway and AWS Lambda, enabling real-time data retrieval for Insurance workflows.",
        "Worked across the full stack — from React component development to Lambda function logic and DynamoDB schema design.",
        "Achieved 90%+ test coverage and deployed the full application stack via CI/CD pipeline on EC2 with Docker.",
      ],
      technologies: "React.js, Redux-Toolkit, Node.js, AWS Lambda, API Gateway, DynamoDB, EC2, S3, Docker, Git, JavaScript (ES5/ES6), HTML5, CSS3, JIRA",
    },
    {
      company: "Joules2Watts",
      duration: "Feb 2023 – Aug 2023",
      position: "Lead Software Developer (Full Stack)",
      client: "Lowes",
      responsibilities: [
        "Developed micro frontend Insurance dashboards using React / Redux / SCSS / Storybook on the frontend and Node.js / AWS Lambda for backend data processing.",
        "Built and integrated serverless backend APIs via API Gateway and AWS Lambda, consuming data from DynamoDB for dashboard visualisation.",
        "Deployed frontend and backend services via CI/CD pipeline to S3 Bucket with 90%+ test coverage.",
      ],
      technologies: "React.js, Next.js, Redux-Toolkit, Node.js, TypeScript, JavaScript (ES5), AWS Lambda, API Gateway, DynamoDB, CDK, S3, Docker, Git, HTML5, CSS3, JIRA",
    },
    {
      company: "Iksula",
      duration: "Aug 2021 – Nov 2022",
      position: "Senior Software Developer (Full Stack)",
      responsibilities: [
        "Designed and built dynamic, browser-compatible E-commerce pages using HTML5, CSS3, TypeScript, React / Redux, deployed on EC2.",
        "Developed serverless backend services using AWS Lambda, API Gateway, and DynamoDB to power E-commerce product and order data flows.",
        "Architected and delivered an E-commerce Micro Frontend application, improving customer adoption through improved UX and faster page performance.",
        "Maintained Confluence documentation covering full stack architecture and development design decisions.",
      ],
      technologies: "React.js, Redux-Toolkit, Node.js, TypeScript, JavaScript (ES5), AWS Lambda, API Gateway, DynamoDB, CDK, S3, EC2, HTML5, CSS3, JIRA",
    },
    {
      company: "KG Information System Private Limited (KGiSL)",
      duration: "Dec 2019 – Jun 2021",
      position: "Senior Software Developer (Full Stack)",
      client: "HDFC Life",
      responsibilities: [
        "Worked as Lead Developer on applications for HDFC Life.",
        "Mentored teammates in deciding approach and identifying code defects to ensure that the result is as per the requirement specifications.",
        "Implemented a critical component that helped increase user productivity by 60%.",
        "Actively involved in code reviews and was one of the required reviewers of the code repositories.",
      ],
      technologies: "React.js, Redux-toolkit, Bootstrap 3-4, Git, Javascript, ES5, ES6, Node.Js, Typescript, HTML 5, CSS3, PostgreSQL, MySql",
    },
    {
      company: "Enabled InfoSystems",
      duration: "Jan 2016 – July 2019",
      position: "Senior Software Developer (Full Stack)",
      responsibilities: [
        "Web Conferencing: Developed an application to enable online meetings among specified members with scope of meeting scheduling, saving times of meeting, file sharing among participants, screen sharing and making multiple rooms simultaneously.",
        "Speech-to-text: Built a feature to enable users to write text by speaking to the system in different languages, with functionality to send in mail the written text or download as pdf.",
        "Chart Implementation: Implemented project to fetch data like Temperature, humidity, moisture and location from Android Device and make Chart according to Location and changes in Data, portraying it on maps.",
      ],
      technologies: "React.js, Redux-Toolkit, Node.js, TypeScript, JavaScript (ES5), AWS Lambda, API Gateway, DynamoDB, CDK, S3, EC2, HTML5, CSS3, JIRA",
      teamSize: 9,
    },
  ],

  keyAchievements: [
    "Delivered 4 end-to-end full stack applications across Insurance, Claims, and E-commerce domains, all with 90%+ test coverage.",
    "Led TDD adoption across multiple teams, reducing post-release defects and improving code maintainability.",
    "Designed and integrated serverless AWS architectures (Lambda + API Gateway + DynamoDB) across multiple client projects.",
    "Championed WCAG 2.1 accessibility compliance, ensuring applications were fully usable by screen reader and assistive technology users.",
    "Introduced logging service integration to create a data foundation for UX research and product roadmap decisions.",
  ],
};
