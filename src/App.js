import React, { useState } from 'react';
import { ReactComponent as CelcuisLogo } from './assets/celsius-logo.svg';
import { ReactComponent as KelvinLogo } from './assets/kelvin-logo.svg';
import { ReactComponent as FahrenheitLogo } from './assets/fahrenheit-logo.svg';
import { ReactComponent as RankineLogo } from './assets/rankine-logo.svg';
import './App.css';

function App() {
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
      </div>
    </div>
  );
}

export default App;
