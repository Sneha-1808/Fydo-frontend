// MyComponent.jsx
import React from 'react';

const Info = ({ text, icon }) => {
  return (
    <div className="flex gap-2 items-center">
      <div className=''>
        <img src={icon}/>
      </div>
      <p className='text-secondary font-medium'>{text}</p>
    </div>
  );
};

export default Info;
