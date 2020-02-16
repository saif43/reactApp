import React, { Component } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import youtube, { API_DEFAULT_PARAMS } from "../apis/youtube";

export default class App extends Component {
  state = { videos: [] };

  onTextSubmit = async searchBarText => {
    const response = await youtube.get("/search", {
      params: {
        ...API_DEFAULT_PARAMS,
        q: searchBarText
      }
    });

    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTextSubmit={this.onTextSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}
