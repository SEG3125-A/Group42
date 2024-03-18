import React, { useState } from 'react';
import Navigation from './components/Navigation';
import InstructionGuide from './components/InstructionGuide';
import ExplorationInterface from './components/ExplorationInterface';
import CommunityFeature from './components/CommunityFeature';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    weight: '',
    height: '',
  });
  const [view, setView] = useState('home'); 
  const handleNavClick = (section) => {
    setView(section);
  };

  const renderContent = () => {
    switch (view) {
      case 'profile':
        return (
          <div className="profile-info">
            <h1>My Profile</h1>
            <p>First Name: {userInfo.firstName}</p>
            <p>Last Name: {userInfo.lastName}</p>
            <p>Weight: {userInfo.weight}</p>
            <p>Height: {userInfo.height}</p>
          </div>
        );
      case 'contact':
        return (
          <div className="contact-info">
            <h1>Contact Us</h1>
            <p>Email: contact@healthmateonline.com</p>
            <p>Phone: (123) 456-7890</p>
            {/* Add more contact details here */}
          </div>
        );
      case 'home':
      default:
        return (
          <>
            <InstructionGuide setUserInfo={setUserInfo} />
            <ExplorationInterface />
            <CommunityFeature />
          </>
        );
    }
  };

  return (
    <div className="App">
      <Navigation onNavClick={handleNavClick} />
      <main>
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
