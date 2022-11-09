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
import { useLocation } from 'react-router-dom'

import { Link } from "react-router-dom";
import { useState } from "react";
import Footer from "../../MYFOOTER/Footer";
import SideNav from "../../MysideNav/SideNav";
import Video from "../../Video/Video";
import VideoTexts from "../../VideoTexts.jsx/VideoTexts";
import VideoComponent from "../../VideoTexts.jsx/VideoComponent";
function Navbar() {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector("video").playbackRate = 0.95;
     }, 700);
  }, []);
  const [show, SetShow] = useState(true);
  const [show3, SetShow3] = useState(true);
  const [show2, SetShow2] = useState(false);
  const funct = () => {
    SetShow(!show);
  };
  const funct2 = () => {
    SetShow2(!show2);
  };
  const funct3 = () => {
    SetShow3(!show3);
  };
  const [show4, setShow4] = useState(false);

  const funct4 = () => {
    setShow4(!show4);
  };
  const [show5, SetShow5] = useState(true);

  const funct5 = () => {
    SetShow5(!show5);
  };
  const location = useLocation();

  useEffect(()=>{
if(location.pathname!=="/"){
        document.getElementsByClassName("navbar777")[0].style.backgroundColor="   rgb(0 0 0 / 45%)";
    
    document.getElementsByClassName("navbar77")[0].style.backgroundColor="   rgb(0 0 0 / 45%)";

}else{
  document.getElementsByClassName("navbar777")[0].style.backgroundColor="transparent";
  document.getElementsByClassName("navbar77")[0].style.backgroundColor="transparent";

}

  })
  
 
      

  return (
    <div>
      <header className="navbar777">
        <div>
          <h1 className="titlemain">Medical</h1>&nbsp;
          <span className="titlespan">Media</span>
        </div>

        <div className={`${show ? "searchcontainer" : "searchcontainer1"}`}>
          <input type="text" className="searchbox" />
          <div>
            <FontAwesomeIcon icon={faClose} onClick={(e) => SetShow(!show)} />
          </div>
        </div>
        <div style={{ display: show ? "flex" : "none" }} className="nav777">
          <Link to={"/"} className="navelmnt">
            Home
          </Link>
          <Link to={"/"} className="navelmnt">
            Trending
          </Link>
          <a
            href={"https://medicalprojectnet.herokuapp.com/medproducts"}
            className="navelmnt"
          >
            Products
          </a>
          <div className="main7">
            <a className="label7" href="#">
              Create
            </a>
            <ul className="sub7">
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingRight: "10px",
                }}
              >
                <a href="#">Upload </a>
                <FontAwesomeIcon
                  style={{ display: "inline" }}
                  icon={faFileArrowUp}
                />{" "}
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingRight: "10px",
                }}
              >
                <a href="#">Share </a>
                <FontAwesomeIcon
                  style={{ display: "inline" }}
                  icon={faYoutube}
                />
              </li>
            </ul>
          </div>

          <Link to={"/"} className="navelmnt">
            About
          </Link>
        </div>

        <div className="right777">
          <FontAwesomeIcon icon={faUser} onClick={funct2} />
          <FontAwesomeIcon icon={faSearch} onClick={funct} />
        </div>
      </header>
      <header className="navbar77">
        <div style={{ visibility: show3 ? undefined : "hidden" }}>
          <h1 className="titlemain">Medical</h1>&nbsp;
          <span className="titlespan">Media</span>
        </div>

        <div className={`${show3 ? "searchcontainer" : "searchcontainer1"}`}>
          <input type="text" className="searchbox" />
          <div>
            <FontAwesomeIcon icon={faClose} onClick={(e) => SetShow3(!show3)} />
          </div>
        </div>
        <div
          className="right77"
          style={{ display: show3 ? undefined : "none" }}
        >
          {" "}
          <FontAwesomeIcon icon={faSearch} onClick={funct3} />
          <FontAwesomeIcon icon={faUser} onClick={funct4} />
          <FontAwesomeIcon icon={faBars} onClick={funct5} />
        </div>
        <div className={`${show5 ? "cont" : "cont1"}`}>
          <div style={{ display: show5 ? "none" : "block" }}>
            <FontAwesomeIcon
              icon={faClose}
              onClick={(e) => SetShow5(!show5)}
              style={{
                zIndex: "100",
                position: "fixed",
                fontSize: "1.3rem",
                color: "gold",
                right: "11px",
                top: "15px",
              }}
            />
          </div>

          <SideNav />
        </div>
      </header>{" "}
      <div className={`${show2 ? "container" : "container1"}`}>
        <div className="container2">
          <FontAwesomeIcon
            icon={faClose}
            onClick={(e) => SetShow2(false)}
            style={{
              position: "absolute",
              fontSize: "1.3rem",
              color: "grey",
              right: "2rem",
              top: "2rem",
            }}
          />
          <form style={{ width: "100%" }}>
            <div className="row">
              <h2 style={{ textAlign: "center" }} className="welcome7">
                welcome
              </h2>
              <div className="vl">
                <span className="vl-innertext">or</span>
              </div>
              <div className="col">
                <a href="#" className="fb btn">
                  <FontAwesomeIcon className="socialicon13" icon={faFacebook} />
                  Login with Facebook
                </a>

                <a href="#" className="google btn">
                  {" "}
                  <FontAwesomeIcon className="socialicon13" icon={faYoutube} />
                  Login with Google+
                </a>
              </div>
              <div className="col">
                <hr className="hr7" />
                <input className="input555"
                  type="text"
                  name="username"
                  placeholder="Username"
                  required
                />
                <input className="input555"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
                <input className="input555" type="submit" value="Login" />
              </div>
            </div>
          </form>
          <div className="bottom-container">
            <div className="col7">
              <a className="sp7" href="">
                Sign up
              </a>
            </div>
            <div className="col7">
              <a className="sp7" href="">
                Forgot password?
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={`${show4 ? "container22" : "container122"}`}>
        <div className="container2">
          <FontAwesomeIcon
            icon={faClose}
            onClick={(e) => setShow4(false)}
            style={{
              position: "absolute",
              fontSize: "1.3rem",
              color: "grey",
              right: "2rem",
              top: "2rem",
            }}
          />
          <form>
            <div className="row">
              <h2 style={{ textAlign: "center" }} className="welcome7">
                welcome
              </h2>
              <div className="vl">
                <span className="vl-innertext">or</span>
              </div>
              <div className="col">
                <a href="#" className="fb btn">
                  <FontAwesomeIcon className="socialicon13" icon={faFacebook} />
                  Login with Facebook
                </a>

                <a href="#" className="google btn">
                  {" "}
                  <FontAwesomeIcon className="socialicon13" icon={faYoutube} />
                  Login with Google+
                </a>
              </div>
              <div className="col">
                <hr className="hr7" />
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
                <input type="submit" value="Login" />
              </div>
            </div>
          </form>
          <div className="bottom-container">
            <div className="col7">
              <a className="sp7" href="">
                Sign up
              </a>
            </div>
            <div className="col7">
              <a className="sp7" href="">
                Forgot password?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
