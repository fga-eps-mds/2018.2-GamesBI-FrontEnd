import React, { Component } from 'react';
import SideBar from './components/SideBar'
import MainContent from './components/Main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar />
        <MainContent />
      </div>
    );
  }
}

export default App;
