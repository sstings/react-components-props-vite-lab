import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders blog header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Underreacted/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders about section', () => {
  render(<App />);
  const aboutElement = screen.getByText(/A blog about learning React/i);
  expect(aboutElement).toBeInTheDocument();
});

test('renders all blog posts', () => {
  render(<App />);
  expect(screen.getByText(/Components 101/i)).toBeInTheDocument();
  expect(screen.getByText(/React Data Flow/i)).toBeInTheDocument();
  expect(screen.getByText(/Function vs Class Components/i)).toBeInTheDocument();
});
