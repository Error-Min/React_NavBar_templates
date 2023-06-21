{/*이미지 타입 Logo및 메뉴프로필 입니다. */}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DropdownMenu3 } from './DropdownMenu3';
import '../styles/NavBarLogoPro/NavBarLogoPro.css'
import logoImage from '../assets/logo02.png'; // 로고 이미지를 불러옵니다 test
import profileImage from '../assets/profile_picture.png'; //프로필 이미지를 불러옵니다.

export const NavBarLogoPro: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar3">
      <div className="logo3">
        <Link to="/" className="nav-link3">
            <img src={logoImage} alt="Logo3" className="Logo3-img" /> {/* 이미지 태그를 추가하고 src에 로고 이미지를 지정합니다 */}
        </Link> {/*TEXT Logo*/}
      </div>
      <div className="menu-item3" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
        <Link to="#" className="nav-link3">
        <img src={profileImage} alt="Profile3" className="Profile3-img" /> {/* 이미지 태그를 추가하고 src에 로고 이미지를 지정합니다 */}    
        </Link> {/*TEXT 메뉴*/}
        <div className="dropdown-wrapper3">
          {isOpen && <DropdownMenu3/>}
        </div>
      </div>
    </nav>
  );
}