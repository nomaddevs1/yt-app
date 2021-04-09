import React from "react";
import VideoItem from "./VideoItem";
function VideoList({ videos, onVideoList }) {
  return (
    <div className="ui relaxed divided list">
      {videos.map((video) => {
        return (
          <VideoItem
            key={video.id.videoId}
            video={video}
            onVideoClick={onVideoList}
          />
        );
      })}
    </div>
  );
}

export default VideoList;
