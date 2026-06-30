import React from "react"
import Image from "next/image"


const About = () => {


    return (
        <div id="moreinfo" className="w-screen flex flex-col items-center
        my-16 pt-[90px]">
            <h3 className="text-3xl font-bold uppercase text-center text-[var(--pink-color)]">More Info </h3>
            {/*container with dashed border-x */}

            <div className="max-w-[1300px] w-full grow shrink-1
            lg:border-x-2  border-[var(--pink-color)] border-opacity-3 
            border-dashed 
            flex flex-col justify-center
            text-center mx-auto  px-5 ">

                {/*container for paragraphs*/}
                <div className="max-w-[900px] mx-auto text-[var(--text-color)]">

                    <br/>
                    <p>
                        My music has been performed at New York City venues such as DiMenna Center, Roulette, and National Sawdust,
                        as well as at Opera Omaha’s ONE Festival. I&apos;ve written for concert, film, games, and multimedia projects,
                        including recent commissions from HyperCube and Ipse for my piece <i>Fairies</i>. I&apos;ve also collaborated with
                        directors from NYU Tisch, performed piano at festivals and on television, and written and performed live scores
                        for silent films.
                    </p>

                    <br/>

                    <p>
                        Alongside composing, I&apos;ve been a software developer with experience at an interactive kiosk software company,
                        where I built touchscreen software for client-facing events. In game development, I&apos;ve worked as a
                        composer and technical sound designer at a game development company, combining Unity, C#, FMOD, and audio implementation for games
                        released on Steam. My background lets me bridge creative and technical disciplines.
                    </p>

                    <br/>

                    <p>
                        I&apos;ve studied with acclaimed music editor Suzana Peric, composer Alba Torremocha, and concert music with Missy Mazzoli,
                        and I&apos;ve also worked as a music theory and piano instructor. I&apos;m both a logical and creative thinker, and in my free
                        time I like to sing, study philosophy and psychology, enjoy the New York arts scene, and fuss over my dog.
                    </p>


                </div>

            </div>
        </div>
        
        
    )



}

export default About;