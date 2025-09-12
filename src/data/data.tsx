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
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import profilepic from '../images/profile-logo.png';
import reviewerImage2 from '../images/reviewers/AdrianMadrid.jpg';
import reviewerImage1 from '../images/reviewers/JohnMichael.jpg';
import reviewerImage3 from '../images/reviewers/MarketingDirector.jpg';
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
  title: 'Salvador Perez Portfolio',
  description:
    'This is a personal front-end website built with JavaScript and Next.js. It provides more detailed information about me.',
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
        I'm a <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working as a Senior
        Freelance Web Developer, with over 14 years of experience building scalable web applications and leading
        cross-functional teams.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my spare time, I enjoy contributing to <strong className="text-stone-100">open-source</strong> projects,
        exploring emerging technologies like <strong className="text-stone-100">AI</strong> and{' '}
        <strong className="text-stone-100">blockchain</strong>, and writing technical articles.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/1nacZd1PkQcFtm2semalj-UKs3LIUNhoB/view?usp=sharing',
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
    title: 'Canvas LMS – Student Dashboard',
    summary:
      'Built a student-focused dashboard experience for an LMS platform, improving visibility into courses, deadlines, and academic workload.',
    bullets: [
      'Designed course-based dashboard with real-time task tracking.',
      'Implemented assignment and notification prioritization.',
      'Improved usability for high-frequency student workflows.',
    ],
    skills: ['React', 'Node.js', 'TypeScript', 'Material UI', "AWS"],
    url: 'https://canvas.instructure.com/',
    image: porfolioImage1,
  },
  {
    title: 'Bridge LMS – Employee Learning Dashboard',
    summary:
      'Developed a corporate learning dashboard focused on compliance training, skill tracking, and personalized learning paths.',
    bullets: [
      'Designed course-based dashboard with real-time task tracking.',
      'Implemented assignment and notification prioritization.',
      'Improved usability for high-frequency student workflows.',
    ],
    skills: ['React', 'Node.js', 'UI/UX', 'Ruby', 'Java', 'Angular'],
    url: 'https://bridge.instructure.com',
    image: porfolioImage2,
  },
  {
    title: 'IQVIA – Clinical Research Platform',
    summary:
      'Contributed to enterprise clinical research systems by building scalable front-end components for data-intensive workflows.',
    bullets: [
      'Developed complex data tables for clinical and trial data.',
      'Improved performance and rendering for large datasets.',
      'Collaborated across backend systems for seamless integration.',
    ],
    skills: ['React', 'Node.js', 'Zeplin'],
    url: 'https://iqvia.com',
    image: porfolioImage3,
  },
  {
    title: 'IQVIA SmartSolve – Compliance Platform',
    summary:
      'Built scalable React components for a global compliance platform supporting regulatory, quality, and audit workflows.',
    bullets: [
      'Developed reusable UI components for RIM and eQMS modules',
      'Migrated legacy interfaces to modern React architecture',
      'Built complex data grids and workflow-driven interfaces',
    ],
    skills: ['React', 'Node.js', 'MongoDB', 'SalesForce'],
    url: 'https://iqvia.com',
    image: porfolioImage4,
  },
  {
    title: 'CodeLikePro – Programming Exercise Platform',
    summary:
      'A practice website for programming students where they create their own exercises, solve exercises from other programmers, and showcase their solutions.',
    bullets: [
      'Allows creating and solving programming exercises.',
      'Showcases solutions from programmers.',
      'Built for educational purposes.',
    ],
    skills: ['Next.js', 'TypeScript', 'Firebase'],
    url: 'https://code-like-pro-next.vercel.app/',
    githubUrl: 'https://github.com/sperez927/pro-coding',
    image: porfolioImage5,
  },
  {
    title: 'Talent Syncro – Employee Management Platform',
    summary:
      'Talent Syncro is a platform for managing employee tasks, salaries, and roles with secure logins and different dashboards for Employees, HR, and Admin.',
    bullets: [
      'Manages tasks, salaries, and roles.',
      'Secure logins with role-based dashboards.',
      'Includes real-time updates and payment processing.',
    ],
    skills: ['React', 'Node.js', 'MongoDB'],
    url: 'https://talent-syncro.web.app/',
    githubUrl: 'https://github.com/sperez927/hr-talent-syncro-client',
    image: porfolioImage6,
  },
  {
    title: 'Camper: Your Ultimate Tour Travel Website',
    summary:
      'Camper: Your Ultimate Tour Travel Website Welcome to Camper, your go-to platform for discovering and booking your next adventure! Whether you are planning a weekend getaway or a world tour, Camper allows you to customize every aspect of your trip.',
    bullets: [
      'Explore Diverse Tours: Browse through a wide range of tours tailored to various interests and destinations.',
      'Comprehensive Trip Planning: Plan your entire journey online by selecting: i.Your desired destination ii.Transportation options iii. Accommodations',
      'Personalize Your Experience: Enhance your trip with optional activities and rental vehicles, ensuring a unique adventure every time.',
    ],
    skills: ['HTML', 'CSS', 'React'],
    url: 'https://vedant1745.github.io/Camper-Travel-Website/',
    githubUrl: 'https://github.com/sperez927/quick-demo-camper-travel',
    image: porfolioImage7,
  },
  {
    title: 'Aimeos (E-commerce Platform)',
    summary:
      'Developed a fully responsive e-commerce web application using Laravel (backend) and Vue.js (frontend).',
    bullets: [
      'Integrated Stripe for payments.',
      'Dynamic product filtering and inventory.',
      'Admin dashboard with role-based access.',
    ],
    skills: ['Laravel', 'Vue.js', 'MySQL'],
    url: 'https://aimeos.org/',
    image: porfolioImage8,
  },
];

