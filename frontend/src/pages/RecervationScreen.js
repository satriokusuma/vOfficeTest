import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { listRecervation } from '../hook/actions/recervationAction';
import { tabTitle } from '../utils/generalFunction';


import { Button, Calendar, LabelRecervation, Loader, ValueRecervation } from '../components/atoms';


const RecervationScreen = () => {
  tabTitle('Virtual Office 4.0 - Recervation Room');

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const recervationData = useSelector(state => state.recervationList);
  const { loading, error, recervation } = recervationData;

  const navigate = useNavigate();

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
          <div key={item.id}>
            <div className='py-4'>
              <h1 className='text-xl text-red-950 font-bold'>Your Recervation Client</h1>
            </div>
            <div className="border border-gray-200 mb-6 mt-2"></div>
            <div className='flex flex-col'>
              <div className='overflow-hidden'>
                <img src={item.room.image ? process.env.REACT_APP_URI_ASSETS + item.room.image : '/image/noimage.jpeg'} alt={item.room.roomName} className='w-full rounded-lg h-52 md:h-80' />
              </div>
              <div>
                <div className='flex flex-col'>
                  <h2 className=' text-red-950 font-semibold text-lg py-2'>Description</h2>
                  <Calendar date={new Date(item.bookingDate)} />
                  <div className='grid grid-cols-6 gap-2 py-4 items-center'>
                    <LabelRecervation className={'col-span-2'} label={'Room Name'} />
                    <ValueRecervation className={'col-span-4'} value={item.room.roomName} />

                    <LabelRecervation className={'col-span-2'} label={'Room Cost'} />
                    <ValueRecervation className={'col-span-4'} value={item.room.costPerHour} />

                    <LabelRecervation className={'col-span-2'} label={'Location'} />
                    <ValueRecervation className={'col-span-4'} value={'Jakarta'} />

                    <LabelRecervation className={'col-span-2'} label={'Name'} />
                    <ValueRecervation className={'col-span-4 capitalize'} value={item.client.name} />

                    <LabelRecervation className={'col-span-2'} label={'Email'} />
                    <ValueRecervation className={'col-span-4'} value={item.client.email} />

                    <LabelRecervation className={'col-span-2'} label={'Phone'} />
                    <ValueRecervation className={'col-span-4'} value={item.client.phone} />

                    <LabelRecervation className={'col-span-2'} label={'Credit'} />
                    <ValueRecervation className={'col-span-4'} value={item.client.credit} />

                    <LabelRecervation className={'col-span-2'} label={'Time'} />
                    <ValueRecervation className={'col-span-4'} value={`${item.startTime} to ${item.endTime}`} />

                    <LabelRecervation className={'col-span-2'} label={'Quota'} />
                    <ValueRecervation className={'col-span-4'} value={`${item.quotaUsed} Person`} />
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