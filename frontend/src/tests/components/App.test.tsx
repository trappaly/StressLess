import React from 'react';
import { render, screen } from '@testing-library/react';
import Landing from '../../components/App';

describe('sample app test', () => {
  it('should pass this test', () => {
    render(<Landing />);
    const linkElement = screen.getByText(/Welcome to StressLess/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('has a button for creating new user', () => {
    render(<Landing />);
    const btn = screen.getByText(/Create new user/i);
    expect(btn).toBeInTheDocument();
  });

  it("shouldn't be getting info from backend on unit tests", () => {
    render(<Landing />);
    const defaultCounter = screen.getByText(/Backend not available/i);
    expect(defaultCounter).toBeInTheDocument();
  });
});
