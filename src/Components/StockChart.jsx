import React, { useState, useEffect } from 'react';
import appexCharts from 'apexcharts';
import Chart from 'react-apexcharts';
import { useAppContext } from '../context/appContext';
const StockChart = ({ chartData, symbol }) => {
  const [dateToggle, setDateToggle] = useState('24H');
  const { day, week, month, year } = chartData;
  const { isDark } = useAppContext();
  const [stockDiff, setStockDiff] = useState();
  const determineTimeFormat = () => {
    switch (dateToggle) {
      case '24H':
        return day;
      case '1W':
        return week;
      case '1M':
        return month;
      case '1Y':
        return year;
      default:
        return day;
    }
  };
  const determineStockDiff = () => {
    switch (dateToggle) {
      case '24H':
        setStockDiff(day[day.length - 1].y - day[0].y);
        break;
      case '1W':
        setStockDiff(week[week.length - 1].y - week[0].y);
        break;
      case '1M':
        setStockDiff(month[month.length - 1].y - month[0].y);
        break;
      case '1Y':
        setStockDiff(year[year.length - 1].y - year[0].y);
        break;
      default:
        return 0;
    }
  };

  const options = {
    colors: [`${stockDiff > 0 ? '#4caf50' : stockDiff < 0 ? '#ef5259' : '#008ffb'}`],
    title: {
      text: symbol + ' Stock Price',
      align: 'center',
      style: {
        fontSize: '24px',
        color: `${isDark ? '#ced4da' : '#343a40'}`,
      },
    },
    chart: {
      id: 'stock data',
      animations: {
        speed: 1300,
      },
    },
    xaxis: {
      type: 'datetime',
      labels: {
        datetimeUTC: false,
        style: {
          colors: `${isDark ? '#ced4da' : '#343a40'}`,
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: `${isDark ? '#ced4da' : '#343a40'}`,
        },
      },
    },
    tooltip: {
      x: {
        format: 'MMM dd HH:MM',
      },
    },
    theme: {
      mode: 'light',
      palette: 'palette1',
      monochrome: {
        enabled: false,
        color: '#255aee',
        shadeTo: 'light',
        shadeIntensity: 0.65,
      },
    },
    dataLabels: {
      style: {
        colors: [`${stockDiff > 0 ? '#4caf50' : stockDiff < 0 ? '#ef5259' : '#008ffb'}`],
      },
    },
  };
  const series = [
    {
      name: symbol,
      data: determineTimeFormat(),
    },
  ];
  useEffect(() => {
    determineStockDiff();
  }, [dateToggle]);

  return (
    <div className='bg-gray-200 p-4 mt-12 dark:bg-gray-800  opacity-90 '>
      <Chart
        options={options}
        series={series}
        type='area'
        width='100%'
        height={'300px'}
        className=''
        style={{}}
      />
      <div className='flex gap-2 px-8 py-2'>
        <button
          onClick={() => setDateToggle('24H')}
          className={`p-1 text-mainColor bg-white rounded shadow font-bold w-[50px] text-center hover:bg-gray-200 ${
            dateToggle === '24H' &&
            'text-white bg-mainColor hover:bg-mainColor border-2 border-white'
          }`}>
          24H
        </button>
        <button
          onClick={() => setDateToggle('1W')}
          className={`p-1 text-mainColor bg-white rounded shadow font-bold w-[50px] text-center hover:bg-gray-200 ${
            dateToggle === '1W' &&
            'text-white bg-mainColor hover:bg-mainColor border-2 border-white'
          }`}>
          1W
        </button>
        <button
          onClick={() => setDateToggle('1M')}
          className={`p-1 text-mainColor bg-white rounded shadow font-bold w-[50px] text-center hover:bg-gray-200 ${
            dateToggle === '1M' &&
            'text-white bg-mainColor hover:bg-mainColor border-2 border-white'
          }`}>
          1M
        </button>
        <button
          onClick={() => setDateToggle('1Y')}
          className={`p-1 text-mainColor bg-white rounded shadow font-bold w-[50px] text-center hover:bg-gray-200 ${
            dateToggle === '1Y' &&
            'text-white bg-mainColor hover:bg-mainColor border-2 border-white'
          }`}>
          1Y
        </button>
      </div>
    </div>
  );
};

export default StockChart;
