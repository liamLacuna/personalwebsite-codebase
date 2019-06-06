import React, { Component } from 'react';
export default class Header extends Component{
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#0" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
              <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
              <li><a className="smoothscroll" href="#about">About</a></li>
              <li><a className="smoothscroll" href="#resume">Resume</a></li>
              <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            </ul>
          </nav> 
          <div className="row banner">
            {/* <img className="profile-pic" src="images/profile1.jpg" alt="profile" /> */}
            <div className="banner-text">
              <h1 className="responsive-headline"> {resumeData.name} </h1>
              <h3> {resumeData.role} </h3>
              <hr />
              <ul className="social">
                <li><a href="https://www.linkedin.com/in/yangliliam/"><i className="fa fa-linkedin" /></a></li>
                <li><a href="https://github.com/liamLacuna"><i className="fa fa-github" /></a></li>
              </ul>
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
          </p>
        </header>
      </React.Fragment>
    );
  }
};