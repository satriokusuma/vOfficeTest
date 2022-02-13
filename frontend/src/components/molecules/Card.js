import React from 'react';

const Card = ({ children, className }) => {

  const classes = `text-sm md:text-base ${className}`;

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default Card;