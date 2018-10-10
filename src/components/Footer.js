import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (

      <footer className="footer">
        <div className="row align-items-center justify-content-xl-between">
          <div className="col-xl-6">
            <div className="copyright text-center text-xl-left text-muted">
              &copy; 2018 <a href="https://www.creative-tim.com" className="font-weight-bold ml-1" target="_blank">GamesBI</a>
            </div>
          </div>
          <div className="col-xl-6">
            <ul className="nav nav-footer justify-content-center justify-content-xl-end">
              <li className="nav-item">
                <a href="https://fga-eps-mds.github.io/2018.2-GamesBI/" className="nav-link" target="_blank">About Us</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

    );
  }
}

export default Footer;
