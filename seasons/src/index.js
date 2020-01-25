import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: null,
      errorMessage : ''
    };

  }

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      location => {
        this.setState({
          lat: location.coords.latitude
        });
      },
      err => {
        this.setState({
          errorMessage : err.message
        });
      }
    );
  }
  
  componentDidUpdate(){
    console.log("Component was updated");
  }

  render() {
    if(this.state.lat && !this.state.errorMessage){
      return(
        <div>Lat : {this.state.lat}</div>
      );
    }
    else if(!this.state.lat && this.state.errorMessage){
      return(
        <div>Error : {this.state.errorMessage}</div>
      );
    }

    return (
      <div>Loading</div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
