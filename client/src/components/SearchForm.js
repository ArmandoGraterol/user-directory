import React, { Component } from 'react';

import searchLogo from '../assets/search-icon.svg';

class SearchForm extends Component {

  onChange = e => {
    this.props.changeSearchValue(e);
  }

  onSubmit = e => {
    e.preventDefault();
  }

  render() {
    return(
      <form className="search-form" action="search" onSubmit={this.onSubmit}>
        <img src={searchLogo} alt="Magnifying Glass Icon"></img>
        <input type="text" placeholder="Search by name..." onChange={this.onChange}  />
      </form>
    );
  }
}

export default SearchForm;