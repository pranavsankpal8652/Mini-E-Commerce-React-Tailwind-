import React from 'react'


export default function Women({imgsrc,title,price,rating}) {
  return (
    <div className='basis-[25%] shadow-lg p-[20px] relative group cursor-pointer max-h-fit'>
        <div className='overflow-hidden'>
        <img src={imgsrc} className='scale-[1.3]'></img>
        </div>
        <div className='flex flex-wrap gap-[5px] items-center'>
            <div className='basis-[86%] text-[20px]'>
            {title}
            </div>
            <div  className='basis-[86%] font-bold text-[18px]'> 
            {price}
            </div>
            <div className='text-gray-500 text-[17px]'>
            Women's Jewels
            </div>
            <div className='font-bold text-[20px]'>
            *{rating}
            </div>
        </div>
        <div className="bg-[rgba(255,255,255,0.3)] absolute top-0 left-0 h-[100%] w-[100%] hidden group-hover:block">
        </div>
    </div>
  )
}