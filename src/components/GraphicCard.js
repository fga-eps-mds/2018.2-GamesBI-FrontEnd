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
            
            {this.props.component}

          </div>

        </div>

        <div className="card-body">

          <div className="chart">
          </div>

        </div>

      </div>

    );
  }
}
export default GraphicCard;
