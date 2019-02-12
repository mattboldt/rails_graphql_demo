import React, { Component } from 'react';
import Users from './Users';
import User from './User';

class App extends Component {
  state = {
    selectedUser: null
  };

  selectUser = (user) => {
    this.setState({ selectedUser: user })
  }

  render() {
    return (
      <div className="container mx-auto px-4">
        {this.state.selectedUser ?
          <User user={this.state.selectedUser} selectUser={this.selectUser} /> :
          <Users selectUser={this.selectUser} />}
      </div>
    );
  }
}

export default App;
