import React from 'react';

const LabelRecervation = ({ label, className }) => {

  const classes = `${className}`;

  return (
    <div className={classes}>
      <label>{label}</label>
    </div>
  );
};

export default LabelRecervation;