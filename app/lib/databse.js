/* eslint-disable @next/next/no-img-element */

import { IoCallOutline, IoLogoJavascript } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { BsCake2 } from "react-icons/bs";
import { IoLanguage } from "react-icons/io5";
import { FaBootstrap, FaCss3, FaReact } from "react-icons/fa6";
import { PiAddressBook } from "react-icons/pi";
import { FaHtml5 } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";

export const tools = [
  {
    id: 1,
    title: 'Formik',
    image: <img src="/formik.svg" alt="image" />,
    hoverImage: <img src="/formik_light.svg" alt="hover-image" />,
    description: 'Experienced in using Formik for managing form state and handling validation in React applications.'
  },
  {
    id: 2,
    title: 'Next.js',
    image: <img src="/next.svg" alt="image" />,
    hoverImage: <img src="/next_light.svg" alt="hover-image" />,
    description: 'Proficient in building server-rendered React applications with static site generation (SSG) and server-side rendering (SSR).'
  },
  {
    id: 3,
    title: 'REST APIs',
    image: <img src="/rest_light.svg" alt="image" />,
    hoverImage: <img src="/rest.svg" alt="hover-image" />,
    description: 'Skilled in integrating and working with REST APIs for seamless data exchange between front-end and back-end systems.'
  },
  {
    id: 4,
    title: 'ChatGPT',
    image: <img src="/chat_gpt.svg" alt="image" />,
    hoverImage: <img src="/gpt_light.svg" alt="hover-image" />,
    description: 'Familiar with leveraging ChatGPT for natural language processing and building conversational interfaces.'
  },
  {
    id: 5,
    title: 'OAuth Authentication',
    image: <img src="/authentication.svg" alt="image" />,
    hoverImage: <img src="/authentication_light.svg" alt="hover-image" />,
    description: 'Experienced in implementing OAuth authentication for secure and seamless user logins.'
  },
  {
    id: 6,
    title: 'Razorpay Payment Gateway',
    image: <img src="/rpay.svg" alt="image" />,
    hoverImage: <img src="/rpay_light.svg" alt="hover-image" />,
    description: 'Knowledgeable in integrating Razorpay for processing online transactions.'
  },
  {
    id: 7,
    title: 'Stripe Payment Gateway',
    image: <img src="/stripe.svg" alt="image" />,
    hoverImage: <img src="/stripe_light.svg" alt="hover-image" />,
    description: 'Proficient in using Stripe for handling online payments securely.'
  },
  {
    id: 8,
    title: 'Bootstrap',
    image: <img src="/bootstrap.svg" alt="image" />,
    hoverImage: <img src="/bootstrap_light.svg" alt="hover-image" />,
    description: 'Adept at creating responsive web designs using Bootstrap’s grid system and components.'
  },
  {
    id: 9,
    title: 'Material UI',
    image: <img src="/mui.svg" alt="image" />,
    hoverImage: <img src="/mui_light.svg" alt="hover-image" />,
    description: 'Experienced in utilizing Material UI to implement Google’s Material Design principles in React applications.'
  }
];

export const educationData = [
  {
    date: '2022 - Present',
    title: 'React.js Developer',
    description: 'I have two years of experience in React.js with Niransoft Technologies Private Limited in Ariyalur.',
  },
  {
    date: '2016 - 2020',
    title: 'Bachelor’s Degree',
    description: 'I have completed my Bachelor\'s Degree at University College of Engineering, Ariyalur, with a percentage of 60.4%.',
  },
  {
    date: '2014 - 2016',
    title: 'Higher Secondary Education',
    description: 'I completed my Higher Secondary education at Government Higher Secondary School, Ariyalur, with a percentage of 71.9%.',
  },
  {
    date: '2012 - 2014',
    title: 'SSLC',
    description: 'I have completed my SSLC at Government High School, Vellur, with a percentage of 90%.',
  }
];

export const personalInfoData = [
  {
    icon: <IoCallOutline size={24} className='me-3 mt-1' color='#ff5959' />,
    key: 'Phone',
    value: '+91 63830 44009',
  },
  {
    icon: <MdOutlineEmail size={24} className='me-3 mt-1' color='#ff5959' />,
    key: 'Email',
    value: 'parthi.webdev@gmail.com',
  },
  {
    icon: <BsCake2 size={24} className='me-3 mt-1' color='#ff5959' />,
    key: 'Date of birth',
    value: 'December 16, 1998',
  },
  {
    icon: <IoLanguage size={24} className='me-3 mt-1' color='#ff5959' />,
    key: 'Languages known',
    value: 'Tamil and English',
  },
  {
    icon: <PiAddressBook size={24} className='me-3 mt-1' color='#ff5959' />,
    key: 'Address',
    value: 'Ghandhi nagar, Vellur, Ariyalur, Tamil Nadu.',
  },
];

export const projectsData = [
  {
    title: 'Tripherder',
    link: 'https://www.tripherder.com',
    details: [
      'Built a platform for travelers to search trips by date and preferences',
      'Provided trip suggestions to users',
      'Integrated Stripe for payments',
      'Added login with Google, Facebook, and Spotify',
    ],
  },
  {
    title: 'Trundle',
    link: 'https://trundle.me',
    details: [
      'Developed platform with two user roles: "traveler" and "trundler"',
      'Allowed trundlers to create/edit itineraries and travelers to purchase them',
      'Enabled collaboration between users for curated trip experiences',
    ],
  },
];

export const skillsData = [
  {
    category: 'Frontend Development',
    skills: [
      { icon: <FaHtml5 size={17} className='me-3' color='#ff5959' />, name: 'HTML' },
      { icon: <FaCss3 size={15} className='me-3' color='#ff5959' />, name: 'CSS' },
      { icon: <FaBootstrap size={17} className='me-3' color='#ff5959' />, name: 'Bootstrap' },
      { icon: <IoLogoJavascript size={17} className='me-3' color='#ff5959' />, name: 'JavaScript' },
      { icon: <FaReact size={17} className='me-3' color='#ff5959' />, name: 'ReactJs' },
      { icon: <RiNextjsFill size={17} className='me-3' color='#ff5959' />, name: 'NextJs' },
    ],
  },
  {
    category: 'Version Control',
    skills: [
      { icon: <FaGithub size={17} className='me-3' color='#ff5959' />, name: 'Git, GitHub' },
    ],
  },
  {
    category: 'Collaboration Tools',
    skills: [
      { name: 'Comfortable working with ChatGPT' },
    ],
  },
];
