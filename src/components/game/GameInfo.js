import React, { Component } from 'react';
import './index.css'
class GameInfo extends Component {

  render() {
    return (
      <h2 className={this.props.className}>{this.props.children}</h2>
    )
  }
}

GameInfo.defaultProps = {
  name: 'informaçao',
  className: "game-info"
};
export default GameInfo;
