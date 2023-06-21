import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DropdownMenu } from './DropdownMenu';
import '../styles/Navbar/Navbar.css'

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="nav-link">Logo</Link> {/*TEXT Logo*/}
      </div>
      <div className="menu-item" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
        <Link to="#" className="nav-link">Menu</Link> {/*TEXT 메뉴*/}
        <div className="dropdown-wrapper">
          {isOpen && <DropdownMenu />}
        </div>
      </div>
    </nav>
  );
}