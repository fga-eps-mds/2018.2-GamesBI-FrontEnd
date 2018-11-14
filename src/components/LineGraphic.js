import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import runtimeEnv from '@mars/heroku-js-runtime-env'

const env = runtimeEnv()
const CROSSDATA_URL = env.REACT_APP_CROSSDATA_URL

class LineGraphic extends Component {

	constructor(props){
	    super(props);
	    this.state = {
	      data:{},
	    }
	}

  componentDidMount() {
	  console.log(this.props.y_axis);
    let URL;
    if (this.props.gamename){
      URL = CROSSDATA_URL + '/api/get_data/line/'+this.props.y_axis+'/'+this.props.x_axis+'/'+this.props.gamename;
	  console.log(URL);
    }
    else {
      URL = CROSSDATA_URL + '/api/get_data/line/'+this.props.y_axis+'/'+this.props.x_axis+'/';
      console.log(URL);
    }
    fetch(URL)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data:{
              labels: result.x_axis,
              datasets: [
                {
                  label: this.props.legend,
                  fill: false,
                  lineTension: 0.1,
                  backgroundColor: 'rgba(75,192,192,0.4)',
                  borderColor: 'rgba(75,192,192,1)',
                  borderCapStyle: 'butt',
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: 'miter',
                  pointBorderColor: 'rgba(75,192,192,1)',
                  pointBackgroundColor: '#fff',
                  pointBorderWidth: 1,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                  pointHoverBorderColor: 'rgba(220,220,220,1)',
                  pointHoverBorderWidth: 2,
                  pointRadius: 1,
                  pointHitRadius: 10,
                  data: result.y_axis
                }
              ]
            }
          });
		  console.log(result.y_axis);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  componentDidUpdate(prevProps, prevState){
    if(prevProps.type != this.props.type) {
		let URL;
		if (this.props.gamename){
		  URL = CROSSDATA_URL +  '/api/get_data/line/'+this.props.y_axis+'/'+this.props.x_axis+'/'+this.props.gamename;
		}
		else {
		  URL = CROSSDATA_URL + '/api/get_data/line/'+this.props.y_axis+'/'+this.props.x_axis+'/';
		}
		fetch(URL)
		  .then(res => res.json())
		  .then(
			(result) => {
			  this.setState({
				isLoaded: true,
				data:{
				  labels: result.x_axis,
				  datasets: [
					{
					  label: this.props.legend,
					  fill: false,
					  lineTension: 0.1,
					  backgroundColor: 'rgba(75,192,192,0.4)',
					  borderColor: 'rgba(75,192,192,1)',
					  borderCapStyle: 'butt',
					  borderDash: [],
					  borderDashOffset: 0.0,
					  borderJoinStyle: 'miter',
					  pointBorderColor: 'rgba(75,192,192,1)',
					  pointBackgroundColor: '#fff',
					  pointBorderWidth: 1,
					  pointHoverRadius: 5,
					  pointHoverBackgroundColor: 'rgba(75,192,192,1)',
					  pointHoverBorderColor: 'rgba(220,220,220,1)',
					  pointHoverBorderWidth: 2,
					  pointRadius: 1,
					  pointHitRadius: 10,
					  data: result.y_axis
					}
				  ]
				}
			  });
			},
			// Note: it's important to handle errors here
			// instead of a catch() block so that we don't swallow
			// exceptions from actual bugs in components.
			(error) => {
			  this.setState({
				isLoaded: true,
				error
			  });
			}
		  )
    }
  }

  render() {
    return (
      <div className="iframe" style={
          {position: 'relative',
          height: '100%',
          width: '100%',
          backgroundColor: 'white'}
        }>
        <h2>{this.props.title}</h2>
        <Line data={this.state.data} />
      </div>
    );
  }
}

export default LineGraphic;
