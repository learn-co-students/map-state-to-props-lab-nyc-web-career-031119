import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  renderUsers = () => {

    return this.props.users.map(user => <li>I'm {user.username} from {user.hometown}</li>)
  }

  render() {
    return (
      <div>
        <ul>
          Users! There are {this.props.userCount} of you!
        </ul>
        {this.renderUsers()}
      </div>
    )
  }
}

//add mapStateToProps here

const mapStateToProps = state => {
  return {users: state.users, userCount: state.users.length}
}

export default connect(mapStateToProps)(Users)
