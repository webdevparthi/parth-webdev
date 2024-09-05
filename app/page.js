/* eslint-disable react/no-unescaped-entities */
import Card from './components/Card';
import { GoMail } from "react-icons/go";
import Link from 'next/link';
import { SkillCard } from './components/SkilledCard';
import Image from 'next/image';
import DownloadCV from './components/DownloadCV';
import { FaLinkedin } from "react-icons/fa6";
import {
  educationData,
  personalInfoData,
  projectsData,
  skillsData,
  tools
} from './lib/databse';

export default function Hage() {
  return (
    <div className='container mb-5'>
      <div className="row">
        <div className="col-lg-9 col-12 mx-auto">
          <Card title={"About Me"}>
            <div className="row">
              <div className="col-lg-3 col-12">
                <Image
                  src="/profile.png"
                  width={150}
                  height={150}
                  alt="profile-image"
                  style={{ borderRadius: "100px", objectFit: "cover" }}
                />
              </div>
              <div className="col-lg-9 col-12 mx-auto">
                <div className="about-me mb-4">
                  <p className='hello-text mb-4'>Hello,</p>
                  <p className='description'>
                    I’m Parthiban Ramachandran, an experienced Web Developer with 2 years of hands-on experience building
                    responsive and dynamic web applications using HTML, CSS, Bootstrap, JavaScript, React.js, and Next.js.
                    I’m proficient in version control with Git and GitHub, and skilled in collaborating using tools like ChatGPT to streamline development.
                  </p>
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
                      Location: <span className='text-dark'>Chennai, Tamil nadu</span>
                    </p>
                    <p className='description mb-2'>
                      Email: <span className='text-dark'>parthi.webdev@gmail.com</span>
                    </p>
                  </div>
                </div>
                <div className='mt-4 row'>
                  <div className="col-lg-5 col-md-6 col-12 mb-2">
                    <DownloadCV />
                  </div>
                  <div className="col-lg-5 col-md-6 col-12">
                    <Link href={"mailto:parthi.webdev@gmail.com"} className="btn-blue shadow w-100 text-decoration-none rounded-5 border-0 px-4 py-2">
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
                {skillsData.map((skillSet, index) => (
                  <div className='skills-list d-flex flex-column gap-2 mb-3' key={index}>
                    <p className='category fw-semibold text-dark'>{skillSet.category}:</p>
                    <ul className='mb-0'>
                      {skillSet.skills.map((skill, idx) => (
                        <li className='list-unstyled d-flex align-items-center mb-1' key={idx}>
                          {skill.icon && skill.icon}
                          <p>{skill.name}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
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
        <div className="col-lg-9 col-12 mx-auto projects">
          <Card title={"Projects"}>
            {projectsData.map((project, index) => (
              <div key={index} className='mb-3'>
                <h4>
                  <Link target='_blank' className='text-decoration-none text-dark' href={project.link}>
                    {project.title}
                  </Link>
                </h4>
                <ul className='mb-0'>
                  {project.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                  <li className='list-unstyled mt-2'>
                    Visit:{' '}
                    <Link style={{ color: "#ff5959" }} target='_blank' className='fw-semibold' href={project.link}>
                      {project.title} App
                    </Link>
                  </li>
                </ul>
              </div>
            ))}
          </Card>
        </div>
      </div>
      <div className="row ">
        <div className="col-lg-9 col-12 mx-auto personal-details">
          <Card title={"Education"}>
            <div className="timeline">
              {educationData.map((entry, index) => (
                <div className="entry" key={index}>
                  <div className="title">
                    <span className="date me-sm-0 me-1">{entry.date}</span>
                  </div>
                  <div className="body">
                    <h4 className="mt-0">{entry.title}</h4>
                    <p>{entry.description}</p>
                  </div>
                </div>
              ))}
              <span className="timeline-line" />
            </div>
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-9 col-12 mx-auto personal-details">
          <Card title={"Personal information"}>
            <div className="row">
              {personalInfoData.map((info, index) => (
                <div className="col-md-6 col-12 d-flex align-items-start mb-4" key={index}>
                  {info.icon}
                  <div>
                    <p className='key'>{info.key}</p>
                    <p className='value'>{info.value}</p>
                  </div>
                </div>
              ))}
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
            </div>
          </Card>
        </div>
      </div>
    </div >
  )
}
