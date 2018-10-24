import React, { Component } from 'react';
import Footer from '../Footer'
import SearchBar from '../SearchBar'
import TableRank from '../TableRank'
import HeaderCards from '../HeaderCards'
import GraphicCard from '../GraphicCard'
import SideCard from '../SideCard'
import Title from './Title'
import './index.css'
class GameDashboard extends Component {
constructor(props) {
      super(props);
      this.state = {
        name:"nome do jogo",
        languages: "pt-br",
        genre:"aventura",
        count_views:"100",
        count_likes:"200",
        count_dislikes:"50",
        owners:"300",
        price:"25 dols"
      };
    }

  render() {
    return (

    <div className="main-content">

      <nav className="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
        <div className="container-fluid">

          <a className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block " href="./index.html">Dashboard</a>

          <SearchBar  />

        </div>
      </nav>

      <div className="header bg-gradient-custom pb-8 pt-5 pt-md-8">
        <div className="container-fluid">
          <div className="header-body">




            <Title  >{this.state.name}</Title>


          </div>
        </div>
      </div>

      <div className="container-fluid mt--7">
        <div className="row">
          <div className="col-xl-8 mb-5 mb-xl-0">
            <div className="card bg-gradient-default shadow">

            <div>
            <Title className="game2">3{this.state.name}</Title>
            </div>

            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>

    );
  }
}

export default GameDashboard;
