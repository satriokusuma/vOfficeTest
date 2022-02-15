import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { listRecervation } from '../hook/actions/recervationAction';
import { tabTitle } from '../utils/generalFunction';


import { Loader } from '../components/atoms';
import { ErrorMessage, RecervationList } from '../components/organisms';


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

      {loading ? <Loader /> : error ? <ErrorMessage label={'There is an error'} /> :
        <div className='py-4'>
          <h1 className='text-xl text-red-950 font-bold py-4'>Your Recervation Client</h1>
          {recervation.map((item) => (
            <RecervationList item={item} key={item.id} />
          ))}
        </div>
      }
    </div>
  );
};

export default RecervationScreen;;