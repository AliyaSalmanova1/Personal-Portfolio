import React from "react"
import Image from 'next/image'

import tsIcon from "../../public/tsIcon.png"




const Skills = () => {

    const skillsList: string[] = [
        "TypeScript/JavaScript", "Python",
        "React", "HTML5", "CSS", "SCSS/SASS", 
        "Figma", "Redux/Redux Toolkit", "Bootstrap", "Next.js",
        "Node", "Express", "SQL", "PostgreSQL", 
        "NoSQL", "MongoDB", "Mongoose",
        "Jest", "React Testing Library",
        "SOAP APIs", "RESTful APIs", "Git/Github",
        "webpack", "Electron", "Firebase"
    ]


    return (
        <div className="flex flex-wrap">
            {
                skillsList.map((skill: string) => {
                    return (
                        <div className="w-1/2">{skill}
                        <Image 
                        src="/tsIcon.png"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                        />
                        </div>
                    )

                })
            }
        </div>
        
    )



}

export default Skills;