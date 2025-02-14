import React from 'react'
import { Link } from 'react-router'
import BusinessBlog from '/src/pages/Business Blog/Main Blog Section/BusinessBlog.jsx'
import EducationBlog from '/src/pages/Education Blog/Main Blog Section/EducationBlog.jsx'
import CompanyBlog from '/src/pages/Company Blog/Main Blog Section/CompanyBlog.jsx'
import PersonalPage from '/src/pages/Personal Blog/Main Personal Page/PersonalPage.jsx'
function PersonalBlog() {
    return (
        <>
            <div className='bg-[url("/src/components/personal.blog.bg.jpg")] h-[650px] bg-no-repeat bg-bottom bg-cover w-full'>
                <div className='float-right w-[55%] h-[600px] m-8 bg-[#c1b4a2] rounded-[10px]'>
                    <div><h1 className='text-6xl text-center font-bold text-[#38473d] m-3'>
                        <Link className='hover:underline' to="/PersonalPage" element={<PersonalPage />} target='_blank'>Personal Blogs</Link></h1></div>
                    <div className='flex m-7 gap-3'>
                        <div className='flex rounded-[10px] h-[300px] w-30 bg-right bg-[url("https://cdn.magicdecor.in/com/2024/07/31122559/Ribbons-Serene-Off-White-Wallpaper-Mural-M1.jpg")] bg-cover bg-no-repeat'></div>
                        <div className='h-[300px] w-[400px] rounded-[10px] bg-[#aa9e8c]'>
                            <div><h1 className='text-center text-2xl my-3 text-bold text-[#1c3324]'>Get Inspired Here!</h1></div>
                            <div className='flex w-full justify-center'>
                                <div className='size-40 text-center mx-2'>
                                    <p className='text-xs text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque corrupti quis accusamus sed magnam, impedit laudantium expedita consequatur, voluptas tenetur, voluptatum voluptatibus assumenda iure quisquam aspernatur amet aliquid. Natus, explicabo.</p>
                                    <button className='bg-[#38473d] rounded-2xl px-2 text-xs text-[#fffdf6]' >Read More!</button>
                                </div>
                                <div className='size-40 text-center mx-2'>
                                    <p className='text-xs text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque corrupti quis accusamus sed magnam, impedit laudantium expedita consequatur, voluptas tenetur, voluptatum voluptatibus assumenda iure quisquam aspernatur amet aliquid. Natus, explicabo.</p>
                                    <button className='bg-[#38473d] rounded-2xl px-2 text-xs text-[#fffdf6]' >Read More!</button>
                                </div>
                            </div>
                        </div>
                        <div className='flex rounded-[10px] h-[300px] w-30 bg-left bg-[url("https://www.elephantstock.com/cdn/shop/collections/gym-sport-rooms-wall-art.png?v=1691997876")] bg-cover bg-no-repeat'></div>
                    </div>
                    <div className='border-solid border-[#1c1711] w-full border-2'></div>
                    <div><h4 className='text-[#38473d] text-center underline my-2'><Link to='/PersonalPage' target='_blank'>More Blogs Here</Link></h4></div>
                    <div className='flex justify-center w-full gap-5'>
                        <div>
                            <div className='relative size-30 aspect-square bg-[url("https://www.blogsavvypanda.com/wp-content/uploads/2021/02/lifestyle-blog-post-ideas-for-lifestyle-blogger.jpg")] bg-cover bg-center border-solid border-[#1c1711] border-2 rounded-lg'>
                                <div className="absolute bg-black opacity-40 inset-0"></div>
                                <div className="relative flex flex-col justify-center w-full h-full  text-center text-white"><h3 className="text-lg font-bold hover:underline"><Link to='/PersonalPage#lifestyle' target='_blank'>LIFE STYLE</Link></h3></div>
                            </div>
                        </div>
                        <div>
                            <div className='relative size-30 aspect-square bg-[url("https://cdn.loveandlemons.com/wp-content/uploads/2019/09/dinner-ideas-2.jpg")] bg-cover bg-center border-solid border-[#1c1711] border-2 rounded-lg'>
                                <div className="absolute bg-black opacity-40 inset-0"></div>
                                <div className="relative flex flex-col justify-center w-full h-full  text-center text-white"><h3 className="text-lg font-bold hover:underline"><Link to='/PersonalPage#food' target='_blank'>FOOD</Link></h3></div>
                            </div>
                        </div>
                        <div>
                            <div className='relative size-30 aspect-square bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIm2GbI4v7HKHMmnBniJbSoiWW0zbq86Kg6g&s")] bg-cover bg-center border-solid border-[#1c1711] border-2 rounded-lg'>
                                <div className="absolute bg-black opacity-40 inset-0"></div>
                                <div className="relative flex flex-col justify-center w-full h-full  text-center text-white hover:underline"><h3 className="text-lg font-bold"><Link to='/PersonalPage#fitness' target='_blank'>FITNESS</Link></h3></div>
                            </div>
                        </div>
                        <div>
                            <div className='relative size-30 aspect-square bg-[url("https://images.squarespace-cdn.com/content/v1/55bebb51e4b036c52ebe8c45/1593069997842-N1Q2TJAK15DCAWR69R0B/popsicle+shelves")] bg-cover bg-center border-solid border-[#1c1711] border-2 rounded-lg'>
                                <div className="absolute bg-black opacity-40 inset-0"></div>
                                <div className="relative flex flex-col justify-center w-full h-full  text-center text-white hover:underline"><h3 className="text-lg font-bold"><Link to='/PersonalPage#diy' target='_blank'>DIY</Link></h3></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <BusinessBlog />
            <EducationBlog />
            <CompanyBlog />
        </>
    )
}

export default PersonalBlog
