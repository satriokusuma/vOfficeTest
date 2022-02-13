import React from 'react';

const ImageGradient = () => {
  return (
    <div className="after:content-['*'] after:absolute after:h-full after:w-full after:top-0 after:left-0 after:bg-gradient-to-br from-gray-800">
      <img src='/image/hero.webp' alt="heroimage" className='h-80 md:h-96 w-full' />
    </div>
  );
};

export default ImageGradient;