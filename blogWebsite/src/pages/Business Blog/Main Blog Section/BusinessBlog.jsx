import React from 'react'
import { useMediaQuery } from 'react-responsive';
function BusinessBlog() {
    const isLarge = useMediaQuery({ query: "(min-width: 786px)" });
    const isMedium = useMediaQuery({ query: "(min-width: 480px) and (max-width: 785px)" });
    const isSmall = useMediaQuery({ query: "(max-width: 480px)" });
    return (
        <div className={`${isLarge ? "h-[650px]" : isMedium ? "h-[500px]" : isSmall ? "h-[300px]" : ""} w-full bg-[url("/src/components/business.blog.bg.jpg")] bg-center bg-cover bg-no-repeat`}>
            <div className={`${isLarge ? "size-[600px]" : isMedium ? "size-[450px]" : isSmall ? "size-[250px]" : ""} rounded-[10px] float-left m-5 bg-[#aac6dd]`}>
                <div><h1 className={`${isLarge ? "text-6xl" : isMedium ? "text-4xl" : isSmall ? "text-2xl" : ""} text-center font-bold m-1 text-[#000439]`}>Business Blogs</h1></div>
                <div className={`${isLarge ? "h-[15.5rem]" : isMedium ? "h-[12rem]" : isSmall ? "h-[7rem]" : ""} w-full bg-[url("https://lostrealityescape.com.au/wp-content/uploads/2023/10/silhouette-confident-businesspeople.jpg")] bg-cover bg-top border-y-2 border-black my-3`}></div>
                <h4 className={`${isLarge ? "text-[1rem]" : isMedium ? "text-[.9rem]" : isSmall ? "text-[.7rem]" : ""} text-[#000439] text-center underline`}>Learn And Grow Here</h4>
                <div className='flex justify-around w-full'>
                    <div>
                        <div className={`relative ${isLarge? "size-30":isMedium?"size-20":isSmall?"size-12":""} aspect-square bg-[url("https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/marketing-pillar-page-marketing-overview_0.png")] bg-cover bg-center border-solid border-[#1c1711] border-2 rounded-lg`}>
                            <div className="absolute bg-black opacity-10 inset-0"></div></div>
                        <div className="w-full h-full  text-center text-"><h3 className={`${isLarge? "text-[1.2rem]":isMedium?"text-[1rem]":isSmall?"text-[.5rem]":""} font-bold`}>Marketing</h3></div>
                    </div>
                    <div>
                        <div className={`relative ${isLarge? "size-30":isMedium?"size-20":isSmall?"size-12":""} aspect-square bg-[url("https://management30.com/wp-content/themes/m30/images/intro.png")] bg-cover bg-center border-solid border-[#1c1711] border-2 rounded-lg`}>
                            <div className="absolute bg-black opacity-10 inset-0"></div>
                        </div>
                        <div className="w-full h-full  text-center text-"><h3 className={`${isLarge? "text-[1.2rem]":isMedium?"text-[1rem]":isSmall?"text-[.5rem]":""} font-bold`}>Managament</h3></div>
                    </div>
                    <div>
                        <div className={`relative ${isLarge? "size-30":isMedium?"size-20":isSmall?"size-12":""} aspect-square bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF9J1yXaf7ea6TM7dGD6iVe8aM5rmqMDyCkQ&s")] bg-cover bg-center border-solid border-[#1c1711] border-2 rounded-lg`}>
                            <div className="absolute bg-black opacity-10 inset-0"></div></div>
                        <div className={`w-full h-full  text-center`}><h3 className={`${isLarge? "text-[1.2rem]":isMedium?"text-[1rem]":isSmall?"text-[.5rem]":""} font-bold`}>Finance</h3></div>
                    </div><div>
                        <div className={`relative ${isLarge? "size-30":isMedium?"size-20":isSmall?"size-12":""} aspect-square bg-[url("https://i0.wp.com/highschool.latimes.com/wp-content/uploads/2017/07/technology-jpg.png?fit=4045%2C2880&ssl=1")] bg-cover bg-center border-solid border-[#1c1711] border-2 rounded-lg`}>
                            <div className="absolute bg-black opacity-10 inset-0"></div></div>
                        <div className="w-full h-full  text-center text-"><h3 className={`${isLarge? "text-[1.2rem]":isMedium?"text-[1rem]":isSmall?"text-[.5rem]":""} font-bold`}>Technology</h3></div>
                    </div>
                </div>

            </div>
        </div>


    )
}

export default BusinessBlog
