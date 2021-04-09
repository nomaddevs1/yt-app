import React, { useState, useEffect } from "react";
import SearchBar from "./component/SearchBar";
import VideoDetail from "./component/VideoDetail";
import VideoList from "./component/VideoList";
import useVideo from "./hooks/useVideo";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [video, search] = useVideo("people");

  useEffect(() => {
    setSelectedVideo(video[0]);
  }, [video]);
  return (
    <div className="ui container ">
      <SearchBar onTerm={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            {selectedVideo ? (
              <VideoDetail video={selectedVideo} />
            ) : (
              "Loading..."
            )}
          </div>
          <div className="five wide column">
            <VideoList videos={video} onVideoList={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
