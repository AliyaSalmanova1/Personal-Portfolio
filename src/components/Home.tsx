import React from "react"
import Image from "next/image"

import {FaGithub, FaLinkedinIn, FaEnvelope} from "react-icons/fa"


const Home = () => {


    return (
     
    
        <div className="w-screen min-h-screen flex flex-col justify-center
        mt-[-80px] pt-[80px]  relative max-w-[1200px] mx-auto
        ">
            
            <div className="w-full p-5 flex  justify-center flex-col md:flex-row gap-5 items-center text-center md:text-left">
                <div className=" ">
                    <h1 className=" text-4xl font-semibold">Hi, I&apos;m <span className="text-[#800020]">Aliya</span></h1>
                    <h2 className="text-3xl">a Full Stack Web Developer</h2>
                    <br/>
                    <p className="max-w-[740px]">I love building
                         user-friendly interfaces integrating backend technologies! <br />
                        Crafting reliable, maintainable code is always a top priority.<br/><br/>
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
            <div className="flex mx-auto w-[260px] justify-between">
                <a className="rounded-full shadow-lg shadow-gray-400 cursor:pointer hover:scale-110 ease-in duration-300
                flex w-[68px] h-[68px]
                "
                href="https://github.com/AliyaSalmanova1">
                    <FaGithub className="
                    mx-auto self-center"/>
                </a>
                <a className="rounded-full shadow-lg shadow-gray-400
                flex w-[68px] h-[68px]"
                href="https://www.linkedin.com/in/aliya-salmanova-4150711b6/">
                    <FaLinkedinIn className="
                    mx-auto self-center"/>
                </a>
                <a href="mailto:aliyasalmanova1@gmail.com"
                className="rounded-full shadow-lg shadow-gray-400
                flex w-[68px] h-[68px]">
                    <FaEnvelope className="
                    mx-auto self-center"/>
                </a>
            </div>
        </div>

        

 
        
        
    )



}

export default Home;