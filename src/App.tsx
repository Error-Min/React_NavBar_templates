import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navber/Navbar';
import Home from './components/pages/Home';
import Droppage1 from './components/pages/Droppage1';
import Droppage2 from './components/pages/Droppage2';
import Mypage from './components/pages/Mypage';
import './components/styles/Navbar/Navbar.css'

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Droppage1" element={<Droppage1 />} />
          <Route path="/Droppage2" element={<Droppage2 />} />
          <Route path="/Mypage" element={<Mypage />} />   
        </Routes>
      </div>
    </Router>
  );
}
export default App;