export const education: TimelineItem[] = [
  {
    date: 'May 2012',
    location: 'Richardson, TX',
    title: 'University of Texas at Dallas',
    content: (
      <p>
        I earned a Bachelor's degree in Computer Science from the University of Texas at Dallas, where I built a strong
        foundation in programming, web development, and core concepts like data structures, algorithms, and database
        design.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'September 2021 - March 2026',
    location: 'BairesDev',
    title: 'Senior Full Stack Software Engineer',
    content: (
      <p>
        Developed and delivered a wide range of full-stack applications in a consulting capacity, including AI-powered
        HR systems, e-learning platforms, real-time dashboards, and secure multi-step forms — using React, Next.js,
        Node.js, Java, Django, and Redis. Emphasized performance, scalability, and cloud-native deployment across
        projects using AWS Lambda, PostgreSQL, and OpenAI API integrations.
      </p>
    ),
  },
  {
    date: 'April 2020 - August 2021',
    location: 'WoahStork',
    title: 'Senior Full Stack Software Engineer',
    content: (
      <p>
        Led development of scalable e-commerce features using React, Node.js, and AWS — including secure product catalog
        APIs, JWT-based auth, Stripe/PayPal payments, and OpenAI-driven SEO tagging. Streamlined CI/CD with CodePipeline
        and deployed containers via OpenShift and Docker.
      </p>
    ),
  },
  {
    date: 'Feburary 2017 - December 2019',
    location: 'Tentaroo',
    title: ' Lead Frontend Engineer',
    content: (
      <p>
        Migrated legacy systems to Next.js and Angular, improving page load times by 40% and SEO performance. Built UI
        and event tools for national council platforms and camp management platforms, integrated APIs like Google Maps,
        Calendar, and PayPal, and supported Spring Boot-based backend with MySQL.
      </p>
    ),
  },
  {
    date: 'May 2015 - January 2017',
    location: 'CyberNova',
    title: 'Full Stack Developer',
    content: (
      <p>
        Delivered multiple healthcare and data platforms in a consulting role, building real-time dashboards and secure
        messaging with React, Django, PostgreSQL, and Redis-backed socket.io. Developed alerting and monitoring tools
        using Kafka and REST APIs, driven by live metrics and rule-based logic.
      </p>
    ),
  },
  {
    date: 'Octorber 2014 - January 2015',
    location: 'UBreakiFix',
    title: 'Backend Developer',
    content: (
      <p>
        Built a streamlined Laravel backend with MySQL, GraphQL, and Cloudflare, and improved deployment speed using
        Jenkins CI/CD and Contentful integration.
      </p>
    ),
  },
  {
    date: 'July 2012 - September 2014',
    location: 'ODesk',
    title: 'Full Stack Freelancer',
    content: (
      <p>
        Built custom dashboards and full-stack systems for small businesses using jQuery, Backbone.js, C# (N-tier
        architecture), and Spring Boot with Kafka. Developed cloud-based reporting pipelines using GCP BigQuery for
        scalable analytics and automation.
      </p>
    ),
  },
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
      image: reviewerImage1,
    },
    {
      name: 'Director of Enginner',
      text: "Salvador Perez is one of the most dependable and skilled web developers I’ve worked with in my career. Their 14+ years of experience really shows — whether it's building responsive UIs, optimizing performance, or solving tricky backend issues, they get it done right and on time.",
      // image: 'https://drive.google.com/file/d/15hKY0V4KfjOAZpZK5Eq6t8217p50bqKa/view?usp=sharing',
      image: reviewerImage2,
    },
    {
      name: 'Marketing Director, E-commerce Brand',
      text: 'Salvador Perez helped us redesign our entire site from the ground up. Their mix of frontend design sensitivity and backend logic was exactly what we needed. The project launched early and exceeded expectations — we saw a 35% increase in engagement within the first month.',
      // image: 'https://drive.google.com/file/d/1cr47WzJOgcWzI81mrWtbvLRssWU5r0dG/view?usp=sharing',
      image: reviewerImage3,
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
    {
      type: ContactType.Phone,
      text: '+1(432) 278-1267',
      href: 'tel:+14322781267',
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
  { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/salvador-perez-20470b20' },
  { label: 'Twitter', Icon: TwitterIcon, href: 'https://x.com/salverez90' },
];
