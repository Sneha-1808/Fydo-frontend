import { useState } from 'react';
import Banner from '../../images/king.png'
import Left from './Left'
import Right from './Right'
// import Left from './Left';
// import Right from './Right';


const Checkout = () => {
    
  return (
    <div className=" lg:w-[900px] flex-row max-h-auto sm:flex-col md:flex-row mx-auto overflow-y-auto p-2 md:p-6 rounded-xl bg-white transition-opacity duration-300 ease-in-out overflow-y-auto ">
       {/* FOr mobile screen */}
       <div className="flex flex-col gap-4 items-left justify-center md:hidden">
            <div className='flex gap-2 '>
            <p className='flex-1 lg:text-3xl md:text-xl sm:text-md font-bold '>Casa Bacardi on Tour Ft. KING | Bhubaneswar</p>
            <img className="flex-1 h-[75px] md:hidden rounded-xl w-full"src={Banner}/>
            </div>

            <div className="border-b lg:w-[304px] sm:w-full bg-gray-600 mx-auto"></div>
            <p className="text-secondary  tracking-wide">Dream City Resort • Friday, 16th January 2024 • 5 PM Onwards</p>
            </div>
          {/* for  laptop screen */}
            <div className="flex gap-6 items-center justify-between md:flex hidden">
            <div className='flex flex-1 flex-col gap-4 items-start'>
            <p className='flex lg:text-3xl md:text-xl  font-bold '>Casa Bacardi on Tour Ft. KING | Bhubaneswar</p>
            <div className="border-b lg:w-[304px] sm:w-full bg-gray-600 mx-auto"></div>
            <p className="text-secondary text-lg tracking-wide">Dream City Resort • Friday, 16th January 2024 • 5 PM Onwards</p>
            </div>
            <div className='flex flex-1 items-center justify-center'>
            <img className="w-[309px] h-[167px] hidden md:flex rounded-xl "src={Banner}/>
            </div>
            </div>

            
        <div className='flex md:flex-row flex-col md:gap-8'>
        <div className="flex lg:w-[524px] w-full ">
        <Left />
      </div>
      <div className="h-[550px] border-l border-gray-200 mt-32 hidden  "></div>

      <div className="flex md:w-[350px] w-full items-center justify-center">
        <Right />
      </div>
        </div>
    </div>
  )
}

export default Checkout