import React from "react"
import Image from "next/image"

import {FaGithub, FaLinkedinIn, FaEnvelope} from "react-icons/fa"


const Home = () => {


    return (
        <div className="w-full h-screen flex flex-col justify-center">
            <div className="p-5 flex flex-col md:flex-row grid-cols-2 gap-5 items-center text-center md:text-left">
                <div className="mx-auto">
                    <h1 className="text-4xl font-semibold">Hi, I'm Aliya Salmanova</h1>
                    <h2 className="text-3xl">a Full Stack Web Developer</h2>
                    <br/>
                    <p className="max-w-[740px]">I love crafting reliable, maintainable code to build 
                        intuitive user interfaces integrating backend technologies!
                        Scroll below for more information.
                    </p>
                </div>
              
                
                <div className="shrink-0" style={{ position: "relative", width: `${400}px`, height: `${400}px` }}>
                    <Image
                        src="/profilePhoto.jpg"
                        alt="photo"
                        fill
                        className="rounded-full shrink-0 w-[400px] h-[400px]"
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