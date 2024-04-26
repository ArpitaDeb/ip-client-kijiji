import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
<<<<<<< HEAD
import GroupPage from './pages/GroupPage/GroupPage';
=======
import AddNewGroup from "./pages/AddNewGroup/AddNewGroup"
// import GroupProfilePage from './pages/GroupProfilePage/GroupProfilePage'

>>>>>>> develop

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
<<<<<<< HEAD
          <Route path="/:groupId" element={<GroupPage />} />
=======
          <Route path="/addNewGroup" element={<AddNewGroup />} />
          {/* <Route path="/groups/:groupId" element={<GroupProfilePage />} /> */}
>>>>>>> develop
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
