import logo from './logo.svg';
import React from 'react';
import Courses from './components/Courses';
import reviews from './data';
import './App.css';

function App() {
  return (
    <div  className="flex flex-col w-[100vw] h-[100vw] justify-center item-center bg-sky-200">   
      <div className="font-bold text-center">
        <h1 className="text-5xl">Welcome Interns</h1>
        <h2 className="font-semibold text-xl text-blue-900">Quick lookup to our programs</h2>
      <div className="bg-blue-900 h-[4px] w-1/6  mt-1 mx-auto "></div>  
      <div className="bg-sky-200"><Courses reviews={reviews}></Courses></div>
     </div>
    </div>
  );
}

export default App;
