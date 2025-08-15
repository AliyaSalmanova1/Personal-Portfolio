import React from "react"
import Image from "next/image"


const About = () => {


    return (
        <div id="about" className="w-screen flex flex-col items-center
        my-16 pt-[90px]">
            <h3 className="text-3xl font-bold uppercase text-center text-[#800020]">About me </h3>
            {/*container with dashed border-x */}

            <div className="max-w-[1300px] w-full grow shrink-1
            lg:border-x-2  border-[#cc99a6] border-opacity-3 
            border-dashed 
            flex flex-col justify-center
            text-center mx-auto  px-5 ">

                {/*container for paragraphs*/}
                <div className="max-w-[900px] mx-auto">

                    <br/>
                    <p>My music has been performed at New York City venues such as Roulette and National Sawdust,
                        as well as at Opera Omaha’s ONE Festival.
                        I&apos;ve collaborated on multimedia projects with directors from NYU Tisch,
                        and my works have been performed by orchestras and realized through self-made mockups crafted with music technology.
                        I&apos;ve also performed piano at festivals and on television,
                        and written and performed live scores for silent films.
                    </p>
                    
                    <br/>
                    <p>
                        Alongside composing, 
                        I&apos;m a software developer with projects ranging from building 
                        interactive kiosk software to creating tools that streamline development workflows. 
                        I&apos;ve worked in web technologies and integrated audio programming, 
                        and I&apos;ve combined these skills to work on sound systems for games released on Steam, 
                        including Do No Harm and Lunar Ascendant. 
                        My background lets me bridge creative and technical disciplines.
                    </p>
                    <br/>
                    <p>
                        I&apos;ve studied with acclaimed music editor Suzana Peric, 
                        composer Alba Torremocha, and concert music with Missy Mazzoli, 
                        and I&apos;ve worked as a music theory and piano instructor. 
                        I&apos;m both a logical and creative thinker, and in my free time I love singing, 
                        exploring philosophy and psychology, 
                        enjoying the New York arts scene, and fussing over my dog.
                    </p>

                </div>

            </div>
        </div>
        
        
    )



}

export default About;