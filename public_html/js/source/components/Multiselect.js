import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Multiselect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ausgewahlt: ''
    };
  }
  
  render() {
    return <div>
      <h2>Multiselect</h2>
      <select  name="karl" onChange={this.onChg.bind(this)}>
        <option value="">---</option>
        <option value="Eins">Karl der I.</option>
        <option value="Gross">Karl der Große.</option>
        <option value="Kahl">Karl der Kahle</option>
      </select>
      { this.state.ausgewaehlt === 'Gross'
        ? (
        <span>
          <select  name="gross">
            <option value="">---</option>
            <option value="mittelgross">Karl Normalgroße</option>
            <option value="sehrgross">Karl Gigantische</option>
            <option value="mini">Karl Kleine Großw</option>
          </select>
          
          <input list="1234" />
          <datalist id="1234">
            <option value="Heinz Müller">Heinz Müller</option>
            <option value="Hermann Ott">Hermann Ott</option>
            <option value="Willy Holst">Willy Holst</option>
            <option value="Wilma Ott">Wilma Ott</option>
          </datalist>
        </span>
        )
        : null}
    </div>
  }
  
  onChg(e) {
    if (e.target.value) {
      this.setState({ausgewaehlt: e.target.value});
    }
  }
}

Multiselect.propTypes = {
  dataArray: PropTypes.arrayOf(PropTypes.string)
};

export default Multiselect;
