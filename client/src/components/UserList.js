import React, { Component } from 'react';


import User from './User';

class UserList extends Component {

  render() {
    return(
      <div>
        <ul>
          {this.props.peopleList.map((person, id) => 
            <User key={id} 
                  fullName={person.firstName + ' ' + person.lastName} 
                  avatar={person.avatarUrl}
                  jobTitle={'(' + person.jobTitle + ')'}
                  phone={person.phoneNumber}
            />
          )}
        </ul>
        <p className="user-count">
          {this.props.peopleList.length === 1 ? '1 User' : this.props.peopleList.length + ' Users' }
        </p>
      </div>
    );
  }
}

export default UserList;