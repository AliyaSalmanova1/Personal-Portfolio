import Image from "next/image";

import Navbar from "../components/Navbar"
import Home from "../components/Home"
import Skills from "../components/Skills"

export default function MyApp() {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <main className="max-w-screen-xl">
        <Home />
        <Skills />
      </main>
      

      
    </div>
  );
}
