import React from "react";
import "./VideoCard.css";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowUp } from "@fortawesome/free-solid-svg-icons";

function VideoCard() {
  return (
    <div     className="cardcontainer29">
      <div  className="cardimagecontainer29">
        <img className="cardimage29" src="https://cdn-imgix.headout.com/banner-image/image/9d95782a07c281fd5056a7ab3c1fa166-paris-banner-desktop.png?w=1440&h=600&auto=compress%2Cformat&crop=faces&fit=min"/>
        <span className="cardimagespan29">sssss</span>
      </div>
      <div   className="flexcategrank">
        <div  className="categ" >
          <span  className="categspan">category</span>
        </div>
        <div className="rank">
          <p  className="rankp">ssss dddd</p>
        </div>
      </div>
      <div className="mytitle29">
        <h3  className="mytitleheading">my title my title my title my titl e  ee e es s s  ssssss seeeee ee eeeee eee</h3>
      </div>
      <div className="icondesc">
        <FontAwesomeIcon  className="icon29" icon={faFileArrowUp} />
        <span  className="desc29">ssssss</span>
      </div>
      <div className="watch29">
        <span className="watchlater">watch later</span>
      </div>
    </div>
  );
}

export default VideoCard;
