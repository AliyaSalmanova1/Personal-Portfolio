"use client"
import React, { useRef, MutableRefObject } from 'react';
import { sendEmail } from './sendEmail.ts'
import Image from 'next/image';
import Link from "next/link"

import {FaGithub, FaLinkedinIn, FaEnvelope} from "react-icons/fa"
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

}

const Contact = () => {

    const formRef: MutableRefObject<HTMLFormElement | null> = useRef(null);

    const inputStyles = "border-2 rounded-lg p-3 border-gray-300 w-full mt-2 focus-visible:outline-[#a64d63]" 
    const contactButtonsStyles = "rounded-full shadow-lg shadow-gray-400 cursor:pointer hover:scale-110 ease-in duration-300 flex w-[68px] h-[68px]"


    return (
        <div id='contact' className="contact max-w-[1300px] mx-auto shrink-1
         my-16 pt-[90px] ">
            <p className="px-5 text-xl uppercase text-[#800020] mb-2">Contact</p>
            <h1 className="px-5 text-3xl font-semibold mb-8">Get In Touch With Me</h1>
            {/*sections' container*/}
            <div  className="pt-5 px-5 pb-8 flex flex-col lg:flex-row gap-10">
                {/*non-form section */}
                <div className="lg:w-2/5
                shadow-xl shadow-gray-300 rounded-lg p-4">
                    <Image
                        src="/code.jpg"
                        width={300}
                        height={200}
                        alt="<code />"
                        
                        className="rounded-lg"
                        />
                    <h2 className='py-2 text-2xl font-semibold'>Aliya Salmanova</h2>
                    <p>Technologist – Software & Audio</p>
                    <p className='py-4'>
                    Contact me for any inquiries.
                    
                    </p>
                    <p className="text-lg uppercase text-[#800020] mt-6 mb-2">Contact me</p>

                    <div className="flex  w-full justify-center ">
                        <div className="!w-[250px] flex py-5 px-2 justify-between">
                            <a className={contactButtonsStyles}
                            href="https://github.com/AliyaSalmanova1">
                                <FaGithub className="mx-auto self-center"/>
                            </a>
                            <a className={contactButtonsStyles}
                            href="https://www.linkedin.com/in/aliya-salmanova-4150711b6/">
                                <FaLinkedinIn className="mx-auto self-center"/>
                            </a>
                            <a href="mailto:aliyasalmanova1@gmail.com"
                            className={contactButtonsStyles}>
                                <FaEnvelope className="mx-auto self-center"/>
                            </a>

                        </div>
                        
                    </div>
                

                </div>

                {/* form */}
                <form 
                ref={formRef}
                className="grid grid-cols-1 
                shadow-xl shadow-gray-300 rounded-lg p-4 md:px-9
                w-full"

                action={async (formData) => {
                    
                    
                    await sendEmail(formData)

                    formRef?.current?.reset()
                    window.scrollTo({ top: 0, behavior: 'smooth' });

                }}  
                >

                    <label className="mb-4">Name<br/>
                        <input
                            name="senderName"
                            className={inputStyles}
                            required

                        />
                    </label>
                    
                    <label className="mb-4">Email<br/>
                        <input 
                        className={inputStyles}
                        name="senderEmail" 
                        type="email"
                        required/>
                    </label>
                    
                    <label className="mb-4">Subject<br/>
                        <input 
                        name="subject"
                        className={inputStyles}
                        required
                        />
                    </label>
                    
                    <label className="mb-4">Message<br/>
                        <textarea
                        className={inputStyles}
                        name="message" 
                        rows={10}
                        required></textarea>
                    </label>
                    
                    <button 
                    className="w-full inline-block text-[#fff6ec] p-4 rounded-lg
                    bg-gradient-to-r from-[#8d1936] to-[#a64d63] 
                    active:opacity-50"
                    type="submit">
                      
                            Submit
                   
                    </button>
                </form>
                
            
            </div>
            <div className="flex py-5 px-2">
                <button onClick={scrollToTop}
                    className="inline-block
                    rounded-full shadow-lg shadow-gray-400 p-4 h-30 w-30
                    hover:scale-110 ease-in duration-200
                    mx-auto mt-5 bg-[#fff6ec]"
                    >
                    
                    <HiOutlineChevronDoubleUp 
                    size={30} color="#800020"
                    />
                
                        
                </button>
            </div>
            
        </div>
        
    )

}

export default Contact;