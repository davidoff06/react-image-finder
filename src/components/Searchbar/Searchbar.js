import React, { Component } from 'react';
import s from './Searchbar.module.css';

const INITIAL_STATE = {
  searchStr: '',
};

export default class Searchbar extends Component {
  state = { ...INITIAL_STATE };

  onInputChange = e => {
    this.setState({ searchStr: e.currentTarget.value });
  };

  resetState = () => {
    this.setState({ ...INITIAL_STATE });
  };

  onFormSubmit = e => {
    e.preventDefault();

    if (!this.state.searchStr) {
      alert('Search is empty');
      return;
    }

    this.props.onSubmit(this.state.searchStr);
    this.resetState();
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className="SearchForm" onSubmit={this.onFormSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            placeholder="Search images and photos"
            onChange={this.onInputChange}
            value={this.state.searchStr}
          />
        </form>
      </header>
    );
  }
}
