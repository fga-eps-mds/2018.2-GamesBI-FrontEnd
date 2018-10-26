import React, { Component } from 'react';
import './index.css'
class GameInfo extends Component {

  render() {
    return (
      <div className={this.props.className}>{this.props.children}</div>
    )
  }
}

GameInfo.defaultProps = {
  name: 'informaçao',
  className: "game-info"
};
export default GameInfo;
