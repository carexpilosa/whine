'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './components/Logo';
import Button from './components/Button';
import Suggest from './components/Suggest';
import Rating from './components/Rating';

ReactDOM.render(
  <div style={ {padding: '20px'} }>
    <h1>Komponenten entdecken</h1>
      <h2>Logo</h2>
      <div style={{display: 'inline-block', background: 'purple'}}>
        <Logo />
      </div>

      <h2>Buttons</h2>
      <div>Button mit onClick: 
        <Button onClick={() => alert('Aua')}>Klick mich</Button>
      </div>
      <div>Ein Link:
        <Button href="http://reactjs.com">Folge mir</Button>
      </div>
      <div>Eigener Klassenname:
        <Button className="custom">Ich mache nichts</Button>
      </div>
      
      <h2>Suggest</h2>
      <div>
        <Suggest options={['eins', 'zwei', 'dro', 'dreißig']} />
      </div>
      
      <h2>Rating</h2>
      <div>Kein initialer Wert: <Rating /></div>
      <div>Initialer Wert 4: <Rating defaultValue={4} /></div>
      <div>Bis zu 11: <Rating max={11} /></div>
      <div>Schreibgeschützt (3): <Rating readonly={true} defaultValue={3} /></div>
      {/* weitere Komponenten */}
  </div>,
  document.getElementById('pad')
);