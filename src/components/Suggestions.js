import React, { Component } from 'react'
import Button from './Button'
import './custom.css'
import  {ImportGame} from '../actions/ImportGame'

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
            <li key={data} className="listGame">
                <Button className="btn btn-secondary btn-lg btn-block" type="button" >
                <a href={`/Game?name=${item["name"]}`}>  {item["name"]}</a></Button>
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
