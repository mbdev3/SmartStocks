import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StockOverview from './pages/StockOverview.jsx';
import StockDetail from './pages/StockDetail';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<StockOverview />} />
          <Route path='/details/:symbol' element={<StockDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
