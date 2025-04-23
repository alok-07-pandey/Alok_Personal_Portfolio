// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },

      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },

      { name: 'Tailwind CSS', logo: tailwindcssLogo },

      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [

      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },

      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },

      { name: 'Python', logo: pythonLogo },

      { name: 'JavaScript', logo: javascriptLogo },

    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: agcLogo,
    role: "Podcaster",
    company: "Youtube ",
    date: "December 2022- Present",
    desc: "Founded and host a podcast series featuring influential guests from the tech and education industries. Engaged in thought-provoking conversations with industry leaders including founders, deans, and VCs, amassing over 1M+ views and building a global audience.",
    skills: [
      "Podcast Hosting",
      "Interviewing",
      "Public Speaking",
      "Content Strategy",
      "YouTube SEO",
      "Video Editing",
      "Canva",
      "Final Cut Pro",
      "Networking",
      "Community Building",
    ],
  },
  {
    id: 1,
    img: webverseLogo,
    role: "100 Days of Code – Content Creator",
    company: "LinkedIn",
    date: "Feb 2022 – Aug 2022",
    desc: "Took on the 100 Days of Code challenge to boost programming skills and inspire others. Consistently coded daily, shared learnings and progress via video posts on LinkedIn, and engaged a growing professional community. Documented the journey to educate, motivate, and expand network visibility.",
    skills: [
      "Consistency",
      "Problem Solving",
      "Java",
      "Data Structures & Algorithms",
      "LinkedIn Content Creation",
      "Community Engagement",
      "Video Editing",
      "Motivational Content",
      "Professional Branding",
    ],
  },
  {
    id: 2,
    img: newtonschoolLogo,
    role: "Content Creator",
    company: "Lovely Professional University – Social Media & Marketing Team",
    date: "Jan 2023 – Present",
    desc: "Create engaging content for LPU’s official social media platforms to highlight campus life, events, and student achievements. Contribute to ideation, shooting, and editing of reels, photos, and stories to enhance brand visibility and student engagement.",
    skills: [
      "Content Creation",
      "Script Writing",
      "Instagram Reels",
      "Photography",
      "Videography",
      "Editing (CapCut/Final Cut Pro)",
      "Social Media Strategy",
      "Team Collaboration",
      "Public Relations",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: glaLogo,
    school: "Lovely Professional University, Punjab",
    date: "Aug 2022 – June 2026",
    grade: "7.20 CGPA",
    desc: "I am currently pursuing my Bachelor's degree in Computer Science and Engineering (B.Tech) from Lovely Professional University, Jalandhar, Punjab. My curriculum covers core computer science subjects like Data Structures, Algorithms, Operating Systems, DBMS, and Web Technologies. I'm also involved in practical projects, coding competitions, and technical events that have helped me enhance my problem-solving and development skills.",
    degree: "Bachelor of Technology (B.Tech) in Computer Science and Engineering",
  },
  {
    id: 1,
    img: bsaLogo,
    school: "Academic Heights Public School, Satna",
    date: "2021 – 2022",
    grade: "67.80%",
    desc: "I completed my Class 12 education from Academic Heights Public School, Satna, affiliated with the CBSE board. I pursued the PCM stream, focusing on Physics, Chemistry, and Mathematics. This laid a strong foundation for my journey into engineering.",
    degree: "CBSE (Class XII) – PCM",
  },
  {
    id: 2,
    img: vpsLogo,
    school: "Christukula Mission Higher Secondary School, Satna",
    date: "2019 – 2020",
    grade: "65.60%",
    desc: "I completed my Class 10 education from Christukula Mission Higher Secondary School, Satna, under the CBSE board. My subjects included Science and foundational computer education, which sparked my interest in technology and programming.",
    degree: "CBSE (Class X) – Science",
  },
];


export const projects = [
  {
    id: 0,
    title: "Online Food Ordering System",
    description:
      "A full-stack web application designed to streamline food ordering operations for restaurants. The platform enables users to browse menus, place orders online, and track their order status in real time. Admins can manage food items, view orders, and handle backend logistics efficiently.",
    image: githubdetLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/alok-07-pandey/online-food-ordering-system-for-a-restaurant",
    webapp:""
    
  },
  {
    id: 1,
    title: "Podcast Portfolio Website",
    description:
      "A personal podcast portfolio website built using HTML, CSS, JavaScript, and Node.js. It showcases all my podcast episodes, guest profiles, and detailed information about each session. The site features a custom audio player, dynamic content rendering, and a sleek, responsive design to provide users with an engaging experience.",
     image: csprepLogo,
    tags: ["HTML", "CSS", "JavaScript", "Node.js"],
    github: "https://github.com/alok-07-pandey/Podcast-Show/tree/main/Alok-Portfolio-main", // Update with your actual GitHub link
    webapp: "https", // Replace with your actual live website link
  },
  


  {
    id: 2,
    title: "Hospital Management System",
    description:
      "A full-stack Hospital Management System built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It provides complete CRUD functionality for managing patients, doctors, appointments, and departments. The system includes secure authentication and user roles, making it a reliable and scalable solution for healthcare administration.",
      image: movierecLogo,
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "CRUD", "Authentication"],
    github: "https://github.com/alok-07-pandey/hospital", // Update if needed
    webapp: "https://alok-hospital-app.netlify.app/", // Update with actual deployment link
  }
  

];  