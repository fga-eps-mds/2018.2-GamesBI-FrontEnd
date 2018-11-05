import React, { Component } from 'react';
import Footer from './Footer'
import SearchBar from './SearchBar'
import TableRank from './TableRank'
import HeaderCards from './HeaderCards'
import GraphicCard from './GraphicCard'
import SideCard from './SideCard'
import LineGraphic from './LineGraphic'

class MainContent extends Component {

  constructor(props){
      super(props);
      this.state = {
        table_type:"",
        table_name:""
      }
  }

  componentWillMount() {
    this.setState({
      isLoaded: true,
      table_type:"trendingnow",
      table_name:"Trending Games",
    });
  }

  render() {
    return (
    <div className="main-content">
      <nav className="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
        <div className="container-fluid">
          <a className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" href="/"></a>
          <SearchBar />
        </div>
      </nav>
      <div className="header bg-gradient-primary pb-8 pt-5 pt-md-8">
        <div className="container-fluid">
          <div className="header-body">
            <div className="row">
              <div className="col-xl-3 col-lg-6"  onClick={() => this.setState({table_type:"trendingnow", table_name:"Trending Games"})}>
                <HeaderCards title="Trending Games"></HeaderCards>
              </div>
              <div className="col-xl-3 col-lg-6" onClick={() => this.setState({table_type:"mostwatched", table_name:"Most Watched"})}>
                <HeaderCards title="Most Watched"></HeaderCards>
              </div>
              <div className="col-xl-3 col-lg-6" onClick={() => this.setState({table_type:"playedtime", table_name:"Top by played Time"})}>
                <HeaderCards title="Top by played Time"></HeaderCards>
              </div>
              <div className="col-xl-3 col-lg-6" onClick={() => this.setState({table_type:"sales", table_name:"Sales"})}>
                <HeaderCards title="Sales"></HeaderCards>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mt--7">
        <div className="row">
          <TableRank
            name={this.state.table_name}
            type={this.state.table_type}
            >
          </TableRank>
        </div>
        <br />
        <LineGraphic
          graphtype="line"
          y_axis="average_2weeks"
          x_axys="games"
          legend="Played Time in hours"
          title="Average played time in the last 2 weeks">
        </LineGraphic>
        <Footer />
      </div>
    </div>
    );
  }
}

export default MainContent;
