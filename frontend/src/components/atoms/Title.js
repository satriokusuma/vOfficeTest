import React from 'react';

const Title = ({ title, descriptionTitle }) => {
  return (
    <div>
      <h1 className="text-3xl text-white font-bold md:text-5xl mb-2">{title}</h1>
      <p className=" text-sm md:text-base text-gray-50">{descriptionTitle}</p>
    </div>
  );
};

export default Title;