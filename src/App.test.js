import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('Renders <App /> component correctly', () => {
    const { getByText } = render(<App />);
    expect(screen.getByText(/Temperature Unit Conversion/i)).toBeInTheDocument();
    expect(screen.getByRole('heading')).toHaveTextContent(/Temperature Unit Conversion/);
  });

  it('Test input change correctly', () => {
    const { getByLabelText } = render(<App />);
    const input = getByLabelText('temp-input');
    fireEvent.change(input, { target: { value: '23' } });
    expect(input.value).toBe('23');
  });

  it('Test output change correctly', () => {
    const { getByLabelText } = render(<App />);
    const input = getByLabelText('temp-output');
    fireEvent.change(input, { target: { value: '100' } });
    expect(input.value).toBe('100');
  });
});