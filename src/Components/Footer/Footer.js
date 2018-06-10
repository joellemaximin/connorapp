import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      
      <div id="footer">
        <div className="clearfix">
          <ul>
            <li>@copyright 2018</li>
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
