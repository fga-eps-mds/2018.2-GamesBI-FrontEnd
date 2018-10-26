import React, { Component } from 'react';
import '../index.css'
class Button extends Component {

  render() {
    return (
      <button className={this.props.className} type="button" onClick={this.props.onClick}>{this.props.children}</button>
    )
  }
}

Button.defaultProps = {
  className: "btn btn-primary"
};
export default Button;
