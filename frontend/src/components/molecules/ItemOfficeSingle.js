import React, { useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Button, Icon } from '../atoms';
import { FormModal } from '.';

const ItemOfficeSingle = ({ room }) => {
  const [state, setState] = useState(false);
  const modalBody = useRef(null);


  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const handleClickOutside = (event) => {
    if (modalBody.current && !modalBody.current.contains(event.target)) {
      setState(false);
    }
  };

  const riderectBookHandler = () => {
    if (!userInfo) {
      setState(!state);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
  }, []);


  return (
    <>
      {state && < FormModal container={modalBody} value={state} />}
      {state && <div className='modalcover'></div>}
      <h2 className="text-3xl capitalize text-gray-900 font-semibold">{room.roomName}</h2>
      <div className='flex items-center justify-between py-2'>
        <div className="flex items-center">
          <Icon className={'h-4 w-4 text-red-950'} classNameSecond={'h-4 w-4'}>
            <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
          </Icon>
          <span className="text-sm text-gray-700 ml-1">{4}</span>
        </div>
        <span className="text-sm capitalize text-gray-800 font-medium">{'jakarta'}</span>
      </div>

      <div className="w-full rounded-lg overflow-hidden mt-4 mb-3">
        <img src={room.image ? process.env.REACT_APP_URI_ASSETS + room.image : '/image/noimage.jpeg'} alt={room.roomName} className='h-52 md:h-80 w-full' />
      </div>

      <div className='mt-1'>
        <h3 className="text-2xl font-semibold text-gray-800 py-2">Descriptions</h3>
        <div className="border border-gray-200 mb-4 mt-2"></div>
        <p>{room.description}</p>
        <div className="border border-gray-200 mb-2 mt-4"></div>
      </div>
      <div className='mt-1'>
        <h3 className="text-2xl font-semibold text-gray-800 py-1">Price</h3>
        <h4 className="text-2xl text-gray-800 font-extrabold py-2">Rp.{room.costPerHour}
          <span className="text-gray-500 font-semibold"> / hours</span>
        </h4>
      </div>
      <Button className={'bg-pink-600 text-white hover:bg-red-950 transition-all text-lg font-bold rounded-lg w-full my-5'} label={'Book Now'} actionsHandler={riderectBookHandler} />

    </>
  );
};

export default ItemOfficeSingle;