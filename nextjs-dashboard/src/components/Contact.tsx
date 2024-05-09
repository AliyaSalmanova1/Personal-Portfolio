"use server"
import React from 'react';
import { sendEmail } from './sendEmail.ts'
import Image from 'next/image';


const Contact = () => {

    return (
        <div id='contact' className="max-w-[1240px]
        flex flex-col md:flex-row">
            <div>
                <Image
                    src="/code.jpg"
                    width={300}
                    height={200}
                    alt="<code />"
                    />
                <h2 className='py-2'>Aliya Salmanova</h2>
                <p>Web Developer</p>
                <p className='py-4'>
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
            

            </div>
            <form action={async (formData) => {
                "use server"
                await sendEmail(formData)

            }}>
                <label>Name</label>
                <input
                className="border-2 rounded-lg p-3 border-gray-300" 
                 />
                <label>Email</label>
                <input 
                className="border-2 rounded-lg p-3 border-gray-300" 
                name="senderEmail" 
                type="email"
                required/>
                <label>Subject</label>
                <input 
                className="border-2 rounded-lg p-3 border-gray-300" />
                <label>Message</label>
                <input 
                className="border-2 rounded-lg p-3 border-gray-300" 
                name="message" 
                required/>
                <button type="submit">Submit</button>
            </form>
        
        </div>
        
    )

}

export default Contact;