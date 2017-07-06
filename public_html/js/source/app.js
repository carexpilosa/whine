'use strict';

var headers = localStorage.getItem('headers');
//var data = localStorage.getItem('data');
var data = [];

if (! headers) {
  headers = ['Titel', 'Jahr', 'Bewertung', 'Kommentar'];
  data = [['Test', '2015', '3', 'naja']];
}

import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './components/Logo';
import Excel from './components/Excel';

ReactDOM.render(
  <div>
    <h1>
      <Logo />Willkommen zur Applikation
    </h1>
    <Excel headers={headers} initialData={data} />
  </div>,
  document.getElementById('pad')
);