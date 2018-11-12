import React, { Component } from 'react';
import runtimeEnv from '@mars/heroku-js-runtime-env'

const env = runtimeEnv()
const CROSSDATA_URL = env.REACT_APP_CROSSDATA_URL

class TableRank extends Component {

  constructor(props){
      super(props);
      this.state = {
        data:[]
      }
  }

  componentDidMount() {
    fetch(CROSSDATA_URL + '/api/get_data/table/'+this.props.type)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data:result
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

  componentDidUpdate(prevProps, prevState){
    if(prevProps.type != this.props.type) {
      fetch(CROSSDATA_URL + '/api/get_data/table/'+this.props.type)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              data:result
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

    console.log(this.state.data)

    let rows = this.state.data.map(game => {
      return(
          <tr>
            <th>{game.game}</th>
            <td>{game.owners}</td>
            <td>{game.price}</td>
            <td>{game.positive_reviews_steam}</td>
            <td>{game.youtube_views}</td>
            <td>{game.youtube_count_likes}</td>
            <td>{game.youtube_count_dislikes}</td>
            <td>{game.twitch_viewer_count}</td>
          </tr>
      );
    })

    return (
        <div className="col-xl-12">
          <div className="card shadow">
            <div className="card-header border-0">
              <div className="row align-items-center">
                <div className="col">
                  <h3 className="mb-0">{this.props.name}</h3>
                </div>
              </div>
            </div>
            <div className="table-responsive">

              <table className="table align-items-center table-flush">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Game</th>
                    <th scope="col">Owners</th>
                    <th scope="col">Price</th>
                    <th scope="col">Positive reviews on steam</th>
                    <th scope="col">Youtube Views</th>
                    <th scope="col">Youtube Likes</th>
                    <th scope="col">Youtube Dislikes</th>
                    <th scope="col">Views on Twitch</th>
                  </tr>
                </thead>
                <tbody>
                  {rows}
                </tbody>
              </table>
            </div>
          </div>
        </div>
    );
  }
}

export default TableRank;
