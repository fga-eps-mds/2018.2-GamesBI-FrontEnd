import React, { Component } from 'react';
import HomeFooter from './HomeFooter'
import HomeHeader from './HomeHeader'


class HomeLayout extends Component {
  render() {
    return (
      <div>
        <HomeHeader/>
        <div>
          <p>Home</p>
        </div>
        <HomeFooter/>
      </div>
    );
  }
}

export default HomeLayout;
