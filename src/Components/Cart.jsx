import React from 'react'
import CartItems from './CartItems'
import { cart_items } from '../data/cat_data'

export default function Cart({displayCanvas,toggleOffcanvas,setDisplayCanvas}) {
    const hideCanvasviabg=(event)=>{
        if(event.target.id=='offCanvasbg')
        {
           {
               setDisplayCanvas(false)
           }
       }
       document.body.style.overflow=""
      
   }
  return (
    <div className={`w-[100%] bg-[rgba(0,0,0,${displayCanvas?'0.4':'0'})] fixed min-h-screen top-0 duration-[0.5s] z-[${(!displayCanvas)?'-100':'1000'}]`} onClick={hideCanvasviabg} id='offCanvasbg'>
     <div className={`w-[30%] bg-white absolute right-[${displayCanvas?'0%':'-40%'}] top-[0] duration-[1s] min-h-screen border-2 border-gray-200 shadow-xl flex justify-between flex-col`} >
        <div className="grid grid-cols-3 gap-[20px] p-[20px] items-center">
            <h2 className='text-[23px] mb-[5px] font-bold col-span-2'>Shopping cart</h2>
            <div className="text-[25px] col-start-5 cursor-pointer" onClick={toggleOffcanvas}> &#10005;</div>

            {
                cart_items.map((v,i)=>{
                    return(
                        <>
                        <CartItems imgsrc={v.img} item_name={v.title} color={v.color} qty={v.qty} price={v.price}/>

                        {i<cart_items.length-1
                            &&  <hr className='w-[100%] border-5 border-gray-300 col-span-3 my-[10px]' ></hr>
                            

                        
                        }
                        </>
                    )
                    
                })
            }
           

          
        </div>
       
            <div className='p-[20px] grid grid-cols-2'>
                <hr className='w-[100%] border-5 border-gray-300  col-span-2 my-[20px]' ></hr>
                <div className='text-[19px] font-[600]'>Subtotal</div>
                <div className='text-[18px] font-[600] justify-self-end'>$262.00</div>
                <div className='text-[15px] font-[300]' >Shipping and taxes calculated at checkout.</div>
                <button className='bg-indigo-600 p-[8px_20px] text-white text-[19px] col-start-1 col-span-2 rounded-[10px] my-[20px]'>Checkout</button>
                <div className='col-span-2 justify-self-center'>
                    <span>or</span>
                    <a href='#' onClick={toggleOffcanvas}  className='text-[15px] text-indigo-600 font-semibold mx-[5px]'>Continue Shopping →</a>

                </div>
            </div>
    </div>
</div>
  )
}
