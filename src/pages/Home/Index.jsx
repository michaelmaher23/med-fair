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
import Navbar from "./Navbar"
import VideoTexts from "../../VideoTexts.jsx/VideoTexts";
function Index() {
  
  return (
    <div>
  
      
        <div className="back777"> 
         <Navbar/>
         <div className="myclass3">
           <video   className="video777" autoPlay muted loop>
            <source src={video} type="video/mp4"></source>
          </video></div>
<div className="top">


  <h1 className="Main777">Your favorite medical media environment</h1>
        <h3 className="Main7777">
          Providing comprehensive and professional wellness videos in a safe
          community.
        </h3>
        <button className="btn777">Get Started</button>


        </div>{" "}
     
      </div>
    
      <div className="backgroundstatic">
           <VideoCards TxtAlign={"center"}/> 
      </div>
    
      <VideoTexts />
      <Video />
    
    </div>
  );
}

export default Index;
