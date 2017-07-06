import Button from './Button';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Dialog extends Component {
  componentWillUnmount() {
    document.body.classList.remove('DialogModalOpen');
  }
  
  componentDidMount() {
    document.body.classList.add('DialogModalOpen');
  }
  
  render() {
    return (
      <div className={this.props.modal ? 'Dialog DialogModal' : 'Dialog'}>
        <div className={this.props.modal ? 'Dialog DialogWrap' : null}>
          <div className="DialogHeader">{this.props.header}</div>
          <div className="DialogBody">{this.props.children}</div>
          <div className="DialogFooter">
            {this.props.hasCancel
              ? <span
                  className="DialogDismiss"
                  onClick={this.props.onAction.bind(this, 'dismiss')}>
                  Abbruch
                </span>
              : null
            }
            <Button onClick={this.props.onAction.bind(this,
                this.props.hasCancel ? 'confirm' : 'dismiss')}>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

Dialog.propTypes = {
  header: PropTypes.string.isRequired,
  confirmLabel: PropTypes.string,
  modal: PropTypes.bool,
  onAction: PropTypes.func,
  hasCancel: PropTypes.bool
};

Dialog.defaultProps = {
  confirmLabel: 'ok',
  modal: false,
  onAction: () => {},
  hasCancel: true
};

export default Dialog;