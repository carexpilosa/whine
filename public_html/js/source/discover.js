'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './components/Logo';
//import Button from './components/Button';

ReactDOM.render(
  <div style={ {padding: '20px'} }>
    <h1>Komponentent entdecken</h1>
    
      <h2>Logo</h2>
      <div style={{display: 'inline-block', background: 'purple'}}>
        <Logo />
      </div>
      {/* weitere Komponenten */}
  </div>,
  document.getElementById('pad')
);