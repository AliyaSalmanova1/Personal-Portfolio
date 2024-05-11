
import React from 'react';
import { sendEmail } from './sendEmail.ts'
import Image from 'next/image';

import {FaGithub, FaLinkedinIn, FaEnvelope} from "react-icons/fa"


const Contact = () => {

    return (
        <div id='contact' className="max-w-[1300px] mx-auto shrink-1
        p-5 my-16">
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
                    <br/> Contact
                    me and let&apos;s talk.
                    </p>

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
                className="grid grid-cols-1 
                shadow-xl shadow-gray-300 rounded-lg p-4 md:px-9
                w-full"

                action={async (formData) => {
                    "use server"
                    await sendEmail(formData)

                }}  
                >

                    <label>Name<br/>
                    <input
                        className="border-2 rounded-lg p-3 border-gray-300
                        w-full" 
                        />
                        
                    </label>
                    
                    
                    <label>Email<br/>
                        <input 
                        className="border-2 rounded-lg p-3 border-gray-300
                        w-full" 
                        name="senderEmail" 
                        type="email"
                        required/>
                    </label>
                    
                    <label>Subject<br/>
                        <input 
                        className="border-2 rounded-lg p-3 border-gray-300
                        w-full" 
                        />
                    </label>
                    
                    <label>Message<br/>
                        <textarea
                        className="border-2 rounded-lg p-3 border-gray-300
                        w-full" 
                        name="message" 
                        rows={10}
                        required></textarea>
                    </label>
                    
                    <button type="submit">Submit</button>
                </form>
            
            </div>
        </div>
        
    )

}

export default Contact;