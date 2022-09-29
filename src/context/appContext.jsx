import { createContext, useState, useContext, useEffect } from 'react';
import finnHub from '../APIS/finnHub';

export const AppContext = createContext();
const initialList = localStorage.getItem('watchList')?.split(',') || ['GOOGL', 'MSFT', 'AMZN'];
export const AppProvider = ({ children }) => {
  const [watchList, setWatchList] = useState(initialList);
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState([]);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    localStorage.setItem('watchList', watchList);
  }, [watchList]);

  const addStock = async (stock) => {
    try {
      await finnHub.get('/quote', {
        params: {
          symbol: stock,
        },
      });
      if (watchList.indexOf(stock) === -1) {
        setWatchList([...watchList, stock]);
        setAlert(true);
        setAlertMessage([`${stock} was added successfully`, 'success']);
      } else {
        setAlert(true);
        setAlertMessage([`${stock} already exists!`, 'danger']);
      }
    } catch (error) {
      console.log(error.response.data.error);
      setAlert(true);
      setAlertMessage([error.response.data.error, 'danger']);
    }
  };
  const deleteStock = (stock) => {
    const newList = watchList.filter((item) => {
      return item !== stock;
    });
    setWatchList(newList);
  };

  const handleClick = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  return (
    <AppContext.Provider
      value={{
        watchList,
        addStock,
        deleteStock,
        setAlertMessage,
        alertMessage,
        alert,
        setAlert,
        isDark,
        handleClick,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
