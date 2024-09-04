/* eslint-disable react/no-unescaped-entities */
import Card from './components/Card';
import { AiOutlineCloudDownload } from "react-icons/ai";
import { GoMail } from "react-icons/go";
import Link from 'next/link';
import { IoCallOutline, IoLogoJavascript } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { BsCake2 } from "react-icons/bs";
import { IoLanguage } from "react-icons/io5";
import { FaBootstrap, FaCss3, FaLinkedin, FaReact } from "react-icons/fa6";
import { PiAddressBook } from "react-icons/pi";
import { FaHtml5 } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";
import { SkillCard } from './components/SkilledCard';


const tools = [
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



export default function Hage() {
  return (
    <div className='container mb-5'>
      <div className="row">
        <div className="col-lg-9 col-12 mx-auto">
          <Card title={"About Me"}>
            <div className="row">
              <div className="col-lg-3 col-12">
                <img src="https://bako-portfolio.vercel.app/images/about.png" alt="profile-image" />
              </div>
              <div className="col-lg-9 col-12 mx-auto">
                <div className="about-me mb-4">
                  <p className='hello-text mb-4'>Hello,</p>
                  <p className='description'>I am Parthiban Ramachandran, web developer from London, United Kingdom. I have rich experience in web site design and building and customization, also I am good at wordpress.</p>
                </div>
                <div className='row'>
                  <div className='col-md-6 col-12 about-me'>
                    <p className='description mb-2'>
                      Name: <span className='text-dark'>Parthiban Ramachandran</span>
                    </p>
                    <p className='description mb-2'>
                      Birthday:<span className='text-dark'> December 16, 1998</span>
                    </p>
                  </div>
                  <div className='col-md-6 col-12 about-me'>
                    <p className='description mb-2'>
                      Location: <span className='text-dark'>London, UK</span>
                    </p>
                    <p className='description mb-2'>
                      Email: <span className='text-dark'>hello@bako.com</span>
                    </p>
                  </div>
                </div>
                <div className='mt-4 row'>
                  <div className="col-lg-5 col-md-6 col-12 mb-2">
                    <button className="btn-red w-100 rounded-5 border-0 py-2">
                      <AiOutlineCloudDownload size={22} />
                      Download CV
                    </button>
                  </div>
                  <div className="col-lg-5 col-md-6 col-12">
                    <Link href={"mailto:rparthiban1612@gmail.com"} className="btn-blue w-100 text-decoration-none rounded-5 border-0 px-4 py-2">
                      <GoMail size={15} />
                      Hire me
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-9 col-12 mx-auto">
          <Card title={"My skills"}>
            <div className="row">
              <div className="col-12">
                <div className="about-me mb-4">
                  <p className='description'>I am Parthiban Ramachandran, web developer from London, United Kingdom. I have rich experience in web site design and building and customization, also I am good at wordpress.</p>
                </div>
                <div className='skills-list d-flex flex-column gap-2'>
                  <p className='category fw-semibold text-dark'>
                    Frontend Development:
                  </p>
                  <ul>
                    <li className='list-unstyled d-flex align-items-center mb-1'>
                      <FaHtml5 size={17} className='me-3' color='#ff5959' />
                      <p>
                        HTML
                      </p>
                    </li>
                    <li className='list-unstyled d-flex align-items-center'>
                      <FaCss3 size={15} className='me-3' color='#ff5959' />
                      <p>
                        CSS
                      </p>
                    </li>
                    <li className='list-unstyled d-flex align-items-center'>
                      <FaBootstrap size={17} className='me-3' color='#ff5959' />
                      <p>
                        Bootstrap
                      </p>
                    </li>
                    <li className='list-unstyled d-flex align-items-center'>
                      <IoLogoJavascript size={17} className='me-3' color='#ff5959' />
                      <p>
                        Javascript
                      </p>
                    </li>
                    <li className='list-unstyled d-flex align-items-center'>
                      <FaReact size={17} className='me-3' color='#ff5959' />
                      <p>
                        ReactJs
                      </p>
                    </li>
                    <li className='list-unstyled d-flex align-items-center'>
                      <RiNextjsFill size={17} className='me-3' color='#ff5959' />
                      <p>
                        NextJs
                      </p>
                    </li>
                  </ul>
                </div>
                <div className='skills-list d-flex flex-column gap-2'>
                  <p className='category fw-semibold text-dark'>
                    Version Control:
                  </p>
                  <ul>
                    <li className='list-unstyled d-flex align-items-center mb-1'>
                      <FaGithub size={17} className='me-3' color='#ff5959' />
                      <p>
                        Git, GitHub
                      </p>
                    </li>
                  </ul>
                  <p>
                    <span className='category fw-semibold text-dark'>Collaboration Tools:</span> Comfortable working with ChatGPT.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-9 col-12 mx-auto">
          <Card title={"Expertise"}>
            <div className="row tools-list">
              {tools?.map((data, index) => {
                return (
                  <SkillCard key={index} skill={data} />
                )
              })}
            </div>
          </Card>
        </div>
      </div>
      <div className="row ">
        <div className="col-lg-9 col-12 mx-auto personal-details">
          <Card title={"Education"}>
            <div className="timeline">
              <div className="entry">
                <div className="title">
                  <span className='date'>2022 - Present</span>
                </div>
                <div className="body">
                  <h4 className="mt-0">React.js Developer</h4>
                  <p>
                    I have two years of experience in React.js with Niransoft Technologies Private Limited in Ariyalur.
                  </p>
                </div>
              </div>
              <div className="entry">
                <div className="title">
                  <span className='date'>2016 - 2020</span>
                </div>
                <div className="body">
                  <h4 className="mt-0">Bachelor’s Degree</h4>
                  <p>
                    I have completed my Bachelor's Degree at University College of Engineering, Ariyalur, with a percentage of 60.4%.
                  </p>
                </div>
              </div>
              <div className="entry">
                <div className="title">
                  <span className='date'>2014 - 2016</span>
                </div>
                <div className="body">
                  <h4 className="mt-0">Higher Secondary Education</h4>
                  <p>
                    I completed my Higher Secondary education at Government Higher Secondary School, Ariyalur, with a percentage of 71.9%.
                  </p>
                </div>
              </div>
              <div className="entry">
                <div className="title">
                  <span className='date'>2012 - 2014</span>
                </div>
                <div className="body">
                  <h4 className="mt-0">SSLC</h4>
                  <p>
                    I have completed my SSLC at Government High School, Vellur, with a percentage of 90%.
                  </p>
                </div>
              </div>
              <span className="timeline-line" />
            </div>
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-9 col-12 mx-auto personal-details">
          <Card title={"Personal information"}>
            <div className="row">
              <div className="col-md-6 col-12 d-flex align-items-start mb-4">
                <IoCallOutline size={24} className='me-3 mt-1' color='#ff5959' />
                <div>
                  <p className='key'>
                    Phone
                  </p>
                  <p className='value'>
                    +91 63830 44009
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-12 d-flex align-items-start mb-4">
                <MdOutlineEmail size={24} className='me-3 mt-1' color='#ff5959' />
                <div>
                  <p className='key'>
                    Email
                  </p>
                  <p className='value'>
                    rparthiban1612@gmail.com
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-12 d-flex align-items-start mb-4">
                <BsCake2 size={24} className='me-3 mt-1' color='#ff5959' />
                <div>
                  <p className='key'>
                    Date of birth
                  </p>
                  <p className='value'>
                    December 16, 1998
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-12 d-flex align-items-start mb-4">
                <IoLanguage size={24} className='me-3 mt-1' color='#ff5959' />
                <div>
                  <p className='key'>
                    Languages known
                  </p>
                  <p className='value'>
                    Tamil and English
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-12 d-flex align-items-start mb-4">
                <FaLinkedin size={24} className='me-3 mt-1' color='#ff5959' />
                <div>
                  <p className='key'>
                    LinkedIn profile
                  </p>
                  <Link target='_blank' href='https://www.linkedin.com/in/parthiban-ramachandran-11216b296/' className='value'>
                    Parthiban Ramachandran
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-12 d-flex align-items-start mb-4">
                <PiAddressBook size={24} className='me-3 mt-1' color='#ff5959' />
                <div>
                  <p className='key'>
                    Address
                  </p>
                  <p className='value'>
                    Ghandhi nagar, Vellur, Ariyalur, Tamil nadu.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div >
  )
}
