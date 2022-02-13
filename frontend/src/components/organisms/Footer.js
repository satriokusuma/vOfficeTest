import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Icon } from '../atoms';


const Footer = () => {

  const userLogin = useSelector(state => state.userLogin);

  const { user } = userLogin;

  console.log(user);

  return (
    <nav className='flex items-center justify-center fixed bottom-0 w-full h-16 px-2 bg-white border-t border-gray-300 z-40'>
      <div className='flex items-center justify-center w-full max-w-xl mx-auto'>
        <ul className='flex items-center justify-evenly w-full'>
          <li className='relative'>
            <Link to={`/`} className='cursor-pointer'>
              <Icon className={'h-8 w-8 text-pink-700'} classNameSecond={'h-8 w-8'}>
                <path d="M32 18.451l-16-12.42-16 12.42v-5.064l16-12.42 16 12.42zM28 18v12h-8v-8h-8v8h-8v-12l12-9z"></path>
              </Icon>
            </Link>
          </li>
          <li className='relative'>
            <Icon className={'h-8 w-8 text-pink-700'} classNameSecond={'h-8 w-8'}>
              <path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>
            </Icon>
          </li>
          <li className='relative'>
            <Icon className={'h-8 w-8 text-pink-700'} classNameSecond={'h-8 w-8'}>
              <path d="M8 4v28l10-10 10 10v-28zM24 0h-20v28l2-2v-24h18z"></path>
            </Icon>
          </li>
          <li className='relative'>
            { }
            <Link to={`/login`} className='cursor-pointer'>
              <Icon className={'h-8 w-8 text-pink-700'} classNameSecond={'h-8 w-8'}>
                <path d="M18 22.082v-1.649c2.203-1.241 4-4.337 4-7.432 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h28c0-4.030-5.216-7.364-12-7.918z"></path>
              </Icon>
            </Link>
          </li>
        </ul>
      </div>

    </nav >
  );
};

export default Footer;