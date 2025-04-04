import  {useContext} from 'react';
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import { FaNodeJs,FaReact, } from "react-icons/fa";
import { SiTailwindcss,SiExpress, SiMongodb } from "react-icons/si";
import { FaJs, FaHtml5 } from "react-icons/fa";
import P1 from '../../assets/images/plant1.png'
import P2 from '../../assets/images/advice1.png'
import P3 from '../../assets/images/fusely.png'
import P4 from '../../assets/images/admin1.png'
import P5 from '../../assets/images/beta.png'
import { motion } from 'framer-motion'
import { DiCss3 } from "react-icons/di";
import { PageTheme } from '../../contexts/ThemeContext';

const Works = () => {
  const { theme } = useContext(PageTheme)
  const works = [
    {
      id: 5,
      title: "Beta House",
      image: P5,
      description: 'Beta House is a sleek and responsive real estate web application that allows users to explore,list, and manage property listings with ease. Whether you are a buyer, seller, or agent, the platform offers intuitive search, filter, and listing features that make property discovery effortless. With a clean UI and dynamic interactions, Beta House brings simplicity and style to the online real estate experience.',
      github: 'https://github.com/RAHMAN012/BetaHouse-project',
      live: 'https://betahouse-project.onrender.com/',
      stack: [<FaReact key="react"/>, <SiTailwindcss key="tailwind"/>, <FaNodeJs key="node"/>, <SiExpress key="express"/>, <SiMongodb key="mongodb"/>]
    },
    {
      id: 1,
      title: 'Big P Gardens',
      image: P1,
      description: 'A beautifully designed, responsive website for plant enthusiasts, featuring a clean UI and seamless navigation. Built with HTML, CSS, and JavaScript, this project showcases my ability to create visually appealing and user-friendly interfaces. The site includes interactive elements like a plant care guide, a shopping section, and a blog for gardening tips.',
      github: '',
      live: 'https://taiwo-plants-website.vercel.app/',
      stack: [<FaHtml5 key="html"/>  ,<FaReact key="react" />, <DiCss3 key="css3" />, <FaJs key="js"/> , <SiTailwindcss key="tailwind" />]
    },
    {
      id: 3,
      title: 'Fusely Landing Page',
      image: P3,
      description: ' modern and sleek landing page for Fusely, a pricing platform. This project focuses on clean design, responsive layouts, and smooth animations to create a compelling user experience. It includes a pricing table, testimonials, and a call-to-action section to drive conversions.',
      github: 'https://github.com/RAHMAN012/fusely-landing-page',
      live: 'https://fusely-landing-page.vercel.app/#',
      stack: [<FaHtml5 key="html"/>, <FaJs key="js"/> ,<FaReact key="react"/>, <SiTailwindcss key="tailwind"/> ]
    },
    {
      id: 4,
      title: "Admin Dashboard",
      image: P4,
      description: 'A modern and intuitive UI design for an admin dashboard tailored for a car dealership. This project highlights my ability to create clean, organized, and visually appealing interfaces for managing data. The design includes features like inventory management, sales tracking, and user analytics, with a focus on usability and responsiveness.',
      github: 'https://github.com/RAHMAN012/admin-dashboard',
      live: 'https://admin-dashboard-inky-alpha-91.vercel.app/',
      stack: [<FaHtml5 key="html"/>,<FaJs key="js"/> ,<FaReact key="react"/>, <SiTailwindcss key="tailwind"/>  ]
    },
    {
      id: 2,
      title: 'Advice Generator',
      image: P2,
      description: 'A fun and interactive web app that generates random advice using the Advice Slip API. This project demonstrates my skills in working with APIs, handling asynchronous JavaScript, and creating dynamic, engaging user experiences. The minimalist design ensures focus on functionality and usability.',
      github: 'https://github.com/RAHMAN012/advice-generator',
      live: 'https://taiwo-advice-generator.vercel.app/',
      stack: [<FaHtml5 key="html"/> , <FaReact key="react"/>,<FaJs key="js"/> , <SiTailwindcss key="tailwind"/>]
    },
    
    
    
  ];

  return (
    <div className={`bg-${theme}  ${theme === "dark" ? "bg-gradient-to-r from-blue-200 to-purple-400" : "bg-bodyColor" } h-full flex flex-col justify-center items-center py-8 `}>
      <div className="container mx-auto w-11/12">
      <div className="flex flex-col justify-center items-center mb-6">
      <h3 className={` ${theme === 'dark' ? 'text-blue-600 ' : 'text-designColor  '} font-outfit text-xl font-medium italic`}>Projects</h3>
        <p className={`mt-2 text-center font-poppins  ${theme === 'dark' ? 'text-black ' : 'text-gray-200  '}`}>Some remarkable projects I’ve worked on:</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1  gap-6 xl:gap-14">
      {works.map((work, index) => (
      <motion.div key={work.id}  className={`w-full p-4 xl:px-10 h-auto rounded-lg  flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} flex ${theme === "dark" ? "bg-slate-300" : "bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900" }  transition-colors duration-1000 items-center gap-8 py-8`} initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>
      <div className={`w-full lg:w-[70rem] h-72 md:h-80 overflow-hidden rounded-xl hover:rounded-none border-b-8  hover:border-0 shadow-blue-600 ${theme === 'dark' ? 'border-blue-600' : 'border-designColor  '}`}>
        <img
          className="w-full  object-cover  cursor-pointer"
          src={work.image}
          alt="src"
        />
      </div>
      <div className='w-[100%]'>
        <div className="w-full  flex flex-col space-y-4 ">
          <div className="flex items-center justify-between">
            <h3 className={`text-base uppercase ${theme === 'dark' ? 'text-black hover:text-gray-800' : 'text-gray-200 hover:text-gray-100 '} font-semibold font-outfit`}>
              {work.title}
            </h3>
            <div className="flex gap-2">
              <a href={work.github} className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <BsGithub />
              </a>
              <a target='blank' href={work.live} className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <FaGlobe />
              </a>
            </div>
          </div>
          <p className={`text-base tracking-wide mt-3 duration-300 font-k2d ${theme === 'dark' ? 'text-black hover:text-gray-800' : 'text-gray-200 hover:text-gray-100 '}`}>
            {work.description}
          </p>
          <div className="w-full flex">{work?.stack?.map((tech,index) => (
            <span key={index} className={`mr-2 text-2xl border-2 ${theme === 'dark' ? 'text-blue-600 border-blue-600' : ' text-designColor border-designColor'}  cursor-pointer  p-2  rounded-full hover:scale-110 duration-300`}>{tech}</span>
          ))}</div>
        </div>
      </div>
    </motion.div>
    ))}
      </div>
      </div>
      
     
    </div>
  );
}

export default Works;
