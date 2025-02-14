import React from 'react'

function Food() {
    return (
        <section className='mt-20 flex flex-col items-center '>
                <div className='w-[80%] rounded-4xl flex aspect-video gap-7 justify-center'>
                    <div className='relative h-[370px] aspect-video bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMEQuRTHJpQGu7k05Pqfq--bXg-x5PEC-_8g&s")] bg-center bg-cover rounded-3xl'>
                        <div className='absolute bg-black w-full h-full opacity-35 rounded-3xl'></div>
                        <div className='relative w-full h-full flex flex-col justify-end p-5 text-white'>
                            <h1 className='text-[3em] font-[800] uppercase'>Skill Development Blogs:</h1>
                            <h2 className='text-[2em] font-[700] uppercase'> Unlock Your Full Potential</h2>
                            <p> Covering topics like time management, critical thinking, emotional intelligence, and career advancement, skill development blogs help you stay competitive in an evolving world. Learn from industry leaders, access free learning resources, and discover effective techniques to enhance your expertise.</p>
                        </div>
                    </div>
                    <div className='flex flex-col overflow-y-auto gap-5 items-center h-[370px] custom-scrollbar'>
                        <div className='relative w-[250px] aspect-video bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3wp43ocTjU7pqMWmIzFTTiRX5SQWLW4pMpgjyd3E56xPnwr8282cuD5daamlIk72bS5o&usqp=CAU")] bg-cover bg-center rounded-2xl'>
                            <div className='absolute bg-black w-full h-full opacity-35 hover:opacity-15 rounded-2xl'></div>
                        </div>
                        <div className='relative w-[250px] aspect-video bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3wp43ocTjU7pqMWmIzFTTiRX5SQWLW4pMpgjyd3E56xPnwr8282cuD5daamlIk72bS5o&usqp=CAU")] bg-cover bg-center rounded-2xl'>
                            <div className='absolute bg-black w-full h-full opacity-35 hover:opacity-15 rounded-2xl'></div>
                        </div>
                        <div className='relative w-[250px] aspect-video bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3wp43ocTjU7pqMWmIzFTTiRX5SQWLW4pMpgjyd3E56xPnwr8282cuD5daamlIk72bS5o&usqp=CAU")] bg-cover bg-center rounded-2xl'>
                            <div className='absolute bg-black w-full h-full opacity-35 hover:opacity-15 rounded-2xl'></div>
                        </div>
                        <div className='relative w-[250px] aspect-video bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3wp43ocTjU7pqMWmIzFTTiRX5SQWLW4pMpgjyd3E56xPnwr8282cuD5daamlIk72bS5o&usqp=CAU")] bg-cover bg-center rounded-2xl'>
                            <div className='absolute bg-black w-full h-full opacity-35 hover:opacity-15 rounded-2xl'></div>
                        </div>
                        <div className='relative w-[250px] aspect-video bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3wp43ocTjU7pqMWmIzFTTiRX5SQWLW4pMpgjyd3E56xPnwr8282cuD5daamlIk72bS5o&usqp=CAU")] bg-cover bg-center rounded-2xl'>
                            <div className='absolute bg-black w-full h-full opacity-35 hover:opacity-15 rounded-2xl'></div>
                        </div>
                        <div className='relative w-[250px] aspect-video bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3wp43ocTjU7pqMWmIzFTTiRX5SQWLW4pMpgjyd3E56xPnwr8282cuD5daamlIk72bS5o&usqp=CAU")] bg-cover bg-center rounded-2xl'>
                            <div className='absolute bg-black w-full h-full opacity-35 hover:opacity-15 rounded-2xl'></div>
                        </div>

                    </div>
                </div>
            </section>
    )
}

export default Food
