import React, {Component, PropTypes} from 'react';

class Suggest extends Component {
  constructor(props) {
    super(props);
    this.state = {value: props.defaultValue};
  }

  getValue() {
    return this.state.value;
  }

  render () {
    const randomid = Math.random().toString(16).substring(2);
    return (
      <div>
        <input
          list={randomid}
          defaultValue={this.props.defaultValue}
          onChange={e => this.setState({value: e.target.value})}
          id={this.props.id} />
        <datalist id={randomid}>{
          this.props.options.map((val, idx) =>
            <option value={val} key={idx} />
          )
        }</datalist>
      </div>
    );
  }
}

Suggest.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string)
};

export default Suggest;
