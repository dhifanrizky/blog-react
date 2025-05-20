import { Routes, Route } from 'react-router-dom';
import './index.css'
import Blogpage from './pages/Blog';
import Detail from './pages/Detail';

const App = () => {
  return (
      <Routes>
        <Route path="/blog" element={<Blogpage />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
  );
};

export default App