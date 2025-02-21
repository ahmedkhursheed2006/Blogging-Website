import React from 'react'
import Marketing from "/src/pages/Business Blog/Sub Business Pages/Marketing.jsx"
import Management from "/src/pages/Business Blog/Sub Business Pages/Management.jsx"
import Finance from '/src/pages/Business Blog/Sub Business Pages/Finance.jsx'
import Technology from '/src/pages/Business Blog/Sub Business Pages/Technology.jsx'
import { useMediaQuery } from 'react-responsive'
import { useLocation } from 'react-router'
import { useEffect } from 'react'
export default function Personal() {
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
            <section className='relative flex justify-center items-center w-full h-[600px] text-white z-2 bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3JeadynIKWGNqd9GgcGfgO70OAnPaWSEo8Q&s")] bg-bottom bg-cover'>
                <div className='absolute w-full h-full bg-black opacity-40'></div>
                <div className='z-10 text-center w-full'>
                <h2 className={`${isLarge?"text-[5rem]":isMedium?"text-[4rem]":isSmall?"text-[3rem]":""} font-[800] uppercase`} >Business Blogs</h2>
                    <p className='text-[1.1em] my-[20px] font-[700] max-w-[700px] m-auto'>
                    A business blog is a powerful tool for companies and entrepreneurs to establish authority, engage their audience, and drive growth. It serves as a hub for valuable content—industry insights, expert opinions, case studies, and practical tips—that educate and inform readers while subtly promoting products or services.</p>
                </div>
            </section>
            {/* Marketing Section */}
            <section id='marketing'>
            <Marketing/>
            </section>
            {/* management Section */}
            <section id='management'>
            <Management/>
            </section>
            {/* financeSection */}
            <section id='finance'>
            <Finance/>
            </section>
            {/* technology Section */}
            <section id='technology'>
            <Technology/>
            </section>
        </div>
    )
}


