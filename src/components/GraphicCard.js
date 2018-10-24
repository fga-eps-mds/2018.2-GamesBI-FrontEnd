import React, { Component } from 'react';

class GraphicCard extends Component {
  render() {
    return (
      <div className="GraphicCard">
        <div className="card-header bg-transparent">
          <div className="row align-items-center">
            <div className="col">
              <h6 className="text-uppercase text-light ls-1 mb-1">Overview</h6>
              <h2 className="text-white mb-0"> {this.props.title} </h2>
            </div>
          </div>
        </div>

        <div className="card-body">

          <div className="chart">
            <canvas id="chart-sales" className="chart-canvas"></canvas>
          </div>

        </div>

      </div>

    );
  }
}

export default GraphicCard;
