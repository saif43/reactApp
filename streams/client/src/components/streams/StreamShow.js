import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSingleStream } from "../../actions";
import flv from "flv.js";

class StreamShow extends Component {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchSingleStream(id);

    this.buildPlayer(id);
  }

  componentWillUnmount() {
    this.player.destroy();
  }

  componentDidUpdate() {
    this.buildPlayer(this.props.match.params.id);
  }

  buildPlayer(id) {
    if (this.player || !this.props.stream) {
      return;
    }

    this.player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${id}.flv`,
    });

    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }

  render() {
    if (this.props.stream) {
      const { title, description } = this.props.stream;

      return (
        <div>
          <video style={{ width: "100%" }} ref={this.videoRef} controls></video>
          <h1>{title}</h1>
          <h5>{description}</h5>
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

export default connect(mapStateToProps, { fetchSingleStream })(StreamShow);
