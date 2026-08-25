import React from "react"
import Image from "next/image"
import Link from 'next/link';

import {FaGithub, FaLinkedinIn, FaEnvelope} from "react-icons/fa"
import {HiOutlineChevronDoubleDown} from "react-icons/hi";


const Home = () => {

    const roundButtonStyles = "rounded-full shadow-lg shadow-gray-400 cursor:pointer hover:scale-110 ease-in duration-300 flex w-[68px] h-[68px]"
    const iconStyles = "mx-auto self-center"

    return (
     
        
        <div className="w-full min-h-screen flex flex-col justify-center
        mt-[-80px] pt-[220px] md:pt-[160px] relative max-w-[1300px] mx-auto
        ">
            {/*flex container for text an image */}
            <div className="w-full md:mb-16
            p-5 flex justify-between flex-col md:flex-row gap-5 items-center text-center md:text-left">
                <div className="flex-1">
                    <h1 style={{ fontFamily: "Dancing Script, cursive" }} className=" text-6xl font-semibold text-[var(--pink-color)]">Aliya Salmanova</h1>
                    {/*<h2 className="text-3xl">a Full Stack Web Developer</h2>*/}
                    <br/>
                    <p className="max-w-[740px] text-[var(--text-color)]">Intersecting music and technology. 
                        Have worked as a software developer, composer for ads, game composer, Unity programmer, game sound designer, and pianist. 
                        Bachelor’s degree is from New York University Screen Scoring (music theory + writing music for multimedia). 
                        Am in the midst of my Master’s degree in Computer Science at Northeastern University. Currently working for Juan Pablo Grimminck. 
                        Open for commissions.<br/><br/>
                        
                    </p>
                </div>
              
                
                <div className="shrink-0" style={{ position: "relative", width: `${300}px`, height: `${300}px` }}>
                    <Image
                        src="/newprofilepic3.png"
                        alt="photo"
                        fill
                        className="rounded-full shrink-0 max-w-[300px] max-h-[300px] border-4 border-[var(--dark-pink-color)]"
                        style={{ objectFit: "cover" }}
                    />
                </div>


            </div>
            
            {/*<h3 className="text-xl uppercase text-center text-[#800020]">Scroll bellow to see my music reel, sound design work,
            skills, and technical projects</h3>*/}
            {/*
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
            */}
            <div>
                <br/>
                <div className="text-[var(--pink-color)]  font-semibold text-2xl font-dancingScript text-center">
                    <span>SCROLL DOWN</span>
                </div>


                <div className="flex py-5 px-2" >
                    <Link href='/#gamedev' scroll={true} className="inline-block
                    rounded-full shadow-lg shadow-gray-400 p-4 h-30 w-30
                    hover:scale-110 ease-in duration-200 
                    mx-auto mt-5 bg-[var(--background-color)]" >

                        <HiOutlineChevronDoubleDown
                            size={30} color="var(--pink-color)"
                        />


                    </Link>
                </div>
            </div>
            
        </div>

        

 
        
        
    )



}

export default Home;