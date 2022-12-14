import React, { useState, useEffect } from 'react';
import finnHub from '../APIS/finnHub';

const StockData = ({ symbol }) => {
  const [results, setResults] = useState('');

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const response = await finnHub.get('/stock/profile2', {
          params: {
            symbol,
          },
        });
        if (isMounted) {
          setResults(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    return () => (isMounted = false);
  }, [symbol]);
  return (
    <div className='bg-gray-400 dark:bg-gray-900 mb-10 opacity-90'>
      {results && (
        <div className='px-4 py-8 text-gray-800  dark:text-gray-500  font-bold  '>
          <div className='flex gap-8 lg:items-center flex-col lg:flex-row'>
            <div className=''>
              <img src={results.logo} alt='' className='w-24' />
            </div>

            <div className='flex gap-4  flex-wrap  '>
              <p>
                Name :<span className='font-normal mx-1 dark:text-gray-100'>{results.name}</span>
              </p>
              <p>
                Country :
                <span className='font-normal mx-1 dark:text-gray-100'>{results.country}</span>
              </p>
              <p>
                Ticker :
                <span className='font-normal mx-1 dark:text-gray-100'>{results.ticker}</span>
              </p>

              <p>
                currency :
                <span className='font-normal mx-1 dark:text-gray-100'>{results.currency}</span>
              </p>
              <p>
                Industry :
                <span className='font-normal mx-1 dark:text-gray-100'>
                  {results.finnhubIndustry}
                </span>
              </p>
              <p>
                IPO :<span className='font-normal mx-1 dark:text-gray-100'>{results.ipo}</span>
              </p>
              <p>
                Website :
                <a
                  className='font-normal mx-1 hover:text-mainColor underline dark:text-gray-100 dark:hover:text-mainColor '
                  href={results.weburl}>
                  {results.weburl}
                </a>
              </p>
              <p>
                Exchange :
                <span className='font-normal mx-1 dark:text-gray-100'>{results.exchange}</span>
              </p>
              <p>
                Capital :
                <span className='font-normal mx-1 dark:text-gray-100'>
                  {results.marketCapitalization}
                </span>
              </p>
              <p>
                Phone :<span className='font-normal mx-1 dark:text-gray-100'>{results.phone}</span>
              </p>
            </div>
          </div>
          <div className='flex gap-4  flex-wrap '></div>
        </div>
      )}
    </div>
  );
};

export default StockData;
