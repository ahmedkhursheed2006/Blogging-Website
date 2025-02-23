import React , {useState} from 'react'
import { Link } from 'react-router'
import PersonalPage from '/src/pages/Personal Blog/Main Personal Page/PersonalPage.jsx'
import Layout from '../pages/Layout'
import { useMediaQuery } from 'react-responsive'
import { useAuth } from '../pages/Login-Signup/AuthContext'
import { RxAvatar } from "react-icons/rx";
import { logout } from '../api/api'

function NavBar() {
    const [isActive, setIsActive] = useState(false)

    const isLarge = useMediaQuery({ query: "(min-width: 786px)" });
    const isMedium = useMediaQuery({ query: "(min-width: 480px) and (max-width: 785px)" });
    const isSmall = useMediaQuery({ query: "(max-width: 480px)" });
    
    const {user, logout} = useAuth();
    return (
        <nav
            className={`sticky ${isLarge ? "h-20" : isMedium ? "h-10" : isSmall ? "h-10" : ""} top-0 items-center bg-[#ffecd1] flex w-full gap-4 z-[1000] text-[#15616d]`}>

            <div
                className='w-1/10'>
                <Link to="/" element={<Layout />}>
                    <img
                        className={`${isLarge ? "size-20 mx-8" : isMedium ? "size-10 mx-4" : isSmall ? "size-10 mx-4" : ""} `}
                        src="src\components\BlogWebsiteLogo.png"
                        alt="EveryDay Tales" /></Link>
            </div>
            {/* Menu */}
            <div
                className={`${isLarge ? "w-8/10" : isMedium ? "w-7/10" : isSmall ? "w-6/10" : ""} flex-1 overflow-x-scroll no-scrollbar`}>
                <ul
                    className="flex gap-1 text-center w-full list-none align-middle">

                    <li
                        className={` relative inline-block group 
                     ${isLarge ? "text-[1rem] py-[5px] px-4" : isMedium ? "text-[.5rem] py-[3px] px-2" : isSmall ? "text-[.7rem] my-4 px-1" : ""}
                    hover:border-[#15616d] hover:bg-[#15616d] hover:text-white 
                    `}>
                        <Link to="/PersonalPage" element={<PersonalPage />}
                            className="no-underline font-bold "

                        >Personal Blog</Link>

                        <div
                            className={`${isSmall ? "hidden" : ""} w-full border-[#01253f] leading-10 text-center my-[4px] bg-[#01253f] 
                        hidden
                        absolute right-0
                        group-hover:block
                        `}
                        >
                            <Link to='/PersonalPage#food' target='_blank' className='block hover:border-white hover:border-solid hover:border text-white no-underline' >Food</Link>
                            <Link to='/PersonalPage#lifestyle' target='_blank' className='block hover:border-white hover:border-solid hover:border text-white no-underline'>Lifestyle</Link>
                            <Link to='/PersonalPage#fitness' target='_blank' className='block hover:border-white hover:border-solid hover:border text-white no-underline'>Fitness</Link>
                            <Link to='/PersonalPage#diy' target='_blank' className='block hover:border-white hover:border-solid hover:border text-white no-underline'>DIY</Link>
                        </div>

                    </li>
                    <li
                        className={` relative inline-block group 
                     ${isLarge ? "text-[1rem] py-[5px] px-4" : isMedium ? "text-[.5rem] py-[3px] px-2" : isSmall ? "text-[.7rem] my-4 px-1" : ""}`}>
                        <Link
                            className="
                            no-underline font-bold "
                            to="/BusinessPage">
                            Business Blog</Link>

                        <div
                            className={`${isSmall ? "hidden" : ""} w-full border-[#01253f] leading-10 text-center my-[4px] bg-[#01253f] 
                                hidden
                                absolute right-0
                                group-hover:block
                                `}
                        >
                            <Link to='/BusinessPage#marketing' className='block hover:border-white hover:border-solid hover:border text-white no-underline' href="#marketing">Marketing</Link>
                            <Link to='/BusinessPage#management' className='block hover:border-white hover:border-solid hover:border text-white no-underline'>Management</Link>
                            <Link to='/BusinessPage#finance' className='block hover:border-white hover:border-solid hover:border text-white no-underline'>Finance</Link>
                            <Link to='/BusinessPage#technology' className='block hover:border-white hover:border-solid hover:border text-white no-underline'>Technology</Link>
                        </div>

                    </li>
                    <li
                        className={` relative inline-block group 
                            ${isLarge ? "text-[1rem] py-[5px] px-4" : isMedium ? "text-[.5rem] py-[3px] px-2" : isSmall ? "text-[.7rem] my-4 px-1" : ""}`}>
                        <Link to='/EducationPage'
                            className="
                        no-underline font-bold "
                        >
                            Education Blog</Link>

                        <div
                            className={`${isSmall ? "hidden" : ""} w-full border-[#01253f] leading-10 text-center my-[4px] bg-[#01253f] 
                            hidden
                            absolute right-0
                            group-hover:block
                            `}
                        >
                            <Link to='/EducationPage#platforms' className='block hover:border-white hover:border-solid hover:border text-white no-underline'>Learning Platforms</Link>
                            <Link to='/EducationPage#tools' className='block hover:border-white hover:border-solid hover:border text-white no-underline'>Tools and Apps</Link>
                            <Link to='/EducationPage#skill' className='block hover:border-white hover:border-solid hover:border text-white no-underline'>Skill Development</Link>
                            <Link to='/EducationPage#learning' className='block hover:border-white hover:border-solid hover:border text-white no-underline'>Creative Learning</Link>
                        </div>

                    </li>
                    <li className={` relative inline-block group 
                     ${isLarge ? "text-[1rem] py-[5px] px-4" : isMedium ? "text-[.5rem] py-[3px] px-2" : isSmall ? "text-[.7rem] my-4 px-1" : ""}`}><Link to='/CompanyPage' className="no-underline font-bold ">Company Blog</Link>


                        <div
                            className={`${isSmall ? "hidden" : ""} w-full border-[#01253f] leading-10 text-center my-[4px] bg-[#01253f] 
                            hidden
                            absolute right-0
                            group-hover:block
                            `}
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
                {user ?
                    
                    <div className='flex items-center'>
                    <Link to='/create-blog' className={` ${isLarge ? "text-base" : isMedium ? "text-sm" : isSmall ? "text-xs" : ""} text-black border-gray-200 bg-gray-200 rounded-[2px] p-2 mx-1`}>Create Blog</Link>
                    <div className='inline-block items-center bg-amber-50 px-1 mx-1 group relative cursor-pointer' onClick={() => setIsActive(!isActive)} >
                        <div className='flex py-0.5 items-center'><RxAvatar  className='size-9 text-blue-400'/>
                        <span className='mx-1 text-black'>{user.name}</span></div>
                        <div className={`${isActive? "":"hidden"} absolute w-full text-center bg-blue-600 text-white right-[0px]`}>
                            <Link to={`/posts/user/${user?.id}`} className='block p-2 hover:bg-white hover:text-blue-600 hover:underline'>
                            My Posts</Link>
                            <Link className='block p-2 hover:underline hover:bg-white hover:text-blue-600' onClick={logout}>Logout</Link>
                        </div>
                    </div>
                    </div>
                    :
                    <Link to='/login' className={` ${isLarge ? "text-base" : isMedium ? "text-sm" : isSmall ? "text-[.7rem]" : ""} text-white border-amber-600 bg-amber-600 rounded-[2px] p-2 mx-1`}>Login/Signup</Link>
                }
            </div>
        </nav >
    )
}

export default NavBar
