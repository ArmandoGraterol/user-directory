import React, { Component } from 'react';
import axios from 'axios';

import SearchForm from './SearchForm';
import UserList from './UserList';

class UserDirectory extends Component {

  state = {
    searchValue: '',
    peopleList: [],
  }

  // REQUESTS ALL THE PEOPLE WHEN THE USERS LOADS THE PAGE
  componentWillMount() {
    this.getAllPeople();
  }

  // CHANGES THE VALUE IN THE STATE AND THEN VERIFIES
  changeSearchValue = e => {
    let { value } = e.target;
    this.setState({ searchValue: value }, this.verifySearch);
  }

  // CALLS THE METHODS TO GET PEOPLE BY SEARCH WHEN THERE ARE 3 OR MORE CHARACTERS IN THE INPUT
  // OR GETS ALL THE PEOPLE WHEN THE INPUT IS EMPTY
  verifySearch = () => {
    if(this.state.searchValue.length >= 3) {
      this.getPeopleBySearch();
    }
  
    if(this.state.searchValue.length === 0) {
      this.getAllPeople();
    }
  }

  // GETS ALL THE PEOPLE
  getAllPeople = () => {
    axios.get('/all-people')
    .then(response => {
      const sortedResponse = this.sortNames(response.data);
      this.setState({ peopleList: sortedResponse});
    })
    .catch(error => {
      console.log(error);
    });
  }

  // GETS PEOPLE BY USER SEARCH
  getPeopleBySearch = () => {
    axios.get('/people/by-name/' + this.state.searchValue)
    .then(response => {
      const sortedResponse = this.sortNames(response.data);
      this.setState({ peopleList: sortedResponse});
    })
    .catch(error => {
      console.log(error);
    });
  }

  // SORTS BY ALPHABETICAL ASCENDING ORDER THE NAMES
  sortNames = people => {
    people.sort((person1, person2) => {
      const name1 = person1.firstName.toLowerCase();
      const name2 = person2.firstName.toLowerCase();
  
      if(name1 < name2) {
        return -1;
      }
  
      if(name1 > name2) {
        return 1;
      }
      // NO SORTING NEEDED
      return 0;
    });
  
    return people;
  }

  render() {
    
    return (
      <div className="UserDirectory">
        <SearchForm changeSearchValue={this.changeSearchValue} />
        <UserList peopleList={this.state.peopleList} userCount={this.state.userCount} />
      </div>
    );
  }
}

export default UserDirectory;
