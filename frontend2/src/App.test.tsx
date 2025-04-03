import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('sample app test', () => {
  it('should pass this test', () => {
    render(<App />);
    const linkElement = screen.getByText(/Welcome to StressLess/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('has a button for creating new user', () => {
    render(<App />);
    const btn = screen.getByText(/Create new user/i);
    expect(btn).toBeInTheDocument();
  });

  it("shouldn't be getting info from backend on unit tests", () => {
    render(<App />);
    const defaultCounter = screen.getByText(/Backend not available/i);
    expect(defaultCounter).toBeInTheDocument();
  });
});
