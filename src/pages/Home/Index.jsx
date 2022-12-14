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
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Footer from "../../MYFOOTER/Footer";
import VideoCard from "../../VideoCards/VideoCard";
import VideoCards from "../../VideoCards/VideoCards";
import SideNav from "../../MysideNav/SideNav";
import Video from "../../Video/Video";
import Navbar from "./Navbar"
import VideoTexts from "../../VideoTexts.jsx/VideoTexts";
function Index() {
  const location = useLocation();
const [l ,setL]=useState('en')
  useEffect(() => {
 
     const query = new URLSearchParams(location.search);
     const lng = query.get('lng')
     console.log(lng)
     setL(lng)

  },[]);
  return (
    <div>
  
      
        <div className="back777"> 
         <Navbar/>
         <div className="myclass3">
           <video   className="video777" autoPlay muted loop>
            <source src={video} type="video/mp4"></source>
          </video></div>
<div className="top">


  <h1 className="Main777">{l=='en'?`Your favorite medical media environment`:`  منصتك العربية المفضلة للميديا الطبية من كل انحاء العالم `}</h1>
        <h3 className="Main7777">

        {l=='en'?`Providing comprehensive and professional wellness videos in a safe community.`:`نسعي باستمرار لتوفير محتوي بجودة تليق بمستوي الطبيب العربي لاجل شفاء اسرع لمن يعانون  `}

        
        </h3>
        <button className="btn777"> {l=='en'?`GET STARTED`:`اريد الانضمام الان `}
</button>


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
