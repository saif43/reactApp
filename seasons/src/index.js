import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      location => console.log(location),
      err => console.log(err)
    );
    return <div>Hi there</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));