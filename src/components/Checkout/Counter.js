import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(2);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <button
        className="bg-[#F2F4F7] md:w-[32px] md:h-[32px] w-[25px] h-[25px] text-black px-3 py-1 rounded-[5px] text-[#000] items-center flex justify-center"
        onClick={decrement}
      >
        -
      </button>
      <span className="text-lg font-bold">{count}</span>
      <button
        className="bg-btnPrimary  md:w-[32px] md:h-[32px] w-[25px] h-[25px] text-white px-3 py-1 rounded-[5px] items-center flex justify-center"
        onClick={increment}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
