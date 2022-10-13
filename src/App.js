import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StockOverview from './pages/StockOverview.jsx';
import StockDetail from './pages/StockDetail';
import { AppProvider } from './context/appContext';
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';

function App() {
  return (
    <div>
      <AppProvider>
        <div className='bg-gray-200 min-h-screen dark:bg-gray-800 overflow-x-hidden'>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route index element={<StockOverview />} />
              <Route path='/details/:symbol' element={<StockDetail />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
      </AppProvider>
    </div>
  );
}

export default App;
