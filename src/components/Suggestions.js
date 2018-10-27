import React, { Component } from 'react'

class Suggestions extends Component {
render() {
    let laco =[]
    for (let data in this.props.results){
        laco.push(<li key={data.id}>{data.title}</li>)
        console.log(data["id"])
      }
  return(

      <ul>
      {laco}
      </ul>
//this.props.results.forEach(function(title){
         // console.log(title)
         // })
       //<ul>{props.results.forEach(r => (
    //<li key={r.title}>
    //  {r.title}
    //</li>
 //))}</ul>
)
}
}


export default Suggestions
