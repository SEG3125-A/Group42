import React from 'react';
import { FormattedMessage } from 'react-intl';

function Navigation({ onNavClick, onLanguageChange }) {
  return (
    <nav className="navigation">
      <button onClick={() => onNavClick('home')}><FormattedMessage id="about" defaultMessage="About" /></button>
      <button onClick={() => onNavClick('profile')}><FormattedMessage id="myProfile" defaultMessage="My Profile" /></button>
      <button onClick={() => onNavClick('contact')}><FormattedMessage id="contactUs" defaultMessage="Contact Us" /></button>
      <select onChange={(e) => onLanguageChange(e.target.value)}>
        <option value="en">English</option>
        <option value="fr">Français</option>
      </select>
    </nav>
  );
}

export default Navigation;
