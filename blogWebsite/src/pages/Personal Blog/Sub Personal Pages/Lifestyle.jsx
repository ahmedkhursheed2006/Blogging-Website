import React from 'react'

function Lifestyle() {
    return (
        <section className='mt-20 flex flex-col items-center '>
                <div className='w-[80%] rounded-4xl flex aspect-video gap-7 justify-center'>
                    <div className='relative h-[370px] aspect-video bg-[url("https://zhl.org.in/blog/wp-content/uploads/2019/01/Healthy-Lifestyle-Choices-for-People.jpg")] bg-center bg-cover rounded-3xl'>
                        <div className='absolute bg-black w-full h-full opacity-35 rounded-3xl'></div>
                        <div className='relative w-full h-full flex flex-col justify-end p-5 text-white'>
                            <h1 className='text-[3em] font-[800] uppercase'>Lifestyle Blogs:</h1>
                            <h2 className='text-[2em] font-[700] uppercase'>A Window Into Inspiration</h2>
                            <p> Covering everything from fashion, wellness, travel, and personal growth to home décor, productivity, and mindful living, these blogs offer a glimpse into the art of crafting a fulfilling life.</p>
                        </div>
                    </div>
                    <div className='flex flex-col overflow-y-auto gap-5 items-center h-[370px] custom-scrollbar'>
                        <div className='relative w-[250px] aspect-video bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWh4AoZFYM6-ucYSdXZ6HBo9lrd-7wFD6nmQ&s")]'>
                            <div className='absolute bg-black w-full h-full opacity-35 hover:opacity-15 rounded-2xl'></div>
                        </div>
                        <div className='relative w-[250px] aspect-video bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWh4AoZFYM6-ucYSdXZ6HBo9lrd-7wFD6nmQ&s")]'>
                            <div className='absolute bg-black w-full h-full opacity-35 hover:opacity-15 rounded-2xl'></div>
                        </div>
                        <div className='relative w-[250px] aspect-video bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWh4AoZFYM6-ucYSdXZ6HBo9lrd-7wFD6nmQ&s")]'>
                            <div className='absolute bg-black w-full h-full opacity-35 hover:opacity-15 rounded-2xl'></div>
                        </div>
                        <div className='relative w-[250px] aspect-video bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWh4AoZFYM6-ucYSdXZ6HBo9lrd-7wFD6nmQ&s")]'>
                            <div className='absolute bg-black w-full h-full opacity-35 hover:opacity-15 rounded-2xl'></div>
                        </div>
                        <div className='relative w-[250px] aspect-video bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWh4AoZFYM6-ucYSdXZ6HBo9lrd-7wFD6nmQ&s")]'>
                            <div className='absolute bg-black w-full h-full opacity-35 hover:opacity-15 rounded-2xl'></div>
                        </div>
                        <div className='relative w-[250px] aspect-video bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWh4AoZFYM6-ucYSdXZ6HBo9lrd-7wFD6nmQ&s")]'>
                            <div className='absolute bg-black w-full h-full opacity-35 hover:opacity-15 rounded-2xl'></div>
                        </div>

                    </div>
                </div>
            </section>
    )
}

export default Lifestyle
