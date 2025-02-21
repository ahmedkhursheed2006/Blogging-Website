import React from 'react'
import Learning from "/src/pages/Education Blog/Sub Education Pages/Learning.jsx"
import Platforms from "/src/pages/Education Blog/Sub Education Pages/Platforms.jsx"
import Skill from '/src/pages/Education Blog/Sub Education Pages/Skill.jsx'
import Tools from '/src/pages/Education Blog/Sub Education Pages/Tools.jsx'
import { useMediaQuery } from 'react-responsive'
import { useLocation } from 'react-router'
import { useEffect } from 'react'
export default function Educational() {
    const location = useLocation();
    const isLarge = useMediaQuery({ query: "(min-width: 786px)" });
    const isMedium = useMediaQuery({ query: "(min-width: 480px) and (max-width: 785px)" });
    const isSmall = useMediaQuery({ query: "(max-width: 480px)" });
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1); // Remove #
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", 
            block: 'end'
        });
      }
    }
  }, [location]);
    return (
        <div className='w-full h-full'>
            <section id='page-top' className='relative flex justify-center items-center w-full h-[600px] text-white z-2 bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZUVRGUBk5Hz-O_cXDOkH5TDwRdPqQ7sTetA&s")] bg-bottom bg-cover'>
                <div className='absolute w-full h-full bg-black opacity-40'></div>
                <div className='z-10 text-center w-full'>
                <h2 className={`${isLarge?"text-[5rem]":isMedium?"text-[4rem]":isSmall?"text-[3rem]":""} font-[800] uppercase`} >Education Blogs</h2>
                    <p className='text-[1.1em] my-[20px] font-[700] max-w-[700px] m-auto'>
                    Education blogs provide valuable insights, resources, and inspiration for students, teachers, and lifelong learners. They cover a wide range of topics, from study tips and teaching strategies to the latest trends in education and technology. Whether you're looking for expert advice, engaging discussions, or innovative learning techniques, education blogs serve as a dynamic platform to expand knowledge and spark curiosity. Stay informed, stay inspired, and keep learning!</p>
                </div>
            </section>
            {/* platforms Section */}
            <section id='platforms'>
            <Platforms/>
            </section>
            {/* tools Section */}
            <section id='tools'>
            <Tools/>
            </section>
            {/* skill Section */}
            <section id='skill'>
            <Skill/>
            </section>
            {/* learning Section */}
            <section id='learning'>
            <Learning/>
            </section>
        </div>
    )
}


