import React, { Component } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube, { API_DEFAULT_PARAMS } from "../apis/youtube";
import { Container, Row, Col } from "react-grid-system";

export default class App extends Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTextSubmit("Technology news");
  }

  onTextSubmit = async searchBarText => {
    const response = await youtube.get("/search", {
      params: {
        ...API_DEFAULT_PARAMS,
        q: searchBarText
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <Row>
          <Col>
            <SearchBar onTextSubmit={this.onTextSubmit} />
          </Col>
        </Row>
        <br />
        <Row>
          <Col sm={8}>
            <VideoDetail video={this.state.selectedVideo} />
          </Col>
          <Col sm={4}>
            <VideoList
              videos={this.state.videos}
              onVideoSelect={this.onVideoSelect}
            />
          </Col>
        </Row>
      </div>
    );
  }
}
