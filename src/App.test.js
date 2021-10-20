import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('expect reset button is available', () => {
  render(<App />);
  const linkElement = screen.getByText(/RESET/i);
  expect(linkElement).toBeTruthy();
});

test('expect when app starts, total and tip per person are $0.00', () => {
  render(<App />);
  const totalText = screen.getByTestId('totalText');
  const tipText = screen.getByTestId('tipText');
  expect(totalText.textContent).toBe('$0.00');
  expect(tipText).toHaveTextContent('$0.00');
});

test('expect when add bill 100, 10% tip and 2 people should be total 55', () => {
  render(<App />);
  fireEvent.change(screen.getByTestId('inputBill'), { target: { value: '100' } });
  fireEvent.change(screen.getByTestId('inputPeople'), { target: { value: '2' } });
  fireEvent.click(screen.getByText('10%'));
  const bill = screen.getByTestId('totalText');
  expect(bill).toHaveTextContent('$55.00');
});
