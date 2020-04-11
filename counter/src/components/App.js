import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../actions";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div class="container">
        <i
          onClick={() => {
            this.props.increment(this.props.count);
          }}
          class="far fa-plus-square fa-5x plus"
        ></i>
        <h1 class="counter">{this.props.count}</h1>
        <i
          onClick={() => {
            this.props.decrement(this.props.count);
          }}
          class="far fa-minus-square fa-5x minus"
        ></i>
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

export default connect(mapStateToProps, { increment, decrement })(App);
