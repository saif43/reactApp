import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSingleStream, updateStream } from "./../../actions";
import StreamForm from "./StreamForm";
import _ from "lodash";

class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchSingleStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.updateStream(this.props.stream.id, formValues);
    // console.log(this.props);
  };

  render() {
    if (this.props.stream) {
      return (
        <div>
          <h3>Edit stream</h3>
          <StreamForm
            onSubmit={this.onSubmit}
            initialValues={_.pick(this.props.stream, "title", "description")} // takes title and description from object, and create a new object
          />
        </div>
      );
    }

    return <div>Loading</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.stream[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchSingleStream, updateStream })(
  StreamEdit
);
