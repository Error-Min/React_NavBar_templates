import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBarLogo/NavBarLogo.css'

export const DropdownMenu2: React.FC = () => {
  return (
    <div className="dropdown-menu2">
      <Link to="/Droppage1" className="menu-item2">Droppage1</Link>
      <Link to="/Droppage2" className="menu-item2">Droppage2</Link>
      <Link to="/Mypage" className="menu-item2">MyPage</Link>
    </div>
  );
}