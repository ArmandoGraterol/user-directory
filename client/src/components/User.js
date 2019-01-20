import React, { Component } from 'react';

class User extends Component {
  render() {
    return(
      <li>
        <div className="person__left-side">
          <h3>{this.props.fullName}</h3>
          <p>{this.props.jobTitle}</p>
        </div>
        <h3>{this.props.phone}</h3>
        <img src={this.props.avatar} alt="Avatar" />
      </li>
    );
  }
}

export default User;