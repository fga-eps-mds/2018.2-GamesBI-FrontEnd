import React, { Component } from 'react';
import Footer from './Footer'
import SearchBar from './SearchBar'
import TableRank from './TableRank'
import HeaderCards from './HeaderCards'
import GraphicCard from './GraphicCard'
import SideCard from './SideCard'

class MainContent extends Component {

  render() {
    return (

    <div className="main-content">

      <nav className="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
        <div className="container-fluid">

          <a className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" href="/">Dashboard</a>

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

              <GraphicCard title="Owners"></GraphicCard>

            </div>
          </div>
          <div className="col-xl-4">
            <SideCard title="Teste"></SideCard>
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
