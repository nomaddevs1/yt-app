import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideo = (defaultTerm) => {
  const [video, setVideolist] = useState([]);
  useEffect(() => {
    search(defaultTerm);
  }, [defaultTerm]);

  const search = async (term) => {
    const KEY = "AIzaSyCkT48yXQ3GgvjWdEX5IErpAyAWxKC8sZo";

    //Todo: callback
    const data = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        type: "video",
        maxResults: 20,
        key: KEY,
      },
    });
    const { items } = data.data;
    setVideolist(items);
  };
  return [video, search];
};

export default useVideo;
