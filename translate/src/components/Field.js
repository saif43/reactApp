import React, { Component } from "react";
import LanguageContext from "./../contexts/LanguageContext";

export default class Field extends Component {
  static contextType = LanguageContext;

  render() {
    let labelText = "Name";

    switch (this.context.language) {
      case "english":
        labelText = "Name";
        break;

      case "bengali":
        labelText = "নাম";
        break;

      default:
        labelText = "Name";
        break;
    }

    return (
      <div className="ui field">
        <label>{labelText}</label>
        <input type="text" />
      </div>
    );
  }
}
