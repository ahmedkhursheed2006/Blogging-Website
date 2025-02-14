import React from 'react'

function BusinessBlog() {
    return (
        <div className='w-full h-[650px] bg-[url("/src/components/business.blog.bg.jpg")] bg-center bg-cover bg-no-repeat'>
            <div className=' size-[600px] rounded-[10px] float-left m-5 bg-[#aac6dd]'>
                <div><h1 className='text-6xl text-center font-bold m-1 text-[#000439]'>Business Blogs</h1></div>
                <div className='w-full h-[250px] bg-[url("https://lostrealityescape.com.au/wp-content/uploads/2023/10/silhouette-confident-businesspeople.jpg")] bg-cover bg-top border-y-2 border-black my-5'></div>
                <div><h4 className='text-[#000439] text-center underline'>Learn And Grow Here</h4></div>
                <div className='flex justify-center gap-5'>
                    <div>
                        <div className='relative size-30 aspect-square bg-[url("https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/marketing-pillar-page-marketing-overview_0.png")] bg-cover bg-center border-solid border-[#1c1711] border-2 rounded-lg'>
                            <div className="absolute bg-black opacity-10 inset-0"></div></div>
                        <div className="w-full h-full  text-center text-"><h3 className="text-lg font-bold">Marketing</h3></div>
                    </div>
                    <div>
                        <div className='relative size-30 aspect-square bg-[url("https://management30.com/wp-content/themes/m30/images/intro.png")] bg-cover bg-center border-solid border-[#1c1711] border-2 rounded-lg'>
                            <div className="absolute bg-black opacity-10 inset-0"></div></div>
                        <div className="w-full h-full  text-center text-"><h3 className="text-lg font-bold">Managament</h3></div>
                    </div><div>
                        <div className='relative size-30 aspect-square bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF9J1yXaf7ea6TM7dGD6iVe8aM5rmqMDyCkQ&s")] bg-cover bg-center border-solid border-[#1c1711] border-2 rounded-lg'>
                            <div className="absolute bg-black opacity-10 inset-0"></div></div>
                        <div className="w-full h-full  text-center text-"><h3 className="text-lg font-bold">Finance</h3></div>
                    </div><div>
                        <div className='relative size-30 aspect-square bg-[url("https://i0.wp.com/highschool.latimes.com/wp-content/uploads/2017/07/technology-jpg.png?fit=4045%2C2880&ssl=1")] bg-cover bg-center border-solid border-[#1c1711] border-2 rounded-lg'>
                            <div className="absolute bg-black opacity-10 inset-0"></div></div>
                        <div className="w-full h-full  text-center text-"><h3 className="text-lg font-bold">Technology</h3></div>
                    </div>
                </div>

            </div>
        </div>


    )
}

export default BusinessBlog
