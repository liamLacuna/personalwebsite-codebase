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
                <h3><a href="https://www.intel.com/">Intel Corporation</a></h3>
                <p className="info">Software Engineering Intern<span>•</span> <em className="date">June 2019 - August 2019</em></p>
                <p>
									<span>•</span> Built a Flask Microservice API under Docker Container that run within the 
                  internal network, documented using Swagger.
                </p>
							</div>
            </div>
          <div className="row item">
              <div className="twelve columns">
                <h3><a href="https://www.moodysanalytics.com/">Moody's Analytics</a></h3>
                <p className="info">Software Engineering Intern<span>•</span> <em className="date">June 2019 - August 2019</em></p>
                <p>
									<span>•</span> Built a hotfix packager generator to reduce the time required 
                  to finish hotfix requests from 15 to 5 minutes.
									<br/>
									<span>•</span> Collected and analyzed the log files produced by customer software 
                  analytics using Elasticsearch, Logstash, FileBeat, and Kibana to streamline log error 
                  identification and save hundreds of labor hours each year.
									<br/>
									<span>•</span> Created the Java Elasticsearch Client to enable report generation, saving, 
                  and search by time and logging level, enabling greater information sharing between the developers and clients.
                </p>
							</div>
            </div>
            <div className="row item">
              <div className="twelve columns">
                <h3><a href="https://www.ambii.io/">Ambii</a></h3>
                <p className="info">Front-end Engineer<span>•</span> <em className="date">Sep 2018 - May 2018</em></p>
                <p>
									<span>•</span> Enhanced the functionality and overall design of the social 
                  music jukebox platform by coding features such as navigation, user profiles,
                  and recommended songs using HTML, CSS, TypeScript and Angular 6.
									<br/>
									<span>•</span> Partnered with the UI/UX designed to rebuild the homepage, 
                  improving user experience and lead generation.
									<br/>
									<span>•</span> Streamlined testing and improved code coverage by improving
                   the test suite using Jasmine and Karma.
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
						<strong>Engineering</strong>: Coding & Architecture, Testing & Code Coverage, Software Quality, Data Structures, Algorithm
            Development, OOP, Database Management, Scalability, Performance, Reliability, Documentation.
						<br/>
						<strong>Languages</strong>:  Java, C/C++, SQL, HTML5, CSS3, JavaScript, Python.
						<br/>
						<strong>Frameworks / Technologies</strong>:  Angular 6+, React/React Native, Node.js, Express.js, Elasticsearch, Logstash,
            Kibana, Postman, AWS, Firebase, Flask.
            </p>
            <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand es6" /><em>JavaScript(ES6)</em></li>
                <li><span className="bar-expand angular" /><em>Angular</em></li>
                <li><span className="bar-expand java" /><em>Java</em></li>
                <li><span className="bar-expand python" /><em>Python</em></li>
              </ul>
            </div>
          </div> 
        </div> 
      	</section> 
      </React.Fragment>
    );
  }
};