import React from "react"
import Image from "next/image"


const About = () => {


    return (
        <div id="about" className="flex flex-col items-center">
            <h3 className="text-3xl font-bold uppercase tex-center">A little about me </h3>
            <div className="max-w-[1300px] w-full grow shrink-1
            lg:border-x-2  border-[#cc99a6] border-opacity-3 
                border-dashed 
            flex flex-col justify-center
            text-center mx-auto  px-5 ">
                
                <div className="max-w-[900px] mx-auto">

                    
                    <br/>
                    <p>When I took my first coding class during my studies at NYU University, I immediately fell in love with it. 
                        Before that I envisioned myself pursuing a career in music, writing compositions for television. 
                        However, the logical challenges and creative possibilities inherent in coding captured my interest profoundly.
                    </p>
                    <br/>
                    <p>
                    As a web developer, I love the opportunity to develop projects independently and collaborate within teams. 
                    I've had the privilege of meeting numerous talented individuals who share my enthusiasm for coding along the way.
                    </p>
                    <br/>
                    <p>
                    When I'm not at the computer, you can find me at my favorite karaoke spot, reading, or fussing over my dog. 
                    If you'd like to connect, feel free to reach out through the contact section below - I'd love to chat!
                    </p>

                </div>
                


            </div>
        </div>
        
        
    )



}

export default About;