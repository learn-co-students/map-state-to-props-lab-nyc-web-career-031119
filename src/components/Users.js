import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    console.log("PROPS IN THE USERS", this.props)
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map( user => {
            return (<li>
              User: {user.username}
              <br />
              Hometown: {user.hometown}
            </li>)
          })}
        </ul>
        <p>
          Total Count: {this.props.users.length}
        </p>
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

export default connect(mapStateToProps)(Users)
