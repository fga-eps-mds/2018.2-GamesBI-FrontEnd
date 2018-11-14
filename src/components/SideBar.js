import React, { Component } from 'react';

class SideBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white" id="sidenav-main">
        <div className="container-fluid">

          <a className="navbar-brand pt-0" href="/">
            <img src="./static/assets/img/logo.png" className="navbar-brand-img" alt="..." />
          </a>

          <div className="collapse navbar-collapse" id="sidenav-collapse-main">

            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <i className="ni ni-tv-2 text-primary"></i> Home
                </a>
              </li>

            </ul>

            <hr className="my-3" />

            <h6 className="navbar-heading text-muted">Documentation</h6>

            <ul className="navbar-nav mb-md-3">
              <li className="nav-item">
                <a className="nav-link" href="https://fga-eps-mds.github.io/2018.2-GamesBI/">
                  <i className="ni ni-spaceship"></i> Software Documentation
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default SideBar;
