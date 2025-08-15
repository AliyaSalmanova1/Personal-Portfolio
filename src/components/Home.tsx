import React from "react"
import Image from "next/image"

import {FaGithub, FaLinkedinIn, FaEnvelope} from "react-icons/fa"


const Home = () => {

    const roundButtonStyles = "rounded-full shadow-lg shadow-gray-400 cursor:pointer hover:scale-110 ease-in duration-300 flex w-[68px] h-[68px]"
    const iconStyles = "mx-auto self-center"

    return (
     
        
        <div className="w-screen min-h-screen flex flex-col justify-center
        mt-[-80px] pt-[160px]  relative max-w-[1200px] mx-auto
        ">
            {/*flex container for text an image */}
            <div className="w-full p-5 flex  justify-center flex-col md:flex-row gap-5 items-center text-center md:text-left">
                <div className=" ">
                    <h1 style={{ fontFamily: "Dancing Script, cursive" }} className=" text-6xl font-semibold">Hi, I&apos;m <span className="text-[#800020]">Aliya</span></h1>
                    {/*<h2 className="text-3xl">a Full Stack Web Developer</h2>*/}
                    <br/>
                    <p className="max-w-[740px]">I work at the intersection of music and technology. 
                        Over the years, I’ve been a software developer, composer for ads, game composer, sound designer, and pianist. 
                        I earned my bachelor’s degree in Screen Scoring from New York University, where I honed my skills in composing for multimedia. 
                        Now, I’m pursuing a Master’s in Computer Science at DePaul University.<br/><br/>
                        <span className="text-[#800020]">Scroll below for more information.</span>
                    </p>
                </div>
              
                
                <div className="shrink-0" style={{ position: "relative", width: `${300}px`, height: `${300}px` }}>
                    <Image
                        src="/profilePhoto.jpg"
                        alt="photo"
                        fill
                        className="rounded-full shrink-0 max-w-[300px] max-h-[300px]"
                        style={{ objectFit: "cover" }}
                    />
                </div>


            </div>
            {/*buttons*/}
            <div className="flex mx-auto w-[260px] py-5 px-2 justify-between">
                <a className={roundButtonStyles}
                href="https://github.com/AliyaSalmanova1">
                    <FaGithub className={iconStyles} />
                </a>
                <a className={roundButtonStyles}
                href="https://www.linkedin.com/in/aliya-salmanova-4150711b6/">
                    <FaLinkedinIn className={iconStyles}/>
                </a>
                <a href="mailto:aliyasalmanova1@gmail.com"
                className={roundButtonStyles}>
                    <FaEnvelope className={iconStyles} />
                </a>
            </div>
        </div>

        

 
        
        
    )



}

export default Home;