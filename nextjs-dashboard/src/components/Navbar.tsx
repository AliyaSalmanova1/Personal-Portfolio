import React from "react"


const Navbar = () => {


    return (
        <nav className="bg-blue-200 h-10 w-screen flex 
        justify-between items-center">
            <h1>AliyaSalmanova</h1>

            <ul className="flex">
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>

        </nav>
        
    )



}

export default Navbar;