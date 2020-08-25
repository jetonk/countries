import '@testing-library/jest-dom';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import Main from './index';



test('Main container - Check for All Regions', () => {
  render(
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  )
  expect(screen.getByText('Africa')).toBeInTheDocument()
  expect(screen.getByText('Americas')).toBeInTheDocument()
  expect(screen.getByText('Asia')).toBeInTheDocument()
  expect(screen.getByText('Europe')).toBeInTheDocument()
  expect(screen.getByText('Oceania')).toBeInTheDocument()
});

test('Main container - Trigger action for a selected Region', () => {
  render(
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  )

  fireEvent.click(screen.getByText("Europe"), {
    target: { value: 'Europe' },
  })
});
