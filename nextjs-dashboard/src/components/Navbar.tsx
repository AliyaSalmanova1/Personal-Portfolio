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
                "shadow-xl sticky top-0 z-50 h-20 w-full px-2 flex justify-between items-center" : 
                "sticky top-0 z-50 h-20 w-full px-2 flex justify-between items-center"
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

            <div className={
            nav? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" :
            ""
            }>

                <div className="">
                    
                </div>

            </div>

        </>


        
        
    )



}

export default Navbar;