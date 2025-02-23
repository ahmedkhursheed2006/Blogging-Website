import React from 'react'
import { useMediaQuery } from 'react-responsive';
import Posts from '/src/pages/Personal Blog/Dummy Data/data.jsx'


function News() {
    const isLarge = useMediaQuery({ query: "(min-width: 786px)" });
    const isMedium = useMediaQuery({ query: "(min-width: 480px) and (max-width: 785px)" });
    const isSmall = useMediaQuery({ query: "(max-width: 480px)" });
    return (
        <section className='mt-20 flex flex-col items-center '>
            <div className={`${isSmall ? "flex-col" : ""} w-[80%] rounded-4xl flex aspect-video gap-7 justify-center`}>
                <div className={`${isSmall ? "aspect-square h-[18rem]" : "aspect-video h-[23.125rem]"} relative  bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbr_uYGYlVRsynjaHMSuLtNUBaJ0E9QoJdRA&s")] bg-center bg-cover rounded-3xl`}>
                    <div className='absolute bg-black w-full h-full opacity-35 rounded-3xl'></div>
                    <div className='relative w-full h-full flex flex-col justify-end p-5 text-white'>
                        <h1 className={`${isSmall ? "text-[1.8rem]" : "text-[3rem]"} font-[800] uppercase`}>News & Updates:</h1>
                        <h2 className={`${isSmall ? "text-[1.3rem]" : "text-[2rem]"} font-[700] uppercase`}>Stay Informed on the Latest Developments</h2>
                        <p className={`${isSmall ? "text-[.8rem]" : ""}`}>From new product launches and major milestones to partnerships, awards, and company culture highlights, these blogs serve as a transparent communication channel that strengthens brand loyalty.</p>
                    </div>
                </div>
                <div className={`${isSmall ? "overflow-x-scroll h-[10rem]" : "flex-col overflow-x-visible overflow-y-scroll h-[23rem]"}flex  gap-5 items-center w-full  no-scrollbar`}>

                    <Posts category = "News" />
                </div>
            </div>
        </section>
    )
}

export default News
