import React, { Component } from 'react';

class SideCard extends Component {
  render() {
    return (

      <div className="card shadow">
        <div className="card-header bg-transparent">
          <div className="row align-items-center">
            <div className="col">
              <h2 className="mb-0">{this.props.title}</h2>
            </div>
          </div>
        </div>
        <div className="card-body2">
          <div className="chart ">
          {this.props.children}
          </div>
        </div>
      </div>

    );
  }
}

export default SideCard;
