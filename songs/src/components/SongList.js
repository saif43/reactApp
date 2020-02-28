import React, { Component } from "react";
import { connect } from "react-redux";

class SongList extends Component {
  render() {
    console.log(this.props);
    return <div>SongList</div>;
  }
}

const mapStateToProps = state => {
  return { songList: state.songList };
};
export default connect(mapStateToProps)(SongList);
