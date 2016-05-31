import React, { Component } from 'react';

export default class ViewLogin extends Component {

  constructor(props) {
    super(props);
    this.state = props.login;
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.login);
  }

  render() {
    return (
      <div>
        <h2>View Login</h2>
        <p>{this.state.username}</p>
        <p>{this.state.password}</p>
        <p>{this.state.site}</p>
      </div>
    );
  }
}
