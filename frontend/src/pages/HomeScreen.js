import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listRooms } from '../hook/actions/roomActions';
import { tabTitle } from '../utils/generalFunction';

import { GridContainer, ItemOffice } from '../components/molecules';
import { ErrorMessage, Header } from '../components/organisms';
import { Loader } from '../components/atoms';

const HomeScreen = () => {
  tabTitle('Virtual Office 4.0 - The Newest Virtual Office | vOffice ');

  const dispatch = useDispatch();

  const roomData = useSelector(state => state.roomList);
  const { loading, error, rooms } = roomData;

  useEffect(() => {
    dispatch(listRooms());
  }, [dispatch]);

  return (
    <>
      <Header />
      <section className='py-16 relative'>
        {loading ? <Loader /> : error ? <ErrorMessage label={'There is an error'} /> :
          <GridContainer className={'gap-y-6 md:gap-y-10 gap-x-6 lg:grid-cols-2'}>
            {rooms.map(room => (
              <ItemOffice key={room.id} room={room} />
            ))}
          </GridContainer>
        }

      </section>
    </>

  );
};

export default HomeScreen;
