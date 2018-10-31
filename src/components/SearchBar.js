import React, { Component } from 'react'
import axios from 'axios'
import Suggestions from './Suggestions'

const { API_KEY } = process.env
const API_URL = 'http://api.musicgraph.com/api/v2/artist/suggest'

class SearchBar extends Component {

  state = {
    data: [],
    query: ''
  }

  getInfo = () => {
    const data = axios.get(`http://localhost:8004/api/?name=${this.state.query}`)
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

      <form>
        <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <Suggestions results={this.state.data} />
      </form>
    )
  }
}

export default SearchBar
