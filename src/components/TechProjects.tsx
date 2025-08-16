
import React from "react";

import Image from "next/image"
import Link from "next/link"

const Projects = () => {

    const projectsInfo = [{
        title: "Peppermint",
        bgImage: "/projects/peppermint.png",
        projectUrl: "https://github.com/oslabs-beta/PepperMint"
    },
    {
        title: "Anthropological Archive",
        bgImage: "/projects/lore.png",
        projectUrl: "https://github.com/jigglypuffnyoi7/AnthropologicalArchive"
    },
    {
        title: "The Social Hour",
        bgImage: "/projects/socialHour.png",
        projectUrl: "https://github.com/Panda-Shark5/The-Social-Hour"
    },
    {
        title: "Recipe Sharer",
        bgImage: "/projects/recipeSharer.png",
        projectUrl: "https://github.com/AliyaSalmanova1/Recipe-Sharing-App"
    }
]

  return (
    <div id="projects" className=" pt-[90px] px-5 max-w-[1300px] mx-auto
    my-16">
      <p className="text-xl uppercase text-[#800020] mb-2">Projects</p>
      <h1 className="text-3xl font-semibold mb-2">Apps I&apos;ve Built</h1>
      <br />
      {/*projects' grid container*/}
      <div className='grid md:grid-cols-2 gap-8 '>
        {projectsInfo.map((projInfo, index) => {
            return (
                <div 
                key={projInfo.title}
                className="relative group  border-2
                hover:bg-gradient-to-r from-[#8d1936] to-[#a64d63]
                text-[#fff6ec] rounded-xl bg-[#a64d63]
                aspect-[8/5] h-auto min-h-[200px] w-full
                ">
                    <Image 
                    src={projInfo.bgImage}
                    alt="image"
                    layout='fill'
                    objectFit={ "contain"}
                    className="group-hover:opacity-15 absolute top-0 
                    left-0 h-full
                    rounded-xl aspect-[8/5]"
                  
                    />
                    <div className="hidden group-hover:flex absolute top-0 left-0 flex-col
                    justify-center items-center h-full w-full gap-4">
                        <h2 className="mx-auto text-lg">{projInfo.title}</h2>
                        <Link href={projInfo.projectUrl}>
                          <p className="px-5 py-2 bg-[#fff6ec] rounded-lg text-[#800020]">View</p>
                        </Link>

                    </div>

                </div>
            )

        })}


      </div>
      
      
    </div>
  );
};

export default Projects;