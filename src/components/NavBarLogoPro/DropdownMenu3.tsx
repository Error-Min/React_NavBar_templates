import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBarLogoPro/NavBarLogoPro.css'

export const DropdownMenu3: React.FC = () => {
  return (
    <div className="dropdown-menu3">
      <Link to="/Droppage1" className="menu-item3">Droppage1</Link>
      <Link to="/Droppage2" className="menu-item3">Droppage2</Link>
      <Link to="/Mypage" className="menu-item3">MyPage</Link>
    </div>
  );
}