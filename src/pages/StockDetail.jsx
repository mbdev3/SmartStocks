import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import finnHub from '../APIS/finnHub';
import StockChart from '../Components/StockChart';
import StockData from '../Components/StockData';
const date = new Date();
const currentDate = Math.floor(date.getTime() / 1000);
let oneDay = currentDate - 24 * 60 * 60;
const oneWeek = currentDate - 7 * 24 * 60 * 60;
const oneMonth = currentDate - 30 * 24 * 60 * 60;
const oneYear = currentDate - 365 * 24 * 60 * 60;
if (date.getDay() === 6) {
  oneDay = currentDate - 2 * 24 * 60 * 60;
}
if (date.getDay() === 0) {
  oneDay = currentDate - 3 * 24 * 60 * 60;
}

const formatData = (data) => {
  return data.t.map((item, index) => {
    return { x: item * 1000, y: data.c[index].toFixed(2) };
  });
};
const StockDetail = () => {
  const { symbol } = useParams();
  const [chartData, setChartData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all([
          finnHub('/stock/candle', {
            params: {
              symbol,
              from: oneDay,
              to: currentDate,
              resolution: 30,
            },
          }),
          finnHub('/stock/candle', {
            params: {
              symbol,
              from: oneWeek,
              to: currentDate,
              resolution: 60,
            },
          }),
          await finnHub('/stock/candle', {
            params: {
              symbol,
              from: oneMonth,
              to: currentDate,
              resolution: 'D',
            },
          }),
          await finnHub('/stock/candle', {
            params: {
              symbol,
              from: oneYear,
              to: currentDate,
              resolution: 'W',
            },
          }),
        ]);
        setChartData({
          day: formatData(responses[0].data),
          week: formatData(responses[1].data),
          month: formatData(responses[2].data),
          year: formatData(responses[3].data),
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [symbol]);
  return (
    <div className='container px-0 my-10 relative z-10 overflow-hidden '>
      <div className='dotted absolute -right-0 -top-0 0 -z-10'></div>
      <div className='dotted absolute -left-0 -bottom-0  -z-10'></div>
      <div className=' shadow-card dark:shadow-2xl z-10 '>
        {chartData && <StockChart chartData={chartData} symbol={symbol} />}

        <StockData symbol={symbol} />
      </div>
    </div>
  );
};

export default StockDetail;
