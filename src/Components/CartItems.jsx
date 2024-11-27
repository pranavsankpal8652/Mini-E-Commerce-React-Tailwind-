import React from 'react'

export default function CartItems({imgsrc,item_name,color,qty,price}) {
  return (
    <>
            <div className='max-w-[150px] border-[0.5px] border-[#ccc] p-[10px] my-auto col-start-1'>
                  <img src={imgsrc} className='w-[100%]'></img>
            </div>
            <div className='col-span-2'>
                <div className="text-[17px] font-[500] ">{item_name}</div>
                <div className="text-[14px] text-gray-500">{color}</div>
                <div className="text-[13px] text-gray-500 py-[20px]">Qty {qty}</div>
            </div>
            <div className='flex justify-between flex-col'>
                <div className='font-bold text-[18px]'>{price}</div>
                <div className='text-[blue] text-[17px] cursor-pointer mt-[20px]'>Remove</div>
            </div>
    </>
  )
}
