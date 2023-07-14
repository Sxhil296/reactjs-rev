import React, { Component } from "react";

export default class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
     return this.state.isLoggedIn && <div>Welcome Sahil</div>; 
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Sahil</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }

    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Sahil</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }

    // return this.state.isLoggedIn ? (
    //   <div>Welcome Sahil</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );
  }
}
