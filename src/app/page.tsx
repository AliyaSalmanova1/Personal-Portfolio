import Image from "next/image";

import Navbar from "../components/Navbar"
import Home from "../components/Home"
import About from "../components/More"
import Music from "../components/Music"
import ShowReel from "../components/ShowReel"
import Sound from "../components/Sound"
import TechSkills from "../components/TechSkills"
import MusicTechSkills from "../components/MusicTechSkills"
import TechProjects from "../components/WebDev"
import Contact from "../components/Contact"
import GameDev from "@/components/GameDev";

export default function MyApp() {
  return (
    <div className="MyApp flex flex-col items-center w-full bg-[#000000]">
      <Navbar />
  
      <main className="w-full z-auto">
        <Home />
        <GameDev />
        <ShowReel />
        <Music />
        <TechProjects />
          <Sound/>
        <TechSkills />
          {/*<MusicTechSkills />*/}
        
          <About />
      
        <Contact />
      </main>
      

      
    </div>
  );
}
