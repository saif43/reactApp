import React from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from "../actions";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <i
          onClick={() => {
            this.props.increment(this.props.count);
          }}
          className="far fa-plus-square fa-5x plus"
        ></i>
        <h1 className="counter">{this.props.count}</h1>
        <i
          onClick={() => {
            this.props.decrement(this.props.count);
          }}
          className="far fa-minus-square fa-5x minus"
        ></i>
        <div>
          <button
            onClick={() => {
              this.props.reset();
            }}
            className="reset ui basic blue button"
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    count: state.counter.count,
  };
};

export default connect(mapStateToProps, { increment, decrement, reset })(App);
