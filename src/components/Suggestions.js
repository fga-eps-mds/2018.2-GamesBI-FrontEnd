import React, { Component } from 'react'
import Button from './Button'
class Suggestions extends Component {
    constructor(props) {
          super(props);
          this.state = {
            teste: ""
          }
        }
render() {
    let laco =[]
    for (let data in this.props.results){
         var item = this.props.results[data];
        laco.push(
            <li key={data}>
                {<Button  type="button" onClick={(event) => this.setState({teste:""})}>{item["name"]}</Button>}
            </li>)
        console.log(item["name"])
      }
  return(
      <ul>
        {laco}
      </ul>

)
}
}


export default Suggestions
