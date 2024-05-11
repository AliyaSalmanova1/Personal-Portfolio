
import React from "react";
import ProjectItem from "./ProjectItem"
import Image from "next/image"
import Link from "next/link"

const Projects = () => {

    const projectsInfo = [{
        title: "Peppermint",
        bgImage: "/code.jpg",
        projectUrl: "https://github.com/oslabs-beta/PepperMint"
    },
    {
        title: "Anthropological Archive",
        bgImage: "/code.jpg",
        projectUrl: "https://github.com/jigglypuffnyoi7/AnthropologicalArchive"
    },
    {
        title: "The Social Hour",
        bgImage: "/code.jpg",
        projectUrl: "https://github.com/Panda-Shark5/The-Social-Hour"
    },
    {
        title: "Music Match",
        bgImage: "/code.jpg",
        projectUrl: "https://github.com/red-lipped-batfish-nyoi7/Music-Match-1.0"
    }
]

  return (
    <div id="projects" className=" pt-[90px] px-5 max-w-[1400px] mx-auto">
      <h1 className="text-4xl">Projects</h1>
      <br />
      <div className='grid md:grid-cols-2 gap-8 min-h-[800px]'>
        {projectsInfo.map((projInfo) => {
            return (
                <div className="relative group h-auto w-full border-2
                hover:bg-gradient-to-r from-[#8d1936] to-[#a64d63]
                text-[#fff6ec] rounded-xl">
                    <Image 
                    src={projInfo.bgImage}
                    alt="image"
                    layout='fill'
                    objectFit='cover'
                    className="group-hover:opacity-15 absolute top-0 left-0 h-ful
                    rounded-xl"
                  
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