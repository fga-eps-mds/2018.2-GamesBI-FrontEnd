import React, { Component } from 'react';
import GameInfo from './GameInfo'
import SideCard from '../SideCard'
class DataGame extends Component {

  render() {
    return (
        
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
                      <h3>Numero de views: <a>{this.props.countViews}</a></h3>
                  </GameInfo>
                  <GameInfo className="game-info">
                      <h3>Numero de likes: <a>{this.props.countLikes}</a></h3>
                  </GameInfo>
                  <GameInfo className="game-info">
                      <h3>Quantidade de donos: <a>{this.props.owners}</a></h3>
                  </GameInfo>
                  <GameInfo className="game-info">
                      <h3>Preço: $ <a>{(this.props.price)}</a></h3>
                  </GameInfo>
              </div>
          </SideCard>
        </div>
        </div>
    )
  }
}


export default TopBar;
