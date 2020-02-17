import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedVideos = videos.map(video => {
    return (
      <div key={video.id.videoId} className="ui relaxed divided list">
        <VideoItem video={video} onVideoSelect={onVideoSelect} />
      </div>
    );
  });

  return renderedVideos;
};

export default VideoList;
