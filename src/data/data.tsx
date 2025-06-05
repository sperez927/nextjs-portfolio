import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

// import InstagramIcon from '../components/Icon/InstagramIcon';
import DevCommunityIcon from '../components/Icon/DevCommunityIcon';
import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import profilepic from '../images/profile-logo.png';
import reviewerImage2 from "../images/reviewers/AdrianMadrid.jpg";
import reviewerImage1 from "../images/reviewers/JohnMichael.jpg";
import reviewerImage3 from "../images/reviewers/MarketingDirector.jpg";
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Personal portfolio',
  description: "This is a personal front-end website built with JavaScript and Next.js. It provides more detailed information about me."

};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Salvador Perez.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        as a Senior Freelance Web Developer, with over
        10 years of experience building scalable web applications and leading cross-functional teams.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my spare time,   I enjoy contributing to  <strong className="text-stone-100">open-source</strong> projects,
        exploring emerging technologies like <strong className="text-stone-100">AI</strong> and
        {" "}<strong className="text-stone-100">blockchain</strong>,
        and writing technical articles.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/1ABvZrzsF6aGbYfYYHV0Uu6f2QVTfaCPM/view?usp=sharing',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Senior Full Stack Software Engineer with 10+ years of experience building modern, scalable, and
AI-augmented web applications across diverse industries. Specialized in React, Node.js, and cloud
platforms with a proven ability to integrate AI solutions (chatbots, GPT APIs, data pipelines) to
enhance user experience and system intelligence. Expert at adapting quickly across projects,
collaborating with cross-functional teams, and delivering high-impact results in both consulting
and full-time roles`,
  aboutItems: [
    { label: 'Location', text: 'Odessa, TX, 79762', Icon: MapIcon },
    { label: 'Age', text: '35', Icon: CalendarIcon },
    { label: 'Nationality', text: 'United States', Icon: FlagIcon },
    { label: 'Interests', text: 'Football,  Hiking', Icon: SparklesIcon },
    { label: 'Study', text: 'University of Texas at Dallas', Icon: AcademicCapIcon },
    { label: 'Employment', text: 'Self-Employed', Icon: BuildingOffice2Icon },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 10,
      },
      {
        name: 'Typescript',
        level: 9,
      },
      {
        name: 'Next',
        level: 9,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 10,
      },
      {
        name: 'Django',
        level: 8,
      },
      {
        name: 'Spring Boot',
        level: 8,
      },
    ],
  },
  {
    name: 'Database',
    skills: [
      {
        name: 'MongoDB',
        level: 10,
      },
      {
        name: 'MySQL',
        level: 9,
      },
      {
        name: 'DynamoDB',
        level: 8,
      },
    ],
  },
  {
    name: 'Other',
    skills: [
      {
        name: 'AI',
        level: 9,
      },
      {
        name: 'AWS',
        level: 9,
      },
      {
        name: 'Jenkins',
        level: 9,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Aimeos (E-commerce Platform)',
    description: 'Developed a fully responsive e-commerce web application using Laravel (backend) and Vue.js (frontend). Integrated Stripe for secure payments, dynamic product filtering, a real-time inventory system, and admin dashboard with role-based access. Fixed over 100+ reported bugs during launch and implemented logging and analytics for continuous monitoring.',
    url: 'https://aimeos.org/',
    image: porfolioImage1,
  },
  {
    title: 'InsightTrack (Business Dashboard App)',
    description: 'Built a custom analytics dashboard for a mid-sized logistics company. Used React, Chart.js, and Node.js to create interactive data visualizations and real-time metrics tracking. Focused on performance optimization and handled critical bug fixes post-deployment that improved load speed by 45%.',
    url: 'https://insighttrack.com',
    image: porfolioImage2,
  },
  {
    title: ' FormGuard (Secure Form System)',
    description: 'Designed a form submission platform for HR departments to securely collect employee data. Developed with Node.js, Express, and MongoDB, with built-in validation, CAPTCHA, and file upload support.Applied strong input sanitization to prevent XSS and injection attacks.',
    url: 'https://tally.so',
    image: porfolioImage3,
  },
  {
    title: 'LearnPro (Online Learning Platform)',
    description: 'Developed a custom e-learning platform where students could enroll in courses, watch videos, and complete quizzes. Built using Django and PostgreSQL on the backend, and React on the frontend. Integrated authentication, progress tracking, and a dashboard for instructors. Debugged numerous UI inconsistencies and optimized database queries for faster performance.',
    url: 'https://learnprogroup.com',
    image: porfolioImage4,
  },
  {
    title: 'Chatio (Real-Time Messaging App)',
    description: 'Created a real-time messaging platform for internal company use using Node.js, Socket.io, and Redis. Features included group chats, read receipts, typing indicators, and encrypted message storage. Diagnosed and resolved WebSocket connection drops in production under load.',
    url: 'https://chatio.herokuapp.com/',
    image: porfolioImage5,
  }
];


export const education: TimelineItem[] = [
  {
    date: 'May 2012',
    location: 'Richardson, TX',
    title: 'University of Texas at Dallas',
    content: <p>I earned a Bachelor's degree in Computer Science from the University of Texas at Dallas, where I built a strong foundation in programming, web development, and core concepts like data structures, algorithms, and database design.</p>
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'September 2021 - May 2025',
    location: 'BairesDev',
    title: 'Senior Full Stack Software Engineer',
    content: (
      <p>
        Developed and delivered a wide range of full-stack applications in a consulting capacity, including AI-powered HR systems, e-learning platforms, real-time dashboards, and secure multi-step forms — using React, Next.js, Node.js, Java, Django, and Redis. Emphasized performance, scalability, and cloud-native deployment across projects using AWS Lambda, PostgreSQL, and OpenAI API integrations.
      </p>
    ),
  },
  {
    date: 'April 2020 - August 2021',
    location: 'WoahStork',
    title: 'Senior Full Stack Software Engineer',
    content: (
      <p>
        Led development of scalable e-commerce features using React, Node.js, and AWS — including secure product catalog APIs, JWT-based auth, Stripe/PayPal payments, and OpenAI-driven SEO tagging. Streamlined CI/CD with CodePipeline and deployed containers via OpenShift and Docker.
      </p>
    ),
  },
  {
    date: 'Feburary 2017 - December 2019',
    location: 'Tentaroo',
    title: ' Lead Frontend Engineer',
    content: (
      <p>
        Migrated legacy systems to Next.js and Angular, improving page load times by 40% and SEO performance. Built UI and event tools for national council platforms and camp management platforms, integrated APIs like Google Maps, Calendar, and PayPal, and supported Spring Boot-based backend with MySQL.
      </p>
    ),
  },
  {
    date: 'May 2015 - January 2017',
    location: 'CyberNova',
    title: 'Full Stack Developer',
    content: (
      <p>
        Delivered multiple healthcare and data platforms in a consulting role, building real-time dashboards and secure messaging with React, Django, PostgreSQL, and Redis-backed socket.io. Developed alerting and monitoring tools using Kafka and REST APIs, driven by live metrics and rule-based logic.
      </p>
    ),
  },
  {
    date: 'Octorber 2014 - January 2015',
    location: 'UBreakiFix',
    title: 'Backend Developer',
    content: (
      <p>
        Built a streamlined Laravel backend with MySQL, GraphQL, and Cloudflare, and improved deployment speed using Jenkins CI/CD and Contentful integration.
      </p>
    ),
  },
  {
    date: 'July 2012 - September 2014',
    location: 'ODesk',
    title: 'Full Stack Freelancer',
    content: (
      <p>
        Built custom dashboards and full-stack systems for small businesses using jQuery, Backbone.js, C# (N-tier architecture), and Spring Boot with Kafka. Developed cloud-based reporting pipelines using GCP BigQuery for scalable analytics and automation.
      </p>
    ),
  }
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'CMO',
      text: 'Salvador Perez helped us design and launch a fully responsive e-commerce platform that increased our online sales by over 40%. They were clear in communication, delivered on time, and made smart technical decisions that kept us under budget. I’ve worked with many developers — few are as professional, skilled, and easy to work with as them.',
      // image: 'https://drive.google.com/file/d/1dXMZHOvZxJXwjc3Q-lXpRGp0iVyALmHV/view?usp=sharing',
      image: reviewerImage1
    },
    {
      name: 'Director of Enginner',
      text: "Salvador Perez is one of the most dependable and skilled web developers I’ve worked with in my career. Their 10+ years of experience really shows — whether it's building responsive UIs, optimizing performance, or solving tricky backend issues, they get it done right and on time.",
      // image: 'https://drive.google.com/file/d/15hKY0V4KfjOAZpZK5Eq6t8217p50bqKa/view?usp=sharing',
      image: reviewerImage2
    },
    {
      name: 'Marketing Director, E-commerce Brand',
      text: 'Salvador Perez helped us redesign our entire site from the ground up. Their mix of frontend design sensitivity and backend logic was exactly what we needed. The project launched early and exceeded expectations — we saw a 35% increase in engagement within the first month.',
      // image: 'https://drive.google.com/file/d/1cr47WzJOgcWzI81mrWtbvLRssWU5r0dG/view?usp=sharing',
      image: reviewerImage3
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'salverez90@gmail.com',
      href: 'https://mail.google.com/mail/u/0/#sent?compose=new',
    },
    // {
    //   type: ContactType.Location,
    //   text: ' Odessa Texas, US',
    //   href: 'https://www.google.ca/maps/place/Odessa,Tx,
    //},
    // {
    //   type: ContactType.Github,
    //   text: 'sperez927',
    //   href: 'https://github.com/sperez927',
    // },
    {
      type: ContactType.Telegram,
      text: '@salverez90',
      href: 'https://web.telegram.org/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: 'Github', Icon: GithubIcon, href: 'https://github.com/sperez927' },
  { label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/22875671/SmartDev' },
  { label: 'Dev Community', Icon: DevCommunityIcon, href: 'https://dev.to/sperez927' },
  { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/salvador-perez-346a852a2/' },
  { label: 'Twitter', Icon: TwitterIcon, href: 'https://x.com/salverez90' },
];
