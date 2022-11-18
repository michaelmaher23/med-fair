import React from "react";
import "./VideoCard.css";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileArrowUp,
  faHeart,
  faTelevision,
} from "@fortawesome/free-solid-svg-icons";
import children from "./children.webp";
import { Link } from "react-router-dom";

function VideoCard(props) {
  return (
    <div className="mydiv333">
      
      <Link style={{ textDecoration: "none", color: "unset" }} to={"/watch"}>
        <div className="cardcontainer29">
          <div className="cardimagecontainer29">
            <img className="cardimage29" src={children} />
            <span className="cardimagespan29">Europe</span>
          </div>
          <div className="container222">
            <div
              className={`${
                props.TxtAlign == "center"
                  ? "flexcategrankcenter"
                  : "flexcategrank"
              }`}
            >
              <div
                className={`${
                  props.TxtAlign == "center" ? "categcenter" : "categ"
                }`}
              >
                <span
                  className={`${
                    props.TxtAlign == "center" ? "categspancenter" : "categspan"
                  }`}
                >
                  Guided Surgery
                </span>
              </div>
            </div>
            <div
              className={`${
                props.TxtAlign == "center" ? "mytitle29center" : "mytitle29"
              }`}
            >
              <h3
                className={`${
                  props.TxtAlign == "center"
                    ? "mytitleheadingcenter"
                    : "mytitleheading"
                }`}
              >
                Work for developing solutions.
              </h3>
            </div>
            <div>
              <p
                className={`${
                  props.TxtAlign == "center"
                    ? "mytitleheading2center"
                    : "mytitleheading2"
                }`}
              >
                The informed choice for your colon surgery ,Surgeons rely on
                their experience, training, sense of sight to make critical
                decisions during an operation.
              </p>
            </div>
            <div
              className={`${
                props.TxtAlign == "center" ? "icondesccenter" : "icondesc"
              }`}
            >
              <FontAwesomeIcon className="icon29" icon={faFileArrowUp} />
              <span className="desc29">Download</span>
            </div>
            <div
              className={`${
                props.TxtAlign == "center" ? "watch29center" : "watch29"
              }`}
            >
              <button className="watchlater">
                {" "}
                <FontAwesomeIcon className="icon777" icon={faTelevision} />
                watch later
              </button>
              <button className="watchlater">
                <FontAwesomeIcon className="icon777" icon={faHeart} />
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default VideoCard;
