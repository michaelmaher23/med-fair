import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import "./RecommendedVideos.css";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCloudflare, faYoutube} from "@fortawesome/free-brands-svg-icons"
function RecommendedVideos({videoCards1,isLoading}) {
  const { PlayListId } = useParams();

  return (
    <div className="recommendedvideos">
      <div className="recommendedvideos__videos">
        {!isLoading ? (
          videoCards1.map((item) => {
            return (
              <Link
              reloadDocument={true}
                key={Math.random()}
                style={{ color: "unset", textDecoration: "none" }}
                to={`/watch/${PlayListId}/${item.videoId}`}
              >
                <VideoCard
                  title={item.title}
                  image={item.image}
                  views={item.views}
                  channel={item.channel}
                />{" "}
              </Link>
            );
          })
        ) : (
          <div style={{width:"100%",minHeight:'100vh',display:'flex',justifyContent:"space-around",alignItems:'center'}}><FontAwesomeIcon style={{color:" rgb(173, 156, 51)",fontSize:"2rem" ,opacity:'.8'}} icon={faYoutube}/></div>
        )}
      </div>
    </div>
  );
}

export default RecommendedVideos;
