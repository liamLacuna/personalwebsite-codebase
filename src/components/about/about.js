import React, { Component } from 'react';
export default class About extends Component{
  render() {
    return (
      <React.Fragment>
        <section id="about">
        <div className="row">
          <div className="nine columns main-col">
            <h2>Hello World!</h2>
            <p>
              This is Liam Li, a Software Engineer have been focusing on the Front-end Development.
              <br/>
              I moved to the US in 2013 and currently finishing my undergrad in SJSU (San Jose, CA) as Software Engineering Major.
              <br/>
              My dream is to become a Full-stack Developer and open a coffee shop.
            </p>
            <p>Free free to download the resume in PDF format, or email me if you have any questions</p>
          </div> 
          <div className="three columns download">
            <a href="https://drive.google.com/file/d/1JQa5eucQJlzPEqCtLgGN79m-zu8b7f6d/view?usp=sharing" 
            className="button" download>Resume PDF
            </a>
            <a href="mailto:liamli1996@gmail.com" className="button email">Email Me</a>
          </div>
        </div>
      	</section> 
      </React.Fragment>
    );
  }
};