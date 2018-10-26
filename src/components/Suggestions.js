import React from 'react'

const Suggestions = (props) => {
  return <ul>{props.results.map(r => (
    <li key={r.id}>
      {r.title}
    </li>
  ))}</ul>
}

export default Suggestions