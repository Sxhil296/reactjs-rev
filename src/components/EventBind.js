import React, { Component } from "react";

export default class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Hello'
    };
  }
 handleClick() {
    this.setState({
        message: 'Bye'
    })
    console.log(this)
 }

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        {/* <button onClick={this.handleClick.bind(this)}>Click</button> */}
        <button onClick={() => this.handleClick()}>Click</button>

      </div>
    );
  }
}
