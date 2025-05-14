import React from 'react';
import { render, screen } from '@testing-library/react';
import Landing from '../../components/App';

// Landing Page Tests

describe('sample app test', () => {
  it('should have a landing page header', () => {
    render(<Landing />);
    const linkElement = screen.getByText(/Welcome to StressLess/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('should have a button for creating a new user', () => {
    render(<Landing />);
    const btn = screen.getByText(/Create new user/i);
    expect(btn).toBeInTheDocument();
  });

  it("should not be getting info from backend on unit tests", () => {
    render(<Landing />);
    const defaultCounter = screen.getByText(/Backend not available/i);
    expect(defaultCounter).toBeInTheDocument();
  });
});
