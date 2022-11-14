import React, { useState } from 'react';
import { ReactComponent as CelcuisLogo } from './assets/celsius-logo.svg';
import { ReactComponent as KelvinLogo } from './assets/kelvin-logo.svg';
import { ReactComponent as FahrenheitLogo } from './assets/fahrenheit-logo.svg';
import { ReactComponent as RankineLogo } from './assets/rankine-logo.svg';
import './App.css';

function App() {
  const [valueIn, setValueIn] = useState('');
  const [valueOut, setValueOut] = useState('');

  const isSubmitEnabled = valueIn.length > 0 && valueOut.length > 0;

  const onChangeValueIn = (event) => {
    const value = event.currentTarget.value;
    setValueIn(value);
  };

  const onChangeValueOut = (event) => {
    const value = event.currentTarget.value;
    setValueOut(value);
  };

  const onSubmitForm = (event) => {
    if (event !== undefined && event.preventDefault) {
      event.preventDefault();
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
                type="text"
                placeholder="Enter temperature value"
                value={valueIn}
                onChange={onChangeValueIn}
              />
            </div>
            <label className="form-label">Converted Value</label>
            <div className="text-input-container">
              <input
                aria-label="temp-output"
                className="input"
                type="text"
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
      </div>
    </div>
  );
}

export default App;
