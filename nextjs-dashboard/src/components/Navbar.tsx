"use client"
import {useState, useEffect} from "react"
import Link from 'next/link';


const AliyaSalmanova = () => {
    return "<AliyaSalmanova />"
  };

const Navbar = () => {

    const [shadow, setShadow] = useState(false);

    console.log('window', window)

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


    return (
        <nav className={
            shadow ?
            "shadow-xl sticky top-0 z-50 h-20 w-full px-2 flex justify-between items-center" : 
            "sticky top-0 z-50 h-20 w-full px-2 flex justify-between items-center"
        }>
           
            <h1 className="text-[#800020]">{<AliyaSalmanova />}</h1>

            <ul className="flex">
                <li className="ml-10"><Link href='/'>Home</Link></li>
                <li className="ml-10"><Link href='/#about'>About</Link></li>
                <li className="ml-10"><Link href='/#skills'>Skills</Link></li>
                <li className="ml-10"><Link href='/#projects'>Projects</Link></li>
                <li className="ml-10"><Link href='/#contact'>Contact</Link></li>
            </ul>

        </nav>

        
        
    )



}

export default Navbar;