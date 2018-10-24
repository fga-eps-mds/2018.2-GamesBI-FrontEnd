import React, { Component } from 'react';

class SideCard extends Component {
  render() {
    return (

      <div className="card shadow">
        <div className="card-header bg-transparent">
          <div className="row align-items-center">
            <div className="col">
              <h6 className="text-uppercase text-muted ls-1 mb-1">{this.props.title}</h6>
              <h2 className="mb-0">Total orders</h2>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="chart">
          {this.props.children}
          </div>
        </div>
      </div>

    );
  }
}

export default SideCard;
