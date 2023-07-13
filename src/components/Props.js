import React from 'react'

const Props = (props) => {
  return (
    <div>
        <h3>Here is your message, {props.name}.</h3>
        <p>{props.message}</p>
    </div>
  )
}

export default Props