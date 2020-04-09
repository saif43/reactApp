import React, { Component } from "react";
import UserCreate from "./UserCreate";

export default class App extends Component {
  state = { language: "english" };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>Select a language</div>
        <i
          className="flag us"
          onClick={() => this.onLanguageChange("english")}
        ></i>
        <i
          className="flag bd"
          onClick={() => this.onLanguageChange("bangla")}
        ></i>
        <UserCreate />
      </div>
    );
  }
}
