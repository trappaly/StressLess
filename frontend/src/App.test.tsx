import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('sample app test', () => {
  it('should pass this test', () => {
    render(<App />);
    const linkElement = screen.getByText(/Welcome to StressLess/i);
    expect(linkElement).toBeInTheDocument();
  });
});
