import React from 'react';
import { render, screen } from '@testing-library/react';
import { PuzzleBoard } from './components/PuzzleBoard';

test('renders learn react link', () => {
  render(<PuzzleBoard />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
