import React from 'react';
import { useAppContext } from '../context/appContext';

const Navbar = () => {
  const { handleClick } = useAppContext();
  return (
    <div className='w-full bg-gray-400'>
      <button class='bg-red-500 p-3 m-3' id='test' onClick={() => handleClick()}>
        X
      </button>
    </div>
  );
};

export default Navbar;
