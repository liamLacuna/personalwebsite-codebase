import React from 'react'
import CovidHeader from './covid-header';
import Stats from './stats';
import CountrySelector from './countrySelector';

import './covid.css';

function Covid() {
  return (
    <div className="wrapper">
      <CovidHeader/>
      <Stats/>
      {/* <CountrySelector/> */}
    </div>
  );
}

export default Covid;
