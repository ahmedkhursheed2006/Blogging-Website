import React from 'react'
import Food from '../Sub Personal Pages/Food'
import Lifestyle from '../Sub Personal Pages/Lifestyle'
import Fitness from '../Sub Personal Pages/Fitness'
import DIY from '../Sub Personal Pages/DIY'

import { useLocation } from 'react-router'
import { useEffect } from 'react'
export default function Personal() {
    const location = useLocation();

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
            <section className='relative flex justify-center items-center w-full h-[600px] text-white z-2 bg-[url("https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q=")] bg-bottom bg-cover'>
                <div className='absolute w-full h-full bg-black opacity-40'></div>
                <div className='z-10 text-center w-full'>
                    <h2 className='text-[5em] font-[800] uppercase'>Personal Blogs</h2>
                    <p className='text-[1.1em] my-[20px] font-[700] max-w-[700px] m-auto'>
                        Personal blogs are a powerful way to share your thoughts, experiences, and passions with the world.
                        They offer a space for self-expression, creativity, and personal growth.
                        Whether you're writing about travel, lifestyle, or deep reflections, your blog is uniquely yours.
                        In a fast-paced digital world, it provides a place to connect, inspire, and leave a lasting impact.
                        Start writing today—because your story matters.</p>
                </div>
            </section>
            {/* Food Section */}
            <section id='food'>
            <Food/>
            </section>
            {/* LifeStyle Section */}
            <section id='lifestyle'>
            <Lifestyle/>
            </section>
            {/* Fitness Section */}
            <section id='fitness'>
            <Fitness/>
            </section>
            {/* DIY Section */}
            <section id='diy'>
            <DIY/>
            </section>
        </div>
    )
}


