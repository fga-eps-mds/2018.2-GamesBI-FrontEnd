import React, { Component } from 'react';
import Footer from './Footer'
import SearchBar from './SearchBar'

class MainContent extends Component {

  render() {
    return (

    <div className="main-content">

      <nav className="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
        <div className="container-fluid">

          <a className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" href="./index.html">Dashboard</a>

          <SearchBar />

          <ul className="navbar-nav align-items-center d-none d-md-flex">
            <li className="nav-item dropdown">
              <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
                <div className=" dropdown-header noti-title">
                  <h6 className="text-overflow m-0">Welcome!</h6>
                </div>
                <a href="./examples/profile.html" className="dropdown-item">
                  <i className="ni ni-single-02"></i>
                  <span>My profile</span>
                </a>
                <a href="./examples/profile.html" className="dropdown-item">
                  <i className="ni ni-settings-gear-65"></i>
                  <span>Settings</span>
                </a>
                <a href="./examples/profile.html" className="dropdown-item">
                  <i className="ni ni-calendar-grid-58"></i>
                  <span>Activity</span>
                </a>
                <a href="./examples/profile.html" className="dropdown-item">
                  <i className="ni ni-support-16"></i>
                  <span>Support</span>
                </a>
                <div className="dropdown-divider"></div>
                <a href="#!" className="dropdown-item">
                  <i className="ni ni-user-run"></i>
                  <span>Logout</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <div className="header bg-gradient-primary pb-8 pt-5 pt-md-8">
        <div className="container-fluid">
          <div className="header-body">

            <div className="row">
              <div className="col-xl-3 col-lg-6">
                <div className="card card-stats mb-4 mb-xl-0">
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <h5 className="card-title text-uppercase text-muted mb-0">Traffic</h5>
                        <span className="h2 font-weight-bold mb-0">350,897</span>
                      </div>
                      <div className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                          <i className="fas fa-chart-bar"></i>
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2"><i className="fa fa-arrow-up"></i> 3.48%</span>
                      <span className="text-nowrap">Since last month</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6">
                <div className="card card-stats mb-4 mb-xl-0">
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <h5 className="card-title text-uppercase text-muted mb-0">New users</h5>
                        <span className="h2 font-weight-bold mb-0">2,356</span>
                      </div>
                      <div className="col-auto">
                        <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                          <i className="fas fa-chart-pie"></i>
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-danger mr-2"><i className="fas fa-arrow-down"></i> 3.48%</span>
                      <span className="text-nowrap">Since last week</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6">
                <div className="card card-stats mb-4 mb-xl-0">
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <h5 className="card-title text-uppercase text-muted mb-0">Sales</h5>
                        <span className="h2 font-weight-bold mb-0">924</span>
                      </div>
                      <div className="col-auto">
                        <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                          <i className="fas fa-users"></i>
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-warning mr-2"><i className="fas fa-arrow-down"></i> 1.10%</span>
                      <span className="text-nowrap">Since yesterday</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6">
                <div className="card card-stats mb-4 mb-xl-0">
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <h5 className="card-title text-uppercase text-muted mb-0">Performance</h5>
                        <span className="h2 font-weight-bold mb-0">49,65%</span>
                      </div>
                      <div className="col-auto">
                        <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                          <i className="fas fa-percent"></i>
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2"><i className="fas fa-arrow-up"></i> 12%</span>
                      <span className="text-nowrap">Since last month</span>
                    </p>
                  </div>
                </div>
              </div>
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
        <div className="row mt-5">
          <div className="col-xl-8 mb-5 mb-xl-0">
            <div className="card shadow">
              <div className="card-header border-0">
                <div className="row align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Page visits</h3>
                  </div>
                  <div className="col text-right">
                    <a href="#!" className="btn btn-sm btn-primary">See all</a>
                  </div>
                </div>
              </div>
              <div className="table-responsive">

                <table className="table align-items-center table-flush">
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Page name</th>
                      <th scope="col">Visitors</th>
                      <th scope="col">Unique users</th>
                      <th scope="col">Bounce rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        /argon/
                      </th>
                      <td>
                        4,569
                      </td>
                      <td>
                        340
                      </td>
                      <td>
                        <i className="fas fa-arrow-up text-success mr-3"></i> 46,53%
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        /argon/index.html
                      </th>
                      <td>
                        3,985
                      </td>
                      <td>
                        319
                      </td>
                      <td>
                        <i className="fas fa-arrow-down text-warning mr-3"></i> 46,53%
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        /argon/charts.html
                      </th>
                      <td>
                        3,513
                      </td>
                      <td>
                        294
                      </td>
                      <td>
                        <i className="fas fa-arrow-down text-warning mr-3"></i> 36,49%
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        /argon/tables.html
                      </th>
                      <td>
                        2,050
                      </td>
                      <td>
                        147
                      </td>
                      <td>
                        <i className="fas fa-arrow-up text-success mr-3"></i> 50,87%
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        /argon/profile.html
                      </th>
                      <td>
                        1,795
                      </td>
                      <td>
                        190
                      </td>
                      <td>
                        <i className="fas fa-arrow-down text-danger mr-3"></i> 46,53%
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>

    );
  }
}

export default MainContent;
