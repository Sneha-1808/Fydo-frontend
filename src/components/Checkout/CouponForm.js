import React, { useState } from 'react';

const CouponForm = ({onApply}) => {
  const [applied, setApplied] = useState(false);

  const handleApply = () => {
    if(applied){
        setApplied(false);
        onApply();
    }else{
        setApplied(true); 
        onApply();
    }
     
  };
  
  return (
    <div className={`flex items-center justify-between pl-2 h-[2.5rem] rounded-xl bg-[#F2F4F7] rounded  transition-colors ${applied? 'bg-[#D1FADF]': ''}`}>
      {/* <input
        type="text"
        placeholder={applied?'New 20':"Enter your coupon code here"}
        className={`border p-2`}
      /> */}
      <div><p className='text-xs text-secondary'>{applied?'New 20':"Enter your coupon code here"}</p></div>
      <div>
      <button
        onClick={handleApply}
        className={`bg-gray-500 text-white p-2 rounded  transition-colors ${
          applied ? 'bg-green-500 ' : ''
        }`}
      >
        {applied ? 'Applied ✔' : 'Apply'}
      </button>
      </div>
    </div>
  );
};

export default CouponForm;
