import React from "react";
import "./Video.css";
function Video() {
  return (
    <iframe
      className="myvideo"
      src="https://www.youtube.com/embed/KvxukmMV59M"
      title="YouTube player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media;   picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}

export default Video;
