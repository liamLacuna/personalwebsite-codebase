import React, { Component } from 'react';
export default class About extends Component{
  render() {
    return (
      <React.Fragment>
        <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profile1.jpg" alt="profile" />
          </div>
          <div className="nine columns main-col">
            <h2>Hello World!</h2>
            <p>
              I am a Software Engineer have been focusing on the Front-end Development.
              <br/>
              I moved to the US in 2013 and currently finishing my undergrad in SJSU (San Jose, CA) as Software Engineering Major.
              <br/>
              My dream is to become a Full-stack Developer and open a coffee shop.
            </p>
          </div> 
        </div>
      	</section> 
      </React.Fragment>
    );
  }
};