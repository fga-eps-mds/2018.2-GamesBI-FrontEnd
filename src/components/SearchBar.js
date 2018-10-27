import React, { Component } from 'react'
import axios from 'axios'
import Suggestions from './Suggestions'

const { API_KEY } = process.env
const API_URL = 'http://api.musicgraph.com/api/v2/artist/suggest'

class SearchBar extends Component {

  state = {
    data: [],
    query: '',
    results: {}
  }

  getInfo = () => {
    axios.get(`https://jsonplaceholder.typicode.com/todos/${this.state.query}`)
    .then(res => this.setState({ results: res.data }))
//    data: Array.from(this.state.results)
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

      console.log(this.state.results)
    return (

      <form>
        <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <Suggestions results={this.state.results} />
      </form>
    )
  }
}

export default SearchBar
