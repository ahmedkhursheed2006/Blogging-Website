import React from 'react'
import { Link } from 'react-router'
import { useMediaQuery } from 'react-responsive';

function EducationBlog() {
    const isLarge = useMediaQuery({ query: "(min-width: 786px)" });
    const isMedium = useMediaQuery({ query: "(min-width: 480px) and (max-width: 785px)" });
    const isSmall = useMediaQuery({ query: "(max-width: 480px)" });
    return (
        <div className={`flex w-full ${isLarge ? "h-[600px] bg-top" : isMedium ? "h-[450px]" : isSmall ? "h-[350px] bg-right" : ""} bg-[url("/src/components/education.blog.bg.png")] bg-cover justify-center `}>
            <div className={` bg-[#ecaa94] w-[70%] ${isLarge ? "h-[550px]" : isMedium ? "h-[400px]" : isSmall ? "h-[250px]" : ""} m-5 `}>
                <div className='bg-[#ffe4dc] w-full py-3 rounded-t-xl border-b-2 border-black'><h1 className={`text-center ${isLarge ? "text-6xl" : isMedium ? "text-4xl" : isSmall ? "text-2xl" : ""} text-gray-900 text-bold`}><Link to='/EducationPage#page-top' className='hover:underline'>Education Blogs</Link></h1></div>
                <div className='flex justify-center bg-[#ecaa94] rounded-xl'>
                    <div className='flex flex-col w-1/3 h-full rounded-xl bg-[#ecaa94]'>
                        <div className={` aspect-square h-1/2 bg-[url("https://t3.ftcdn.net/jpg/08/15/90/80/360_F_815908053_Mfy2DJfv1iFSdL6ET9pRD5R5VzOOEu5k.jpg")] bg-center bg-cover`} ></div>
                        <div className={`rounded-bl-xl h-full bg-[#ffe4dc] flex flex-col `}>
                            <div className='m-1'>
                                <h3 className={`${isLarge ? "text-4xl" : isMedium ? "text-2xl" : isSmall ? "text-xs" : ""} font-bold`}>Learning Platforms</h3>
                                <p className={`${isLarge ? "text-sm" : isMedium ? "text-xs" : isSmall ? "text-[.4rem]" : ""} overflow-y-scroll no-scrollbar`}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, autem perspiciatis! A perferendis at inventore mollitia consectetur voluptas eius veritatis!</p>
                                <button className={`${isLarge ? "text-sm" : isMedium ? "text-xs" : isSmall ? "text-[.5rem]" : ""} rounded-[4px] bg-black text-white p-1`}>Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-1/3 h-full rounded-xl bg-[#ecaa94]'>
                        <div className={` aspect-square h-1/2 bg-[url("https://t3.ftcdn.net/jpg/08/15/90/80/360_F_815908053_Mfy2DJfv1iFSdL6ET9pRD5R5VzOOEu5k.jpg")] bg-center bg-cover`} ></div>
                        <div className={` h-full bg-[#ffe4dc] flex flex-col `}>
                            <div className='m-1'>
                                <h3 className={`${isLarge ? "text-4xl" : isMedium ? "text-2xl" : isSmall ? "text-xs" : ""} font-bold`}>Learning Platforms</h3>
                                <p className={`${isLarge ? "text-sm" : isMedium ? "text-xs" : isSmall ? "text-[.4rem]" : ""} overflow-y-scroll no-scrollbar`}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, autem perspiciatis! A perferendis at inventore mollitia consectetur voluptas eius veritatis!</p>
                                <button className={`${isLarge ? "text-sm" : isMedium ? "text-xs" : isSmall ? "text-[.5rem]" : ""} rounded-[4px] bg-black text-white p-1`}>Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-1/3 h-full rounded-xl bg-[#ecaa94]'>
                        <div className={` aspect-square h-1/2 bg-[url("https://t3.ftcdn.net/jpg/08/15/90/80/360_F_815908053_Mfy2DJfv1iFSdL6ET9pRD5R5VzOOEu5k.jpg")] bg-center bg-cover`} ></div>
                        <div className={`rounded-br-xl h-full bg-[#ffe4dc] flex flex-col `}>
                            <div className='m-1'>
                                <h3 className={`${isLarge ? "text-4xl" : isMedium ? "text-2xl" : isSmall ? "text-xs" : ""} font-bold`}>Learning Platforms</h3>
                                <p className={`${isLarge ? "text-sm" : isMedium ? "text-xs" : isSmall ? "text-[.4rem]" : ""} overflow-y-scroll no-scrollbar`}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, autem perspiciatis! A perferendis at inventore mollitia consectetur voluptas eius veritatis!</p>
                                <button className={`${isLarge ? "text-sm" : isMedium ? "text-xs" : isSmall ? "text-[.5rem]" : ""} rounded-[4px] bg-black text-white p-1`}>Read More</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default EducationBlog
