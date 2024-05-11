"use client"
import {useState, useEffect} from "react"
import Link from 'next/link';

import {AiOutlineMenu } from 'react-icons/ai';


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
            
                <h1 className="text-[#800020]">{<AliyaSalmanova />}</h1>

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
                    nav ? "bg-[#fff6ec] fixed left-0 top-0 w-[75%] h-screen z-[999] sticky" :
                    "bg-[#fff6ec] fixed left-[-100%] top-0 z-[999]"
                }>
                    <ul className="">
                        <li className="ml-10" onClick={() => setNav(false)}>
                            <Link href='/'>Home</Link>
                        </li>
                        <li className="ml-10" onClick={() => setNav(false)}>
                            <Link href='/#about'>About</Link>
                        </li>
                        <li className="ml-10" onClick={() => setNav(false)}>
                            <Link href='/#skills'>Skills</Link>
                        </li>
                        <li className="ml-10" onClick={() => setNav(false)}>
                            <Link href='/#projects'>Projects</Link>
                        </li>
                        <li className="ml-10" onClick={() => setNav(false)}>
                            <Link href='/#contact'>Contact</Link>
                        </li>
                    </ul>
                    
                </div>

            </div>

        </>


        
        
    )



}

export default Navbar;