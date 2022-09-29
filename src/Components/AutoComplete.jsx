import React, { useState, useEffect } from 'react';
import finnHub from '../APIS/finnHub';
import { useAppContext } from '../context/appContext';

const AutoComplete = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const { addStock, alert, setAlert, setAlertMessage, alertMessage } = useAppContext();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await finnHub.get('/search', {
          params: {
            q: search,
            currency: 'USD',
          },
        });

        setResults(response.data.result);
      } catch (error) {
        console.log(error);
      }
    };
    if (search.length > 0) {
      fetchData();
    } else {
      setResults([]);
    }
  }, [search]);
  useEffect(() => {
    if (alert) {
      setTimeout(() => {
        setAlert(false);
        setAlertMessage('');
      }, 2000);
    }
  }, [alert]);
  return (
    <div onClick={() => setSearch('')}>
      <div className='flex justify-center mb-4 flex-col items-center relative '>
        <input
          type='text'
          className='appearance-none block w-[300px] bg-gray-50 dark:bg-gray-200 text-gray-700 placeholder:text-gray-600 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white opacity-90'
          placeholder='Search..'
          id='search'
          autoComplete='off'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {results.length > 0 && (
          <ul
            className=' absolute w-[300px] h-[300px] overflow-y-scroll top-full z-10 bg-white rounded-bl-lg rounded-br-lg shadow-xl pb-2 cursor-pointer'
            id='search-list'>
            {results?.map((item, index) => {
              if (index <= 10) {
                return (
                  <li
                    key={index}
                    className={` ${
                      index < 10 && 'border-b'
                    }  p-2 border-gray-400 hover:bg-gray-300`}
                    onClick={() => {
                      addStock(item.symbol);
                      setSearch('');
                    }}>
                    {item.description} ({item.symbol})
                  </li>
                );
              }
            })}
          </ul>
        )}

        {alert && (
          <div
            className={`absolute w-[300px] text-center top-full left-1/2 -translate-x-1/2 p-2 z-20 rounded-lg transition-500 ${
              alertMessage[1] === 'success'
                ? 'bg-lime-400 text-lime-800 border border-lime-700'
                : 'bg-red-300 text-red-800 border border-red-700'
            }`}>
            {alertMessage[0]}
          </div>
        )}
      </div>
    </div>
  );
};

export default AutoComplete;
