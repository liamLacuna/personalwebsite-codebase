import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './covid.css';

export default class CovidHeader extends Component{
  render() {
    return (
      <React.Fragment>
        <div className="covid-header" id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#0" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
              <li><Link to="/">Home</Link></li>
              <li className="current"><Link to="/covid-19">COVID-19</Link></li>
            </ul>
          </nav> 
        </div>
      </React.Fragment>
    );
  }
};