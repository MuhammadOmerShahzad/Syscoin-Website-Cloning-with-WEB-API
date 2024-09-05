import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">SYSCOIN</div>
      <nav className="nav">
        <ul>
          <li><a href="/">Wallets & Exchanges</a></li>
          <li><a href="/">Resources</a></li>
          <li><a href="/">Developer</a></li>
          <li><a href="/">News & Articles</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
