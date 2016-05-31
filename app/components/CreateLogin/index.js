import React, { Component } from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';

export default class CreateLogin extends Component {

  constructor(props) {
    super(props);
    this.initialState = {
      username: '',
      password: '',
      site: ''
    };

    this.state = this.initialState;
  }

  handleUsernameChange (event) {
    this.setState({username: event.target.value})
  }

  handlePasswordChange (event) {
    this.setState({password: event.target.value})
  }

  handleSiteChange (event) {
    this.setState({site: event.target.value})
  }

  handleSave () {
    if(this.props.onSaveLogin) {
      this.props.onSaveLogin(this.state)
    }
    this.setState(this.initialState);
  }

  render() {
    return (
      <div className={this.props.className}>
        <h2>Create Login</h2>
        <TextField
          hintText="username"
          floatingLabelText="username"
          value={this.state.username}
          onChange={this.handleUsernameChange.bind(this)}
        />
        <br/>
        <TextField
          hintText="password"
          floatingLabelText="password"
          type="password"
          value={this.state.password}
          onChange={this.handlePasswordChange.bind(this)}
        />
        <br/>
        <TextField
          hintText="site"
          floatingLabelText="site"
          value={this.state.site}
          onChange={this.handleSiteChange.bind(this)}
        />
      <br/>
      <RaisedButton label="save" onClick={this.handleSave.bind(this)}/>
      </div>
    );
  }
}
