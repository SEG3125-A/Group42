import React, { useState } from 'react';
import { useIntl, FormattedMessage } from 'react-intl';

function InstructionGuide({ setUserInfo }) {
  const intl = useIntl(); // Hook to get the intl object
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

  // Use formatMessage to get a string for placeholders
  const firstNamePlaceholder = intl.formatMessage({ id: 'firstName', defaultMessage: 'First Name' });
  const lastNamePlaceholder = intl.formatMessage({ id: 'lastName', defaultMessage: 'Last Name' });
  const weightPlaceholder = intl.formatMessage({ id: 'weight', defaultMessage: 'Weight (kg)' });
  const heightPlaceholder = intl.formatMessage({ id: 'height', defaultMessage: 'Height (cm)' });

  return (
    <div className="instruction-guide">
      <h1><FormattedMessage id="instructionGuideTitle" /></h1>
      <form className="goal-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder={firstNamePlaceholder}
          className="input-field"
          value={localUserInfo.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder={lastNamePlaceholder}
          className="input-field"
          value={localUserInfo.lastName}
          onChange={handleChange}
        />
        <input
          type="number"
          name="weight"
          placeholder={weightPlaceholder}
          className="input-field"
          value={localUserInfo.weight}
          onChange={handleChange}
        />
        <input
          type="number"
          name="height"
          placeholder={heightPlaceholder}
          className="input-field"
          value={localUserInfo.height}
          onChange={handleChange}
        />
        <button type="submit" className="submit-button">
          <FormattedMessage id="submitGoals" />
        </button>
      </form>
    </div>
  );
}

export default InstructionGuide;
