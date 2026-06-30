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


const TechSkills = () => {

  interface SkillObjType{
    technology: string;
    icon: string
  }
  //this allows eache slider page to have a maximum of 8 skills, but can have less
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
  //skills list has to be state for slider to work
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
    icon: "/skillsIcons/sassIcon.png"},
      {technology: "Unity",
        icon: "/skillsIcons/unity.png"},
      {technology: "FMOD",
        icon: "/skillsIcons/fmod.png"},
      {technology: "Logic Pro X",
        icon: "/skillsIcons/logic.png"},
      {technology: "Pro Tools",
        icon: "/skillsIcons/protools.png"},
      {technology: "Sibelius",
        icon: "/skillsIcons/sibelius.png"},
      {technology: "Wwise",
        icon: "/skillsIcons/wwise.png"}]
  
  ])

  }, [])

  const [currentIndex, setCurrentIndex] = useState(0);

  const swiperRef = useRef<{
    swiper: any; current: typeof Swiper | null }>({ current: null, swiper: null });

  const handlePrev = () => {
    swiperRef.current!.swiper.slidePrev();
  }

  const handleNext = () => {
    swiperRef.current.swiper.slideNext();
  };

  const isFirst = currentIndex === 0;
  const isLast = currentIndex === skillsList.length - 1;

  const arrowButtonStyles = "w-10 h-10 p-1 rounded-md bg-[var(--very-light-pink-color)] text-[var(--pink-color)] flex justify-center items-center transition-opacity"
  const arrowIconStyles = "text-[var(--pink-color)] h-10 w-5"
  

  return (
    <div id="techskills" className="pt-[90px]  max-w-[1300px] mx-auto
    my-16">
      <p className="text-xl uppercase text-[var(--pink-color)] mb-2 px-5">Tech Skills</p>
      <h1 style={{ fontFamily: "Dancing Script, cursive" }} className="text-3xl mb-4 px-5 text-[var(--very-light-pink-color)] ">Technologies I Use</h1>
      <br />
      
      <Swiper
      ref={swiperRef}
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        spaceBetween={15}
        onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
       
        breakpoints={{
          480: { slidesPerView: 1 },
          740: { slidesPerView: 1 },
          1275: { slidesPerView: 1 },
        }}
      >
        {/*rendering the different slides */}
        {skillsList.map((array, index) => (
          
          
            <SwiperSlide
                key={`swiperSlide${index}`}
                className="!grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-5 pb-8 gap-4"
              >
             {/*looping through the skills of each slide */}
            {array.map((arr, ind) => {
              if (!arr) return (<div key={`emptySkill${index}+${ind}`}></div>)
          
              return (
              <div 
              key={arr?.technology}
              className="w-full flex justify-between items-center text-[var(--background-color)] bg-[var(--very-light-pink-color)] p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
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
        {/*arrows*/}
        <div className='w-full flex justify-center mt-2 gap-1'>
          <button
            className={`${arrowButtonStyles} ${isFirst ? 'opacity-30' : 'opacity-100 cursor-pointer'}`}
            onClick={handlePrev}
            disabled={isFirst}
          >
            <FaAngleLeft className={arrowIconStyles} />
          </button>
          <button
            className={`${arrowButtonStyles} ${isLast ? 'opacity-30' : 'opacity-100 cursor-pointer'}`}
            onClick={handleNext}
            disabled={isLast}
          >
            <FaAngleRight className={arrowIconStyles} />
          </button>
        </div>

  
      </Swiper>
    </div>
  );
};

export default TechSkills;