import { Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import ErrorPage from './pages/ErrorPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path=':id' element={<DetailPage />} />
          <Route path='error' element={<ErrorPage />} />
          <Route path='not-found' element={<NotFoundPage />} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
