import React from 'react'
import Posts from '/src/pages/Personal Blog/Dummy Data/data.jsx'
function Food() {
    return (
        <section className='mt-20 flex flex-col items-center '>
                <div className='w-[80%] rounded-4xl flex gap-7 justify-center'>
                    <div className='relative h-[370px] aspect-video bg-[url("https://lh6.googleusercontent.com/Do6DtXylFh6Hud7cm94kt2CtlKXh7DrNT4vO8KF7E2bl0W9pxhiLMxCo8NTp72CjoTeewywDwc4Aqekb7XCNJmhD2Qc2rjz4rJ_aO9ljfHHa2Y9Tk9SMvWWLpVtn0iv8sTi8k0znPGZNIAn_kGS03h8")] bg-center bg-cover rounded-3xl'>
                        <div className='absolute bg-black w-full h-full opacity-35 rounded-3xl'></div>
                        <div className='relative w-full h-full flex flex-col justify-end p-5 text-white'>
                            <h1 className='text-[3em] font-[800] uppercase'>The Art of Food Blogging:</h1>
                            <h2 className='text-[2em] font-[700] uppercase'>A Gateway to Culinary Delights</h2>
                            <p> Whether it's a passionate home cook sharing cherished family recipes,
                                a professional chef offering expert techniques,
                                or a traveler exploring the diverse tastes of global cuisine,
                                food blogs serve as a digital table where everyone is invited to feast on inspiration.</p>
                        </div>
                    </div>
                    <div className='flex flex-col overflow-x-visible overflow-y-auto gap-5 items-center w-full h-[370px] custom-scrollbar'>
                          
                        <Posts/>
                    </div>
                </div>
            </section>
    )
}

export default Food
