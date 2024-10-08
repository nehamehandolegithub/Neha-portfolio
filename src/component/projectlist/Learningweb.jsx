import React from 'react'
import { Fade } from "react-awesome-reveal";
import learningwebui from '../../assets/learningwebui.mp4'

const Learningweb = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row mt-[2rem]">
                <div className="md:w-1/2  p-4 mt-8">
                    <Fade left>
                        <div className="text-center md:text-left lg:ml-[3rem]">
                            <video src={learningwebui} autoPlay loop controls className='border-[3px] lg:w-[600px] rounded-lg hover:scale-110 duration-200'></video>
                        </div>
                    </Fade >
                </div>
                <div className="md:w-1/2">
                    <Fade right>
                        <div className="text-center md:text-left lg:w-[85%] lg:ml-[4rem]">
                            <h3 className="text-[32px] font-bold mb-2">Simple UI Website</h3>
                            <p className='font-bold text-[#ff0044] text-[16px]'>Technology used: React.js, CSS and Tailwind CSS</p>
                            <div className='px-5 text-justify'>
                                <p className="text-[17px]">
                                I developed a simple UI website using React.js and Tailwind CSS. This project allowed me to create a clean and responsive user interface with ease. By leveraging the power of React.js, I built interactive and dynamic components, while Tailwind CSS provided a utility-first approach to styling, ensuring a seamless and efficient design process. Through this project, I enhanced my skills in building modern web applications and deepened my understanding of combining React with Tailwind CSS for creating elegant and functional UIs.
                                </p>
                                <div className='flex gap-[2rem] justify-center'>
                                    <a href='https://learningweb-ui.vercel.app/' target='blank' className='flex gap-2 mt-3 uppercase items-center bg-[#ddedea] p-1.5 font-semibold text-black rounded-md hover:bg-gray-300 hover:scale-105 duration-200'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                                        <span>live url</span>
                                    </a>
                                    <a href='https://github.com/nehamehandolegithub/Learningweb-ui' target='blank' className='flex gap-2 mt-3 uppercase items-center bg-[#ddedea] p-1.5 font-semibold text-black rounded-md hover:bg-gray-300 hover:scale-105 duration-200'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                                        <span>GitHub Link</span>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </Fade >
                </div>

            </div>
        </>
    )
}

export default Learningweb
