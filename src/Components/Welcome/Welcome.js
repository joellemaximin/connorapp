import React, { Component } from 'react';
import './Welcome';

class Welcome extends Component {
  render() {
    return (
      <div className="welcome">
        <ul className="nav navbar-nav navbar-right">
          <li><a type="button" href="/signup" className="btn btn-lg signup ">Sign In Here</a></li>
          <li><a type="button" href="/login" className="btn btn-lg login ">Client Here</a></li>
        </ul>
      </div>
      
    );
  }
}

export default Welcome;
