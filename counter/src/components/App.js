import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../actions";

class App extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="ui grid">
        <div className="ui row">
          <div className="column six wide">
            <table className="ui celled table">
              <tbody>
                <tr>
                  <td data-label="Name">{this.props.count}</td>
                  <td data-label="Age">
                    <button
                      className="ui green basic button"
                      onClick={() => {
                        this.props.increment(this.props.count);
                      }}
                    >
                      Increase
                    </button>
                  </td>
                  <td data-label="Age">
                    <button
                      className="ui red basic button"
                      onClick={() => {
                        this.props.decrement(this.props.count);
                      }}
                    >
                      Decrease
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  //   console.log(state);
  return {
    count: state.counter
  };
};

export default connect(mapStateToProps, { increment, decrement })(App);
