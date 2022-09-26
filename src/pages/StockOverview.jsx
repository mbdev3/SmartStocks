import React from 'react';
import AutoComplete from '../Components/AutoComplete';
import StockList from '../Components/StockList';
const StockOverview = () => {
  return (
    <div>
      <AutoComplete />
      <StockList />
    </div>
  );
};

export default StockOverview;
