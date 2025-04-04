// import React from 'react';
import { FaGithub,  FaLinkedin } from 'react-icons/fa';
// import Logo from '../assets/logo.png';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-bodyColor text-white py-8 ">
      <div className=" px-4 container mx-auto w-11/12">
        <div className="flex flex-col md:flex-row items-center justify-between">
        <p className="mt-2 text-lg">&copy; Taiwo Adepoju {new Date().getFullYear()}</p>
          
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="https://github.com/RAHMAN012" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-designColor transition-colors duration-300">
              <FaGithub className="h-6 w-6" />
            </a>
            <a href="https://x.com/rahman_poju" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-designColor transition-colors duration-300">
             
              <FaXTwitter className="h-6 w-6"/>
            </a>
            <a href="https://www.linkedin.com/in/taiwo-adepoju-1443b3306/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-designColor transition-colors duration-300">
              <FaLinkedin className="h-6 w-6" />
            </a>
            {/* <a href="https://www.instagram.com/gharneeyart20?igsh=MWwzY29ldXkzdTVlaA==" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-designColor transition-colors duration-300">
              <FaInstagram className="h-6 w-6" />
            </a> */}
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
