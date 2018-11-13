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
    let link =[]
    for (let data in this.props.results){
         var item = this.props.results[data];
         link.push(item["name"])
        laco.push(
            <li  className="listGame">

                <Button key={data} className="btn btn-secondary btn-lg btn-block button-custom" onClick={(event) => {window.location.href=`/Game?name=${link[data]}`}}>
                  {item["name"]}</Button>
            </li>)
        console.log(item["name"])
      }
  return(
      <ul className = "custom-list">
        {laco}
      </ul>

)
}
}


export default Suggestions
