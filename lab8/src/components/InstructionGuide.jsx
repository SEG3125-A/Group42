import React, { useState } from 'react';

function InstructionGuide({ setUserInfo }) {
  const [localUserInfo, setLocalUserInfo] = useState({
    firstName: '',
    lastName: '',
    weight: '',
    height: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalUserInfo({ ...localUserInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInfo(localUserInfo);
  };

  return (
    <div className="instruction-guide">
      <form className="goal-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          className="input-field"
          value={localUserInfo.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          className="input-field"
          value={localUserInfo.lastName}
          onChange={handleChange}
        />
        <input
          type="number"
          name="weight"
          placeholder="Weight (kg)"
          className="input-field"
          value={localUserInfo.weight}
          onChange={handleChange}
        />
        <input
          type="number"
          name="height"
          placeholder="Height (cm)"
          className="input-field"
          value={localUserInfo.height}
          onChange={handleChange}
        />
        <button type="submit" className="submit-button">Submit Goals</button>
      </form>
    </div>
  );
}

export default InstructionGuide;
