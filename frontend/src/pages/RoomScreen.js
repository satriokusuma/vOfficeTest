import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Loader } from '../components/atoms';
import { ItemOfficeSingle } from '../components/molecules';
import { listRoomDetails } from '../hook/actions/roomActions';
import { tabTitle } from '../utils/generalFunction';


const RoomScreen = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const roomDataDetails = useSelector(state => state.roomDetails);

  const { loading, error, room } = roomDataDetails;

  useEffect(() => {
    dispatch(listRoomDetails(id));
  }, [dispatch, id]);

  tabTitle(`Virtual Office 4.0 | ${room.roomName}`);

  return (
    <section className='pt-8'>
      {loading ? <Loader /> : error ? <h1>{error}</h1> :
        <ItemOfficeSingle room={room} />
      }
    </section >
  );
};

export default RoomScreen;