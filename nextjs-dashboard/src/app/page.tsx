import Image from "next/image";

import Navbar from "../components/Navbar"
import Home from "../components/Home"
import About from "../components/About"
import Skills from "../components/Skills"
import Contact from "../components/Contact"

export default function MyApp() {
  return (
    <div className="flex flex-col items-center w-screen">
      <Navbar />
  
      <main className="w-full max-w-screen-xl ">
        <Home />
        <About />
        <Skills />
        <Contact />
      </main>
      

      
    </div>
  );
}
