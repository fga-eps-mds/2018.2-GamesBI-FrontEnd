import React, { Component } from 'react'
import axios from 'axios'
import Suggestions from './Suggestions'
import './custom.css'
import runtimeEnv from '@mars/heroku-js-runtime-env'

const env = runtimeEnv()
const { API_KEY } = process.env
const API_URL = 'http://api.musicgraph.com/api/v2/artist/suggest'
const CROSSDATA_URL = env.REACT_APP_CROSSDATA_URL

class SearchBar extends Component {

  state = {
    data: [],
    query: ''
  }

  getInfo = () => {
    const data = axios.get(CROSSDATA_URL + `/api/?name=${this.state.query}&partial`)
    .then(res => this.setState({ data: res.data }))
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value,

    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } else if (!this.state.query) {
      }
    })
  }


  render() {
    console.log(this.state.data)
    return (

      <form className="navbar-search navbar-search-dark ">
        <div className="form-group mb-0 custom-from">
            <div className="input-group input-group-alternative">
                <input className="form-control" placeholder="Search" type="text"
                  ref={input => this.search = input}
                  onChange={this.handleInputChange}
                />
            </div>
        </div>
        <Suggestions results={this.state.data} />
      </form>

    )
  }
}

export default SearchBar
