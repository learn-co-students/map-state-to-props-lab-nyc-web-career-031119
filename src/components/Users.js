import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  generateUsers = () => {
    return this.props.users.map(user => {
      return <li>{user.username}</li>
    })
  }

  render() {
    return (
      <div>
        <p>{this.props.users.length}</p>
        <ul>
          {this.generateUsers()}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(Users);
