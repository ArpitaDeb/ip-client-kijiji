import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import AddNewGroup from "./pages/AddNewGroup/AddNewGroup"
import GroupProfilePage from './pages/GroupProfilePage/GroupProfilePage'
import HomePage from './pages/HomePage/HomePage';


import './styles/partials/_global.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Navbar />
        </header>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/addNewGroup" element={<AddNewGroup />} />
          <Route path="/groups/:groupId" element={<GroupProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
