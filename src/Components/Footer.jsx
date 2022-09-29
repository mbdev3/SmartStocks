import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gray-300 dark:bg-gray-900 py-6 '>
      <div className='flex flex-row gap-2 justify-center'>
        <span className='text-xl font-semibold text-gray-800 dark:text-gray-400'>By</span>
        <a href='https://www.thembdev.com/'>
          <img
            src='https://www.thembdev.com/static/media/mbdev_logo_sm.e00e77dcb86c64f73112577529660357.svg'
            alt='mbdev'
            className='w-8 hover:brightness-125 transition-500'
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
