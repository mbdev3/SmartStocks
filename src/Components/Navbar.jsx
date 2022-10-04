import React from 'react';
import { useAppContext } from '../context/appContext';
import logo from '../assets/ipo.png';
import { BsMoonFill, BsSun } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const { handleClick, isDark } = useAppContext();
  const navigate = useNavigate();
  return (
    <div className='w-full bg-gray-200 border-b border-gray-600 py-4 dark:bg-gray-800 '>
      <div className='container flex items-center justify-between'>
        {' '}
        <div className='flex items-center gap-32'>
          <div
            className='flex items-center gap-2 cursor-pointer'
            href={'#'}
            onClick={() => navigate('/')}>
            {' '}
            <img src={logo} alt='logo' className='w-10' />
            <p className='font-extrabold text-3xl' id='logo-text'>
              SmartStock
            </p>
          </div>
          <div>
            {/* <ul className='text-gray-800 hover:text-mainColor dark:hover:text-mainColor dark:text-gray-200 font-semibold tracking-wider text-xl '>
              <li onClick={() => navigate('/')}>Home</li>
            </ul> */}
          </div>
        </div>
        <div className='flex items-center'>
          <button className='text-2xl outline-none' id='test' onClick={() => handleClick()}>
            {isDark ? (
              <BsMoonFill className='text-gray-200' />
            ) : (
              <BsSun className='text-gray-800' />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
