import  {useContext} from 'react';
import { motion } from 'framer-motion'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { GrLocation } from "react-icons/gr";
import {FaLinkedinIn,FaGithub} from "react-icons/fa";
import { FaXTwitter} from "react-icons/fa6";
import portfolioImg from "../../assets/portfolio4.jpg"
import { PageTheme } from '../../contexts/ThemeContext';

const Hero = () => {
  const { theme } = useContext(PageTheme)
  const [text] = useTypewriter({
    words: [ "Frontend Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className={`bg-${theme} h-auto  pt-24 pb-8 ${theme === "dark" ? "bg-slate-300" : "bg-bodyColor" }`}>
       <div className="container mx-auto w-11/12 flex flex-col-reverse lg:flex-row items-center gap-4">
       <motion.div 
                className="w-full lg:w-2/3  flex flex-col  justify-center items-stretch space-y-6 md:space-y-10"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
        <div>
          <h1 className={`text-3xl md:text-4xl font-bold ${theme === 'dark' ? 'text-black' : 'text-white'}`}>Hi, I&apos;m Taiwo 👋</h1>
          <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#8A42DB"
          />
        </h2>
          <p className={`text-base md:text-lg  mt-2 md:mt-4 ${theme === 'dark' ? 'text-black' : 'text-gray-200'} font-k2d`}>A creative Frontend  Developer with a flair for building sleek, interactive websites,visually appealing, and user-centric web experiences. I bring ideas to life by combining clean code with creative design.I’m all about blending creativity with code to deliver seamless digital experiences. Let’s create something amazing together!</p>
        </div>
        <div className="space-y-2 md:space-y-0 flex flex-col md:flex-row md:gap-8">
          <div className={`flex items-center ${theme === 'dark' ? 'text-gray-600' : ' text-white'}`}><span><GrLocation size={25} className={`mr-2 ${theme === 'dark' ? 'text-blue-600' : ' text-designColor'}`} /></span> <span>Lagos, Nigeria</span></div>
          <div className={`flex items-center ${theme === 'dark' ? 'text-gray-600' : ' text-white'}`}><span className='border w-3 h-3 bg-emerald-400 rounded-full mr-2'></span> Available for new projects</div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 ">
        <div>
          <h2 className={`text-base uppercase font-titleFont mb-4 ${theme === 'dark' ? 'text-gray-800' : 'text-gray-200'}`}>
            Find me on
          </h2>
          <div className="flex gap-2 md:gap-4">
            <a href="https://github.com/RAHMAN012" target="blank">
              <span className={`bannerIcon ${theme === 'dark' ? 'bg-opacity-100 shadow-none hover:bg-opacity-100' : 'bannerIcon'}`}>
                <FaGithub />
              </span>
            </a>
            
            
            <a href="https://x.com/rahman_poju" target="blank">
              <span className={`bannerIcon ${theme === 'dark' ? 'bg-opacity-100 shadow-none hover:bg-opacity-100' : 'bannerIcon'}`}>
              <FaXTwitter />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/taiwo-adepoju-1443b3306/" target="blank">
              <span className={`bannerIcon ${theme === 'dark' ? 'bg-opacity-100 shadow-none hover:bg-opacity-100' : 'bannerIcon'}`}>
                <FaLinkedinIn />
              </span>
            </a>
            {/* <a href="https://www.instagram.com/gharneeyart20?igsh=MWwzY29ldXkzdTVlaA==" target="blank">
              <span className={`bannerIcon ${theme === 'dark' ? 'bg-opacity-100 shadow-none hover:bg-opacity-100' : 'bannerIcon'}`}>
                <FaInstagram />
              </span>
            </a> */}
          </div>
        </div>
        {/* <a href={resume} download="My_Resume.pdf">
      <button className={`bannerIcon w-44 mt-3 md:mt-10 font-semibold flex items-center justify-center ${theme === 'dark' ? 'bg-opacity-100 shadow-none hover:bg-opacity-100' : 'bannerIcon'}`}>
        <PiReadCvLogo className="mr-2" /> My Resume
      </button> */}
    {/* </a> */}
        </div>
        </motion.div>

    <motion.div 
                className="md:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
               <motion.img
      src={portfolioImg}
      alt="John Doe"
      className={`rounded-full w-64 h-64 mx-auto md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover shadow-2xl border-4 ${theme === 'dark' ? 'border-blue-600' : 'border-blue-400'}`}
      initial={{ borderWidth: "4px" }}
      animate={{ borderWidth: "8px" }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 10,
        repeat: Infinity,
        repeatType: "mirror",
        duration: 1.5,
      }}
    />
              </motion.div>
     
       </div>
    </div>
  );
}

export default Hero;
