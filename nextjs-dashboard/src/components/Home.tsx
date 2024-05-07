import React from "react"
import Image from "next/image"
import {FaGithub, FaLinkedinIn} from "react-icons/fa"


const Home = () => {


    return (
        <div className="p-5 md:grid grid-cols-2 gap-5 items-center w-full h-screen">
            <div>
                <h1 className="text-4xl font-semibold">Hi, I'm Aliya Salmanova</h1>
                <h2 className="text-3xl">a Full Stack Web Developer</h2>
            </div>
            
            <Image className="rounded-full"
             src="/profilePhoto.jpg"  alt="photo"
             width="400"
             height="400" 
            />
            <a 
             href="https://github.com/AliyaSalmanova1">
                <FaGithub />
            </a>
            <a 
             href="https://www.linkedin.com/in/aliya-salmanova-4150711b6/">
                <FaLinkedinIn />
            </a>


        </div>
        
    )



}

export default Home;