import React, { useState } from 'react';
import Info from './Info';
import bookmark from '../../images/bookmark.png'
import lang from '../../images/lang.png'
import time from '../../images/time.png'
import family from '../../images/Family.png'
import backgroundImage from '../../images/btnBg.png'
import rightArrow from '../../images/arrow_circle_right.png'
import map from '../../images/map.png'
import arrowRed from '../../images/arrowred.png'
import king from '../../images/king2.png'
import instagram from '../../images/instagram.png'
import facebook from '../../images/Facebook.png'
import twitter from '../../images/twitter.png'
import whatsapp from '../../images/whatsapp.png'
import Checkout from '../Checkout/Checkout';

const data = [
    { text: '5 PM ONW', icon: bookmark },
    { text: '3 Hours', icon: lang },
    { text: 'Fri, 16 Jan `24', icon: time },
    { text: 'Family Friendly', icon: family },
    { text: 'Music', icon: bookmark },
    { text: 'Hindi', icon: lang},
  ];

  const buttonStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

const Right = () => {
    const [isCheckoutVisible, setCheckoutVisible] = useState(false);

  const handleGetTicket = () => {
    setCheckoutVisible(true);
  };

  const handleCloseCheckout = () => {
    setCheckoutVisible(false);
  };

  const handleCheckoutClick = (e) => {
    // Prevent event propagation to the parent, keeping the modal open
    e.stopPropagation();
  };
  return (
    <div className={`flex flex-col gap-4 text-inter ${isCheckoutVisible? 'overflow-y-auto' : 'overflow-y-hidden' }`}>
        <div className='flex flex-col right-div top gap-4'>
            <p className='lg:text-4xl md:text-3xl font-bold'>Casa Bacardi on Tour Ft. KING |<br/> Bhubaneswar</p> 
            <div className="border-b border-gray-200  mx-2"></div>
            <div className="grid grid-cols-2 gap-4 mb-2">
      {data.map((item, index) => (
        <Info key={index} text={item.text} icon={item.icon}/>
      ))}
    </div>  
    <p className='text-secondary text-sm line-height-22 tracking-wider'>#BHUBANESWAR are you ready for the BIGGEST PARTY IN TOWN?Bacardi Experiences brings #CasaBacardiOnTour back to Bhubaneswar, this January! If Maan Meri Jaan moves you, #ItsAMood! Experience <b>KING</b> perform Live for you at Dream City Resort on the 13th of January, 2024.
        Get your tickets NOW!</p>
        
        {/* for small screen */}
        <button className="bg-btnPrimary fixed bottom-0 left-0 w-full flex gap-8 px-4 py-2 bg-cover w-full text-white justify-between items-center block md:hidden z-20" onClick={handleGetTicket} style={buttonStyle}>
        <div className='flex flex-col items-start justify-start'>
            <p className='text-sm font-semibold text-[#FFA9A9] '>STARTING FROM</p>
            <p className='text-2xl font-medium'>₹699/-</p>
        </div>
        <div className='flex gap-2 items-center'>
            <p className='text-white font-500'> Get Tickets</p>
            <img src={rightArrow}/>
        </div>
</button>

{/* for large sreen */}
<button className="bg-btnPrimary flex px-6 py-2 rounded-3xl bg-cover w-full text-white justify-between items-center hidden md:flex" onClick={handleGetTicket} style={buttonStyle}>
        <div className='flex flex-col items-start justify-start'>
            <p className='text-sm font-semibold text-[#FFA9A9] '>STARTING FROM</p>
            <p className='text-4xl font-medium'>₹699/-</p>
        </div>
        <div className='flex gap-2 items-center'>
            <p className='text-white font-500'> Get Tickets</p>
            <img src={rightArrow}/>
        </div>
</button>
        </div>
        
        <div className='right-div flex flex-col gap-4'>
            <img src={map}></img>
            <div className='flex justify-between items-center  '>
                <p className='text-[0.8rem] whitespace-nowrap overflow-ellipsis'>Kalyan Mandap, Jaydev Vihar, Bh...</p>
                <div className='flex items-center'>
                    <p className='text-btnPrimary text-[0.9rem] font-medium'>Get Direction</p>
                    <img src={arrowRed}/>
                </div>
            </div>
        </div>

        <div className='right-div flex flex-col '>
          
          <div className= 'rounded-t-xl relative'>
           <img className= 'rounded-t-xl ' src={king}/>
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-gray-800 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4 text-white text-inter font-bold text-2xl">
                King
            </div>
           </div>
           
           <div className='bg-[#101828] p-4 text-white flex-col items-start rounded-b-xl'>
            <p className='text-[15px] font-400'>Rapper-performer-storyteller, KING continues a steep climb on the Indian pop music scene with his unstoppable barrage of delivering mammoth hits in recent years. In a s...</p>
            <div className='mb-2 underline'>Read More</div>

            <div className='flex gap-4 items-center'>
            <p className='font-600'>Follow King on</p>
            <div className='flex gap-2 items-center'>
                <img src={instagram}/>
                <img src={facebook}/>
            </div>
           </div>
           </div>
          
           
        </div>


        <div className='right-div flex justify-between items-center'>
         <p className='font-semibold md:text-md text:xs'>Share this Event -&gt;</p>
         <div className='flex gap-2'>
            <img src={twitter}/>
            <img src={instagram}/>
            <img src={facebook}/>
            <img src={whatsapp}/>
         </div>
        </div>

        {isCheckoutVisible && (
        <div className="fixed top-2 left-0 w-full lg:h-max-screen h-full flex items-center justify-center bg-black bg-opacity-60 overflow-y-auto transition-opacity duration-300 ease-in-out " onClick={handleCloseCheckout}>
        <div className=" z-1 bg-white p-4 rounded-xl transition-opacity duration-300 ease-in-out shadow-lg m-4" onClick={handleCheckoutClick}>
          <Checkout  />
          </div>
        </div>
      )}
      

        
    </div>
  )
}

export default Right;