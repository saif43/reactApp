import React, { useState } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import LoadSpinner from "./LoaderSpinner";

const App = () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  let content;

  useState(() => {
    window.navigator.geolocation.getCurrentPosition(
      (location) => setLat(location.coords.latitude),
      (err) => setErrorMessage(err)
    );
  }, []); // [] works as componentDidMount

  if (lat && !errorMessage) {
    content = <SeasonDisplay lat={lat} />;
  } else if (!lat && errorMessage) {
    content = <div>Error : {errorMessage}</div>;
  } else {
    content = <LoadSpinner message="Please allow location request" />;
  }

  return <div>{content}</div>;
};

// class App extends React.Component {
//   state = { lat: null, errorMessage: "" };

//   componentDidMount() {
//     window.navigator.geolocation.getCurrentPosition(
//       (location) => this.setState({ lat: location.coords.latitude }),
//       (err) => this.setState({ errorMessage: err.message })
//     );
//   }

//   componentDidUpdate() {
//     console.log("Component was updated");
//   }

//   renderContent() {
//     if (this.state.lat && !this.state.errorMessage) {
//       return <SeasonDisplay lat={this.state.lat} />;
//     } else if (!this.state.lat && this.state.errorMessage) {
//       return <div>Error : {this.state.errorMessage}</div>;
//     }

//     return <LoadSpinner message="Please allow location request" />;
//   }

//   render() {
//     return this.renderContent();
//   }
// }

ReactDOM.render(<App />, document.querySelector("#root"));
