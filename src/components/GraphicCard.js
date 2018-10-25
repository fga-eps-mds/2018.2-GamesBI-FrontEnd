import React, { Component } from 'react';

class GraphicCard extends Component {
  render() {
    return (
      <div className="GraphicCard">
        <div className="card-header bg-transparent">
          <div className="row align-items-center">
            <div className="col">
              <h2 className="text-white mb-0"> {this.props.title} </h2>
            </div>
            {this.props.children}
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
