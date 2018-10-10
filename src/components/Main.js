import React, { Component } from 'react';
import Footer from './Footer'
import SearchBar from './SearchBar'
import TableRank from './TableRank'
import HeaderCards from './HeaderCards'

class MainContent extends Component {

  render() {
    return (

    <div className="main-content">

      <nav className="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
        <div className="container-fluid">

          <a className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" href="./index.html">Dashboard</a>

          <SearchBar />

        </div>
      </nav>

      <div className="header bg-gradient-primary pb-8 pt-5 pt-md-8">
        <div className="container-fluid">
          <div className="header-body">

            <div className="row">

              <HeaderCards title="Traffic"></HeaderCards>

              <HeaderCards title="New Users"></HeaderCards>

              <HeaderCards title="Sales"></HeaderCards>

              <HeaderCards title="Performance"></HeaderCards>
              
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mt--7">
        <div className="row">
          <div className="col-xl-8 mb-5 mb-xl-0">
            <div className="card bg-gradient-default shadow">
              <div className="card-header bg-transparent">
                <div className="row align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-light ls-1 mb-1">Overview</h6>
                    <h2 className="text-white mb-0">Sales value</h2>
                  </div>
                  <div className="col">
                    <ul className="nav nav-pills justify-content-end">
                      <li className="nav-item mr-2 mr-md-0" data-toggle="chart" data-target="#chart-sales" data-update='{"data":{"datasets":[{"data":[0, 20, 10, 30, 15, 40, 20, 60, 60]}]}}' data-prefix="$" data-suffix="k">
                        <a href="#" className="nav-link py-2 px-3 active" data-toggle="tab">
                          <span className="d-none d-md-block">Month</span>
                          <span className="d-md-none">M</span>
                        </a>
                      </li>
                      <li className="nav-item" data-toggle="chart" data-target="#chart-sales" data-update='{"data":{"datasets":[{"data":[0, 20, 5, 25, 10, 30, 15, 40, 40]}]}}' data-prefix="$" data-suffix="k">
                        <a href="#" className="nav-link py-2 px-3" data-toggle="tab">
                          <span className="d-none d-md-block">Week</span>
                          <span className="d-md-none">W</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-body">

                <div className="chart">

                  <canvas id="chart-sales" className="chart-canvas"></canvas>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="card shadow">
              <div className="card-header bg-transparent">
                <div className="row align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted ls-1 mb-1">Performance</h6>
                    <h2 className="mb-0">Total orders</h2>
                  </div>
                </div>
              </div>
              <div className="card-body">

                <div className="chart">
                  <canvas id="chart-orders" className="chart-canvas"></canvas>
                </div>
              </div>
            </div>
          </div>
        </div>
        <TableRank />
        <Footer />
      </div>
    </div>

    );
  }
}

export default MainContent;
