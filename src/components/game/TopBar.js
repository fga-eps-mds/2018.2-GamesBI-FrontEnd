import React, { Component } from 'react';
import Title from './Title'
class TopBar extends Component {

  render() {
    return (
        <div className="header bg-gradient-custom pb-8 pt-5 pt-md-8">
          <div className="container-fluid">
            <div className="header-body">
            <div className="row">
            <img src={this.props.mainImage} className="imagem" alt="test" />
            <Title  >{this.props.paramArray}</Title>
            </div>
            </div>
          </div>
        </div>
    )
  }
}


export default TopBar;
