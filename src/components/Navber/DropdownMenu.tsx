import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar/Navbar.css'

export const DropdownMenu: React.FC = () => {
  return (
    <div className="dropdown-menu">
      <Link to="/Droppage1" className="menu-item">Droppage1</Link>
      <Link to="/Droppage2" className="menu-item">Droppage2</Link>
      <Link to="/Mypage" className="menu-item">MyPage</Link>
    </div>
  );
}