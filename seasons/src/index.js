import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: null,
      lng: null,
      errorMessage : ''
    };

    window.navigator.geolocation.getCurrentPosition(
      location => {
        this.setState({
          lat: location.coords.latitude,
          lng: location.coords.longitude
        });
      },
      err => {
        this.setState({
          errorMessage : err.message
        });
      }
    );
  }

  render() {
    return (
      <div>
        <div>Lat : {this.state.lat}</div>
        <div>Lng : {this.state.lng}</div>
        <div>Error : {this.state.errorMessage}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
