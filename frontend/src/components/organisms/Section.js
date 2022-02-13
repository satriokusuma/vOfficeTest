import React from 'react';

const Section = ({ children, className }) => {

  const classes = `relative ${className}`;

  return (
    <section className={classes}>{children}</section>
  );
};

export default Section;