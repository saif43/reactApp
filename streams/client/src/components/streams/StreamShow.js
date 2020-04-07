import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSingleStream } from "../../actions";

class StreamShow extends Component {
  componentDidMount() {
    this.props.fetchSingleStream(this.props.match.params.id);
  }

  render() {
    console.log(this.props);
    return <div>StreamShow</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.stream[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchSingleStream })(StreamShow);
