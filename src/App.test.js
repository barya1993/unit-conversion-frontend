import { render, fireEvent } from '@testing-library/react';
import App from './App';

jest.mock('./services/TempratureService', () => ({
  convertTemperature: () => '100'
}));

describe('<App />', () => {
  it('Renders <App /> component correctly', () => {
    const { getByText, getByRole } = render(<App />);
    expect(getByText(/Temperature Unit Conversion/i)).toBeInTheDocument();
    expect(getByRole('heading')).toHaveTextContent(/Temperature Unit Conversion/);
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

  it('Test input radio button correctly', () => {
    const { getByTestId } = render(<App />);
    const radio = getByTestId('tempInRankine');
    expect(radio.checked).toEqual(false);
    fireEvent.click(radio);
    expect(radio.checked).toEqual(true);
  });

  it('Test output radio button correctly', () => {
    const { getByTestId } = render(<App />);
    const radio = getByTestId('tempOutKelvin');
    expect(radio.checked).toEqual(true);
  });

  it('Test submit button disable correctly', () => {
    const { getByTestId, getByRole, getByLabelText } = render(<App />);
    const input = getByLabelText('temp-input');
    const output = getByLabelText('temp-output');
    const button = getByRole('button', { name: 'Submit' });
    const answer = getByTestId('answer');

    expect(button).toBeDisabled();
    fireEvent.change(input, { target: { value: '100' } });
    fireEvent.change(output, { target: { value: '100' } });
    expect(button).toBeEnabled();
    fireEvent.click(button);
    expect(answer).toBeInTheDocument();
    fireEvent.change(input, { target: { value: '0' } });
    fireEvent.change(output, { target: { value: '100' } });
    fireEvent.click(button);
    expect(answer).toBeInTheDocument();
  });
});
