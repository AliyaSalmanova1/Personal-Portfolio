import React from "react"
import Link from 'next/link';


const Navbar = () => {


    return (
        <nav  className="bg-blue-300 
        h-20 w-full px-2 flex 
        justify-between items-center sticky top-0 z-50">
            <h1>AliyaSalmanova</h1>

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