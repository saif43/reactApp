import React, { Component } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube, { API_DEFAULT_PARAMS } from "../apis/youtube";

export default class App extends Component {
  state = { videos: [], selectedVideo: null };

  onTextSubmit = async searchBarText => {
    const response = await youtube.get("/search", {
      params: {
        ...API_DEFAULT_PARAMS,
        q: searchBarText
      }
    });

    this.setState({ videos: response.data.items });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTextSubmit={this.onTextSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    );
  }
}
