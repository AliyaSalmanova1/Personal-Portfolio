import Image from "next/image";

import Navbar from "../components/Navbar"
import Home from "../components/Home"
import About from "../components/About"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

export default function MyApp() {
  return (
    <div className="MyApp flex flex-col items-center w-screen bg-[#fff6ec]">
      <Navbar />
  
      <main className="w-screen z-auto">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      

      
    </div>
  );
}
