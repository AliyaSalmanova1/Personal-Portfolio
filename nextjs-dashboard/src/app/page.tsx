import Image from "next/image";

import Navbar from "../components/Navbar"
import About from "../components/About"
import Skills from "../components/Skills"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <main className="max-w-screen-xl">
        <About />
        <Skills />
      </main>
      

      
    </div>
  );
}
