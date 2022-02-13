import React from 'react';

const Icon = ({ children, className, classNameSecond }) => {

  const classesFirst = `${className}`;
  const classesSecond = `${classNameSecond}`;

  return (
    <div className={classesFirst}>
      <svg
        className={classesSecond}
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 32 32"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg">
        {children}
      </svg>
    </div>
  );
};

export default Icon;