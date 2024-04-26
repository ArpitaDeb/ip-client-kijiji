import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import GroupProfilePage from './pages/GroupProfilePage/GroupProfilePage';

import './styles/partials/_global.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/groups/:groupId" element={<GroupProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
