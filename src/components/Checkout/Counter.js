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
        className="bg-[#F2F4F7] w-[32px] h-[32px] text-white px-3 py-1 rounded-[8px] text-black"
        onClick={decrement}
      >
        -
      </button>
      <span className="text-lg font-bold">{count}</span>
      <button
        className="bg-btnPrimary  w-[32px] h-[32px] text-white px-3 py-1 rounded-[8px]"
        onClick={increment}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
