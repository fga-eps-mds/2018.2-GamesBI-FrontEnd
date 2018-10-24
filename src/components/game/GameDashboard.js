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
import axios from 'axios';
class GameDashboard extends Component {
constructor(props) {
      super(props);
      this.state = {
        response: {},
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
componentWillMount(){
    const response = axios.get(`https://jsonplaceholder.typicode.com/todos/1`).then(res => this.setState({ response: res.data }));
}
  render() {
       console.log(this.state.response)
    return (

    <div className="main-content">

      <nav className="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
        <div className="container-fluid">

          <a className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block " href="./index.html">Dashboard</a>

          <SearchBar  />

        </div>
      </nav>

      <div className="header bg-gradient-primary pb-8 pt-5 pt-md-8">
        <div className="container-fluid">
          <div className="header-body">




            <Title  >{this.state.response.title}</Title>


          </div>
        </div>
      </div>

      <div className="container-fluid mt--7">
        <div className="row">
          <div className="col-xl-8 mb-5 mb-xl-0">
            <div className="card bg-gradient-default shadow">

            <div className="table-info-game">
            <GameInfo className="game-info">Linguagem: {this.state.languages}</GameInfo>
            <GameInfo className="game-info">Genero: {this.state.genre}</GameInfo>
            <GameInfo className="game-info"> Numero de views: {this.state.count_views}</GameInfo>
            <GameInfo className="game-info">Numero de likes: {this.state.count_likes}</GameInfo>
            <GameInfo className="game-info">Quatidade de donos: {this.state.owners}</GameInfo>
            <GameInfo className="game-info">Preço: {this.state.price}</GameInfo>
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
