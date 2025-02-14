import React from 'react'
import { Link } from 'react-router'
import PersonalPage from '/src/pages/Personal Blog/Main Personal Page/PersonalPage.jsx'
import Layout from '../pages/Layout'


function NavBar() {

    return (
        <nav
            className='sticky h-20 top-0 items-center bg-[#ffecd1] flex w-full gap-3 z-[1000] text-[#15616d]'>
            {/* Logo and Website Name */}
            <div
                className='w-1/10'>
                <Link to="/" element={<Layout />}>
                    <img
                        className='size-20 mx-8'
                        src="src\components\BlogWebsiteLogo.png"
                        alt="EveryDay Tales" /></Link>
            </div>
            {/* Menu */}
            <div
                className='w-8/10 flex-1'>
                <ul
                    className="flex gap-1 text-center w-full list-none align-middle">

                    <li
                        className=' relative inline-block group 
                    px-4 py-[5px] text-base
                    hover:border-[#15616d] hover:bg-[#15616d] hover:text-white 
                    '>
                        <Link to="/PersonalPage" element={<PersonalPage />}
                            className="no-underline font-bold "
                            href="#personnalBlog"
                        >Personal Blog</Link>
                        <div
                            className='w-[100%] border-[#01253f] leading-10 text-center my-[4px] bg-[#01253f]
                            hidden
                            absolute right-0
                            group-hover:block
                

                            '
                        >
                            <Link to='/PersonalPage#food' target='_blank' className='block hover:border-white hover:border-solid hover:border text-white no-underline' >Food</Link>
                            <Link to='/PersonalPage#lifestyle' target='_blank' className='block hover:border-white hover:border-solid hover:border text-white no-underline'>Lifestyle</Link>
                            <Link to='/PersonalPage#fitness' target='_blank' className='block hover:border-white hover:border-solid hover:border text-white no-underline'>Fitness</Link>
                            <Link to='/PersonalPage#diy' target='_blank' className='block hover:border-white hover:border-solid hover:border text-white no-underline'>DIY</Link>
                        </div>
                    </li>
                    <li
                        className='
                            relative inline-block group 
                            hover:border-[#15616d] hover:bg-[#15616d] hover:text-white
                             px-4 py-[5px] text-base'>
                        <Link
                            className="
                            no-underline font-bold "
                            to="/BusinessPage">
                            Business Blog</Link>
                        <div
                            className='w-[100%] border-[#01253f] leading-10 text-center my-[4px] bg-[#01253f]
                            hidden
                            absolute right-0
                            group-hover:block
                            z-10

                            '
                        >
                            
                            <Link to='/BusinessPage#marketing' className='block hover:border-white hover:border-solid hover:border text-white no-underline' href="#marketing">Marketing</Link>
                            <Link to='/BusinessPage#management' className='block hover:border-white hover:border-solid hover:border text-white no-underline'>Management</Link>
                            <Link to='/BusinessPage#finance' className='block hover:border-white hover:border-solid hover:border text-white no-underline'>Finance</Link>
                            <Link to='/BusinessPage#technology' className='block hover:border-white hover:border-solid hover:border text-white no-underline'>Technology</Link>
                        </div>
                    </li>
                    <li
                        className='
                        relative inline-block group
                        hover:border-[#15616d] hover:bg-[#15616d] hover:text-white
                        px-4 py-[5px] text-base'>
                        <Link to='/EducationPage'
                            className="
                        no-underline font-bold "
                            >
                            Education Blog</Link>
                        <div
                            className='w-[100%] border-[#01253f] leading-10 text-center my-[4px] bg-[#01253f]
                            hidden
                            absolute right-0
                            group-hover:block
                            z-10

                            '
                        >
                            <Link to='/EducationPage#platforms' className='block hover:border-white hover:border-solid hover:border text-white no-underline'>Learning Platforms</Link>
                            <Link to='/EducationPage#tools' className='block hover:border-white hover:border-solid hover:border text-white no-underline'>Tools and Apps</Link>
                            <Link to='/EducationPage#skill' className='block hover:border-white hover:border-solid hover:border text-white no-underline'>Skill Development</Link>
                            <Link to='/EducationPage#learning' className='block hover:border-white hover:border-solid hover:border text-white no-underline'>Creative Learning</Link>
                        </div>
                    </li>
                    <li className='relative inline-block group hover:border-[#15616d] hover:bg-[#15616d] hover:text-white px-4 py-[5px]  text-base'><Link to='/CompanyPage' className="no-underline font-bold ">Company Blog</Link>
                        <div
                            className='w-[100%] border-[#01253f] leading-10 text-center my-[4px] bg-[#01253f]
                            hidden
                            absolute right-0
                            group-hover:block
                            z-10

                            '
                        >
                            <Link to='/CompanyPage#news' className='block hover:border-white hover:border-solid hover:border text-white no-underline'>News and Updates</Link>
                            <Link to='/CompanyPage#insights' className='block hover:border-white hover:border-solid hover:border text-white no-underline'>Industry Insights</Link>
                            <Link to='/CompanyPage#reviews' className='block hover:border-white hover:border-solid hover:border text-white no-underline'>Customer Reviews</Link>
                            <Link to='/CompanyPage#guides' className='block hover:border-white hover:border-solid hover:border text-white no-underline'>Guides</Link>
                            <Link to='/CompanyPage#leadership' className='block hover:border-white hover:border-solid hover:border text-white no-underline'>Thought Leadership</Link>
                        </div>
                    </li>

                </ul>
            </div>
            <div >
                <Link to='/create-blog'className=' text-black border-gray-200 bg-gray-200 rounder-[2px] p-2 mx-1'>Create Blog</Link>
                <Link to='/login' className=' text-white border-amber-600 bg-amber-600 rounded-[2px] p-2 mx-1'>Login/Signup</Link>
            </div>
        </nav>
    )
}

export default NavBar
