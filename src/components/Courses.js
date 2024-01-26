import React from 'react';
import Cards from './Card';
import { FaHandPointRight } from "react-icons/fa6";
import { FaHandPointLeft } from "react-icons/fa6";


import {useState} from 'react';

const Courses=(props)=>{
    let reviews=props.reviews;
    const [index, setIndex]=useState(0);
    function previousCourse(){
        if(index==0){
            setIndex(0);
        
        }
        else{
            setIndex(index-1);
        }
    }
    function nextCourses(){
        if(index==(reviews.length-1)){
            setIndex(reviews.length-1)
        }
        else{
        setIndex(index+1);

        }
    }
    function submitHandler(){

    }
    return(
        <div className="mx-auto w-[85vw] md:w-[700px] flex flex-col justify-center items-center transiton-all duration-700 bg-white mt-10 p-10  hover:shadow-xl">
        <Cards reviews={reviews[index]}/>
        <div  className="flex justify-center text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto">
            <button onClick={previousCourse} className="cursor-pointer text-blue-900 hover:text-sky-400">
            <FaHandPointLeft />
            </button>
          
       
        <button onClick={nextCourses} className="cursor-pointer text-blue-900 hover:text-sky-400">
        <FaHandPointRight />
        </button>
    </div></div>
    
    
  
    
    )}
    export default Courses;



