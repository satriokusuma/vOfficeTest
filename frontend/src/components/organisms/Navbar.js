import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='flex items-center justify-center h-16 fixed w-full z-40 bg-gray-700 shadow-md'>
      <div className='w-full sm:max-w-2xl mx-auto flex items-center justify-between h-full px-8 md:px-4'>
        <div className='relative'>
          <Link to={`/`} className='cursor-pointer'>
            <img src="/logo.png" alt="logo" className='block h-14 w-full' />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;