import React from 'react'
import { useMediaQuery } from 'react-responsive';
import Posts from '/src/pages/Personal Blog/Dummy Data/data.jsx'

function Food() {

    const isLarge = useMediaQuery({ query: "(min-width: 786px)" });
    const isMedium = useMediaQuery({ query: "(min-width: 480px) and (max-width: 785px)" });
    const isSmall = useMediaQuery({ query: "(max-width: 480px)" });
    return (
        <section className='mt-20 flex flex-col items-center '>
                <div className={`${isSmall ? "flex-col" : ""} w-[80%] rounded-4xl flex aspect-video gap-7 justify-center`}>
                <div className={`${isSmall ? "aspect-square h-[18rem]" : "aspect-video h-[23.125rem]"} relative  bg-[url("https://www.globitalmarketing.com/sg/wp-content/uploads/2021/07/df453we.png")] bg-center bg-cover rounded-3xl`}>
                        <div className='absolute bg-black w-full h-full opacity-35 rounded-3xl'></div>
                        <div className='relative w-full h-full flex flex-col justify-end p-5 text-white'>
                        <h1 className={`${isSmall ? "text-[1.8rem]" : "text-[3rem]"} font-[800] uppercase`}>Customer Reviews:</h1>
                        <h2 className={`${isSmall ? "text-[1.3rem]" : "text-[2rem]"} font-[700] uppercase`}>Real Experiences, Real Impact</h2>
                        <p className={`${isSmall ? "text-[.8rem]" : ""}`}>real-life testimonials, case studies, and user experiences to build trust and credibility. By showcasing customer success stories and feedback, these blogs help potential buyers make informed decisions while reinforcing brand reputation.</p>
                        </div>
                    </div>
                    <div className={`${isSmall ? "overflow-x-scroll h-[10rem]" : "flex-col overflow-x-visible overflow-y-scroll h-[23rem]"}flex  gap-5 items-center w-full  no-scrollbar`}>
                    
                                        <Posts />
                                    </div>
                </div>
            </section>
    )
}

export default Food
