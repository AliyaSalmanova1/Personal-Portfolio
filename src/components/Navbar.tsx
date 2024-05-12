"use client"
import {useState, useEffect} from "react"
import Link from 'next/link';

import {AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import {FaGithub, FaLinkedinIn, FaEnvelope} from "react-icons/fa"


const AliyaSalmanova = () => {
    return "<AliyaSalmanova />"
  };

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);

    useEffect(() => {
        const handleShadow = () => {
          if (window.scrollY >= 90) {
            setShadow(true);
          } else {
            setShadow(false);
          }
        };
        window.addEventListener('scroll', handleShadow);
    }, []);

    const handleNav = () => {
    setNav(!nav);
    };


    return (
        <>
            <nav className={
                shadow ?
                "bg-[#fff6ec] shadow-xl z-[999] sticky top-0 h-20 w-full px-2 flex justify-between items-center" : 
                "bg-[#fff6ec] sticky top-0 z-[999] h-20 w-full px-2 flex justify-between items-center"
            }>
            
                <h3 className="italic text-xl text-shadow">
                    <span>{"<"}</span>
                    <span className="text-[#800020]">AliyaSalmanova /</span>
                    <span>{">"}</span> 
                </h3>

                <ul className="hidden md:flex">
                    <li className="ml-10"><Link href='/'>Home</Link></li>
                    <li className="ml-10"><Link href='/#about'>About</Link></li>
                    <li className="ml-10"><Link href='/#skills'>Skills</Link></li>
                    <li className="ml-10"><Link href='/#projects'>Projects</Link></li>
                    <li className="ml-10"><Link href='/#contact'>Contact</Link></li>
                </ul>

                {/*hamburger*/}

                <div
          
                    onClick={handleNav}
                    className='md:hidden'
                >
                    <AiOutlineMenu size={25} />
                </div>

            </nav>

            {/* Mobile Menu */}
            {/* Overlay */}

            <div className={
            nav? "bg-[#fff6ec] z-[999] md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" :
            "z-[999] bg-[#fff6ec]"
            }>

                {/* Side Drawer Menu */}

                <div className={
                    nav ? "bg-[#fff6ec] fixed left-0 top-0 w-[75%] h-screen z-[999]  px-5 py-6 transition-all ease-in duration-300" :
                    "bg-[#fff6ec] fixed left-[-100%] top-0 z-[999] px-5 py-6  ease-in duration-300"
                }>
                    <div className="flex justify-between items-end mb-16">
                        <h3 className="italic text-xl text-shadow">
                            <span>{"<"}</span>
                            <span className="text-[#800020]">AliyaSalmanova /</span>
                            <span>{">"}</span> 
                        </h3>
                        <div onClick={handleNav} 
                        className="rounded-full shadow-xl shadow-gray-400 p-3 cursor-pointer">
                            <AiOutlineClose />
                        </div>
                    </div>
                    
                    <span className="uppercase ">Let&apos;s build something together</span>
                    <hr className="bg-[#800020] my-5"></hr>
                    <ul className="">
                        <li className="py-4" onClick={() => setNav(false)}>
                            <Link href='/'>Home</Link>
                        </li>
                        <li className="py-4" onClick={() => setNav(false)}>
                            <Link href='/#about'>About</Link>
                        </li>
                        <li className="py-4" onClick={() => setNav(false)}>
                            <Link href='/#skills'>Skills</Link>
                        </li>
                        <li className="py-4" onClick={() => setNav(false)}>
                            <Link href='/#projects'>Projects</Link>
                        </li>
                        <li className="py-4" onClick={() => setNav(false)}>
                            <Link href='/#contact'>Contact</Link>
                        </li>
                    </ul>

                    <h3 className="text-[#800020] mt-32 uppercase">let&apos;s connect</h3>
                    <div className="flex justify-evenly mt-10">
                        <a className="rounded-full shadow-lg shadow-gray-400 cursor:pointer hover:scale-110 ease-in duration-300
                        flex w-[48px] h-[48px]
                        "
                        href="https://github.com/AliyaSalmanova1">
                            <FaGithub className="
                            mx-auto self-center"/>
                        </a>
                        <a className="rounded-full shadow-lg shadow-gray-400
                        flex w-[48px] h-[48px]"
                        href="https://www.linkedin.com/in/aliya-salmanova-4150711b6/">
                            <FaLinkedinIn className="
                            mx-auto self-center"/>
                        </a>
                        <a href="mailto:aliyasalmanova1@gmail.com"
                        className="rounded-full shadow-lg shadow-gray-400
                        flex w-[48px] h-[48px]">
                            <FaEnvelope className="
                            mx-auto self-center"/>
                        </a>
                    </div>
                    
                </div>

            </div>

        </>


        
        
    )



}

export default Navbar;