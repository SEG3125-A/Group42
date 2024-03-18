import React from 'react';

function Navigation({ onNavClick }) {
  return (
    <nav className="navigation">
      <button onClick={() => onNavClick('home')}>About</button>
      <button onClick={() => onNavClick('profile')}>My Profile</button>
      <button onClick={() => onNavClick('contact')}>Contact Us</button>
    </nav>
  );
}

export default Navigation;
