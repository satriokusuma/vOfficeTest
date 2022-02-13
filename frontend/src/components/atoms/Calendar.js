import React from 'react';

const Calendar = ({ date }) => {

  const month = date.toLocaleString('en-US', { month: 'short' });
  const day = date.toLocaleString('en-US', { day: '2-digit' });
  const years = date.getFullYear();

  return (
    <div className='flex text-gray-900 font-semibold text-base'>
      <span>{day}</span>
      <span className='mx-1'>{month}</span>
      <span>{years}</span>
    </div>
  );
};

export default Calendar;