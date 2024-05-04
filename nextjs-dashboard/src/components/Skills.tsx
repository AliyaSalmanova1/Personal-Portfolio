import React from "react"
import Image from 'next/image'





const Skills = () => {

    interface SkillObjType{
        technology: string;
        icon: string
    }

    const skillsList: SkillObjType[]= [
        {technology: "TypeScript/JavaScript",
        icon: "/skillsIcons/tsIcon.png"},
        {technology: "React",
        icon: "/skillsIcons/reactIcon.png"},

    ]
    /*, "Python",
        "React", "HTML5", "CSS", "SCSS/SASS", 
        "Figma", "Redux/Redux Toolkit", "Bootstrap", "Next.js",
        "Node", "Express", "SQL", "PostgreSQL", 
        "NoSQL", "MongoDB", "Mongoose",
        "Jest", "React Testing Library",
        "SOAP APIs", "RESTful APIs", "Git/Github",
        "webpack", "Electron", "Firebase"*/


    return (
        <div className="flex flex-wrap ">
            {
                skillsList.map(({technology, icon}) => {
                    return (
                        <div className="w-1/2 flex justify-between items-center" >
                            <span>{technology}</span>
                            <Image 
                            src={icon}
                            width='46'
                            height='46'
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