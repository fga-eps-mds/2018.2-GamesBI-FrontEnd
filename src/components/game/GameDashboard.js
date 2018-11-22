import React, { Component } from 'react';
import Footer from '../Footer'

import TableRank from '../TableRank'
import HeaderCards from '../HeaderCards'
import GraphicCard from '../GraphicCard'
import DataGame from './DataGame'
import LineGraphic from '../LineGraphic'
import TopBar from './TopBar'
import GameInfo from './GameInfo'
import PaletaDeCor from './PaletaDeCor'
import Nav from './Nav'

import Button from "../Button"
import './index.css'
import {ImportGame} from '../../actions/ImportGame'
import axios from 'axios';
import {Filtro} from '../../actions/Filtro'
import runtimeEnv from '@mars/heroku-js-runtime-env'

const env = runtimeEnv()
const CROSSDATA_URL = env.REACT_APP_CROSSDATA_URL

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
        title:"Average played time in the last 2 weeks" }}
    componentWillMount() {
        axios.get(CROSSDATA_URL + `/api/?name=${this.state.param.paramArray}`)
   .then(res => this.setState({ data: res.data }))
    this.setState({ data2: ImportGame(this.state.param.paramArray) })}
  render() {
    let lang=[]
      for(let language in this.state.data.languages){
           lang.push(this.state.data.languages[language]+", ")       }
    let genr=[]
       for(let genre in this.state.data.genres){
            genr.push(this.state.data.genres[genre]+", ")    }
    return (
    <div className="main-content">
        <Nav />
        <div className="header bg-gradient-custom pb-8 pt-5 pt-md-8">
        <TopBar mainImage={this.state.data.main_image} paramArray={this.state.param.paramArray} />
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
                </div>}>
            <LineGraphic gamename ={this.state.param.paramArray} graphtype="line" y_axis={this.state.y_axis} x_axis="date" legend={this.state.legend} title={this.state.Title}></LineGraphic>
            </GraphicCard>
            </div>
            <br/>
             <PaletaDeCor color={this.state.data.screenshots} />
          </div>
          <div className="col-xl-4">
          <DataGame  lang={lang} genr={genr} countViews={this.state.data.count_views} countLikes={this.state.data.count_likes} owners={this.state.data.owners} price={(this.state.data.price)/100}/>
          </div>
        </div>
        <Footer />
      </div>
    </div>); }}

export default GameDashboard;
