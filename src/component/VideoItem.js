import React from "react";
import "./video.css";

const VideoItem = ({ video, onVideoClick }) => {
  return (
    <div className="video-item item" onClick={() => onVideoClick(video)}>
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
