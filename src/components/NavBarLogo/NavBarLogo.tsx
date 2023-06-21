{/*이미지 타입 Logo 입니다. */}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DropdownMenu2 } from './DropdownMenu2';
import '../styles/NavBarLogo/NavBarLogo.css'
import logoImage from '../assets/logo02.png'; // 로고 이미지를 불러옵니다

export const NavBarLogo: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar2">
      <div className="logo2">
        <Link to="/" className="nav-link2">
            <img src={logoImage} alt="Logo2" className="Logo2-img" /> {/* 이미지 태그를 추가하고 src에 로고 이미지를 지정합니다 */}
        </Link> {/*TEXT Logo*/}
      </div>
      <div className="menu-item2" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
        <Link to="#" className="nav-link2">Menu</Link> {/*TEXT 메뉴*/}
        <div className="dropdown-wrapper2">
          {isOpen && <DropdownMenu2/>}
        </div>
      </div>
    </nav>
  );
}