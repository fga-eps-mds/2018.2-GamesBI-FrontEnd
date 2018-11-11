import React, { Component } from 'react';
import Footer from '../Footer'
import SearchBar from '../SearchBar'
import TableRank from '../TableRank'
import HeaderCards from '../HeaderCards'
import GraphicCard from '../GraphicCard'
import SideCard from '../SideCard'
import LineGraphic from '../LineGraphic'
import Title from './Title'
import GameInfo from './GameInfo'
import PaletaDeCor from './PaletaDeCor'

import Button from "../Button"
import './index.css'
import {ImportGame} from '../../actions/ImportGame'
import axios from 'axios';
import {Filtro} from '../../actions/Filtro'

const CROSSDATA_URL = 'https://gbi-crossdata-staging.herokuapp.com'

class GameDashboard extends Component {
constructor(props) {
      super(props);

      this.state = {
        data: {},
        img: "https://mlsoft.com.br/wp-content/uploads/2018/06/Picture1.png",
        param: Filtro(window.location.search),
        data2:{},
        y_axis:"average_2weeks",
        legend:"Played Time ",
        title:"Average played time in the last 2 weeks"
      }

    }
    componentWillMount() {
        axios.get(CROSSDATA_URL + `/api/?name=${this.state.param.paramArray}`)
   .then(res => this.setState({ data: res.data }))
    this.setState({ data2: ImportGame(this.state.param.paramArray) })
}



  render() {
    let lang=[]
      for(let language in this.state.data.languages){
           lang.push(this.state.data.languages[language]+", ")
           }
    let genr=[]
       for(let genre in this.state.data.genres){
            genr.push(this.state.data.genres[genre]+", ")
            }

      // console.log(this.state.data.screenshots);

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
          <img src={this.state.data.main_image} className="imagem" alt="test" />
          <Title  >{this.state.param.paramArray}</Title>
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
                <Button  type="button" onClick={(event) => this.setState({y_axis:"viewer_count", legend:"viewer_count "})}>viewer count</Button>

                <Button  type="button"onClick={(event) => this.setState({y_axis:"positive_reviews_steam", legend:"positive reviews steam "})}>positive reviews steam</Button>

                <Button  type="button" onClick={(event) => this.setState({y_axis:"price", legend:"price "})}>price</Button>

                <Button  type="button" onClick={(event) => this.setState({y_axis:"owners", legend:"owners "})}>owners</Button>

                </div>
            }>
            <LineGraphic
            gamename ={this.state.param.paramArray}
              graphtype="line"
              y_axis={this.state.y_axis}
              x_axis="date"
              legend={this.state.legend}
              title={this.state.Title}>
            </LineGraphic>

            </GraphicCard>


            </div>
            <br/>
             <PaletaDeCor color={this.state.data.screenshots} />
          </div>
          <div className="col-xl-4">
          <div className ="SideCard">
            <SideCard  title="Informações">
                <div className="table-info-game">
                    <GameInfo className="game-info">
                        <h3>Linguagens: <a className="item">{lang}</a></h3>
                    </GameInfo>

                    <GameInfo className="game-info">
                        <h3>Generos: <a>{genr}</a></h3>
                    </GameInfo>
                    <GameInfo className="game-info">
                        <h3>Numero de views: <a>{this.state.data.count_views}</a></h3>
                    </GameInfo>
                    <GameInfo className="game-info">
                        <h3>Numero de likes: <a>{this.state.data.count_likes}</a></h3>
                    </GameInfo>
                    <GameInfo className="game-info">
                        <h3>Quantidade de donos: <a>{this.state.data.owners}</a></h3>
                    </GameInfo>
                    <GameInfo className="game-info">
                        <h3>Preço: $<a>{(this.state.data.price)/100}</a></h3>
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
