'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './components/Logo';
import Button from './components/Button';
import Suggest from './components/Suggest';
import Rating from './components/Rating';
import FormInput from './components/FormInput';
import Actions from './components/Actions';
import Form from './components/Form';
import Dialog from './components/Dialog';

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
    
    {/*<h2>Form inputs</h2>
    <table><tbody>
      <tr>
        <td>Klassisch</td>
        <td><FormInput /></td>
      </tr>
      <tr>
        <td>Vorbefüllt</td>
        <td><FormInput defaultValue="wie ein Standardwert" /></td>
      </tr>
      <tr>
        <td>Jahr</td>
        <td><FormInput type="year" /></td>
      </tr>
      <tr>
        <td>Bewertung</td>
        <td><FormInput type="rating" defaultValue={4} /></td>
      </tr>
      <tr>
        <td>Vorschläge</td>
        <td><FormInput
          type="suggest"
          options={['rot', 'grün', 'blau']}
          defaultValue="grün" />
        </td>
      </tr>
      <tr>
        <td>Klassische Textarea</td>
        <td><FormInput type="text" /></td>
      </tr>
    </tbody></table>
    <Form
      fields={[
        {label: 'Bewertung', type: 'rating', id: 'rateme'},
        {label: 'Grüße', id: 'freetext'}
      ]}
      initialData ={ {rateme: 4, freetext: 'Hallo'} } />*/}
    
    <h2>Actions</h2>
    <div><Actions onAction={function (type) {alert(type)} } /></div>
    
    <Dialog
      header="Standardbeispiel"
      onAction={type => alert(type)}>
    </Dialog>
    
    <Dialog
      header="keine Abbruch, eigener Button"
      hasCancel={false}
      confirmLabel="Was auch immer"
      onAction={type => alert(type)}>
      <Button>Ein Button</Button>
    </Dialog>
      
    {/* weitere Komponenten */}
    
  </div>,
  document.getElementById('pad')
);
