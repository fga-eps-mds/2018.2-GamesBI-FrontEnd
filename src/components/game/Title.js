import React, { Component } from 'react';
import './index.css'
class Title extends Component {

  render() {
    return (
      <h1 className={this.props.className}>{this.props.children}</h1>
    )
  }
}

Title.defaultProps = {
  name: 'nome do jogo ',
  className: "game"
};
export default Title;
