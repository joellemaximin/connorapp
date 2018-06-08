import React, { Component } from 'react';
import './MobileH.css';

class MobileH extends Component {
  render() {
    return (
      <div className="title-bar hide-for-large">
        <div className="title-bar-left">
          <button className="menu-icon" type="button" data-open="my-info"></button>
          <span className="title-bar-right"> Connor Finance</span>

        </div>
      </div>
    );
  }
}

export default MobileH;
