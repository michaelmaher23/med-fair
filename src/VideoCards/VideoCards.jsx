import React from "react";
import VideoCard from "./VideoCard";

function VideoCards() {
  return (
    <div className="myvideocardscontainer">
      {[...Array(20)].map((i, k) => (
        <VideoCard key={k}/>
      ))}
    </div>
  );
}

export default VideoCards;
