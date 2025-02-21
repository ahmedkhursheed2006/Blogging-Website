import React from 'react'
import Posts from '/src/pages/Personal Blog/Dummy Data/data.jsx'
import { useMediaQuery } from 'react-responsive';

function Food() {
    const isLarge = useMediaQuery({ query: "(min-width: 786px)" });
    const isMedium = useMediaQuery({ query: "(min-width: 480px) and (max-width: 785px)" });
    const isSmall = useMediaQuery({ query: "(max-width: 480px)" });
    
    return (
        <section className='mt-20 flex flex-col items-center '>
                <div className={`${isSmall?"flex-col":""} w-[80%] rounded-4xl flex gap-7 justify-center`}>
                    <div className={`${isSmall?"aspect-square h-[18rem]":"aspect-video h-[23.125rem]"} relative  bg-[url("https://lh6.googleusercontent.com/Do6DtXylFh6Hud7cm94kt2CtlKXh7DrNT4vO8KF7E2bl0W9pxhiLMxCo8NTp72CjoTeewywDwc4Aqekb7XCNJmhD2Qc2rjz4rJ_aO9ljfHHa2Y9Tk9SMvWWLpVtn0iv8sTi8k0znPGZNIAn_kGS03h8")] bg-center bg-cover rounded-3xl`}>
                        <div className='absolute bg-black w-full h-full opacity-35 rounded-3xl'></div>
                        <div className='relative w-full h-full flex flex-col justify-end p-5 text-white'>
                            <h1 className={`${isSmall?"text-[1.8rem]":"text-[3rem]"} font-[800] uppercase`}>The Art of Food Blogging:</h1>
                            <h2 className={`${isSmall?"text-[1.3rem]":"text-[2rem]"} font-[700] uppercase`}>A Gateway to Culinary Delights</h2>
                            <p className={`${isSmall?"text-[.8rem]":""}`}> Whether it's a passionate home cook sharing cherished family recipes,
                                a professional chef offering expert techniques,
                                or a traveler exploring the diverse tastes of global cuisine,
                                food blogs serve as a digital table where everyone is invited to feast on inspiration.</p>
                        </div>
                    </div>
                    <div className={`${isSmall ? "overflow-x-scroll h-[10rem]" : "flex-col overflow-x-visible overflow-y-scroll h-[23rem]"}flex  gap-5 items-center w-full  no-scrollbar`}>
                          
                        <Posts/>
                    </div>
                </div>
            </section>
    )
}

export default Food
