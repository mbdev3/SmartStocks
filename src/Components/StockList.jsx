import React, { useState, useEffect } from 'react';
import finnHub from '../APIS/finnHub';
const StockList = () => {
  const [watchlist, setWatchlist] = useState(['GOOGL', 'MSFT', 'AMZN']);
  const [stock, setStock] = useState('');
  useEffect(() => {
    let isMounted = false;

    const fetchData = async () => {
      try {
        const response = await finnHub.get('/quote', {
          params: {
            symbol: 'MSFT',
          },
        });
        console.log(response);

        isMounted && setStock(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    return () => (isMounted = false);
  }, []);
  return <div>StockList</div>;
};

export default StockList;
