import React, { Component } from "react";
import Modal from "../Modal";
import history from "./../../history";
import { connect } from "react-redux";
import { fetchSingleStream, deleteStream } from "../../actions";
import StreamList from "./StreamList";

class StreamDelete extends Component {
  componentDidMount() {
    this.props.fetchSingleStream(this.props.match.params.id);
  }

  onDismiss = () => {
    history.push("/");
  };

  onDelete = () => {
    this.props.deleteStream(this.props.match.params.id);
  };

  renderActions = () => {
    return (
      <React.Fragment>
        <button onClick={this.onDelete} className="ui primary button">
          Delete
        </button>
        <button onClick={this.onDismiss} className="ui button">
          Cancel
        </button>
      </React.Fragment>
    );
  };

  render() {
    return (
      <div>
        <StreamList />
        <Modal
          title="Delete Stream"
          content={
            this.props.stream
              ? `Are you sure you want to delete '${this.props.stream.title}' stream?`
              : "Are you sure you want to delete this stream?"
          }
          actions={this.renderActions()}
          onDismiss={this.onDismiss}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.stream[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchSingleStream, deleteStream })(
  StreamDelete
);
