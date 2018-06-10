import React, { Component } from 'react';
import './Signup.css';

class Signup extends Component {
  render() {
    return (
      <div className="Signup">
        <ul className="nav navbar-nav navbar-right">
          <button type="button" href="/signin" className="btn  btn-lg signin ">Sign In Here</button>
          <button type="button" href="/register" className="btn  btn-lg register ">Client Here</button>
        </ul>
      </div>
      
    );
  }
}

export default Signup;
