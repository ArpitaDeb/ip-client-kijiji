import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import AddNewGroup from "./pages/AddNewGroup/AddNewGroup"

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
          <Route path="/addNewGroup" element={<AddNewGroup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
