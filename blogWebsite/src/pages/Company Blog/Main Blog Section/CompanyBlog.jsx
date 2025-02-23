import React from 'react'
import { Link } from 'react-router'
import { useMediaQuery } from 'react-responsive';
function CompanyBlog() {
    const isLarge = useMediaQuery({ query: "(min-width: 786px)" });
    const isMedium = useMediaQuery({ query: "(min-width: 480px) and (max-width: 785px)" });
    const isSmall = useMediaQuery({ query: "(max-width: 480px)" });
    return (
        <div className={`flex w-full  ${isLarge ? "h-[650px]" : isMedium ? "h-[500px]" : isSmall ? "h-[300px]" : ""}  bg-[url("https://www.luxcellence.com/wp-content/uploads/Luxcellence-slider-background-1-1-1024x684.jpg")] bg-cover justify-end bg-center`}>
            <div className={`flex float-right w-[70%] ${isLarge ? "h-[37.5rem]" : isMedium ? "h-[25rem]" : isSmall ? "h-[14rem]" : ""} m-8 bg-[#A1BFC7] rounded-[10px]`}>
                <div className='h-full w-[30%]'>
                    <div className='h-3/10 w-full rounded-tl-[10px] bg-[#F4A261]'>
                        <Link to="/CompanyPage" className='hover:underline'>
                            <h1 className={`font-bold ${isLarge ? "text-[3.1rem] py-4" : isMedium ? "text-[2.1rem] py-2" : isSmall ? "text-[.9rem] py-2" : ""} px-1`}>COMPANY</h1>
                            <h2 className={`font-bold ${isLarge ? "text-[2.8rem]" : isMedium ? "text-[1.8rem]" : isSmall ? "text-[.8rem]" : ""} px-1`}>Blogs</h2>
                        </Link>
                    </div>

                    <p className={`${isLarge ? "text-[.9rem]" : isMedium ? "text-[.8rem]" : isSmall ? "text-[.4rem]" : ""} h-7/10 w-full rounded-bl-[10px] bg-[#1C2833] text-[#F8F9FA] text-left px-2`}>Discover the latest trends, insights, and expert advice tailored just for you.
                        <div className={`relative left-[15%] ${isLarge ? "h-[12.5rem] w-[11.25rem]" : isMedium ? "h-[10rem] w-[9rem]" : isSmall ? "hidden" : ""} rounded-[10px] bg-[url("https://assets.entrepreneur.com/content/3x2/2000/20190402203550-GettyImages-694983385.jpeg")] bg-center bg-cover`}></div>
                        Whether you're looking for inspiration, practical tips, or in-depth knowledge, our carefully curated blogs cover everything from lifestyle and fitness to home decor and beyond.
                    </p>

                </div>
                <div className='h-full w-3/4'>
                    <div className='w-full h-1/2 rounded-tr-[10px] bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0g0UPeJQssG00CWMIMKlSm1LVEalPqsUxNnkWv-zEZFhnBpByHbU9qNSGXqydeQLnqV0&usqp=CAU")] bg-right bg-cover '></div>
                    <div className='w-full h-1/2'>
                        <div><h4 className={`text-[#1C2833] ${isLarge ? "text-[1.1rem]" : isMedium ? "text-[.8rem]" : isSmall ? "text-[.6rem]" : ""} text-center font-bold`}>Get Your Insights Here</h4></div>
                        <div className='flex justify-around'>
                            <div className='w-1/5 h-full'>
                                <div className={`aspect-square h-1/2 bg-[url("https://images.vexels.com/content/73872/preview/latest-business-news-on-laptop-bdef05.png")] bg-cover bg-center border-solid border-[#1c1711] border-2 rounded-t-lg`}></div>
                                <div className='aspect-square h-1/2 bg-[#57beff] text-[#1C2833] text-center font-bold flex flex-col justify-center border-solid border-[#1c1711] border-2 rounded-b-lg'><Link to='/CompanyPage#news' className={`${isLarge ? "text-sm" : isMedium ? "text-xs" : isSmall ? "text-[.5rem]" : ""} `}>News And Updates</Link></div>
                            </div>
                            <div className='w-1/5 h-full'>
                                <div className='aspect-square h-1/2 bg-[url("https://cdni.iconscout.com/illustration/premium/thumb/insights-from-market-research-analyst-illustration-download-in-svg-png-gif-file-formats--marketing-idea-analysis-business-growth-pack-illustrations-10136281.png?f=webp")] bg-cover bg-center border-solid border-[#1c1711] border-2 rounded-t-lg'></div>
                                <div className='aspect-square h-1/2  text-[#1C2833] text-center font-bold flex flex-col justify-center border-solid border-[#1c1711] border-2 rounded-b-lg'><Link to='/CompanyPage#insights' className={`${isLarge ? "text-sm" : isMedium ? "text-xs" : isSmall ? "text-[.5rem]" : ""} `}>Industry Insights</Link></div>
                            </div>
                            <div className='w-1/5 h-full'>
                                <div className='aspect-square h-1/2 bg-[url("https://static.vecteezy.com/system/resources/previews/034/956/343/non_2x/customers-giving-likes-stars-and-positive-feedback-client-satisfaction-concept-customer-review-evaluation-illustration-for-landing-page-web-banner-mobile-app-infographic-vector.jpg")] bg-cover bg-center border-solid border-[#1c1711] border-2 rounded-t-lg'></div>
                                <div className='aspect-square h-1/2 bg-[#ffffff] text-[#1C2833] font-bold flex flex-col justify-center border-solid border-[#1c1711] border-2 rounded-b-lg'><Link to='/CompanyPage#reviews' className={`${isLarge ? "text-sm" : isMedium ? "text-xs" : isSmall ? "text-[.5rem]" : ""} `}>Customer Reviews</Link></div>
                            </div>
                            <div className='w-1/5 h-full'>
                                <div className='aspect-square h-1/2 bg-[url("https://media.istockphoto.com/id/1165498595/vector/instructions-manual-concept-user-manual-flat-style-vector-concept-people-surrounded-with.jpg?s=612x612&w=0&k=20&c=ws_Zvj_HRaqNC-dAKdx5dkPO97nQdvjYRynFqzy2f0Q=")] bg-cover bg-center border-solid border-[#1c1711] border-2 rounded-t-lg'></div>
                                <div className='aspect-square text-center h-full bg-[#e3c6fe] text-[#1C2833] font-bold flex flex-col justify-center border-solid border-[#1c1711] border-2 rounded-b-lg'><Link to='/CompanyPage#guides' className={` ${isLarge ? "text-sm" : isMedium ? "text-xs" : isSmall ? "text-[.5rem]" : ""} `}>Guides</Link></div>
                            </div>
                            <div className='w-1/5 h-full'>
                                <div className='aspect-square h-1/2 bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSET8xFx61S3P1HC_lLZBYeTjDyN89qAojO9w&s")] bg-cover bg-center border-solid border-[#1c1711] border-2 rounded-t-lg'></div>
                                <div className='aspect-square h-full bg-[#008ecc] text-[#1C2833] text-center font-bold flex justify-center items-center border-solid border-[#1c1711] border-2 rounded-b-lg'><Link to='/CompanyPage#leadership' className={`${isLarge ? "text-sm" : isMedium ? "text-xs" : isSmall ? "text-[.5rem]" : ""} `}>Leaders Thoughts</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyBlog
