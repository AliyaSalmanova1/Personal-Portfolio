'use client';
import { useState, useEffect, useRef } from 'react';
// import Navigation from 'swiper';
// import Pagination from 'swiper';
// import A11y from 'swiper';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import {FaAngleRight, FaAngleLeft} from "react-icons/fa"

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

//https://icons8.com/icons/set/technology


const Skills = () => {

  interface SkillObjType{
    technology: string;
    icon: string
  }

  type SkillListType = [
    SkillObjType?,
    SkillObjType?,
    SkillObjType?,
    SkillObjType?,
    SkillObjType?,
    SkillObjType?,
    SkillObjType?,
    SkillObjType?,
    SkillObjType?,
    SkillObjType?,
    SkillObjType?,
    SkillObjType?

  ]

  const [skillsList, setSkillsList] = useState<SkillListType[]>([])

 

  
  
  useEffect(() => {

    setSkillsList([
      [
      {technology: "TypeScript",
      icon: "/skillsIcons/tsIcon.png"},
      {technology: "React",
      icon: "/skillsIcons/reactIcon.png"},
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
    ], 
      [
      {technology: "Tailwind CSS",
      icon: "/skillsIcons/tailwindIcon.png"},
      {technology: "Git/Github",
      icon: "/skillsIcons/githubIcon.png"},
      {technology: "Express.js",
      icon: "/skillsIcons/expressIcon.png"},
      {technology: "webpack",
      icon: "/skillsIcons/webpackIcon.png"},
      {technology: "JavaScript",
      icon: "/skillsIcons/jsIcon.png"},
      {technology: "HTML",
      icon: "/skillsIcons/htmlIcon.png"},
      {technology: "Python",
      icon: "/skillsIcons/pythonIcon.png"},
      {technology: "Electron",
      icon: "/skillsIcons/electronIcon.png"}
    ],
    [{technology: "SQL",
    icon: "/skillsIcons/sqlIcon.png"},
    {technology: "SASS",
    icon: "/skillsIcons/sassIcon.png"}]
  
  ])

  }, [])

  const swiperRef = useRef<{
    swiper: any; current: typeof Swiper | null }>({ current: null, swiper: null });

  const handlePrev = () => {
    swiperRef.current!.swiper.slidePrev();
  }

  const handleNext = () => {
    swiperRef.current.swiper.slideNext();
  };
  
  

  return (
    <div id="skills" className="pt-[90px]  max-w-[1300px] mx-auto
    my-16">
      <p className="text-xl uppercase text-[#800020] mb-2 px-5">Skills</p>
      <h1 className="text-3xl font-semibold mb-4 px-5">Technologies I Use</h1>
      <br />
      
      <Swiper
      ref={swiperRef}
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        spaceBetween={15}
       
        breakpoints={{
          480: { slidesPerView: 1 },
          740: { slidesPerView: 1 },
          1275: { slidesPerView: 1 },
        }}
      >
        {skillsList.map((array, index) => (
          
          
            <SwiperSlide
                key={`swiperSlide${index}`}
                className="!grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-5 pb-8 gap-4"
              >
            
            {array.map((arr, ind) => {
              if (!arr) return (<div key={`emptySkill${index}+${ind}`}></div>)
          
              return (
              <div 
              key={arr?.technology}
              className="w-full flex justify-between items-center
              p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <span>{arr?.technology}</span>
                <Image
                  src={arr?.icon}
                  width={68}
                  height={68}
                  alt={arr?.icon }
                />
              </div>)
            
  
            
          
            
            })}
          </SwiperSlide>
    

        ))}
        <br/>
        <div className='w-full flex justify-center mt-2'>
          <button className='w-10 h-10 p-1 rounded-md bg-[#fff6ec]' onClick={handlePrev}>
            <FaAngleLeft className="text-gray-300 h-10 w-5"/>
          </button>
          <button className='w-10 h-10 p-1 rounded-md bg-[#fff6ec]' onClick={handleNext}>
            <FaAngleRight className="text-gray-300 h-10 w-5"/>
          </button>
        </div>

  
      </Swiper>
    </div>
  );
};

export default Skills;