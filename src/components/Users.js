import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {
  addUsers = () => {
    return this.props.users.map(user => <li>{user.username} - {user.hometown}</li>)
  }

  render() {
    console.log(this.props.users)
    return (
      <div>
        <ul>
          Users! {this.props.users.length}
          {this.addUsers()}
        </ul>

      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {

  return {
    users: state.users,
    userCount: state.users.length
   }
}

export default connect(mapStateToProps)(Users);
