import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
export default class Footer extends Component{
  render() {
    return (
      <React.Fragment>
				<footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              <li><a href="https://www.linkedin.com/in/yangliliam/"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
              <li><a href="https://github.com/liamLacuna"><FontAwesomeIcon icon={faGithub} /></a></li>
            </ul>
            <ul className="copyright">
              <li>© Copyright 2019 Yang(Liam) Li</li>
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      	</footer>
      </React.Fragment>
    );
  }
};