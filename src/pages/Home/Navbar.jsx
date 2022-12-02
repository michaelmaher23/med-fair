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
import a from './script.js'
import { useEffect } from "react";
import { redirect, useLocation, useParams } from "react-router-dom";
import Logo from './Logo.svg'
import { Link } from "react-router-dom";
import { useState } from "react";
import Footer from "../../MYFOOTER/Footer";
import SideNav from "../../MysideNav/SideNav";
 function Navbar() { 
   const languages = [
    { value: 'en', text: `English` },
    { value: 'Ar', text: "العربية" },
   
]
  const [lang, setLang] = useState('en');
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
  let { videoId,PlayListId } = useParams();
 


  useEffect(() => {
  

    if (location.pathname ==`/watch/${PlayListId}/${videoId}`  ) {
      let navbar=document.getElementsByClassName("navbar777")[0]
      let s=document.getElementById('myselect')
      navbar.style.backgroundColor="transparent"
     let list1= document.getElementsByClassName("lnk33")
      for(let i=0 ;i<list1.length;i++)
      {
        list1[i].classList.add("myclass")
      }
s.classList.add('myclass')}
     else if(location.pathname=="/"){

     }
     else{
      let navbar=document.getElementsByClassName("navbar777")[0]
      let s=document.getElementById('myselect')
      navbar.style.backgroundColor="transparent"
     let list1= document.getElementsByClassName("lnk33")
      for(let i=0 ;i<list1.length;i++)
      {
        list1[i].classList.add("myclass")
      }
s.classList.add('myclass')
     }
  
    
      var scripts = document.getElementsByTagName("script");
      let ok=0;
  
    
  
   if(a.s!=="no"){
a.s="no"
   a.fn()
   }
  
   

  
  
  
 
     const query = new URLSearchParams(location.search);
     const lng = query.get('lng')
     console.log(lng)
     setLang(lng)
 return ()=>setTimeout(() => {
  a.s="yes"
 }, 100); 
  },[location.pathname]);


  
    // This function put query that helps to 
    // change the language
    const handleChange = e => { 
      
 
    }
  return (
    <div>
 
      <header className="navbar777">
        <div>
        <img src={Logo} className="titlemain"/>&nbsp;
          <span className="titlespan">Media</span>
        </div>

        <div className={`${show ? "searchcontainer" : "searchcontainer1"}`}>
          <input type="text" className="searchbox" />
          <div>
            <FontAwesomeIcon icon={faClose} onClick={(e) => SetShow(!show)} />
          </div>
        </div>
        <div style={{ display: show ? "flex" : "none",flexDirection:lang=="Ar"?'row-reverse':'row' }} className="nav777">
          <Link to={`/?lng=en`}  className="lnk33">
            <span    className="underline"   >
              <div className="inner"></div>
              {lang=="en"?"Home":"الرئيسية"}
</span>
          </Link>
          <Link to={"/"} className="lnk33"  >
            <span   className="underline  "    > 
            <div className="inner"></div>
           {lang=="en"?"Trending":"محتوي منتشر"}</span>
          </Link>
          <a className="lnk33">
              <span  className="underline  "   >
                <div className="inner"></div>
                {lang=="en"?"Products":"منتجات"}
          </span>
          </a>
        
          <div className="main7">
           <div className="lnk33  label7">
    <span   className=" underline "   >
              
              <div className="inner"></div>
              {lang=="en"?"create":"شارك"}
</span>

           </div>
        
            <ul className="sub7">
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingRight: "10px",
                }}
              >
                <a href="#"   > {lang=="en"?"Upload":"الرفع"}</a>
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
                <a href="#"> {lang=="en"?"Share":"يوتيوب"} </a>
                <FontAwesomeIcon
                  style={{ display: "inline" }}
                  icon={faYoutube}
                />
              </li>
            </ul>
          </div>

          <Link to={"/"}   className="lnk33" >
           <span   className=" underline "  >
            <div className="inner"></div>
            {lang=="en"?"About us":"من نحن؟"}
           </span>
           
         
           
          
          </Link> 
        <div className="custom-select">
         <select id="myselect"   value={lang} onChange={handleChange}>

                {languages.map(item => {
                    return (<option    key={item.value} 
                    value={item.value}>
                          <svg style={{height:'24px',width:'24px',marginRight:'.4rem'}} xmlns="http://www.w3.org/2000/svg" width="149.331" height="149.715" viewBox="0 0 149.331 149.715">
  <g id="Group_149" data-name="Group 149" transform="translate(1386.664 -1421.912)">
    <path id="Path_3" data-name="Path 3" d="M942.133,2143.623l2.63,3.954a48.655,48.655,0,0,0,4.007-2.974l-3.022-3.662C944.59,2141.89,943.374,2142.8,942.133,2143.623Z" transform="translate(-2270.055 -606.616)" fill="#a9bba4"></path>
    <path id="Path_4" data-name="Path 4" d="M973.549,2103.09l4.428,1.715a46.5,46.5,0,0,0,1.556-4.737l-4.583-1.246a44.163,44.163,0,0,1-1.4,4.268Z" transform="translate(-2284.815 -586.828)" fill="#a9bba4"></path>
    <path id="Path_5" data-name="Path 5" d="M915.146,2156.66c-1.145.333-2.315.611-3.514.849l-.926.184.938,4.654.92-.184c1.318-.261,2.624-.582,3.894-.944Z" transform="translate(-2255.29 -614.002)" fill="#a9bba4"></path>
    <rect id="Rectangle_11" data-name="Rectangle 11" width="4.746" height="4.746" transform="translate(-1353.892 1545.549) rotate(-11.324)" fill="#a9bba4"></rect>
    <path id="Path_6" data-name="Path 6" d="M969.811,2075.5l1.781-1.781,2.012,2.012Zm15.332,5.052-11.872-11.872a2.378,2.378,0,0,0-3.359,0l-11.872,11.872,3.359,3.36,7.64-7.64c-.1,1.223-.214,2.452-.41,3.663l4.684.772c.255-1.561.427-3.152.534-4.731l7.943,7.942Z" transform="translate(-2277.529 -572.341)" fill="#a9bba4"></path>
    <path id="Path_7" data-name="Path 7" d="M956.923,1983.9l5.443-5.443,5.443,5.443,3.36-3.36-5.443-5.443,5.443-5.443-3.36-3.36-5.443,5.443-5.443-5.443-3.36,3.36,5.443,5.443-5.443,5.443Z" transform="translate(-2275.426 -524.563)" fill="#a9bba4"></path>
    <path id="Path_8" data-name="Path 8" d="M1055.448,2077.946l5.443-5.443,5.443,5.443,3.36-3.36-5.443-5.443,5.443-5.443-3.36-3.36-5.443,5.443-5.443-5.443-3.36,3.36,5.443,5.443-5.443,5.443Z" transform="translate(-2321.715 -568.748)" fill="#a9bba4"></path>
    <path id="Path_9" data-name="Path 9" d="M972.644,1994.815a42.855,42.855,0,0,0-10.679-7.325,42.422,42.422,0,0,1,4.684-10.8,68.815,68.815,0,0,1,6,18.123Zm-55.417,80.157c7.384-7.444,13.207-21.482,16.252-39.2,17.712-3.045,31.752-8.868,39.2-16.252A69.015,69.015,0,0,1,917.226,2074.972Zm-80.021-55.446c7.444,7.384,21.482,13.207,39.2,16.251,3.045,17.713,8.868,31.752,16.252,39.2A69.014,69.014,0,0,1,837.205,2019.526Zm55.446-80.021c-7.384,7.443-13.207,21.482-16.251,39.2-17.713,3.045-31.751,8.868-39.2,16.251A69.013,69.013,0,0,1,892.652,1939.506Zm48.888,29.335a42.363,42.363,0,0,1,9.319,14.127,121.964,121.964,0,0,0-17.369-4.232c-3.039-17.719-8.862-31.762-16.245-39.219a68.564,68.564,0,0,1,20.289,7.093,21.157,21.157,0,0,0-1.727,8.393,19.432,19.432,0,0,0,5.734,13.837Zm-7.3,14.863a109.357,109.357,0,0,1,18.443,4.957c.077.314.172.623.243.944l1.923,8.654a2.379,2.379,0,0,0,4.642,0l1.33-5.983c8.363,4.458,12.97,9.7,12.97,14.964,0,9.313-15.1,19.1-39.556,23.594a178.261,178.261,0,0,0,.006-47.129Zm-29.3-45.32c9.319,0,19.113,15.107,23.6,39.6a172.94,172.94,0,0,0-23.6-1.609,174.7,174.7,0,0,0-23.594,1.567c4.493-24.462,14.281-39.556,23.594-39.556Zm-29.3,92.451c-24.462-4.493-39.556-14.281-39.556-23.594s15.094-19.1,39.556-23.594a178.391,178.391,0,0,0,0,47.189Zm32.576,2.487c.3-.534.629-1.039.908-1.579l-4.226-2.161c-.659,1.288-1.389,2.547-2.161,3.752a166.333,166.333,0,0,1-22.2-1.692,174.464,174.464,0,0,1,0-48.806,171.846,171.846,0,0,1,48.816.054,174.66,174.66,0,0,1-.012,48.751,165.047,165.047,0,0,1-21.125,1.68Zm-3.276,42.773c-6.85,0-13.955-8.167-19.025-22.211.837-.38,1.691-.73,2.5-1.151l-2.214-4.2c-.582.3-1.193.546-1.792.831a117.342,117.342,0,0,1-3.069-12.815,169.916,169.916,0,0,0,17.885,1.472c-.718.849-1.436,1.7-2.22,2.493l3.384,3.335a49.446,49.446,0,0,0,3.318-3.728l-2.547-2.042c1.253.018,2.511.03,3.781.03a174.637,174.637,0,0,0,23.594-1.568c-4.493,24.462-14.281,39.556-23.594,39.556Zm52.235-137.711a16.64,16.64,0,0,1,16.621,16.622,14.748,14.748,0,0,1-4.339,10.483,47.016,47.016,0,0,0-12.281,21.451,46.961,46.961,0,0,0-12.281-21.451,14.749,14.749,0,0,1-4.339-10.483,16.64,16.64,0,0,1,16.622-16.622Zm15.635,30.457A19.433,19.433,0,0,0,978.545,1955a21.344,21.344,0,0,0-38.653-12.512,73.654,73.654,0,1,0,29.829,29.846,42.84,42.84,0,0,1,3.092-3.5Z" transform="translate(-2218 -509.219)" fill="white"></path>
    <g id="Group_10" data-name="Group 10" transform="translate(-1284.13 1421.912)">
      <path id="Path_13" data-name="Path 13" d="M1045.353,1932.65l10.408-.542,12.333,6.913,4.8,10.868-1.645,11.782-20.687,36.046-12.1-19.2-8.941-18.043.245-14.1,4.188-9.273Z" transform="translate(-1026.984 -1930.413)" fill="white"></path>
      <path id="Path_14" data-name="Path 14" d="M1048.131,1994.531c-4.64-7.224-20.336-32.388-20.336-42.223a20.336,20.336,0,1,1,40.671,0C1068.466,1962.141,1052.771,1987.308,1048.131,1994.531Zm0-65.62a23.423,23.423,0,0,0-23.4,23.4c0,12.4,21.22,44.519,22.124,45.88a1.526,1.526,0,0,0,2.548,0c.9-1.361,22.124-33.484,22.124-45.88a23.428,23.428,0,0,0-23.4-23.4Z" transform="translate(-1024.734 -1928.912)" fill="#d4b484"></path>
      <path id="Path_15" data-name="Path 15" d="M1057.557,1972.178a9.7,9.7,0,1,1,9.7-9.7A9.711,9.711,0,0,1,1057.557,1972.178Zm0-22.459a12.76,12.76,0,1,0,12.759,12.76A12.774,12.774,0,0,0,1057.557,1949.719Z" transform="translate(-1034.161 -1938.688)" fill="#d4b484"></path>
    </g>
  </g>
</svg>
                      
                      
                      
                       {`${item.text}`}   </option>);
                })}
            </select>   
        </div>


           
        </div>

        <div className="right777">
          <FontAwesomeIcon icon={faUser} onClick={funct2} />
          <FontAwesomeIcon icon={faSearch} onClick={funct} />
        </div>
      </header>
      <header className="navbar77">
        <div style={{ visibility: show3 ? undefined : "hidden" }}>
          <img src={Logo} className="titlemain"/>&nbsp;
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
        {/* <FontAwesomeIcon icon={faBars} onClick={funct5} />*/}  
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
      <div className={`${show2 ? "container5555" : "container1"}`}>
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
          <form style={{ width: "100%" ,height:"100%"}}>
            <div className="row87">
              <h2 style={{ textAlign: "center" }} className="welcome7">
                welcome
              </h2>
              <div className="vl">
                <span className="vl-innertext">or</span>
              </div>
              <div className="col87">
                <a href="#" className="fb btn87">
                  <FontAwesomeIcon className="socialicon13" icon={faFacebook} />
                  Login with Facebook
                </a>

                <a href="#" className="google btn87">
                  {" "}
                  <FontAwesomeIcon className="socialicon13" icon={faYoutube} />
                  Login with Google+
                </a>
              </div>
              <div className="col87">
                <hr className="hr7" />
                <input
                  className="input555"
                  type="text"
                  name="username"
                  placeholder="Username"
                  required
                />
                <input
                  className="input555"
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
        <form style={{ width: "100%" ,height:"100%"}}>
            <div className="row87">
              <h2 style={{ textAlign: "center" }} className="welcome7">
                welcome
              </h2>
              <div className="vl">
                <span className="vl-innertext">or</span>
              </div>
              <div className="col87">
                <a href="#" className="fb btn87">
                  <FontAwesomeIcon className="socialicon13" icon={faFacebook} />
                  Login with Facebook
                </a>

                <a href="#" className="google btn87">
                  {" "}
                  <FontAwesomeIcon className="socialicon13" icon={faYoutube} />
                  Login with Google+
                </a>
              </div>
              <div className="col87">
                <hr className="hr7" />
                <input
                  className="input555"
                  type="text"
                  name="username"
                  placeholder="Username"
                  required
                />
                <input
                  className="input555"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
                <input className="btn87" type="submit" value="Login" />
              </div>
            </div>
          </form>
          <div className="bottom-container">
            <div className="col87">
              <a className="sp7" href="">
                Sign up
              </a>
            </div>
            <div className="col87">
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
