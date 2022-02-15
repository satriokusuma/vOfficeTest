import React from 'react';

const ErrorMessage = ({ label }) => {
  return (
    <div className='relative flex flex-col items-center'>
      <div>
        <h1 className='text-[32px] font-bold text-gray-700 text-center'>{label}</h1>
      </div>
      <div>
        <span className='text-sm font-medium text-gray-500 text-center'>Please wait or reload page, thanks for patience</span>
      </div>
    </div>
  );
};

export default ErrorMessage;