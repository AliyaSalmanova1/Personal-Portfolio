"use client"
import {useState, useEffect} from "react"
import Link from 'next/link';

import {AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import {FaGithub, FaLinkedinIn, FaEnvelope} from "react-icons/fa"



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
        <div className="w-screen relative">
            
            <nav className={`bg-[#fff6ec] fixed z-[999] top-0 h-20 w-screen px-5 
             flex justify-between items-center ${shadow && "shadow-xl"}`
            }>

                <h1 style={{ fontFamily: "Dancing Script, cursive" }} className="italic font-dancingScript text-3xl text-shadow text-[#800020]">
                    Aliya Salmanova
                </h1>

                <ul className="hidden md:flex">
                    <li className="ml-10"><Link href='/'>Home</Link></li>
                    <li className="ml-10"><Link href='/#about'>About</Link></li>
                    <li className="ml-10"><Link href='/#skills'>Skills</Link></li>
                    <li className="ml-10"><Link href='/#music'>Music</Link></li>
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
                    nav ? "bg-[#fff6ec] fixed left-0 top-0 w-[75%] h-screen z-[999]  py-6 transition-all ease-in duration-300" :
                    "bg-[#fff6ec] fixed left-[-100%] top-0 z-[999]  py-6  ease-in duration-300"
                }>
                    <div className="flex justify-between items-end mb-8 pb-4 px-5">
                        <h3 className="italic text-xl text-shadow text-[#800020]">
                            Aliya Salmanova
                        </h3>
                        <div onClick={handleNav} 
                        className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-4">
                            <AiOutlineClose />
                        </div>
                    </div>
                    
                    <span className="uppercase px-5">Let&apos;s build something together</span>
                    <hr className="bg-[#800020] my-5 px-5"></hr>
                    <ul className="px-5">
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
                            <Link href='/#music'>Music</Link>
                        </li>
                        <li className="py-4" onClick={() => setNav(false)}>
                            <Link href='/#projects'>Projects</Link>
                        </li>
                        <li className="py-4" onClick={() => setNav(false)}>
                            <Link href='/#contact'>Contact</Link>
                        </li>
                    </ul>

                    <h3 className="text-[#800020] mt-32 uppercase px-5">let&apos;s connect</h3>
                    <div className="flex justify-evenly mt-10 pb-5 px-5">
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

        </div>


        
        
    )



}

export default Navbar;