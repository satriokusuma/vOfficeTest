import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Loader } from '../components/atoms';
import { ItemOfficeSingle } from '../components/molecules';
import { listRoomDetails } from '../hook/actions/roomActions';
import { tabTitle } from '../utils/generalFunction';
import { ErrorMessage } from '../components/organisms';


const RoomScreen = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const roomDataDetails = useSelector(state => state.roomDetails);

  const { loading, error, room } = roomDataDetails;

  const navigate = useNavigate();

  console.log(room);

  useEffect(() => {
    error !== `connect ECONNREFUSED ${process.env.REACT_APP_DATABASE_URI}` ? dispatch(listRoomDetails(id)) && tabTitle(`Virtual Office 4.0 | ${room.roomName}`) : tabTitle(`Virtual Office 4.0 | Not Found`);
  }, [error, id, navigate, dispatch]);



  return (
    <section className='pt-8 md:pt-0 md:-mt-16'>
      {loading ? <Loader /> : error ? <ErrorMessage label={'There is an error'} /> :
        <ItemOfficeSingle room={room} />
      }
    </section >
  );
};

export default RoomScreen;;;