import React, { Component } from "react";

export default class SearchBar extends Component {
  state = { text: "" };

  handleSearchInput = e => {
    this.setState({ text: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onTextSubmit(this.state.text);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form action="" onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="">Video Search</label>
            <input
              type="text"
              value={this.state.text}
              onChange={this.handleSearchInput}
            />
          </div>
        </form>
      </div>
    );
  }
}
