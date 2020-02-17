import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const renderedVideos = videos.map(video => {
    return (
      <div className="ui relaxed divided list">
        <VideoItem video={video} />
      </div>
    );
  });

  return renderedVideos;
};

export default VideoList;
