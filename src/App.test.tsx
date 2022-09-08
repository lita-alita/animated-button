import React from 'react';
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from './App';

jest.useFakeTimers();

test('renders button', () => {
  render(<App />);
  const linkElement = screen.getByText('Click me!');
  expect(linkElement).toBeInTheDocument();
});

test('click on button', async () => {
  render(<App />);
  fireEvent.click(screen.getByText('Click me!'));
} );

test('render animation', async () => {
  render(<App />);
  fireEvent.click(screen.getByText('Click me!'));
  expect(screen.getByRole('animation')).toBeInTheDocument();
} )

test('is animation to be after 2.9 sec', async () => {
  render(<App />);
  fireEvent.click(screen.getByText('Click me!'));
  act(() => {
    jest.advanceTimersByTime(2999);
  });
  expect(screen.getByRole('animation')).toBeInTheDocument();
} )

test('render message after 3sec animation', async () => {
  render(<App />);
  fireEvent.click(screen.getByText('Click me!'));
  act(() => {
    jest.advanceTimersByTime(3001);
  });
  expect(screen.getByText('Привет')).toBeInTheDocument();
} )
