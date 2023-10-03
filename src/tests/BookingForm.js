
// tests/BookingForm.test.js
import React from "react";
import Reservations from "../src/components/Reservations";
import { render, screen } from '@testing-library/react';



test('it selects the email field correctly', () => {
  // Render your component
  render(<Reservations />);
  
  // Select the email field by its data-testid
  const emailField = screen.getByTestId('emailField');
  const phoneField = screen.getByTestId('phoneField');
  
  // You can now interact with or make assertions about emailField
  // For example, you might want to check if it's visible or has a specific value
  expect(emailField).toBeVisible();
  expect(emailField.value).toBe('');
  expect(phoneField).toBeVisible();
  expect(phoneField.value).toBe('');
});
