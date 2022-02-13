import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Button, FormControl, FormGroup, FormLabel } from '../components/atoms';
import { login } from '../hook/actions/userActions';
import { tabTitle } from '../utils/generalFunction';


const LoginScreen = () => {

  tabTitle('Virtual Office 4.0 | Login / SignUp');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin);

  const { error, user } = userLogin;

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');;
    }
  }, [user, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <form className="bg-white justify-center rounded px-4 pt-6 pb-8 flex flex-col" onSubmit={submitHandler}>
      {error && <h4 className='text-red-800'>{error}</h4>}
      <div className='py-8'>
        <h1 className='text-2xl font-bold md:text-[40px]'>Welcome v0ffice</h1>
      </div>
      <FormGroup>
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
  );
};

export default LoginScreen;