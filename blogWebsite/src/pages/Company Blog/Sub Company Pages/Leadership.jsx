import React from 'react'
import { useMediaQuery } from 'react-responsive';
import Posts from '/src/pages/Personal Blog/Dummy Data/data.jsx'


function DIY() {
    const isLarge = useMediaQuery({ query: "(min-width: 786px)" });
    const isMedium = useMediaQuery({ query: "(min-width: 480px) and (max-width: 785px)" });
    const isSmall = useMediaQuery({ query: "(max-width: 480px)" });
    return (
        <section className='mt-20 flex flex-col items-center '>
                <div className={`${isSmall ? "flex-col" : ""} w-[80%] rounded-4xl flex aspect-video gap-7 justify-center`}>
                <div className={`${isSmall ? "aspect-square h-[18rem]" : "aspect-video h-[23.125rem]"} relative  bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2S7dDnY09ocFh54kPzDoLEL1c515dMi3sww&s")] bg-center bg-cover rounded-3xl`}>
                        <div className='absolute bg-black w-full h-full opacity-35 rounded-3xl'></div>
                        <div className='relative w-full h-full flex flex-col justify-end p-5 text-white'>
                        <h1 className={`${isSmall ? "text-[1.8rem]" : "text-[3rem]"} font-[800] uppercase`}>Thought Leadership:</h1>
                        <h2 className={`${isSmall ? "text-[1.3rem]" : "text-[2rem]"} font-[700] uppercase`}>Inspiring Ideas & Expert Opinions</h2>
                        <p className={`${isSmall ? "text-[.8rem]" : ""}`}>From project management apps and AI-powered assistants to design software, automation tools, and must-have business applications, tools and apps blogs help you navigate the vast world of digital solutions. Learn about hidden features, productivity hacks, and industry trends to maximize efficiency and stay ahead in a tech-driven world.</p>
                        </div>
                    </div>
                    <div className={`${isSmall ? "overflow-x-scroll h-[10rem]" : "flex-col overflow-x-visible overflow-y-scroll h-[23rem]"}flex  gap-5 items-center w-full  no-scrollbar`}>
                    
                                        <Posts />
                                    </div>
                </div>
            </section>
    )
}

export default DIY
