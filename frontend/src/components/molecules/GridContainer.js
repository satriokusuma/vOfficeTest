import React from 'react';

const GridContainer = ({ children, className }) => {

  const classes = `grid ${className}`;

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default GridContainer;

