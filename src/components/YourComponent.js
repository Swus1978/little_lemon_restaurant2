// YourComponent.js
import React from 'react';
import ConfirmedBooking from './ConfirmedBooking';

const YourComponent = () => {
  return (
    <div>
      <h1>Your Component</h1>
      {/* ... other content ... */}
      <ConfirmedBooking /> {/* Use the ConfirmedBooking component */}
    </div>
  );
};

export default YourComponent;
