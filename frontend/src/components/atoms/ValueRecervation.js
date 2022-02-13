import React from 'react';

const ValueRecervation = ({ className, value }) => {
  const classes = `${className}`;

  return (
    <div className={classes}>
      <h4 className='capitalize text-sm text-gray-800 font-semibold'>{value}</h4>
    </div>
  );
};

export default ValueRecervation;