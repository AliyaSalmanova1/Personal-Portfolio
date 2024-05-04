import React from "react"
import Link from 'next/link';


const Navbar = () => {


    return (
        <nav  className="bg-blue-300 
        h-20 w-full px-2 flex 
        justify-between items-center">
            <h1>AliyaSalmanova</h1>

            <ul className="flex">
                <li className="ml-10"><Link href='/'>Home</Link></li>
                <li className="ml-10">Skills</li>
                <li className="ml-10">Projects</li>
                <li className="ml-10">Contact</li>
            </ul>

        </nav>
        
    )



}

export default Navbar;