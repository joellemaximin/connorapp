import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      
      <div id="footer">
        <div className="clearfix">
          <ul>
            <li><p>&copy; Copyright 2018</p></li>
            <li href="">Sign In</li>
            <li href="">Register</li>
            <li>{this.props.footerName}</li>
          </ul>
        </div>
      </div>
          
    );
  }
}

export default Footer;
