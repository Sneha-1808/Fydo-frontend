import { useState } from 'react';
import Banner from '../../images/king.png'
import Left from './Left'
import Right from './Right'
// import Left from './Left';
// import Right from './Right';


const Checkout = () => {
    
  return (
    <div className="lg:w-[900px] flex  mx-auto  rounded-xl bg-white transition-opacity duration-300 ease-in-out">
        <div className="flex-1 lg:w-[524px] ">
        <Left />
      </div>
      <div className="h-[550px] border-l border-gray-200 mt-32"></div>

      <div className="flex w-[304px] p-4 ">
        <Right />
      </div>
    </div>
  )
}

export default Checkout