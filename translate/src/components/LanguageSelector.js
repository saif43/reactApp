import React, { Component } from "react";

export default class LanguageSelector extends Component {
  render() {
    return (
      <div>
        <div>Select a language</div>
        <i
          className="flag us"
          onClick={() => this.props.onLanguageChange("english")}
        ></i>
        <i
          className="flag bd"
          onClick={() => this.props.onLanguageChange("bengali")}
        ></i>
      </div>
    );
  }
}
