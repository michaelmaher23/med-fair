import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
import video from "../pages/Home/video.mp4";
import styles from "./styles.css";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const VideoComponent = ({ diplay, setDiplay }) => {
useEffect(()=>{
    const play = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
  </svg>`;
  const pause = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>`;
  const sound = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
  </svg>`;
  const mute = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clip-rule="evenodd" />
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
  </svg>`;
  const playButton = document.querySelector('.play-button');
const video = document.getElementById('video');
const timeline = document.querySelector('.timeline');
const soundButton = document.querySelector('.sound-button');
const fullscreenButton = document.querySelector('.fullscreen-button');
const videoContainer = document.querySelector('.video-player');
let isFullScreen = false;  

  if(diplay==true){
  playButton.addEventListener('click', function () {
    if (video.paused) {
      video.play();
      videoContainer.classList.add('playing');
      playButton.innerHTML = pause;
    } else {
      video.pause();
      videoContainer.classList.remove('playing');
      playButton.innerHTML = play;
    }
  })
  
  video.onended = function () {
    playButton.innerHTML = play;
  }
  
  video.ontimeupdate = function () {
    const percentagePosition = (100*video.currentTime) / video.duration;
    timeline.style.backgroundSize = `${percentagePosition}% 100%`;
    timeline.value = percentagePosition;
  }
  
  timeline.addEventListener('change', function () {
    const time = (timeline.value * video.duration) / 100;
    console.log(time);
    video.currentTime = time;
  });
  
  soundButton.addEventListener('click', function () {
    video.muted = !video.muted;
    soundButton.innerHTML = video.muted ? mute : sound;
  });
  
  fullscreenButton.addEventListener('click', function () {
    if (!isFullScreen) {
      if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) { /* Safari */
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { /* IE11 */
      video.msRequestFullscreen();
    }
    } else {
      if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
    }
    }
  });
  



  }

})


  const Modal = diplay && (
    <div className="video-player">
      <div className="video7">
        <FontAwesomeIcon
          className="myicon77"
          onClick={() => setDiplay(false)}
          icon={faClose}
        />
        <video className="video999" id="video" >
          <source
            src={video}
            type="video/mp4"
          />
        </video>
        <div class="controls">
    <button class="play-button control-button">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
</svg>
    </button>
    <input type="range" min="0" max="100" class="timeline"   />
    <button class="sound-button control-button">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
</svg>
    </button>
    <button class="control-button fullscreen-button">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
</svg>
    </button>
  </div>
      </div>
    </div>
  );

  return Modal;
};

export default VideoComponent;
