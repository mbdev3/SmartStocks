import { createContext, useState, useContext } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [watchList, setWatchList] = useState(['GOOGL', 'MSFT', 'AMZN']);

  const addStock = (stock) => {
    if (watchList.indexOf(stock) === -1) {
      setWatchList([...watchList, stock]);
    }
  };
  const deleteStock = (stock) => {
    const newList = watchList.filter((item) => {
      return item !== stock;
    });
    setWatchList(newList);
  };

  return (
    <AppContext.Provider value={{ watchList, addStock, deleteStock }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
