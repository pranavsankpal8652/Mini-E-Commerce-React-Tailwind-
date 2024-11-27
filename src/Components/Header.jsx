import React, { useState } from 'react'
import down_arrow from '../assets/images/download.png'
import Cart from './Cart'

export default function Header() {
    
    var [displayCanvas,setDisplayCanvas]= useState(false)

    var [displaySubMenu,setdisplaySubMenu]= useState(false)  

    const toggleOffcanvas=()=>{
        setDisplayCanvas(!displayCanvas)
        document.body.style.overflow=!displayCanvas?"hidden":""
    }
    
    const toggleSubMenu=()=>{
        setdisplaySubMenu(!displaySubMenu)
    }

  return (
    <>
    <div className={`max-w-[100%] bg-white sticky top-0 shadow-lg ${(!displayCanvas)?'duration-[1s]':''} z-[100]`}> 
        <div className='max-w-[1500px]  mx-auto p-[15px] text-[17px] font-[600] grid grid-cols-10 items-center relative'>
            <div className='col-start-4 col-end-6 flex gap-[50px] p-[20px] '>
                <div className='cursor-pointer flex items-center gap-[5px] ' onClick={toggleSubMenu}>
                    <div>Product</div>
                    <img src={down_arrow}></img>
                    <div className={`submenu absolute top-[100%] bg-white p-[20px] w-[30%] rounded-[10px] ${displaySubMenu?'':'hidden'} shadow-2xl`}>
                        <ul className='flex flex-col gap-[20px] p-[16px] text-[16px]'>
                            <li>Electronics</li>
                            <li>Jewelery</li>
                            <li>Men's Clothing</li>
                            <li>Women's Clothing</li>
                            <li className='py-[5px] px-[25px]'>View All Products -&gt;</li>
                        </ul>
                    </div>
                </div>
                <div className='cursor-pointer'>Features</div>
                <div className='cursor-pointer'>Marketplace</div>
                <div className='cursor-pointer'> Company</div>
            </div>
            <div className='col-start-10 col-end-10  p-[10px] cursor-pointer' onClick={toggleOffcanvas}>
                    View Cart
            </div>
        </div>
    </div>
    <Cart displayCanvas={displayCanvas} toggleOffcanvas={toggleOffcanvas} setDisplayCanvas={setDisplayCanvas} />
    </>

  )
}
