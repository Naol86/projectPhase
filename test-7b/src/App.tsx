import { Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path=':id' element={<DetailPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
