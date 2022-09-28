import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StockOverview from './pages/StockOverview.jsx';
import StockDetail from './pages/StockDetail';
import { AppProvider, useAppContext } from './context/appContext';
import Navbar from './Components/Navbar.jsx';

function App() {
  return (
    <div>
      <AppProvider>
        <Navbar />
        <div className='container'>
          <BrowserRouter>
            <Routes>
              <Route index element={<StockOverview />} />
              <Route path='/details/:symbol' element={<StockDetail />} />
            </Routes>
          </BrowserRouter>
        </div>
      </AppProvider>
    </div>
  );
}

export default App;
