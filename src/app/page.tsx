import Image from "next/image";

import Navbar from "../components/Navbar"
import Home from "../components/Home"
import About from "../components/About"
import Music from "../components/Music"
import Sound from "../components/Sound"
import TechSkills from "../components/TechSkills"
import MusicTechSkills from "../components/MusicTechSkills"
import TechProjects from "../components/TechProjects"
import Contact from "../components/Contact"

export default function MyApp() {
  return (
    <div className="MyApp flex flex-col items-center w-screen bg-[#fff6ec]">
      <Navbar />
  
      <main className="w-screen z-auto">
        <Home />
        <About />
        <Music />
          <Sound />
        <TechSkills />
          {/*<MusicTechSkills />*/}
        <TechProjects />
      
        <Contact />
      </main>
      

      
    </div>
  );
}
