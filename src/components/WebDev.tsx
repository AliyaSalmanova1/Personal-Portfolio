
import React from "react";

import Image from "next/image"
import Link from "next/link"

const WebDev = () => {

    const projectsInfo = [{
        title: "Peppermint",
        bgImage: "/projects/peppermint.png",
        projectUrl: "https://github.com/oslabs-beta/PepperMint",
        info: "Developed a downloadable Electron app that streamlines React testing with a team of four programmers.",
        viewText: "Download From Github"
    },
    {
        title: "'Hi Bob' Kiosk Software",
        bgImage: "/projects/hiBobKiosk2.png",
        projectUrl: "https://drive.google.com/file/d/11QGNQD9J-Mg9SjL_xrHWuQowR7ye7QUi/view?usp=sharing",
        info: "Developed software for kiosks to be displayed at showcases. Here is a sample of one.",
        viewText: "View On Google Drive"
    },
    {
        title: "Grimminck CL",
        bgImage: "/projects/jpApp.png",
        projectUrl: "https://www.grimminck.cl/",
        info: "Developed a music sharing website with Juan Pablo Grimminck for his students.",
        viewText: "View Web App"
    },
    {
        title: "Recipe Sharer",
        bgImage: "/projects/recipeSharer2.png",
        projectUrl: "https://github.com/AliyaSalmanova1/Recipe-Sharing-App",
        info: "Solo developed a healthy recipe sharing website with React and AWS S3 for image storage.",
        viewText: "View On Github"
    },
    {
        title: "The Social Hour",
        bgImage: "/projects/socialHour.png",
        projectUrl: "https://github.com/Panda-Shark5/The-Social-Hour",
        info: "Developed a private social media website with a team of four programmers.",
        viewText: "View On Github"
    },
    {
        title: "Anthropological Archive",
        bgImage: "/projects/lore2.png",
        projectUrl: "https://github.com/jigglypuffnyoi7/AnthropologicalArchive",
        info: "Developed a private lore website with a team of four programmers.",
        viewText: "View On Github"

    }
]

  return (
    <div id="projects" className=" pt-[90px] px-5 max-w-[1300px] mx-auto
    my-16">
      <p className="text-xl uppercase text-[var(--pink-color)] mb-2">Web Dev Samples</p>
      <h1 className="text-3xl font-semibold mb-2">Apps I&apos;ve Built</h1>
      <br />
      {/*projects' grid container*/}
      <div className='flex flex-wrap justify-center gap-6'>
        {projectsInfo.map((projInfo, index) => {
            return (
                <div
                key={projInfo.title}
                className="group flex flex-col rounded-xl overflow-hidden border border-[#a64d63] bg-[#0a0a0a] hover:bg-gradient-to-r hover:from-[#8d1936] hover:to-[#a64d63] w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                    {/* Image with hover overlay */}
                    <div className="relative w-full aspect-[8/5]">
                        <Image
                            src={projInfo.bgImage}
                            alt={projInfo.title}
                            fill
                            className="object-cover group-hover:opacity-15 transition-opacity"
                        />
                        <div className="absolute inset-0 hidden group-hover:flex flex-col justify-center items-center">
                            <Link href={projInfo.projectUrl} target="_blank">
                                <p className="px-5 py-2 bg-[#fff6ec] rounded-lg text-[#800020]">View</p>
                            </Link>
                        </div>
                    </div>

                    {/* Text block */}
                    <div className="p-4 flex flex-col gap-2">
                        <h2 className="text-lg font-semibold text-[var(--text-color)]">{projInfo.title}</h2>
                        {projInfo.info && (
                            <span className="text-sm text-[var(--text-color)] opacity-80 leading-relaxed">{projInfo.info}</span>
                        )}
                    </div>
                </div>
            )

        })}


      </div>
      
      
    </div>
  );
};

export default WebDev;