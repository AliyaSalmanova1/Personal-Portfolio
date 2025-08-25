

import React, {useState, useRef} from "react";


import Image from "next/image"
import Link from "next/link"

const Sound = () => {

    

    return (
        <div id="sound" className=" pt-[90px] px-5 max-w-[1300px] mx-auto   
    my-16">
            <p className="text-xl uppercase text-[#800020] mb-2">Sounds</p>
            <h1 className="text-3xl font-semibold mb-2">Sound Design for Games</h1>
            <br/>
            <p className="text-2xl   underline font-dancingScript text-[#800020] mb-2">
                <Link href='https://drive.google.com/drive/folders/1SaqSmy6Q6T5tzX9AzcDUxDzcIP7Pd0e4?usp=sharing'>Sound design samples can be seen here</Link>
            </p>

        </div>
    );
};

export default Sound;