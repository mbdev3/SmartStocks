import React, { useState, useEffect } from 'react';
import finnHub from '../APIS/finnHub';
import { useAppContext } from '../context/appContext';

const AutoComplete = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const { addStock } = useAppContext();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await finnHub.get('/search', {
          params: {
            q: search,
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
  return (
    <div>
      <div className='flex justify-center my-4 flex-col items-center relative '>
        <input
          type='text'
          className='appearance-none block w-[300px] bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
          placeholder='Search..'
          id='search'
          autoComplete='off'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <ul className=' absolute w-[300px] top-full z-10 bg-white rounded-bl-lg rounded-br-lg shadow-xl py-2 cursor-pointer'>
          {results?.map((item, index) => {
            if (index <= 5) {
              return (
                <li
                  key={index}
                  className={` ${index < 5 && 'border-b'}  p-2 border-gray-400 hover:bg-gray-300`}
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
      </div>
    </div>
  );
};

export default AutoComplete;
