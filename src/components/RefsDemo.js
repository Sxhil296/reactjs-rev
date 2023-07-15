import React, { Component } from "react";

export default class RefsDemo extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef()
  }
  componentDidMount() {
    this.inputRef.current.focus()
  }

  handleClick = () => {
    alert(this.inputRef.current.value)
  }
  render() {
    return (
      <>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.handleClick}>Click</button>
      </>
    );
  }
}
