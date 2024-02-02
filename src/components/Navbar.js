import React, { useState } from 'react';
import Logo from '../logo.svg'
import DropBar from '../dropbar.svg'

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleNavbar = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="relative w-full h-[72px] bg-[#0B0D17] px-20  "  >
    <div className='w-1440 h-[72px] py-2 flex justify-between mx-auto items-center  top-0'>
      {/* //Logo */}
      <div><img src={Logo}/></div> 

      {/* menu for small device */}
      <div className="block lg:hidden">
          <button
            onClick={toggleNavbar}
            className="text-white focus:outline-none focus:text-white"
          >
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            
              {/* {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 5h16a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2zm16 4H4a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2zm0 6H4a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 1 0 0-2H4a1 1 0 0 0 0 2zm0 6h16a1 1 0 1 1 0 2H4a1 1 0 0 1 0-2z"
                /> */}
              {/* )} */}
            </svg>
          </button>
        </div>

    {/* OPtions   */}
      <div className={`lg:flex  text-[white] space-x-8 ${isOpen ? 'block' : 'hidden'}`}>
        <p className=' flex gap-2'>Browsing events in 
        <span className='flex gap-2'>
        <img src={DropBar}/>
        <p className="text-red-500 underline-white font-semibold">
        Bhubaneshwar 
        </p>
        </span>
        </p>
        <p>Contact Us</p>
        <p>FAQs</p>

      </div>

      {/* Button */}
      <div className={`lg:flex space-x-2 mx-6  ${isOpen ? 'block' : 'hidden'}`}>
         <div>
          <button className="w-[141px] h-[40px] rounded-md p-[10px 20px] gap-10 bg-[#FE3838] text-white">
            List Your Event
          </button>
         </div>
         <div>
          <button className="w-[77px] h-[40px] rounded-md p-[10px 20px] gap-10 bg-[#FE383833] text-white">
            Login
          </button>

         </div>
      </div>
    </div>
    </div>

  );
};

export default Navbar;
