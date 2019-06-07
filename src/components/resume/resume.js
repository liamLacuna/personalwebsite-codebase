import React, { Component } from 'react';
export default class Resume extends Component{
  render() {
    return (
      <React.Fragment>
        <section id="resume">

        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>San Jose State University</h3>
                <p className="info">B.S. Degree in Software Engineering <span>•</span> <em className="date">Dec 2020</em></p>
                <p>
									Relevant Course: Advanced C++ Programming, Oriented-Object Design, 
									Introduction to Data Structure, Algorithm and Data Structure, Operation System, 
									Software Quality Testing
                </p>
              </div>
            </div>
          </div>
        </div> 

        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3><a href="https://www.ambii.io/">Ambii</a></h3>
                <p className="info">Web Developer<span>•</span> <em className="date">Sep 2018 - May 2018</em></p>
                <p>
									<span>•</span> Enhanced the capability and design of the social music jukebox platform 
									by coding features such as navigation, user profile and recommended songs using HTML, CSS, TypeScript and Angular 6.
									<br/>
									<span>•</span> Worked closely with the team to improve the testing suite using Jasmine and Karma.
									<br/>
									<span>•</span> Shortened development update cycle to release important features faster.
									<br/>
									<span>•</span> Improved user experience by rebuilding the homepage alongside the UI/UX designer
                </p>
							</div>
            </div>
            <div className="row item">
              <div className="twelve columns">
                <h3>Freelancer</h3>
                <p className="info">Freelance Web Developer<span>•</span> <em className="date">May 2018 - August 2018</em></p>
                <p>
									<span>•</span> Developed 3 custom websites for clients using HTML, CSS, JavaScript and Bootstrap framework.
									<br/>
									<span>•</span> Troubleshoot issues with reading W3C documentation and Chrome Development tools.
									<br/>
									<span>•</span> Delivered customer-satisfied product with animated, mobile-friendly website.
                </p>
              </div>
            </div> 
          </div> 
        </div> 

        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <p>
						<strong>Programming Language</strong>: Java, C++, HTML/HTML5, CSS/CSS3, JavaScript (ES6) 
						<br/>
						<strong>Web</strong>: Angular 6+, ReactJS, NodeJS, TypeScript, RESTful API, HTTP/HTTPS, MySQL 
						<br/>
						<strong>Tools</strong>: NPM, Git, GitHub, Gulp, Microsoft Office, Chrome/Firefox Developer Tools
            </p>
            <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand css" /><em>CSS/CSS3</em></li>
                <li><span className="bar-expand html5" /><em>HTML/HTML5</em></li>
                <li><span className="bar-expand es6" /><em>JavaScript(ES6)</em></li>
                <li><span className="bar-expand angular" /><em>Angular</em></li>
                <li><span className="bar-expand java" /><em>Java</em></li>
              </ul>
            </div>
          </div> 
        </div> 
      	</section> 
      </React.Fragment>
    );
  }
};