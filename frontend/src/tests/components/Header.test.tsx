import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '@/components/Header';
import { vi } from 'vitest';

// Mock child components

// Renders a button labeled "Help".
vi.mock('@/components/Help', () => ({
  Help: () => <button>Help</button>,
}));

// Renders a button labeled "Toggle Theme".
vi.mock('@/components/ModeToggle', () => ({
  ModeToggle: () => <button>Toggle Theme</button>,
}));

// This test verifies that the Header component works without crashing.
describe('Header component', () => {
  it('renders without crashing', () => {
    // First, we render the Header component.
    render(<Header />);
    // Then, we query the Help button using its text.
    const helpBtn = screen.getByText('Help');
    // Next, we also query the ModeToggle button by its text.
    const toggleBtn = screen.getByText('Toggle Theme');

    // We assert that the help button is present in the DOM.
    expect(helpBtn).toBeInTheDocument();
    // We also assert that the ModeToggle button is present in the DOM.
    expect(toggleBtn).toBeInTheDocument();
  });

  // This second test verifies that the Help button exists.
  it('contains the Help button', () => {
    // Render the Header component.
    render(<Header />);
    // Locate the button with the accessible name "Help".
    const helpBtn = screen.getByRole('button', { name: /help/i });
    // Assert that this button exists in the DOM.
    expect(helpBtn).toBeInTheDocument();
  });

  // This third test verifies that the ModeToggle button exists.
  it('contains the ModeToggle button', () => {
    // Render the Header button.
    render(<Header />);
    // Locate the button with the accessible name "Toggle Theme".
    const toggleBtn = screen.getByRole('button', { name: /toggle theme/i });
    // Assert that this button exists in the DOM.
    expect(toggleBtn).toBeInTheDocument();
  });
});
