import React from 'react';
import { GiFastForwardButton } from "react-icons/gi";
import { GiFastBackwardButton } from "react-icons/gi";


const Card=(props)=>{
    let reviews=props.reviews;
    return(
        <div className="flex flex-col md:relative">
        <div className="absolute top-[-7rem] z-[10] ">
        <img src={reviews.img} className="aspect-square rounded-full w-[140px] h[140px] z-25 "/>
        <div className="w-[140px] h-[140px] rounded-full bg-blue-900 absolute top-[-0.5rem] left-[1rem] z-[-2]"></div>
            </div> 

         <div className="text-center mt-7">
              <p className=" capitalize font-bold text-2xl " >{reviews.name} </p>                       
            </div>
               
            <div className="text-center mt-3">
              <p className="uppercase text-gray-500 text-sm text-violet-400">{reviews.benifit} </p>                       
            </div>

            <div className="mx-auto  text-violet-400 flex mt-5">
            <GiFastForwardButton />
            </div>

             <div className='text-center mt-4 text-slate-500'>
                {reviews.text}</div>
            <div className="mx-auto  text-violet-400 flex mt-5" >
            <GiFastBackwardButton />
           </div>
        
        </div>
    )
}
export default Card;