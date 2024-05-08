import React from "react"
import Image from 'next/image'






const Skills = () => {

    interface SkillObjType{
        technology: string;
        icon: string
    }

    //https://icons8.com/icons/set/react

    const skillsList: SkillObjType[]= [
        {technology: "TypeScript/JavaScript",
        icon: "/skillsIcons/tsIcon.png"},
        {technology: "React",
        icon: "/skillsIcons/react.png"},
        {technology: "Redux",
        icon: "/skillsIcons/reduxIcon.png"},
        {technology: "Bootstrap",
        icon: "/skillsIcons/bootstrap.png"},
        {technology: "CSS",
        icon: "/skillsIcons/cssIcon.png"},
        {technology: "PostgreSQL",
        icon: "/skillsIcons/postgreSQLIcon.png"},
        {technology: "Firebase",
        icon: "/skillsIcons/firebaseIcon.png"},
        {technology: "MongoDB",
        icon: "/skillsIcons/mongoDBIcon.png"}


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
        <div id="skills" className="h-screen py-20">
            <h1 className="text-4xl">Skills</h1>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 ">
            {
                skillsList.map(({technology, icon}) => {
                    return (
                        <div className="w-full flex justify-between items-center" >
                            <span>{technology}</span>
                            <Image 
                            src={icon}
                            width='68'
                            height='68'
                            alt="Picture of the author"
                            />
                        </div>
                    )

                })
            }
        </div>

        </div>
        
        
    )



}

export default Skills;