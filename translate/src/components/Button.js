import React, { Component } from "react";
import LanguageContext from "./../contexts/LanguageContext";
import ColorContext from "./../contexts/ColorContext";

export default class Button extends Component {
  onRenderButtonText = (language) => {
    switch (language) {
      case "english":
        return "Submit";

      case "bengali":
        return "সাবমিট";

      default:
        return "Submit";
    }
  };

  renderButton = (color) => {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {(value) => this.onRenderButtonText(value.language)}
        </LanguageContext.Consumer>
      </button>
    );
  };

  render() {
    return (
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}
