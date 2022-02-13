import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { listRecervation } from '../hook/actions/recervationAction';
import { tabTitle } from '../utils/generalFunction';


import { Button, Calendar, Loader } from '../components/atoms';


const RecervationScreen = () => {
  tabTitle('Virtual Office 4.0 - Recervation Room');

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const recervationData = useSelector(state => state.recervationList);
  const { loading, error, recervation } = recervationData;

  const navigate = useNavigate();

  console.log(recervation);


  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    } else {
      dispatch(listRecervation());
    }

  }, [dispatch, navigate, userInfo,]);


  return (
    <div>
      {loading ? <Loader /> : error ? <h1>{error}</h1> :
        recervation.map((item) => (
          <div key={item.id} className=''>
            <div className='py-4'>
              <h1 className='text-xl text-red-950 font-bold'>Your Recervation Client</h1>
            </div>
            <div className="border border-gray-200 mb-6 mt-2"></div>
            <div className='flex flex-col'>
              <div className='overflow-hidden'>
                <img src={item.room.image ? process.env.REACT_APP_URI_ASSETS + item.room.image : '/image/noimage.jpeg'} alt={item.room.roomName} className='w-full rounded-lg h-52 md:h-80' />
              </div>
              <div className=''>
                <div className='flex flex-col'>
                  <h2 className=' text-red-950 font-semibold text-lg py-2'>Description</h2>
                  <Calendar date={new Date(item.bookingDate)} />
                  <div className='grid grid-cols-6 gap-2 py-4 items-center'>
                    <div className='col-span-2'>
                      <label htmlFor="">Room Name</label>
                    </div>
                    <div className='col-span-4'>
                      <h4 className='capitalize text-sm text-gray-800 font-semibold'>{item.room.roomName}</h4>
                    </div>
                    <div className='col-span-2'>
                      <label htmlFor="">Room Cost</label>
                    </div>
                    <div className='col-span-4'>
                      <h4 className='capitalize text-sm text-gray-800 font-semibold'>Rp.{item.room.costPerHour}</h4>
                    </div>
                    <div className='col-span-2'>
                      <label htmlFor="">Name</label>
                    </div>
                    <div className='col-span-4'>
                      <h4 className='capitalize text-sm text-gray-800 font-semibold'>{item.client.name}</h4>
                    </div>
                    <div className='col-span-2'>
                      <label htmlFor="">Email</label>
                    </div>
                    <div className='col-span-4'>
                      <h4 className='text-sm text-gray-800 font-semibold'>{item.client.email}</h4>
                    </div>
                    <div className='col-span-2'>
                      <label htmlFor="">Phone</label>
                    </div>
                    <div className='col-span-4'>
                      <h4 className='text-sm text-gray-800 font-semibold'>{item.client.phone}</h4>
                    </div>
                    <div className='col-span-2'>
                      <label htmlFor="">Credit</label>
                    </div>
                    <div className='col-span-4'>
                      <h4 className='capitalize text-sm text-gray-800 font-semibold'>Rp.{item.client.credit}</h4>
                    </div>

                    <div className='col-span-2'>
                      <label htmlFor="">Time</label>
                    </div>
                    <div className='col-span-4'>
                      <h4 className='text-sm text-gray-800 font-semibold'>{item.startTime} s/d {item.endTime}</h4>
                    </div>
                    <div className='col-span-2'>
                      <label htmlFor="">Quota</label>
                    </div>
                    <div className='col-span-4'>
                      <h4 className='text-sm text-gray-800 font-semibold'>{item.quotaUsed} Person</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Button className={'bg-pink-600 text-white hover:bg-red-950 transition-all text-lg font-bold rounded-lg w-full my-5'} label='Download' />
            <div className="border border-gray-200 mb-4 mt-2"></div>
          </div>
        ))
      }
    </div>
  );
};

export default RecervationScreen;;