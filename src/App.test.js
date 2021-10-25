import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('expect reset button to be truthy', () => {
  render(<App />);
  const linkElement = screen.getByText(/RESET/i);
  expect(linkElement).toBeTruthy();
});

test('expect total and tip values to be $0.00 when app starts', () => {
  render(<App />);
  const totalText = screen.getByTestId('totalText');
  const tipText = screen.getByTestId('tipText');
  expect(totalText.textContent).toBe('$0.00');
  expect(tipText).toHaveTextContent('$0.00');
});

test('expect total value to be $55.00 and tip value to be $5.00 when bill = 100, tip = 10 and people = 2', () => {
  render(<App />);
  fireEvent.change(screen.getByTestId('inputBill'), { target: { value: '100' } });
  fireEvent.change(screen.getByTestId('inputPeople'), { target: { value: '2' } });
  fireEvent.click(screen.getByText('10%'));
  const bill = screen.getByTestId('totalText');
  const tip = screen.getByTestId('tipText');
  expect(bill).toHaveTextContent('$54.00');
  expect(tip).toHaveTextContent('$5.00');
});

test('expect total value to be $102.00 and tip value to be $2.00 when bill = 100, tip = 2 and people = 1', () => {
  render(<App />);
  fireEvent.change(screen.getByTestId('inputBill'), { target: { value: '100' } });
  fireEvent.change(screen.getByTestId('inputPeople'), { target: { value: '1' } });
  fireEvent.change(screen.getByTestId('percentageInput'), { target: { value: '2' } });
  const bill = screen.getByTestId('totalText');
  const tip = screen.getByTestId('tipText');
  expect(bill).toHaveTextContent('$102.00');
  expect(tip).toHaveTextContent('$2.00');
});

test('expect reset button to have the "disabledButton" class if total value equals 0', () => {
  render(<App />);
  const bill = screen.getByTestId('totalText');
  const reset = screen.getByTestId('resetButton');
  if (bill === '$0.0') {
    expect(reset).toHaveClass('disabledButton');
  }
});

test('expect reset button to have the "reset" class if total value is different than 0', () => {
  render(<App />);
  const reset = screen.getByTestId('resetButton');
  fireEvent.change(screen.getByTestId('inputBill'), { target: { value: '100' } });
  fireEvent.change(screen.getByTestId('inputPeople'), { target: { value: '1' } });
  fireEvent.change(screen.getByTestId('percentageInput'), { target: { value: '2' } });
  fireEvent.focus(screen.getByTestId('percentageInput'));
  expect(reset).toHaveClass('resetButton');
});

test('expect total value and tip value to be $0.00 when reset button is clicked', () => {
  render(<App />);
  fireEvent.change(screen.getByTestId('inputBill'), { target: { value: '100.55' } });
  fireEvent.change(screen.getByTestId('inputPeople'), { target: { value: '1' } });
  fireEvent.change(screen.getByTestId('percentageInput'), { target: { value: '2' } });
  const bill = screen.getByTestId('totalText');
  const tip = screen.getByTestId('tipText');
  fireEvent.click(screen.getByTestId('resetButton'));
  expect(bill).toHaveTextContent('$0.00');
  expect(tip).toHaveTextContent('$0.00');
});

test('expect total value to be less than $3.000.000.000', () => {
  render(<App />);
  fireEvent.change(screen.getByTestId('inputBill'), { target: { value: '3000000000' } });
  fireEvent.change(screen.getByTestId('inputPeople'), { target: { value: '1' } });
  fireEvent.change(screen.getByTestId('percentageInput'), { target: { value: '0' } });
  const bill = screen.getByTestId('totalText');
  const tip = screen.getByTestId('tipText');
  expect(bill).toHaveTextContent('$3,000,000.00');
  expect(tip).toHaveTextContent('$0.00');
});

test('expect add a text (non number) bill input value is empty', () => {
  render(<App />);
  const billField = screen.getByTestId('inputBill');
  fireEvent.change(billField, { target: { value: 'jojo' } });
  expect(billField.getAttribute('value')).toBe('');
});

test('expect when add 2.5 on number of people, return 25', () => {
  render(<App />);
  const inputPeople = screen.getByTestId('inputPeople');
  fireEvent.change(inputPeople, { target: { value: '2.5' } });
  expect(inputPeople.getAttribute('value')).toBe('25');
});
