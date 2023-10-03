
import { render, screen } from '@testing-library/react';
import Field from '../components/Field';

test('element with error class has correct styling', () => {
  render(<Field phoneError={true} />);

  const elementWithErrorClass = screen.getByTestId('phoneField');
  expect(elementWithErrorClass).toHaveClass('error');
});
