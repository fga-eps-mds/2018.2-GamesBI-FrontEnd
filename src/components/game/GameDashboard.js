import React, { Component } from 'react';
import Footer from '../Footer'
import SearchBar from '../SearchBar'
import TableRank from '../TableRank'
import HeaderCards from '../HeaderCards'
import GraphicCard from '../GraphicCard'
import SideCard from '../SideCard'
import Title from './Title'
import GameInfo from './GameInfo'
import Button from "../Button"
import './index.css'
import {ImportGame} from '../../actions/ImportGame'
import axios from 'axios';
class GameDashboard extends Component {
constructor(props) {
      super(props);

      this.state = {
        data: ImportGame(),
        teste: "https://mlsoft.com.br/wp-content/uploads/2018/06/Picture1.png"
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

      <div className="header bg-gradient-primary pb-8 pt-5 pt-md-8">
        <div className="container-fluid">
          <div className="header-body">
          <div className="row">
          <img src="https://i.imgur.com/RP7y2BE.jpg" className="imagem" alt="test" />
          <Title  >{this.state.data.response.title}</Title>
          </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mt--7">
        <div className="row">
          <div className="col-xl-8 mb-5 mb-xl-0">
            <div className="card bg-gradient-default shadow">

            <GraphicCard title ="Graficos"
            component={
                <div>
                    <Button  type="button" onClick={(event) => this.setState({teste:"https://mlsoft.com.br/wp-content/uploads/2018/06/Picture1.png"})}>Grafico 1</Button>

                    <Button  type="button"onClick={(event) => this.setState({teste:"http://adrenaline.uol.com.br/files/upload/noticias/2012/05/andrei/pc-gaming-market.jpg"})}>Grafico 2</Button>

                    <Button  type="button">Grafico 3</Button>
                    
                    <Button  type="button">Grafico 4</Button>
                </div>
            }>
            <img  src={this.state.teste} className="graficos" alt="test" />

            </GraphicCard>



            </div>
          </div>
          <div className="col-xl-4">
          <div className ="SideCard">
            <SideCard  title="Informações">
                <div className="table-info-game">
                    <GameInfo className="game-info">
                        <h3>Linguagem: <a>{this.state.data.response.languages}</a></h3>
                    </GameInfo>

                    <GameInfo className="game-info">
                        <h3>Genero: <a>{this.state.data.response.genre}</a></h3>
                    </GameInfo>
                    <GameInfo className="game-info">
                        <h3>Numero de views: <a>{this.state.data.response.count_views}</a></h3>
                    </GameInfo>
                    <GameInfo className="game-info">
                        <h3>Numero de likes: <a>{this.state.data.response.count_likes}</a></h3>
                    </GameInfo>
                    <GameInfo className="game-info">
                        <h3>Quatidade de donos: <a>{this.state.data.response.owners}</a></h3>
                    </GameInfo>
                    <GameInfo className="game-info">
                        <h3>Preço: <a>{this.state.data.response.price}</a></h3>
                    </GameInfo>
                </div>
            </SideCard>
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
