import React from "react"
import Image from "next/image"


const About = () => {


    return (
        <div id="about" className="w-screen flex flex-col items-center
        my-16 pt-[90px]">
            <h3 className="text-3xl font-bold uppercase text-center text-[#800020]">A little about me </h3>
            <div className="max-w-[1300px] w-full grow shrink-1
            lg:border-x-2  border-[#cc99a6] border-opacity-3 
                border-dashed 
            flex flex-col justify-center
            text-center mx-auto  px-5 ">
                
                <div className="max-w-[900px] mx-auto">

                    
                    <br/>
                    <p>I immediately fell in love with coding when I took my first class in Python programming back in college. 
                         I've always valued subjects rooted in logical reasoning, as they sharpen the mind and encourage rational thinking.
                        I knew then that I wanted my life to be filled with the logical challenges and creative possibilities inherent in coding, 
                        and have been programming away ever since starting.
                    </p>
                    <br/>
                    <p>
                    As a web developer, I love the opportunity to develop projects independently and collaborate within teams. 
                    I&apos;ve had the privilege of meeting numerous talented individuals who share my enthusiasm for coding along the way.
                    </p>
                    <br/>
                    <p>
                    When I&apos;m not at the computer, you can find me at my favorite karaoke spot, reading, or fussing over my dog. 
                    If you&apos;d like to connect, feel free to reach out through the contact section below - I&apos;d love to chat!
                    </p>

                </div>
                


            </div>
        </div>
        
        
    )



}

export default About;