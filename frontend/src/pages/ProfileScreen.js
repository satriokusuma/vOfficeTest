import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserDetails } from '../hook/actions/userActions';

const ProfileScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;


  const userDetails = useSelector((state) => state.userDetails);
  const { user } = userDetails;

  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    } else {
      dispatch(getUserDetails('me'));
      if (!user) {
        dispatch(getUserDetails('me'));
      }
    }

  }, [dispatch, navigate, userInfo, user]);

  useEffect(() => {
    if (user === { data: [] }) {
      setName('');
      setEmail('');
    } else {
      // setEmail(user.data[0].email);
      // setEmail(user.data[0].name);
    }
  }, []);



  return (
    <div>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <button>Logout</button>
    </div>
  );
};

export default ProfileScreen;