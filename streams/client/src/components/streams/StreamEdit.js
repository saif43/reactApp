import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSingleStream } from "./../../actions";

class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchSingleStream(this.props.match.params.id);
  }

  render() {
    if (this.props.stream) {
      return <div>{this.props.stream.title}</div>;
    }

    return <div>Loading</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.stream[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchSingleStream })(StreamEdit);
