import React, { Component } from 'react'

export default class ClassClick extends Component {
    HandleClick() {
        console.log("button clicked")
    }
  render() {
    return (
      <div>
        <button onClick={() => this.HandleClick()}>Click Me</button>
      </div>
    )
  }
}
