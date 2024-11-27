import React from 'react'
import { cat_products_Men, cat_products_Trending, cat_products_Women } from '../data/cat_data'
import Trending from './Trending'
import Men from './Men'
import Women from './Women'

export default function Categories({cat_name,cat_desc}) {
  return (
    <div className='max-w-[100%] my-[50px] p-[60px]'>
        <div className="max-w-[1520px] mx-auto">
            <div className="text-[27px] font-bold">{cat_name}</div>
            <div className="text-[20px] font-[340]">{cat_desc}</div>
            <div className="flex gap-[20px] p-[10px] ">
                {
                      cat_name.includes('Men')?
                        cat_products_Men.map((v,i)=>{
                            return(
                            <Men imgsrc={v.img} title={v.title} price={v.price} rating={v.rating}/>
                            )
                        })
                        : cat_name.includes('Women')?
                        cat_products_Women.map((v,i)=>{
                            return(
                                <Women imgsrc={v.img} title={v.title} price={v.price} rating={v.rating}/>
                            )
                        })
                        :cat_name.includes('Trending')?
                        cat_products_Trending.map((v,i)=>{
                            return(
                                <Trending imgsrc={v.img} title={v.title} price={v.price} rating={v.rating}/>
                            )
                        })
                        :null
                    
                   
                }
            </div>
        </div>

    </div>
  )
}
