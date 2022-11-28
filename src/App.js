import React, { useState } from 'react';
import { ReactComponent as CelcuisLogo } from './assets/celsius-logo.svg';
import { ReactComponent as KelvinLogo } from './assets/kelvin-logo.svg';
import { ReactComponent as FahrenheitLogo } from './assets/fahrenheit-logo.svg';
import { ReactComponent as RankineLogo } from './assets/rankine-logo.svg';
import './App.css';
import { convertTemperature } from './services/TemperatureService';

function App() {
  const tempratureUnits = ['Kelvin', 'Celsius', 'Fahrenheit', 'Rankine'];

  const [tempIn, setTempIn] = useState('Kelvin');
  const [tempOut, setTempOut] = useState('Kelvin');
  const [valueIn, setValueIn] = useState('');
  const [valueOut, setValueOut] = useState('');
  const [answer, setAnswer] = useState('');

  const isSubmitEnabled = valueIn.length > 0 && valueOut.length > 0;

  const onChangeValueIn = (event) => {
    const value = event.currentTarget.value;
    setValueIn(value);
  };

  const handleTempInChange = (event) => {
    const value = event.target.value;
    setTempIn(value);
  };

  const handleTempOutChange = (event) => {
    const value = event.target.value;
    setTempOut(value);
  };

  const onChangeValueOut = (event) => {
    const value = event.currentTarget.value;
    setValueOut(value);
  };

  const onSubmitForm = (event) => {
    if (event !== undefined && event.preventDefault) {
      event.preventDefault();
    }
    const convertedTemp = convertTemperature(tempIn, tempOut, valueIn);
    console.log(convertedTemp);
    if (parseFloat(valueOut, 10) === parseFloat(convertedTemp, 10)) {
      setAnswer('Correct');
    } else {
      setAnswer('Incorrect');
    }
  };

  return (
    <div className="app">
      <div className="page-wrapper">
        <div className="wrapper">
          <div className="logo-wrapper">
            <KelvinLogo className="kelvin" />
            <CelcuisLogo className="logo" />
            <FahrenheitLogo className="fahrenheit" />
            <RankineLogo className="rankine" />
          </div>
          <header>
            <h1 className="title">Temperature Unit Conversion</h1>
          </header>
        </div>
        <p className="subtitle">Enter value, unit, conversion unit and output value:</p>
        <div className="form-container">
          <form className="form" onSubmit={onSubmitForm}>
            <label className="form-label">Temprature Value</label>
            <div className="text-input-container">
              <input
                aria-label="temp-input"
                className="input"
                type="number"
                placeholder="Enter temperature value"
                value={valueIn}
                onChange={onChangeValueIn}
              />
            </div>
            <label className="form-label">Temprature unit</label>
            <div className="radio-container">
              {tempratureUnits.map((tempratureUnit) => (
                <div className="radio" key={`tempIn${tempratureUnit}`}>
                  <input
                    type="radio"
                    id={`tempIn${tempratureUnit}`}
                    onChange={handleTempInChange}
                    value={tempratureUnit}
                    checked={tempIn === tempratureUnit}
                    data-testid={`tempIn${tempratureUnit}`}
                  />
                  <label htmlFor={`tempIn${tempratureUnit}`}>{tempratureUnit}</label>
                </div>
              ))}
            </div>
            <label className="form-label">Conversion Unit</label>
            <div className="radio-container">
              {tempratureUnits.map((tempratureUnit) => (
                <div className="radio" key={`tempOut${tempratureUnit}`}>
                  <input
                    type="radio"
                    id={`tempOut${tempratureUnit}`}
                    onChange={handleTempOutChange}
                    value={tempratureUnit}
                    checked={tempOut === tempratureUnit}
                    data-testid={`tempOut${tempratureUnit}`}
                  />
                  <label htmlFor={`tempOut${tempratureUnit}`}>{tempratureUnit}</label>
                </div>
              ))}
            </div>
            <label className="form-label">Converted Value</label>
            <div className="text-input-container">
              <input
                aria-label="temp-output"
                className="input"
                type="number"
                placeholder="Enter temperature value"
                value={valueOut}
                onChange={onChangeValueOut}
              />
            </div>
            <div>
              <input disabled={!isSubmitEnabled} className="input" type="submit" value="Submit" />
            </div>
          </form>
        </div>
        <div data-testid="answer">
          {answer !== '' ? <div data-testid="answer">{answer}</div> : <></>}
        </div>
      </div>
    </div>
  );
}

export default App;
