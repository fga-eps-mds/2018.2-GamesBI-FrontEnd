import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
} from 'reactstrap';
import Widget03 from '../../views/Widgets/Widget03'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

// Card Chart 1
const cardChartData1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandPrimary,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40],
    },
  ],
};

const line = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const options = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false
}

const cardChartOpts1 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}


// Card Chart 2
const cardChartData2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandInfo,
      borderColor: 'rgba(255,255,255,.55)',
      data: [1, 18, 9, 17, 34, 22, 11],
    },
  ],
};

const cardChartOpts2 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 3
const cardChartData3 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [78, 81, 80, 45, 34, 12, 40],
    },
  ],
};

const cardChartOpts3 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 4
const cardChartData4 = {
  labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.3)',
      borderColor: 'transparent',
      data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98],
    },
  ],
};

const cardChartOpts4 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
        barPercentage: 0.6,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
};

// Social Box Chart
const socialBoxData = [
  { data: [65, 59, 84, 84, 51, 55, 40], label: 'facebook' },
  { data: [1, 13, 9, 17, 34, 41, 38], label: 'twitter' },
  { data: [78, 81, 80, 45, 34, 12, 40], label: 'linkedin' },
  { data: [35, 23, 56, 22, 97, 23, 64], label: 'google' },
];

const makeSocialBoxData = (dataSetNo) => {
  const dataset = socialBoxData[dataSetNo];
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        backgroundColor: 'rgba(255,255,255,.1)',
        borderColor: 'rgba(255,255,255,.55)',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: dataset.data,
        label: dataset.label,
      },
    ],
  };
  return () => data;
};

const socialChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

// sparkline charts
const sparkLineChartData = [
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'New Clients',
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Recurring Clients',
  },
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'Pageviews',
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Organic',
  },
  {
    data: [78, 81, 80, 45, 34, 12, 40],
    label: 'CTR',
  },
  {
    data: [1, 13, 9, 17, 34, 41, 38],
    label: 'Bounce Rate',
  },
];

const makeSparkLineData = (dataSetNo, variant) => {
  const dataset = sparkLineChartData[dataSetNo];
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        backgroundColor: 'transparent',
        borderColor: variant ? variant : '#c2cfd6',
        data: dataset.data,
        label: dataset.label,
      },
    ],
  };
  return () => data;
};

const sparklineChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
  legend: {
    display: false,
  },
};

// Main Chart

//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(80, 100));
  data3.push(65);
}

const mainChart = {
  labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data1,
    },
    {
      label: 'My Second dataset',
      backgroundColor: 'transparent',
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data2,
    },
    {
      label: 'My Third dataset',
      backgroundColor: 'transparent',
      borderColor: brandDanger,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5],
      data: data3,
    },
  ],
};

const mainChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: 'index',
    position: 'nearest',
    callbacks: {
      labelColor: function(tooltipItem, chart) {
        return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
      }],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 250,
        },
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  render() {

    return (
      <div className="animated fadeIn">



      <Row>
        <Col>
          <Card className="text-black bg-white_04">
            <CardBody>
            <br/>
              <div className="text-personal_2" align="center"><strong>SOBRE O PRODUTO</strong></div>
              <div>
              <p></p>
              <p className="text-personal_3" align="justify" align="center">O GamesBI busca trazer aos Game Devs,
              entusiastas da indústria de jogos e<br/>streamers, uma visão abrangente do que está
              realmente acontecendo no mundo dos<br/>jogos atualmente através de análise de dados.</p>
               <br/>

               </div>

            </CardBody>

          </Card>
        </Col>
      </Row>


        <Row className="text-center">
          <Col xs="12" sm="6" lg="3">
            <Card className="text-black bg-white_04">
              <CardBody className="pb-border_1">
              <br/>
                <ButtonGroup className="float-center">
                  <Col xs="6" sm="4" md="3" lg="2">
                    <spam className="fa fa-gamepad fa-5x mt-1"></spam>
                  </Col>
                </ButtonGroup>
                <div className="text-personal_1"><strong>Principais fontes de dados</strong></div>
                <div>
                <p></p>
                <p className="text-center" align="justify">Principais APIs de distribuição<br/>de dados de jogos,
                 como por<br/>exemplo a API oficial da<br/>Twitch.</p>
                 <br/>

                 </div>
              </CardBody>
              </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-black bg-white_04">
              <CardBody className="pb-border_2">
              <br/>
              <br/>
                <ButtonGroup className="float-center">
                <Col xs="6" sm="4" md="3" lg="2">
                  <spam className="fa fa-bar-chart fa-5x mt-1"></spam>
                </Col>
                </ButtonGroup>
                <div className="text-personal_1"><strong>Análise visual</strong></div>
                <div>
                <p></p>
                <p className="text-center" align="justify">Vários tipos de gráficos e<br/>ordeneções capazes
                 de<br/>apresentar dados de maneira<br/>suscinta e objetiva.
                 </p>

                 <br/>
                 </div>
              </CardBody>
              </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-black bg-white_04">
              <CardBody className="pb-border_3">
                <ButtonGroup className="float-center">
                <Col xs="6" sm="4" md="3" lg="2">
                  <spam className="fa fa-pie-chart fa-5x mt-2"></spam></Col>
                </ButtonGroup>
                <div className="text-personal_1"><strong>Mesclagem de<br/>dados</strong></div>
                <div>
                <p></p>
                <p className="text-center" align="justify">Dados completos e confiáveis<br/>serão apresentados
                 por conta<br/>da mesclagem de dados<br/>de várias fontes com vários<br/>tipos diferentes de<br/>informações
                  importantes para<br/>o entendimento do mundo<br/>dos jogos.</p>
                 </div>
              </CardBody>
              </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-black bg-white_04">
              <CardBody className="pb-border_4">
              <br/>
              <br/>
                <ButtonGroup className="float-center">
                <Col xs="6" sm="4" md="3" lg="2">
                  <span className="fa fa-archive fa-5x mt-1"></span>
                </Col>
                </ButtonGroup>
                <div className="text-personal_1"><strong>Análise integrada</strong></div>
                <div>
                <p></p>
                <p className="text-center" align="justify">Todo esse conjunto diferente<br/>de dados
                integrados em<br/>apenas uma plataforma.</p>
                <br/>
                <br/>

                 </div>
              </CardBody>
              </Card>
          </Col>

        </Row>



        <Row>
            <Col>
              <Card>
                <CardHeader>
                  Top Games
                </CardHeader>
                <CardBody>

                  <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                    <thead className="thead-light">
                    <tr>
                      <th className="text-center"><i className="fa fa-gamepad fa-ms mt-1"></i></th>
                      <th>Game</th>
                      <th className="text-center">Região</th>
                      <th>Populadidade</th>
                      <th className="text-center">Payment Method</th>
                      <th>Horas jogadas</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td className="text-center">
                        <div className="avatar_1">
                          <img src={'assets/img/avatars/j1.jpg'} className="img-avatar_1" alt="admin@bootstrapmaster.com" />

                        </div>
                      </td>
                      <td>
                        <div>Shadow of the Tomb Raider</div>
                        <div className="small text-muted">
                          <span>New</span> | Registered: Jan 1, 2015
                        </div>
                      </td>
                      <td className="text-center">
                        <i className="flag-icon flag-icon-us h4 mb-0" title="us" id="us"></i>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>50%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                          </div>
                        </div>
                        <Progress className="progress-xs" color="success" value="50" />
                      </td>
                      <td className="text-center">
                        <i className="fa fa-cc-mastercard" style={{ fontSize: 24 + 'px' }}></i>
                      </td>
                      <td>

                        <strong>1123055 hour</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="avatar_1">
                          <img src={'assets/img/avatars/j2.jpg'} className="img-avatar_1" alt="admin@bootstrapmaster.com" />

                        </div>
                      </td>
                      <td>
                        <div>Ring of Elysium</div>
                        <div className="small text-muted">

                          <span>Recurring</span> | Registered: Jan 1, 2015
                        </div>
                      </td>
                      <td className="text-center">
                        <i className="flag-icon flag-icon-br h4 mb-0" title="br" id="br"></i>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>10%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                          </div>
                        </div>
                        <Progress className="progress-xs" color="info" value="10" />
                      </td>
                      <td className="text-center">
                        <i className="fa fa-cc-visa" style={{ fontSize: 24 + 'px' }}></i>
                      </td>
                      <td>

                        <strong>1073998 hour</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <div className="avatar_1">
                          <img src={'assets/img/avatars/j3.jpg'} className="img-avatar_1" alt="admin@bootstrapmaster.com" />

                        </div>
                      </td>
                      <td>
                        <div>Megaquarium</div>
                        <div className="small text-muted">
                          <span>New</span> | Registered: Jan 1, 2015
                        </div>
                      </td>
                      <td className="text-center">
                        <i className="flag-icon flag-icon-in h4 mb-0" title="in" id="in"></i>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>74%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                          </div>
                        </div>
                        <Progress className="progress-xs" color="warning" value="74" />
                      </td>
                      <td className="text-center">
                        <i className="fa fa-cc-stripe" style={{ fontSize: 24 + 'px' }}></i>
                      </td>
                      <td>

                        <strong>700008 hour</strong>
                      </td>
                    </tr>

                    </tbody>
                  </Table>
                   <p align="left"><a href="#/TrendingGames">view more...</a></p>
                </CardBody>
              </Card>
            </Col>
          </Row>


          <Card>
            <CardHeader>
              Line Chart
              <div className="card-header-actions">
                <a href="http://www.chartjs.org" className="card-header-action">
                  <small className="text-muted">docs</small>
                </a>
              </div>
            </CardHeader>
            <CardBody>
              <div className="chart-wrapper">
                <Line data={line} options={options} />
              </div>
            </CardBody>
          </Card>


                  <Row>
                      <Col>
                        <Card>
                          <CardHeader>
                            Top Games
                          </CardHeader>
                          <CardBody>

                            <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                              <thead className="thead-light">
                              <tr>
                                <th className="text-center"><i className="fa fa-gamepad fa-ms mt-1"></i></th>
                                <th>Game</th>
                                <th className="text-center">Região</th>
                                <th>Populadidade</th>
                                <th className="text-center">Payment Method</th>
                                <th>Horas jogadas</th>
                              </tr>
                              </thead>
                              <tbody>
                              <tr>
                                <td className="text-center">
                                  <div className="avatar_1">
                                    <img src={'assets/img/avatars/j1.jpg'} className="img-avatar_1" alt="admin@bootstrapmaster.com" />

                                  </div>
                                </td>
                                <td>
                                  <div>Shadow of the Tomb Raider</div>
                                  <div className="small text-muted">
                                    <span>New</span> | Registered: Jan 1, 2015
                                  </div>
                                </td>
                                <td className="text-center">
                                  <i className="flag-icon flag-icon-us h4 mb-0" title="us" id="us"></i>
                                </td>
                                <td>
                                  <div className="clearfix">
                                    <div className="float-left">
                                      <strong>50%</strong>
                                    </div>
                                    <div className="float-right">
                                      <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                                    </div>
                                  </div>
                                  <Progress className="progress-xs" color="success" value="50" />
                                </td>
                                <td className="text-center">
                                  <i className="fa fa-cc-mastercard" style={{ fontSize: 24 + 'px' }}></i>
                                </td>
                                <td>

                                  <strong>1123055 hour</strong>
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <div className="avatar_1">
                                    <img src={'assets/img/avatars/j2.jpg'} className="img-avatar_1" alt="admin@bootstrapmaster.com" />

                                  </div>
                                </td>
                                <td>
                                  <div>Ring of Elysium</div>
                                  <div className="small text-muted">

                                    <span>Recurring</span> | Registered: Jan 1, 2015
                                  </div>
                                </td>
                                <td className="text-center">
                                  <i className="flag-icon flag-icon-br h4 mb-0" title="br" id="br"></i>
                                </td>
                                <td>
                                  <div className="clearfix">
                                    <div className="float-left">
                                      <strong>10%</strong>
                                    </div>
                                    <div className="float-right">
                                      <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                                    </div>
                                  </div>
                                  <Progress className="progress-xs" color="info" value="10" />
                                </td>
                                <td className="text-center">
                                  <i className="fa fa-cc-visa" style={{ fontSize: 24 + 'px' }}></i>
                                </td>
                                <td>

                                  <strong>1073998 hour</strong>
                                </td>
                              </tr>
                              <tr>
                                <td className="text-center">
                                  <div className="avatar_1">
                                    <img src={'assets/img/avatars/j3.jpg'} className="img-avatar_1" alt="admin@bootstrapmaster.com" />

                                  </div>
                                </td>
                                <td>
                                  <div>Megaquarium</div>
                                  <div className="small text-muted">
                                    <span>New</span> | Registered: Jan 1, 2015
                                  </div>
                                </td>
                                <td className="text-center">
                                  <i className="flag-icon flag-icon-in h4 mb-0" title="in" id="in"></i>
                                </td>
                                <td>
                                  <div className="clearfix">
                                    <div className="float-left">
                                      <strong>74%</strong>
                                    </div>
                                    <div className="float-right">
                                      <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                                    </div>
                                  </div>
                                  <Progress className="progress-xs" color="warning" value="74" />
                                </td>
                                <td className="text-center">
                                  <i className="fa fa-cc-stripe" style={{ fontSize: 24 + 'px' }}></i>
                                </td>
                                <td>

                                  <strong>700008 hour</strong>
                                </td>
                              </tr>

                              </tbody>
                            </Table>
                             <p align="left"><a href="#/TrendingGames">view more...</a></p>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>



      </div>
    );
  }
}

export default Dashboard;
