import React, { Component } from 'react';
import SideBar from '../SideBar'
import GameDashboard from './GameDashboard'

class GameApp extends Component {
  render() {
    return (
      <div className="GameDashboard">
      <SideBar />
      <GameDashboard />
      </div>
    );
  }
}

export default GameApp    ;
