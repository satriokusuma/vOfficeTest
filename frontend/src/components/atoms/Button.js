import React from 'react';

const Button = ({ label, className, type, actionsHandler }) => {

  const classes = `py-3 px-4 ${className}`;

  return (
    <button className={classes} type={type ? type : 'button'} onClick={actionsHandler}>{label}</button>
  );
};

export default Button;