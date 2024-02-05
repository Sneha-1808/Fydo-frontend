import banner from '../../images/king.png'
import rightArrow from '../../images/arrow_circle_right.png'
import CouponForm from './CouponForm';
import { useState } from 'react';


const Right= () => {
    const [showDiscount, setShowDiscount] = useState(false);

    const handleApply = () => {
        setShowDiscount((prev) => !prev); // Toggle the visibility state
      };
    return (
        <div className='flex flex-col gap-8 sm:gap-4 w-full ' >
        <div className='flex flex-col gap-4 sm:gap-2'>
        <p className='text-xl font-semibold '>Order Summary</p>
        <div className='flex flex-col gap-2'>
        <div className='flex justify-between text-secondary text-sm'>
            <p>2X General Admission</p>
            <p>₹699.00</p>
        </div>
        <div className='flex justify-between text-secondary text-sm'>
            <p>2X VIP Admission</p>
            <p>₹1299.00</p>
        </div>
        </div>

        <div className="border-b w-full bg-gray-600 mx-auto"></div>

        <div className='flex flex-col gap-2'>
        <div className='flex justify-between text-secondary text-sm'>
            <p>Sub Total</p>
            <p>₹1798.00</p>
        </div>
        <div className='flex justify-between text-secondary text-sm'>
            <p>Taxes</p>
            <p>₹179.00</p>
        </div>
        {showDiscount && <div className='flex justify-between text-secondary text-[#039855] text-sm'>
            <p className=' text-[#039855]'>Discount</p>
            <p className=' text-[#039855]'>-₹179.00</p>
        </div>}
        </div>

        <div className="border-b w-full bg-gray-600 mx-auto"></div>

        <div className='flex justify-between text-black text-2xl font-bold'>
            <p>Total</p>
            <p>₹1799.00</p>
        </div>

        </div>

        <CouponForm onApply={handleApply}/>
        <button className="bg-btnPrimary px-6 py-2 rounded-xl w-full text-white ">
        
        <div className='flex gap-2 items-center justify-center'>
            <p className='text-white font-500'> Proceed to Checkout</p>
            <img src={rightArrow}/>
        </div>
</button>
            
        </div>
    )

}

export default Right;