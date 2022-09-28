import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StockOverview from './pages/StockOverview.jsx';
import StockDetail from './pages/StockDetail';
import { AppProvider } from './context/appContext';
function App() {
  return (
    <div>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<StockOverview />} />
            <Route path='/details/:symbol' element={<StockDetail />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </div>
  );
}

export default App;
