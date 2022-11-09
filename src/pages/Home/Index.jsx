import React from "react";
import "./Home.css";
import video from "../Home/video.mp4";
import image from "../Home/image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faFileArrowUp } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faYoutube,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Footer from "../../MYFOOTER/Footer";
import VideoCard from "../../VideoCards/VideoCard";
import VideoCards from "../../VideoCards/VideoCards";
import SideNav from "../../MysideNav/SideNav";
import Video from "../../Video/Video";

import VideoTexts from "../../VideoTexts.jsx/VideoTexts";
function Index() {
 
 
 

  return (
    <>
      <div className="all777">
        {" "}
        <div className="back777">
           <video   className="video777" autoPlay muted loop>
            <source src={video} type="video/mp4"></source>
          </video>
        </div>{" "}
        <div className="back777">
           <video   className="video777" autoPlay muted loop>
            <source src={video} type="video/mp4"></source>
          </video>
        </div>
        <p className="Main777">Your favorite medical media environment</p>
        <p className="Main7777">
          Providing comprehensive and professional wellness videos in a safe
          community.
        </p>
        <button className="btn777">Get Started</button>
      </div>
       <VideoCards /> 
      <VideoTexts />
      <Video />
    
    </>
  );
}

export default Index;
