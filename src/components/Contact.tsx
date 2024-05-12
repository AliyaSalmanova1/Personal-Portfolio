"use client"
import React, { useRef, MutableRefObject } from 'react';
import { sendEmail } from './sendEmail.ts'
import Image from 'next/image';
import Link from "next/link"

import {FaGithub, FaLinkedinIn, FaEnvelope} from "react-icons/fa"


const Contact = () => {

    const formRef: MutableRefObject<HTMLFormElement | null> = useRef(null);

    return (
        <div id='contact' className="max-w-[1300px] mx-auto shrink-1
        p-5 my-16 pt-[90px]">
            <p className="text-xl uppercase text-[#800020] mb-2">Contact</p>
            <h1 className="text-3xl font-semibold mb-8">Get In Touch With Me</h1>
            <div  className="flex flex-col md:flex-row 
            
            gap-10
            ">
                <div className="md:w-2/5
                shadow-xl shadow-gray-300 rounded-lg p-4">
                    <Image
                        src="/code.jpg"
                        width={300}
                        height={200}
                        alt="<code />"
                        className="rounded-lg"
                        />
                    <h2 className='py-2 text-2xl font-semibold'>Aliya Salmanova</h2>
                    <p>Web Developer</p>
                    <p className='py-4'>
                    I am available for freelance or full-time positions. 
                    
                    </p>
                    <p className="text-lg uppercase text-[#800020] mt-6 mb-2">Contact me 
                    and let&apos;s talk</p>

                    <div className="flex  w-[260px] justify-between">
                <a className="rounded-full shadow-lg shadow-gray-400 cursor:pointer hover:scale-110 ease-in duration-300
                flex w-[68px] h-[68px]
                "
                href="https://github.com/AliyaSalmanova1">
                    <FaGithub className="
                    mx-auto self-center"/>
                </a>
                <a className="rounded-full shadow-lg shadow-gray-400
                flex w-[68px] h-[68px]"
                href="https://www.linkedin.com/in/aliya-salmanova-4150711b6/">
                    <FaLinkedinIn className="
                    mx-auto self-center"/>
                </a>
                <a href="mailto:aliyasalmanova1@gmail.com"
                className="rounded-full shadow-lg shadow-gray-400
                flex w-[68px] h-[68px]">
                    <FaEnvelope className="
                    mx-auto self-center"/>
                </a>
            </div>
                

                </div>


                <form 
                ref={formRef}
                className="grid grid-cols-1 
                shadow-xl shadow-gray-300 rounded-lg p-4 md:px-9
                w-full"

                action={async (formData) => {
                    
                    
                    await sendEmail(formData)

                    formRef?.current?.reset()



                    

                }}  
                >

                    <label className="mb-4">Name<br/>
                        <input
                            className="border-2 rounded-lg p-3 border-gray-300
                            w-full mt-2
                            focus-visible:outline-[#a64d63]" 
                        />
                        
                    </label>
                    
                    
                    <label className="mb-4">Email<br/>
                        <input 
                        className="border-2 rounded-lg p-3 border-gray-300
                        w-full mt-2 focus-visible:outline-[#a64d63]" 
                        name="senderEmail" 
                        type="email"
                        required/>
                    </label>
                    
                    <label className="mb-4">Subject<br/>
                        <input 
                        className="border-2 rounded-lg p-3 border-gray-300
                        w-full mt-2 focus-visible:outline-[#a64d63]" 
                        />
                    </label>
                    
                    <label className="mb-4">Message<br/>
                        <textarea
                        className="border-2 rounded-lg p-3 border-gray-300
                        w-full mt-2 focus-visible:outline-[#a64d63]" 
                        name="message" 
                        rows={10}
                        required></textarea>
                    </label>
                    
                    <Link href="/"><button 
                    className="w-full text-[#fff6ec] p-4 rounded-lg
                    bg-gradient-to-r from-[#8d1936] to-[#a64d63]"
                    type="submit">Submit</button></Link>
                </form>
            
            </div>
        </div>
        
    )

}

export default Contact;