'use client';
import { useState, useEffect } from 'react';
// import Navigation from 'swiper';
// import Pagination from 'swiper';
// import A11y from 'swiper';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';




const Skills = () => {

  interface SkillObjType{
    technology: string;
    icon: string
}

  const [skillsList, setSkillsList] = useState<SkillObjType[]>([])

  
  useEffect(() => {

    setSkillsList([
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
  
  
  ])

  }, [])
  
  

  return (
    <div>
      <h1>Custom Slider 1</h1>
      <br />
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        spaceBetween={15}
        breakpoints={{
          480: { slidesPerView: 2 },
          740: { slidesPerView: 3 },
          1275: { slidesPerView: 4 },
        }}
      >
        {skillsList.map(({technology, icon}) => (
          <SwiperSlide
            key={technology}
            className='bg-red-200 !flex justify-center items-center'
          >
            <div className='border-2 border-blue-500 rounded-lg overflow-hidden w-[200px] h-[300px] flex justify-center items-center'>
              <Image
                src={icon}
                width={150}
                height={150}
                alt={icon }
              />
            </div>
          </SwiperSlide>
        ))}

  
      </Swiper>
    </div>
  );
};

export default Skills;