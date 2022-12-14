export function convertTemperature(from, to, input) {
  let answer = 0;
  const inputVal = parseInt(input, 10);
  if (from === 'Celsius') {
    switch (to) {
      case 'Fahrenheit':
        answer = (inputVal * 9) / 5 + 32;
        break;
      case 'Kelvin':
        answer = inputVal + 273.15;
        break;
      case 'Rankine':
        answer = (inputVal * 9) / 5 + 491.67;
        break;
      default:
    }
  } else if (from === 'Fahrenheit') {
    switch (to) {
      case 'Celsius':
        answer = ((inputVal - 32) * 5) / 9;
        break;
      case 'Kelvin':
        answer = ((inputVal - 32) * 5) / 9 + 273.15;
        break;
      case 'Rankine':
        answer = inputVal + 459.67;
        break;
      default:
    }
  } else if (from === 'Kelvin') {
    switch (to) {
      case 'Celsius':
        answer = inputVal - 273.15;
        break;
      case 'Fahrenheit':
        answer = ((inputVal - 273.15) * 9) / 5 + 32;
        break;
      case 'Rankine':
        answer = inputVal * 1.8;
        break;
      default:
    }
  } else if (from === 'Rankine') {
    switch (to) {
      case 'Celsius':
        answer = ((inputVal - 491.67) * 5) / 9;
        break;
      case 'Fahrenheit':
        answer = inputVal - 459.67;
        break;
      case 'Kelvin':
        answer = (inputVal * 5) / 9;
        break;
      default:
    }
  }

  return answer.toFixed(2);
}
