import React from 'react';
import { ImageGradient, Title } from '../atoms';


const Header = () => {
  return (
    <header className='w-full mt-8 rounded-2xl overflow-hidden relative '>
      <ImageGradient />
      <div className="flex flex-col absolute top-0 left-0 w-full h-full py-6 px-4 md:py-20 md:px-8 justify-evenly">
        <Title title='VIRTUAL OFFICE 4.0' descriptionTitle='Ubah cara berbisnis Anda bersama vOffice, Penyedia Layanan Kantor Bersama #1 di Indonesia' />
        <div>
          <span className='text-white text-xs md:text-sm'>#2021MakeItHappen</span>
        </div>
      </div>
    </header>
  );
};

export default Header;