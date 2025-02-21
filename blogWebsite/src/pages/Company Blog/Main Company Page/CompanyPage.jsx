import React from 'react'
import Reviews from "/src/pages/Company Blog/Sub Company Pages/Reviews.jsx"
import Guides from "/src/pages/Company Blog/Sub Company Pages/Guides.jsx"
import Insights from "/src/pages/Company Blog/Sub Company Pages/Insights.jsx"
import News from '/src/pages/Company Blog/Sub Company Pages/News.jsx'
import Leadership from '/src/pages/Company Blog/Sub Company Pages/Leadership.jsx'
import { useMediaQuery } from 'react-responsive'
import { useLocation } from 'react-router'
import { useEffect } from 'react'
export default function Company() {
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
            <section id='page-top' className='relative flex justify-center items-center w-full h-[600px] text-white z-2 bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlGiGgxGBXVZ0vs4RtiiQqoEweKHpfZiKNqg&s")] bg-bottom bg-cover'>
                <div className='absolute w-full h-full bg-black opacity-40'></div>
                <div className='z-10 text-center w-full'>
                <h2 className={`${isLarge?"text-[5rem]":isMedium?"text-[4rem]":isSmall?"text-[3rem]":""} font-[800] uppercase`} >Company Blogs</h2>
                    <p className='text-[1.1em] my-[20px] font-[700] max-w-[700px] m-auto'>
                    Covering topics like business trends, company culture, behind-the-scenes insights, and expert advice, these blogs offer valuable content that engages customers, attracts talent, and strengthens brand identity. From startups to Fortune 500 companies, a well-crafted blog enhances visibility and positions a brand as an industry leader.</p>
                </div>
            </section>
            {/* platforms Section */}
            <section id='news'>
            <News/>
            </section>
            {/* tools Section */}
            <section id='insights'>
            <Insights/>
            </section>
            {/* skill Section */}
            <section id='reviews'>
            <Reviews/>
            </section>
            {/* learning Section */}
            <section id='guides'>
            <Guides/>
            </section><section id='leadership'>
            <Leadership/>
            </section>
        </div>
    )
}


