import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '.';
import { Icon } from '../atoms/';
const ItemOffice = ({ room }) => {

  return (
    <Link to={`/rooms/${room.id}`} className='cursor-pointer'>
      <Card>
        <div className="relative">
          <div className="w-full rounded-2xl overflow-hidden mb-3">
            <img src={room.image ? process.env.REACT_APP_URI_ASSETS + room.image : '/image/noimage.jpeg'} alt={room.roomName} className='h-52 w-full' />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Icon className={'h-4 w-4 text-red-950'} classNameSecond={'h-4 w-4'}>
                <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
              </Icon>
              <span className="text-sm text-gray-700 ml-1">{4}</span>
            </div>
            <h4 className="text-medium capitalize text-gray-800 font-medium">{'jakarta'}</h4>
          </div>
          <div className='mt-1'>
            <h4 className="text-base capitalize text-gray-800 font-medium">{room.roomName}</h4>
            <h4 className="text-base text-gray-800 font-bold">Rp.{room.costPerHour}
              <span className='text-gray-500 font-semibold'> / hours</span>
            </h4>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ItemOffice;