import React from 'react'
import { Link } from 'react-router'
function EducationBlog() {
    return (
        <div className='flex w-full h-[600px] bg-[url("/src/components/education.blog.bg.png")] bg-cover justify-center bg-top'>
            <div className='w-[60%] h-[550px] bg-white m-5 '>
                <div className='bg-[#ffe4dc] py-3 rounded-t-xl border-b-2 border-black'><h1 className='text-center text-6xl text-gray-900 text-bold'><Link to='/EducationPage#page-top' className='hover:underline'>Education Blogs</Link></h1></div>
                <div className='flex justify-center'>
                    <div className='flex flex-col w-full h-full'>
                        <div className='rounded-tr-xl h-[230px] w-[250px] bg-[url("https://t3.ftcdn.net/jpg/08/15/90/80/360_F_815908053_Mfy2DJfv1iFSdL6ET9pRD5R5VzOOEu5k.jpg")] bg-center bg-cover' ></div>
                        <div className='rounded-br-xl h-[230px] w-[250px] bg-[#ffe4dc] flex flex-col '>
                            <div className='m-1'>
                                <h3 className='text-4xl font-bold'>Learning Platforms</h3>
                                <p className='text-sm'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, autem perspiciatis! A perferendis at inventore mollitia consectetur voluptas eius veritatis!</p>
                                <button className='rounded-[4px] bg-black text-white p-1'>Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-full h-full'>
                        <div className='rounded-t-xl h-[230px] w-[250px] bg-[url("https://t3.ftcdn.net/jpg/08/15/90/80/360_F_815908053_Mfy2DJfv1iFSdL6ET9pRD5R5VzOOEu5k.jpg")] bg-center bg-cover' ></div>
                        <div className='rounded-b-xl h-[230px] w-[250px] bg-[#ffe4dc] flex flex-col '>
                            <div className='m-1'>
                                <h3 className='text-4xl font-bold'>Learning Platforms</h3>
                                <p className='text-sm'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, autem perspiciatis! A perferendis at inventore mollitia consectetur voluptas eius veritatis!</p>
                                <button className='rounded-[4px] bg-black text-white p-1'>Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-full h-full'>
                        <div className='rounded-tr-xl h-[230px] w-[250px] bg-[url("https://t3.ftcdn.net/jpg/08/15/90/80/360_F_815908053_Mfy2DJfv1iFSdL6ET9pRD5R5VzOOEu5k.jpg")] bg-center bg-cover' ></div>
                        <div className='rounded-br-xl h-[230px] w-[250px] bg-[#ffe4dc] flex flex-col '>
                            <div className='m-1'>
                                <h3 className='text-4xl font-bold'>Learning Platforms</h3>
                                <p className='text-sm'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, autem perspiciatis! A perferendis at inventore mollitia consectetur voluptas eius veritatis!</p>
                                <button className='rounded-[4px] bg-black text-white p-1'>Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EducationBlog
