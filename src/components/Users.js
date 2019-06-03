import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  renderEachUser = (users) => {
    return users.map(user => {
      return user.username
    })
  }

  render() {
    console.log("USER-props", this.props);
    return (
      <div>
        <ul>
        {this.renderEachUser(this.props.users)}
        <br/>
        '{`${this.props.userCount}`}'
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  console.log("USER-STATE", state);
  return { users: state.users, userCount: state.users.length }
}

export default connect(mapStateToProps)(Users)
