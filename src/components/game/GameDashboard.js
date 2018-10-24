import React, { Component } from 'react';
import Footer from '../Footer'
import SearchBar from '../SearchBar'
import TableRank from '../TableRank'
import HeaderCards from '../HeaderCards'
import GraphicCard from '../GraphicCard'
import SideCard from '../SideCard'
import Title from './Title'
import GameInfo from './GameInfo'
import './index.css'
import {ImportGame} from '../../actions/ImportGame'
import axios from 'axios';
class GameDashboard extends Component {
constructor(props) {
      super(props);
      this.state = {
        response: ImportGame(),
        name:"nome do jogo",
        languages: "pt-br",
        genre:"aventura",
        count_views:"100",
        count_likes:"200",
        count_dislikes:"50",
        owners:"300",
        price:"25 dols"
      }
    }

  render() {

       console.log(ImportGame())
    return (

    <div className="main-content">

      <nav className="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
        <div className="container-fluid">

          <a className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block " href="/">Dashboard</a>

          <SearchBar  />

        </div>
      </nav>

      <div className="header bg-gradient-custom pb-8 pt-5 pt-md-8">
        <div className="container-fluid">
          <div className="header-body">




            <Title  >{this.state.response.response.title}</Title>


          </div>
        </div>
      </div>

      <div className="container-fluid mt--7">
        <div className="row">
          <div className="col-xl-8 mb-5 mb-xl-0">
            <div className="card bg-gradient-default shadow">





            </div>
          </div>
          <div className="col-xl-4">
            <SideCard title="Teste">
                <div className="table-info-game">
                    <GameInfo className="game-info"><h3>Linguagem: <a>{this.state.languages}</a></h3></GameInfo>
                    <GameInfo className="game-info"><h3>Genero: <a>{this.state.genre}</a></h3></GameInfo>
                    <GameInfo className="game-info"><h3>Numero de views: <a>{this.state.count_views}</a></h3></GameInfo>
                    <GameInfo className="game-info"><h3>Numero de likes: <a>{this.state.count_likes}</a></h3></GameInfo>
                    <GameInfo className="game-info"><h3>Quatidade de donos: <a>{this.state.owners}</a></h3></GameInfo>
                    <GameInfo className="game-info"><h3>Preço: <a>{this.state.price}</a></h3></GameInfo>
                </div>
            </SideCard>
          </div>
        </div>
        <Footer />
      </div>
    </div>

    );
  }
}

export default GameDashboard;
