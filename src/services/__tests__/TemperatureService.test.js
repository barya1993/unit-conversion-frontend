import { convertTemperature } from '../TemperatureService.js';

describe('Temprature Service', () => {
  it('Converts temprature correctly', () => {
    expect(convertTemperature('Kelvin', 'Celsius', 1)).toEqual('-272.15');
    expect(convertTemperature('Kelvin', 'Fahrenheit', 1)).toEqual('-457.87');
    expect(convertTemperature('Kelvin', 'Rankine', 1)).toEqual('1.80');
    expect(convertTemperature('Kelvin', 'NA', 1)).toEqual('0.00');

    expect(convertTemperature('Celsius', 'Kelvin', 1)).toEqual('274.15');
    expect(convertTemperature('Celsius', 'Fahrenheit', 1)).toEqual('33.80');
    expect(convertTemperature('Celsius', 'Rankine', 1)).toEqual('493.47');
    expect(convertTemperature('Celsius', 'NA', 1)).toEqual('0.00');

    expect(convertTemperature('Fahrenheit', 'Kelvin', 1)).toEqual('255.93');
    expect(convertTemperature('Fahrenheit', 'Celsius', 1)).toEqual('-17.22');
    expect(convertTemperature('Fahrenheit', 'Rankine', 1)).toEqual('460.67');
    expect(convertTemperature('Fahrenheit', 'NA', 1)).toEqual('0.00');

    expect(convertTemperature('Rankine', 'Kelvin', 1)).toEqual('0.56');
    expect(convertTemperature('Rankine', 'Celsius', 1)).toEqual('-272.59');
    expect(convertTemperature('Rankine', 'Fahrenheit', 1)).toEqual('-458.67');
    expect(convertTemperature('Rankine', 'NA', 1)).toEqual('0.00');
  });
});
