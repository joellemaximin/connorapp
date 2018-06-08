import React from 'react';
import ReactDOM from 'react-dom';
import MobileH from './MobileH';

it('MobileH renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MobileH
   />, div);
  ReactDOM.unmountComponentAtNode(div);
});
