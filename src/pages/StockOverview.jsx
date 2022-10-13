import React from 'react';
import AutoComplete from '../Components/AutoComplete';
import StockList from '../Components/StockList';
const StockOverview = () => {
  return (
    <div className='bg-gray-200 min-h-screen dark:bg-gray-800'>
      <div className='container'>
        <section className='px-4 mt-20 mb-10 text-left lg:text-center relative'>
          <div className='flex flex-col gap-8 max-w-screen-lg mx-auto'>
            <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800 dark:text-gray-400'>
              Smart Stock
            </h1>
            <p className='text-xl lg:text-2xl text-gray-700 dark:text-gray-500'>
              Get real time stock data with companies profiles.
            </p>
          </div>
          <div
            className='absolute top-1/2 -translate-y-1/2 lg:top-0 lg:translate-y-0 right-0 w-[20rem] lg:w-[28rem]'
            id='blob-1'>
            <svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
              <path
                fill='#9932CC'
                d='M62.2,-47.7C73.3,-35.7,70,-10.3,62.6,11.2C55.2,32.6,43.8,50,25.8,61.9C7.7,73.7,-17,80.1,-33.9,71.5C-50.8,62.9,-60,39.4,-63,17C-66,-5.3,-62.8,-26.4,-51.3,-38.5C-39.7,-50.5,-19.9,-53.5,2.8,-55.8C25.6,-58.1,51.1,-59.6,62.2,-47.7Z'
                transform='translate(100 100)'
              />
            </svg>
          </div>
          <div className='absolute top-full left-0 w-96 hidden lg:block' id='blob-2'>
            <svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
              <path
                fill='#9932CC'
                d='M38.1,-66.2C45.9,-54.3,46.4,-37.9,54.9,-23.8C63.4,-9.7,79.9,2.1,81,13.4C82.1,24.7,67.8,35.5,56.1,48.3C44.5,61,35.5,75.7,22.7,81.2C9.9,86.6,-6.7,82.9,-23.1,78.3C-39.6,73.6,-55.9,68.1,-61.9,56.3C-68,44.6,-63.8,26.6,-66.4,9.5C-69,-7.6,-78.4,-23.9,-73.6,-33.3C-68.8,-42.8,-49.9,-45.4,-35.2,-54.2C-20.6,-63,-10.3,-78,2.4,-81.7C15.1,-85.5,30.3,-78.1,38.1,-66.2Z'
                transform='translate(100 100)'
              />
            </svg>
          </div>
        </section>

        <AutoComplete />
        <StockList />
      </div>
    </div>
  );
};

export default StockOverview;
