import React from 'react'

function Fitness() {
    return (
        <section className='mt-20 flex flex-col items-center '>
                <div className='w-[80%] rounded-4xl flex aspect-video gap-7 justify-center'>
                    <div className='relative h-[370px] aspect-video bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaqQyy9qfE6nV9GrS69tZz0VnRqZlsM4dkdw&s")] bg-center bg-cover rounded-3xl'>
                        <div className='absolute bg-black w-full h-full opacity-35 rounded-3xl'></div>
                        <div className='relative w-full h-full flex flex-col justify-end p-5 text-white'>
                            <h1 className='text-[3em] font-[800] uppercase'>Fitness Blogs:</h1>
                            <h2 className='text-[2em] font-[700] uppercase'>Your Ultimate Guide to Health</h2>
                            <p>Covering everything from exercise routines, nutrition tips, and mental well-being to weight loss journeys, strength training, and recovery strategies, fitness blogs serve as a roadmap for achieving personal health goals.</p>
                        </div>
                    </div>
                    <div className='flex flex-col overflow-y-auto gap-5 items-center h-[370px] custom-scrollbar'>
                        <div className='relative w-[250px] aspect-video bg-[url("https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")] bg-cover bg-center rounded-2xl'>
                            <div className='absolute bg-black w-full h-full opacity-35 hover:opacity-15 rounded-2xl'></div>
                        </div>
                        <div className='relative w-[250px] aspect-video bg-[url("https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")] bg-cover bg-center rounded-2xl'>
                            <div className='absolute bg-black w-full h-full opacity-35 hover:opacity-15 rounded-2xl'></div>
                        </div>
                        <div className='relative w-[250px] aspect-video bg-[url("https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")] bg-cover bg-center rounded-2xl'>
                            <div className='absolute bg-black w-full h-full opacity-35 hover:opacity-15 rounded-2xl'></div>
                        </div>
                        <div className='relative w-[250px] aspect-video bg-[url("https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")] bg-cover bg-center rounded-2xl'>
                            <div className='absolute bg-black w-full h-full opacity-35 hover:opacity-15 rounded-2xl'></div>
                        </div>
                        <div className='relative w-[250px] aspect-video bg-[url("https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")] bg-cover bg-center rounded-2xl'>
                            <div className='absolute bg-black w-full h-full opacity-35 hover:opacity-15 rounded-2xl'></div>
                        </div>
                        <div className='relative w-[250px] aspect-video bg-[url("https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")] bg-cover bg-center rounded-2xl'>
                            <div className='absolute bg-black w-full h-full opacity-35 hover:opacity-15 rounded-2xl'></div>
                        </div>

                    </div>
                </div>
            </section>
    )
}

export default Fitness
