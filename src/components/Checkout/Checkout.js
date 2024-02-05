import { useState } from 'react';
import Banner from '../../images/king.png'
import Left from './Left'
import Right from './Right'
// import Left from './Left';
// import Right from './Right';


const Checkout = () => {
    
  return (
    <div className=" lg:w-[900px] flex  sm:flex-col md:flex-row mx-auto  rounded-xl bg-white transition-opacity duration-300 ease-in-out overflow-y-auto  sm-gap-2 mx-8">
        <div className="flex-1 lg:w-[524px] sm:w-full ">
        <Left />
      </div>
      <div className="h-[550px] border-l border-gray-200 mt-32 hidden  "></div>

      <div className="flex w-[304px] p-4 ">
        <Right />
      </div>
    </div>
  )
}

export default Checkout