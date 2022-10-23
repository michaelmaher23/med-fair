import React from "react";
import "./Home.css";
import video from "../Home/video.mp4";
import image from "../Home/image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faFileArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faYoutube, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
function Index() {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector("video").playbackRate = 0.95;
      document.getElementById("video777").style.display = "block";
      document.getElementById("image777").style.display = "none";
    }, 700);
  }, []);
  const [show, SetShow] = useState(true);
  const [show2, SetShow2] = useState(false);
  const funct = () => {
    SetShow(!show);
  };
  const funct2 = () => {
    SetShow2(!show2);
  };


  return (
    <>
        <div class="container"  className={`${show2 ? "container" : "container1"}`} >  
          
          <div  className="container2">
        <FontAwesomeIcon icon={faClose} onClick={(e)=>SetShow2(false)} style={{position:'absolute',fontSize:"1.3rem",color:"grey",right:"2rem",top:"2rem"}}/>
  <form  >
    <div class="row">
      <h2  style={{textAlign:'center'}}  className ="welcome7">welcome</h2>
      <div class="vl">
        <span class="vl-innertext">or</span>
      </div>
      <div class="col">
        <a href="#" class="fb btn">
          <FontAwesomeIcon  className="socialicon13"   icon={faFacebook}/>Login with Facebook
         </a>
    
        <a href="#" class="google btn">  <FontAwesomeIcon className="socialicon13" icon={faYoutube}/>Login with Google+
        </a>
      </div>
      <div class="col">
      <hr  className="hr7"/>
        <input type="text" name="username" placeholder="Username" required/>
        <input type="password" name="password" placeholder="Password" required/>
        <input type="submit" value="Login"/>
      </div>
    </div>
  </form>
  <div class="bottom-container">
   
    <div class="col7">
      <a   className="sp7" href=""    >Sign up</a>
    </div>
    <div class="col7">
      <a className="sp7"   href=""   >Forgot password?</a>
    </div>
 
</div>
</div>

      </div>
    <div className="all777">
      <header className="navbar777">
        <div className="back777">
          <img id="image777" className="image777" src={image} />
          <video id="video777" className="video777" autoPlay muted loop>
            <source src={video} type="video/mp4"></source>
          </video>
        </div>
      
        <div>
          <h1 className="titlemain">Medical</h1>&nbsp;
          <span className="titlespan">Media</span>
        </div>

        <div className={`${show ? "searchcontainer" : "searchcontainer1"}`}>
          <input type="text" className="searchbox" />
          <div>
            <FontAwesomeIcon icon={faClose}  onClick={(e)=>SetShow(!show)}   />
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
        <div className="back77">
          <video className="video" autoPlay muted loop>
            <source src={video} type="video/mp4"></source>
          </video>
        </div>

        <div>
          <h1 className="titlemain">Medical</h1>&nbsp;
          <span className="titlespan">Media</span>
        </div>
        <div className="right77">
          {" "}
          <FontAwesomeIcon icon={faSearch} />
          <FontAwesomeIcon icon={faUser} />
          <FontAwesomeIcon icon={faBars} />
        </div>
      </header>
      <p className="Main777">Your favorite medical media environment</p>
      <p className="Main7777">
        Providing comprehensive and professional wellness videos in a safe
        community.
      </p>
      <button className="btn777">Get Started</button>
    </div>

     </>
  );
}

export default Index;
