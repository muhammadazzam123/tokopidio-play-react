import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";
import { useEffect, useState } from "react";

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const respond = await fetch("http://localhost:3000/api/v1/videos");
      const videos = await respond.json();
      setVideos(videos);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid grid-cols-5 gap-5 mb-5">
      {videos.length > 0 ? (
        videos.map((video, index) => {
          return (
            <Link to={"/video/" + video._id} key={video._id}>
              <VideoCard video={video} />
            </Link>
          );
        })
      ) : (
        <p>Tidak ada video</p>
      )}
    </div>
  );
};

export default VideoList;
