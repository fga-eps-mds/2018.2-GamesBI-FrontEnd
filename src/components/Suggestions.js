import React, { Component } from 'react'

class Suggestions extends Component {
render() {
    let laco =[]
    for (let data in this.props.results){
         var item = this.props.results[data];
        laco.push(<li key={item}>{item}</li>)
        console.log(item)
      }
  return(
      <ul>
        {laco}
      </ul>

)
}
}


export default Suggestions