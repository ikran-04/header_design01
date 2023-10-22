import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-4/5  flex flex-col md:flex-row justify-between items-center'>
            <div className='md:w-1/3 p-5 z-10 space-y-5'>
                <p className='text-green-500 font-bold'>Plants Shop</p>
                <h1 className='text-5xl md:text-7xl leading-snug'>Home Is <span className='font-bold'>Where My <span className='rounded-md px-2 bg-green-500 text-white'>Plants</span> Are</span></h1>
                <p className='text-sm text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, sequi porro pariatur voluptate, obcaecati velit, quod quibusdam ullam dolorem facere iure laborum? Beatae laudantium iusto incidunt quibusdam ea!</p>
                <div className='flex items-center space-x-5'>
                    <button className='px-5 py-2 bg-green-500 text-white font-bold rounded-md'>Shop Plants</button>
                    <button>Watch Our Videos</button>
                </div>
            </div>
            <div className="hidden md:flex justify-center z-0">
    <img src="img.jpg" alt="" className="absolute top-0 w-1/2 md:w-1/4 h-screen object-cover"/>

    </div>
            <div className='md:w-1/4 h-full p-5 flex flex-col justify-around z-10 space-y-5 '>
                <img src="shape.png" alt="" />
                <div className='space-y-4'>
                    <h1 className='text-3xl font-bold'>Silver Photos</h1>
                    <p className='text--xl font-bold'>5 color available</p>
                    <p className='text-sm text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem soluta possimus fugit alias. Iure, doloribus!</p>
                    <button className='font-bold flex items-center'><span>Shop Now</span> 
                    <img src="/right.png" alt="" className='w-8 h-8' /></button>
                </div>
            </div>
    </div>
  )
}

export default Hero