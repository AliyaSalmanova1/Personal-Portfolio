import Image from "next/image";

import Navbar from "../components/Navbar"
import Home from "../components/Home"
import About from "../components/About"
import Skills from "../components/Skills"

export default function MyApp() {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <main className="max-w-screen-xl">
        <Home />
        <About />
        <Skills />
      </main>
      

      
    </div>
  );
}
