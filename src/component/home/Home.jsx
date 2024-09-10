import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { MdOutlineFileDownload } from "react-icons/md";
import imgfront from '../../assets/front-end.png';
import About from '../about/About'
import Projects from '../projects/Projects';
import Experience from '../experience/Experience';
import Contact from '../contact/Contact';
import Nehacv from '../../assets/Nehar-resume.pdf'


const Home = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = Nehacv;
    link.download = 'Neha Mehandole CV';
    link.click();
  };

  return (
    <>
      <div className='animated animatedFadeInUp fadeInUp grid lg:grid-cols-2 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:px-[8rem] lg:mt-[7rem] mt-[6rem] px-5'>
        <div>
          <h1 className='text-[45px] font-semibold text-[#ff0044]'>Hello!</h1>
          <h1 className='text-[40px] font-bold'>I'm Neha Mehandole</h1>
          <div>
            <h1 className='text-[#47e1e1] text-[30px]'>
              A{"  "}
              <TypeAnimation
                sequence={[
                  "Wordpress Developer",
                  1000,
                  'Front End Developer',
                  1000,
                  "React.Js Developer",
                  1000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
          </div>
          <div className='mt-4'>
            <span className='text-[18px] my-4'>Proficient in WordPress development, creating custom themes and plugins, and optimizing website performance. Skilled in frontend technologies like HTML, CSS, JavaScript, and PHP, with experience in Tailwind CSS and React.js. Passionate about crafting user-friendly, performance-driven, and responsive websites, with a focus on seamless UI/UX design and delivering high-quality frontend solutions.</span>
          </div>
          <div className='mt-3'>
            <button className='bg-[#3fe2c4] flex items-center rounded-lg px-3 py-2 lg:hover:scale-105 duration-200'>
            <MdOutlineFileDownload className='text-3xl mr-2'/>
              <span onClick={handleDownload}>Download Resume</span>
            </button>
          </div>
        </div>
        <div className='lg:mt-[4rem] mt-[3rem]'>
          <img className='lg:ml-[5rem] lg:w-[600px] sm:w-[100%] rounded-lg' src={imgfront} alt="" />
        </div>
      </div>

      {/* about */}
      <About />
      {/* experience */}
      <Experience />
      {/* projects */}
      <Projects />
      {/* contact form */}
      <Contact />
    </>
  )
}

export default Home
