import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';
import Suggest from './Suggest';

class FormInput extends Component {
  getValue() {
    
  }
  
  render() {
    return (
      <span></span>
    );
  }
}

FormInput.propTypes = {
  type: PropTypes.oneOf(['year', 'suggest', 'rating', 'text', 'input']),
  id: PropTypes.string,
  options: PropTypes.array,
  defaultValue: PropTypes.any
};

export default FormInput;
