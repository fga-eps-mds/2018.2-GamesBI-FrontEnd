import React, { Component } from 'react';

class Title extends Component {

  render() {
    return (
      <h1>  {this.props.name}</h1>

    )
  }
}

Title.defaultProps = {
  name: 'nome do jogo '
};
export default Title;
