import React from 'react'

function Food() {
    return (
        <section className='mt-20 flex flex-col items-center '>
                <div className='w-[80%] rounded-4xl flex aspect-video gap-7 justify-center'>
                    <div className='relative h-[370px] aspect-video bg-[url("https://www.globitalmarketing.com/sg/wp-content/uploads/2021/07/df453we.png")] bg-center bg-cover rounded-3xl'>
                        <div className='absolute bg-black w-full h-full opacity-35 rounded-3xl'></div>
                        <div className='relative w-full h-full flex flex-col justify-end p-5 text-white'>
                            <h1 className='text-[3em] font-[800] uppercase'>Customer Reviews:</h1>
                            <h2 className='text-[2em] font-[700] uppercase'>Real Experiences, Real Impact</h2>
                            <p> real-life testimonials, case studies, and user experiences to build trust and credibility. By showcasing customer success stories and feedback, these blogs help potential buyers make informed decisions while reinforcing brand reputation.</p>
                        </div>
                    </div>
                    <div className='flex flex-col overflow-y-auto gap-5 items-center h-[370px] custom-scrollbar'>
                        <div className='relative w-[250px] aspect-video bg-[url("https://www.itseeze-windsor.co.uk/_webedit/cached-images/1151-0-0-1244-10000-6672-1920.jpg")] bg-cover bg-center rounded-2xl'>
                            <div className='absolute bg-black w-full h-full opacity-35 hover:opacity-15 rounded-2xl'></div>
                        </div>
                        <div className='relative w-[250px] aspect-video bg-[url("https://www.itseeze-windsor.co.uk/_webedit/cached-images/1151-0-0-1244-10000-6672-1920.jpg")] bg-cover bg-center rounded-2xl'>
                            <div className='absolute bg-black w-full h-full opacity-35 hover:opacity-15 rounded-2xl'></div>
                        </div>
                        <div className='relative w-[250px] aspect-video bg-[url("https://www.itseeze-windsor.co.uk/_webedit/cached-images/1151-0-0-1244-10000-6672-1920.jpg")] bg-cover bg-center rounded-2xl'>
                            <div className='absolute bg-black w-full h-full opacity-35 hover:opacity-15 rounded-2xl'></div>
                        </div>
                        <div className='relative w-[250px] aspect-video bg-[url("https://www.itseeze-windsor.co.uk/_webedit/cached-images/1151-0-0-1244-10000-6672-1920.jpg")] bg-cover bg-center rounded-2xl'>
                            <div className='absolute bg-black w-full h-full opacity-35 hover:opacity-15 rounded-2xl'></div>
                        </div>
                        <div className='relative w-[250px] aspect-video bg-[url("https://www.itseeze-windsor.co.uk/_webedit/cached-images/1151-0-0-1244-10000-6672-1920.jpg")] bg-cover bg-center rounded-2xl'>
                            <div className='absolute bg-black w-full h-full opacity-35 hover:opacity-15 rounded-2xl'></div>
                        </div>
                        <div className='relative w-[250px] aspect-video bg-[url("https://www.itseeze-windsor.co.uk/_webedit/cached-images/1151-0-0-1244-10000-6672-1920.jpg")] bg-cover bg-center rounded-2xl'>
                            <div className='absolute bg-black w-full h-full opacity-35 hover:opacity-15 rounded-2xl'></div>
                        </div>

                    </div>
                </div>
            </section>
    )
}

export default Food
