import React from 'react'

export default function Banner({displayCanvas}) {
  return (
    <div className={`bg-[url("../bg_image.jpg")] bg-cover max-w-[100%] opacity-[0.8] max-h-screen py-[60px] px-[50px]`}>
        <div className='max-w-[1520px] mx-auto text-white py-[40px] '>
          <h1 className='text-[60px] font-bold'>Wear Your Story, Every Day</h1>
          <h2 className='text-[24px] font-[500] my-[10px]'>Style That Speaks Your Personality.
          Because Every Day Deserves Great Fashion.</h2>
          <h2 className='text-[24px] font-[500] my-[10px]'>Shop Smarter, Dress Better.
          Online Fashion, Redefined.</h2>
          <div className='flex text-[23px] font-[500] gap-[50px] py-[30px]'>
            <div className='cursor-pointer text-[brown] '>Categories →</div>
            <div className='cursor-pointer text-[brown] '>New Arrivals →</div>
            <div className='cursor-pointer text-[brown] '>Our Promise →</div>
            <div className='cursor-pointer text-[brown] '>Stores Worldwide →</div>
          </div>
          <div className='flex text-[18px] font-[500] gap-[60px] py-[30px]'>
            <div className='flex flex-col'>
              <div className='text-[25px] font-[500]'>1 M+ </div>
              Products Sold 
            </div>
            <div className='flex flex-col'>
              <div className='text-[25px] font-[500]'>50,000+ </div>
              Daily Visitors 
            </div>
            <div className='flex flex-col'>
              <div className='text-[25px] font-[500]'>24/7</div>
              Support Availability
            </div>
            <div className='flex flex-col'>
              <div className='text-[25px] font-[500]'>30-Days</div>
                Return Policy
            </div>
          </div>
        </div>
    </div>
  )
}
