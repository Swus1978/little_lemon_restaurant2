import React from 'react';

const Field = ({ emailError, phoneError }) => {
  return (
    <div className={`Field ${phoneError ? 'error' : ''}`} data-testid="phoneField">
      {/* Other content */}
      {phoneError && <div data-testid="Field-error">Phone error message</div>}
    </div>
  );
};

export default Field;
