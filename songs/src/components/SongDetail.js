import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (song) {
    return (
      <div>
        <h1>Detail for:</h1>
        <p>Song title: {song.title}</p>
        <p>Duration: {song.duration}</p>
      </div>
    );
  }

  return <div>Select a song</div>;
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
