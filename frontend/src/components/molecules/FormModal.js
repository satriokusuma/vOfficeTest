import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../hook/actions/userActions';

import { FormControl, FormGroup, FormLabel, Button } from '../atoms';


const FormModal = ({ container }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin);

  const { error, userInfo } = userLogin;

  const navigate = useNavigate();


  useEffect(() => {
    if (userInfo) {
      navigate('/');;
    }
  }, [userInfo, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };


  return (
    <div className='center w-full' ref={container}>
      <form className="bg-white justify-center shadow-lg rounded-lg px-8 py-12 flex flex-col" onSubmit={submitHandler}  >
        {error && <h4 className='text-red-800'>{error}</h4>}
        <div className='pt-4 pb-6'>
          <h1 className='text-2xl font-bold md:text-[40px]'>Welcome v0ffice</h1>
        </div>
        <FormGroup >
          <FormLabel label='You Email' />
          <FormControl
            type='email'
            id='email'
            placeholder='username@example.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel label='Password' />
          <FormControl
            type='password'
            id='password'
            placeholder='******************'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <div className="flex flex-col items-center">
          <Button label={'Login'} className="bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-lg w-full transition-all" type={'submit'} />
          <Link to={`/register`} className='w-full'>
            <Button label={'Sign Up'} className="bg-gray-500 hover:bg-gray-700 text-white font-bold rounded-lg w-full my-4 transition-all" />
          </Link>

          <a className="inline-block  py-4 px-6 align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="/" >
            Forgot Password?
          </a>
        </div>
      </form >

    </div >

  );
};

export default FormModal;