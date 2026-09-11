
import React from "react";

import Image from "next/image"
import Link from "next/link"

const GameDev = () => {

    const projectsInfo = [
        {
        title: "Holiday Dash",
        bgImage: "/projects/holidayDash2.png",
        projectUrl: "https://aliyasalmanova1.itch.io/holiday-dash",
        role: "Role: Solo Developer",
        info: "Solo developed a holiday themed rhythm game in Unity.",
        viewText: "View On Itch.io"
    },
    {
        title: "Blade Dance",
        bgImage: "/projects/bladeDance.png",
        projectUrl: "https://christian-fitzpatrick.itch.io/blade-dance?fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnX22eu-SIM2ifwGzlial0PkUWGh9Xa4l0g2VXlRqf87l-Sp8-4e8Q3fIYFw0_aem_xhlWCdKQfKsNk9AG-LagkAs",
        role: "Role: Audio Programmer",
        info: "Refactored audio system in Unity/C# game to incorporate FMOD middleware.",
        viewText: "View On Itch.io"
    },
    {
        title: "Do No Harm",
        bgImage: "/projects/donoharm.png",
        projectUrl: "https://store.steampowered.com/app/3138780/Do_No_Harm/",
        role: "Role: Composer, Sound Designer, Audio Programmer",
        info: "Found and edited sound effects for game, collaborated to implement audio into Unity, contributed to game creation ideas, wrote numerous pieces of the soundtrack.",
        viewText: "View On Steam"
    },
    {
        title: "Lunar Ascendant",
        bgImage: "/projects/lunar.png",
        projectUrl: "https://store.steampowered.com/app/2547090/Lunar_Ascendant/",
        role: "Role: Audio Programmer",
        info: "Refactored sound system to incorporate FMOD and to make audio system code modular and reusable (Unity and C#).",
        viewText: "View On Steam"
    },
    {
        title: "Potion Witch",
        bgImage: "/projects/potionwitch.png",
        projectUrl: "https://aliyasalmanova1.itch.io/potion-witch",
        role: "Role: Game Engine & Gameplay Developer",
        info: "Created a cozy-dark themed fantasy puzzle game built on self-made game engine.",
        viewText: "View On Itch.io"
    },
    {
        title: "Standart Protocol (to be renamed)",
        bgImage: "/projects/bunnyGame.jpeg",
        projectUrl: "https://drive.google.com/drive/folders/1i84BDDdygjdJPp_q7eT_zK4822KNP-EP?usp=sharing",
        role: "Role: Programmer, Composer, Sound Designer",
        info: "Working with Monochromatic Studio to create a grotesque puzzle game in Unity.",
        viewText: "Access Prototype From Google Drive"
    },
    {
        title: "Midnight (to be renamed)",
        bgImage: "/projects/comingSoon.jpg",
        projectUrl: "",
        role: "Role: Solo Developer",
        info: "Solo developing a platformer game in Unity with self-created assets.",
        viewText: "Not Yet Available"
    }
    
]

  return (
    <div id="gamedev" className=" pt-[90px] px-5 max-w-[1300px] mx-auto
    my-16">
      <p className="text-xl uppercase text-[var(--pink-color)] mb-2">Game Dev</p>
      <h1 className="text-3xl font-semibold mb-2">Games I&apos;ve Worked On</h1>
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
                            className="object-cover group-hover:opacity-15"
                        />
                        <div className="absolute inset-0 hidden group-hover:flex flex-col justify-center items-center">
                            {projInfo.projectUrl && (
                                <Link href={projInfo.projectUrl}>
                                    <p className="px-5 py-2 bg-[#fff6ec] rounded-lg text-[#800020]">{projInfo.viewText}</p>
                                </Link>
                            )}
                        </div>
                    </div>

                    {/* Text block */}
                    <div className="p-4 flex flex-col gap-2">
                        <h2 className="text-lg font-semibold text-[var(--text-color)]">{projInfo.title}</h2>
                        {projInfo.role && (
                            <span className="text-sm  text-[var(--text-color)]">{projInfo.role}</span>
                        )}
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

export default GameDev;