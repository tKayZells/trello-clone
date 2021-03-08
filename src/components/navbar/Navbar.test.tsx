import React from 'react';
import ReactDOM from "react-dom";
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

test('renders trello title', () => {
  render(<Navbar />);
  const title = screen.getByText(/trello/i);
  expect(title).toBeInTheDocument();
});