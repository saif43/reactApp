import React from "react";
import { connect } from "react-redux";
import { fetchAllStreams } from "./../../actions";
import { Link } from "react-router-dom";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchAllStreams();
  }

  renderAdminButtons(stream) {
    if (this.props.currentUserId === stream.userid) {
      return (
        <div className="right floated content">
          <button className="ui button primary">Edit</button>
          <button className="ui button negative">Delete</button>
        </div>
      );
    }
  }

  renderCreateButton() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/stream/new" className="ui button primary">
            Create
          </Link>
        </div>
      );
    }
  }

  renderList() {
    return this.props.streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdminButtons(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    // console.log(this.props.streams);
    return (
      <div>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreateButton()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.stream), // object to array
    currentUserId: state.auth.userid,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchAllStreams })(StreamList);
