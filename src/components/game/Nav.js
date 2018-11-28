import React, { Component } from 'react';
import SearchBar from '../SearchBar'
class Nav extends Component {

  render() {
    return (
        <nav className="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
          <div className="container-fluid">

            <a className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block " href="/"></a>

            <SearchBar  />

          </div>
        </nav>
    )
  }
}


export default Nav;
