import React from 'react'
import { Link } from 'react-router'
function CompanyBlog() {
    return (
        <div className='flex w-full h-[650px] bg-[url("https://www.luxcellence.com/wp-content/uploads/Luxcellence-slider-background-1-1-1024x684.jpg")] bg-cover justify-end bg-center'>
            <div className='flex float-right w-[70%] h-[600px] m-8 bg-[#A1BFC7] rounded-[10px]'>
                <div className='h-full w-[30%]'>
                    <div className='h-3/10 w-full rounded-tl-[10px] bg-[#F4A261]'>
                    <Link to="/CompanyPage" className='hover:underline'>
                        <h1 className='font-bold text-[50px] py-4 px-1'>COMPANY</h1>
                        <h2 className='font-bold text-[45px] px-1'>Blogs</h2>
                    </Link>
                    </div>
                    <div className='h-7/10 w-full rounded-bl-[10px] bg-[#1C2833] text-[#F8F9FA] text-[15px] text-left'>
                        <p className='px-2'>Discover the latest trends, insights, and expert advice tailored just for you.
                            <div className='relative left-[15%] h-[200px] w-[180px] rounded-[10px] bg-[url("https://assets.entrepreneur.com/content/3x2/2000/20190402203550-GettyImages-694983385.jpeg")] bg-center bg-cover'></div>
                            Whether you're looking for inspiration, practical tips, or in-depth knowledge, our carefully curated blogs cover everything from lifestyle and fitness to home decor and beyond.
                        </p>
                    </div>
                </div>
                <div className='h-full w-3/4'>
                    <div className='w-full h-1/2 rounded-tr-[10px] bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0g0UPeJQssG00CWMIMKlSm1LVEalPqsUxNnkWv-zEZFhnBpByHbU9qNSGXqydeQLnqV0&usqp=CAU")] bg-right bg-cover '></div>
                    <div className='w-full h-1/2'>
                        <div><h4 className='text-[#1C2833] text-center text-lg font-bold'>Get Your Insights Here</h4></div>
                        <div className='flex justify-center gap-2'>
                            <div>
                                <div className='relative size-30 bg-[url("https://images.vexels.com/content/73872/preview/latest-business-news-on-laptop-bdef05.png")] bg-cover bg-center border-solid border-[#1c1711] border-2 rounded-t-lg'></div>
                                <div className='size-30 bg-[#57beff] text-[#1C2833] text-center font-bold flex flex-col justify-center border-solid border-[#1c1711] border-2 rounded-b-lg'><Link to='/CompanyPage#news'>News And Updates</Link></div>
                            </div>
                            <div>
                                <div className='relative size-30 bg-[url("https://cdni.iconscout.com/illustration/premium/thumb/insights-from-market-research-analyst-illustration-download-in-svg-png-gif-file-formats--marketing-idea-analysis-business-growth-pack-illustrations-10136281.png?f=webp")] bg-cover bg-center border-solid border-[#1c1711] border-2 rounded-t-lg'></div>
                                <div className='size-30  text-[#1C2833] text-center font-bold flex flex-col justify-center border-solid border-[#1c1711] border-2 rounded-b-lg'><Link to='/CompanyPage#insights'>Industry Insights</Link></div>
                            </div>
                            <div>
                                <div className='relative size-30 bg-[url("https://static.vecteezy.com/system/resources/previews/034/956/343/non_2x/customers-giving-likes-stars-and-positive-feedback-client-satisfaction-concept-customer-review-evaluation-illustration-for-landing-page-web-banner-mobile-app-infographic-vector.jpg")] bg-cover bg-center border-solid border-[#1c1711] border-2 rounded-t-lg'></div>
                                <div className='size-30 bg-[#ffffff] text-[#1C2833] text-center font-bold flex flex-col justify-center border-solid border-[#1c1711] border-2 rounded-b-lg'><Link to='/CompanyPage#reviews'>Customer Reviews</Link></div>
                            </div>
                            <div>
                                <div className='relative size-30 bg-[url("https://media.istockphoto.com/id/1165498595/vector/instructions-manual-concept-user-manual-flat-style-vector-concept-people-surrounded-with.jpg?s=612x612&w=0&k=20&c=ws_Zvj_HRaqNC-dAKdx5dkPO97nQdvjYRynFqzy2f0Q=")] bg-cover bg-center border-solid border-[#1c1711] border-2 rounded-t-lg'></div>
                                <div className='size-30 bg-[#e3c6fe] text-[#1C2833] text-center font-bold flex flex-col justify-center border-solid border-[#1c1711] border-2 rounded-b-lg'><Link to='/CompanyPage#guides'>Guides</Link></div>
                            </div>
                            <div>
                                <div className='relative size-30 bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSET8xFx61S3P1HC_lLZBYeTjDyN89qAojO9w&s")] bg-cover bg-center border-solid border-[#1c1711] border-2 rounded-t-lg'></div>
                                <div className='size-30 bg-[#008ecc] text-[#1C2833] text-center font-bold flex flex-col justify-center border-solid border-[#1c1711] border-2 rounded-b-lg'><Link to='/CompanyPage#leadership'>Leaders Thoughts</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyBlog
