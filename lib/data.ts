import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import marketplaceImg from '@/public/marketplace.webp';
import appImg from '@/public/app.webp';
import metaverseImg from '@/public/metaverse.webp';
import golfImg from '@/public/golf.webp';
import youkhanaImg from '@/public/youkhana.webp';
import { ProjectProps } from '@/components/project';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Bachelor in Mobile App Development',
    location: 'Sydney, Australia',
    description: 'I graduated after 3 years of studying at AIT.',
    icon: React.createElement(LuGraduationCap),
    date: '2019-2022',
  },
  {
    title: 'Full-Stack Developer',
    location: 'Sydney, Australia',
    description:
      "I've developed a CMS to organise and update the roster for a private company.",
    icon: React.createElement(CgWorkAlt),
    date: '2021',
  },
  {
    title: 'Full-stack Developer',
    location: 'Sydney, Australia',
    description:
      'I worked as a full-stack developer for 1 year for Mirk After 8 months, I was promoted to Web Lead Developer.',
    icon: React.createElement(CgWorkAlt),
    date: '2022 - 2023',
  },
  {
    title: 'Senior Frontend Developer',
    location: 'Sydney, Australia',
    description:
      'Senior Frontend Developer, Australian Catholic University. Managed and maintained the suite of ACU websites, as well as developed new sites as needed. Concurrently undertook the migration of all existing components to React, supporting ACU’s transition to Sitecore 10 and enabling headless CMS capabilities. Designed and implemented reusable components in Storybook, creating a robust, scalable foundation for future development.',
    icon: React.createElement(CgWorkAlt),
    date: '2023 - Present',
  },
  {
    title: 'Full-stack Developer',
    location: 'Sydney, Australia',
    description:
      "Looking for a new position. My stack includes React, React-Native, Next.js, TypeScript, Tailwind, MongoDB, Firebase, Postgresql, AWS. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: 'Present',
  },
] as const;

export const projectsData: ProjectProps[] = [
  {
    title: 'Youkhana Shopify Store',
    description:
      'I made the Youkhana Website/Store following the artist’s design. The main page has a gallery using the Instagram API. The store is made with Shopify API.',
    tags: [
      'Shopify',
      'NextJs',
      'TypeScript',
      'Tailwind',
      'Framer motion',
      'Instagram API',
      'Resend Email',
    ],
    url: [{ url: 'https://youkhana.info', online: true }],
    imageUrl: youkhanaImg,
  },
  {
    title: 'Play Today. Marketplace',
    description:
      "I was in charge of the full project. A marketplace to buy Golf players' NFTs.",
    tags: [
      'React',
      'Next.js',
      'TypeScript',
      'Postgresql',
      'Firebase',
      'Zustand',
    ],
    url: [{ url: 'https://marketplace.playtoday.cc', online: false }],
    imageUrl: marketplaceImg,
  },
  {
    title: 'Play Today. App Showcase',
    description:
      "I was in charge of the full project. It's a website to showcase the Golf app we have made on React-Native.",
    tags: ['React', 'TypeScript', 'Postgresql', 'Firebase', 'Zustand'],
    url: [{ url: 'https://app.playtoday.cc', online: true }],
    imageUrl: appImg,
  },
  {
    title: 'Play Today. Golf',
    description:
      'I was in charge of all the Wallet section (Show the badges, balance, purchase Crypto,...).',
    tags: ['React-Native', 'Mobx', 'Postgresql', 'Firebase', 'Polygon', 'AWS'],
    url: [
      {
        url: 'https://play.google.com/store/apps/details?id=cc.playtoday.golfapp',
        online: true,
      },
      {
        url: 'https://apps.apple.com/au/app/play-today/id1631790603',
        online: true,
      },
    ],
    imageUrl: golfImg,
  },
  {
    title: 'Play Today. Metaverse',
    description:
      'The React front-end initialises a Unity instance to render the WebGL project and handles user authentication, transferring the data to the WebGL build.',
    tags: ['React', 'TypeScript', 'Firebase', 'Zustand'],
    url: [{ url: 'https://playtoday.cc', online: true }],
    imageUrl: metaverseImg,
  },
];

export const skillsData = [
  'HTML',
  'CSS',
  'SASS',
  'JavaScript',
  'TypeScript',
  'React',
  'React-Native',
  'Next.js',
  'Node.js',
  'jQuery',
  'Git',
  'Tailwind',
  'MongoDB',
  'Redux',
  'Mobx',
  'Firebase',
  'Zustand',
  'Storybook',
  'AWS',
  'Azure',
  'Express',
  'PostgreSQL',
] as const;
