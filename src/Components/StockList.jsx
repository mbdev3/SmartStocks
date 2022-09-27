import React, { useState, useEffect } from 'react';
import finnHub from '../APIS/finnHub';
const tableTitles = ['name', 'last', 'chg', 'chg%', 'high', 'low', 'open', 'pclose', 'time'];
const StockList = () => {
  const [watchList, setWatchList] = useState(['GOOGL', 'MSFT', 'AMZN']);
  const [stock, setStock] = useState([]);
  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const responses = await Promise.all(
          watchList.map((item) => {
            return finnHub.get('/quote', {
              params: {
                symbol: item,
              },
            });
          })
        );
        const data = responses.map((response) => {
          return { data: response.data, symbol: response.config.params.symbol };
        });
        console.log(isMounted);
        isMounted && setStock(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    return () => (isMounted = false);
  }, []);
  useEffect(() => {
    console.log(stock);
  }, [stock]);
  return (
    <div>
      <div className='overflow-x-auto relative shadow-md sm:rounded-lg'>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              {tableTitles.map((item, index) => {
                return (
                  <th scope='col' className='py-3 px-6' key={index}>
                    {item}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {stock.map((item) => {
              const { symbol, data } = item;
              return (
                <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                  <th
                    scope='row'
                    className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                    {symbol}
                  </th>
                  {Object.values(data).map((value, index) => {
                    if (index === Object.values(data).length - 1) {
                      value = new Date(value * 1000).toLocaleTimeString('en-US');
                    }
                    return <td class='py-4 px-6'>{value}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockList;
