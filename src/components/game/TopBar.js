import React, { Component } from 'react';
import Title from './Title'
class TopBar extends Component {

  render() {
    return (

          <div className="container-fluid">
            <div className="header-body">
            <div className="row">
            <img src={this.props.mainImage} className="imagem" alt="test" />
            <Title>{this.props.paramArray}</Title>
            </div>
            </div>
          </div>

    )
  }
}


export default TopBar;
