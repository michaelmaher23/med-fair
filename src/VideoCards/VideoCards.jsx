import React, { Children } from "react";
import VideoCard from "./VideoCard";
import "./VideoCard.css";
import surgeon from "./surgeon.jpg"
import children from "./children.webp"
import patient from "./patient.jpg"
import surgeries from "./surgeries.jpg"
import doctor from "./doctor.jpg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faFileArrowUp, faHeart, faInfo, faTelevision } from "@fortawesome/free-solid-svg-icons";
function VideoCards(props) {
  return (

    <div className="myvideocardscontainer">
 {[...Array(3)].map((i, k) => (
        <VideoCard  TxtAlign={props.TxtAlign}  key={k}/>
      ))}


   
  <div className="mydiv333">
      <div className="cardcontainer29">
        <div className="cardimagecontainer29">
      
        <img
className="cardimage29"
src={children}
/>
          <span className="cardimagespan29">Europe</span>
        </div>
        <div className="container222">
          <div className="flexcategrank">
            <div className="categ">
              <span className="categspan">Guided Surgery</span>
            </div>
      
          </div>
          <div className="mytitle29">
            <h3 className="mytitleheading">
            Work for developing solutions.
            </h3>
          </div>
          <div>
            <p className="mytitleheading2">
            The informed choice
for your colon surgery ,Surgeons rely on their experience, training, sense of sight to make critical decisions during an operation. 

            </p>
          </div>
          <div className="icondesc">
            <FontAwesomeIcon className="icon29" icon={faFileArrowUp} />
            <span className="desc29">Download</span>
          </div>
          <div className="watch29">
            <button className="watchlater">             <FontAwesomeIcon  className="icon777" icon={faTelevision} />
  watch later</button>
             <button className="watchlater"  >
            <FontAwesomeIcon className="icon777"  icon={faHeart} />

            </button>

          </div> 
        </div>
      </div>
    </div>
   


    <div className="mydiv333">
    
      <div className="cardcontainer29">
       <div className="cardimagecontainer29">
      
      <img
      className="cardimage29"
      src={surgeon}
      />
                <span className="cardimagespan29">Middle East & North Africa</span>
              </div> 
        
        <div className="container222">
          <div className="flexcategrank">
            <div className="categ">
              <span className="categspan">Health forward</span>
            </div>
      
          </div>
          <div className="mytitle29">
            <h3 className="mytitleheading">
            Work for developing solutions.
            </h3>
          </div>
          <div>
            <p className="mytitleheading2">
            The informed choice
for your colon surgery ,Surgeons rely on their experience, training, sense of sight to make critical decisions during an operation. 

            </p>
          </div>
          <div className="icondesc">
            <FontAwesomeIcon className="icon29" icon={faFileArrowUp} />
            <span className="desc29">Download</span>
          </div>
          <div className="watch29">
            <button className="watchlater">             <FontAwesomeIcon  className="icon777" icon={faTelevision} />
  watch later</button>
            <button className="watchlater">  <FontAwesomeIcon  className="icon777"  icon={faCircleInfo} />   More info</button>
            <button className="watchlater"  >
            <FontAwesomeIcon className="icon777"  icon={faHeart} />

            </button>

          </div> 
        </div>
      </div>
    </div>
    <div className="mydiv333">
      <div className="cardcontainer29">
        <div className="cardimagecontainer29">
      
        <img
className="cardimage29"
src={patient}
/>
          <span className="cardimagespan29">Europe</span>
        </div>
        <div className="container222">
     
          <div className="mytitle29">
            <h3 className="mytitleheading">
            Work for developing solutions.
            </h3>
          </div>
          <div>
            <p className="mytitleheading2">
            The informed choice
for your colon surgery ,Surgeons rely on their experience, training, sense of sight to make critical decisions during an operation. 

            </p>
          </div>
          <div className="icondesc">
            <FontAwesomeIcon className="icon29" icon={faFileArrowUp} />
            <span className="desc29">Download</span>
          </div>
          
        </div>
      </div>
    </div>

    <div className="mydiv333">
      <div className="cardcontainer29">
        <div className="cardimagecontainer29">
      
<img
className="cardimage29"
src={surgeries}
/>
          <span className="cardimagespan29 diagonal" >Africa</span>
        </div>
        <div className="container222">
          <div className="flexcategrank">
            <div className="categ">
              <span className="categspan">Gathering the Efforts</span>
            </div>
            <div className="rank">
              <p className="rankp">100k (Active)</p>
            </div>
          </div>
         
          <div>
            <p className="mytitleheading2">
            Countries in the Middle East and North Africa are strengthening health systems and improving access to health care for their populations.

            </p>
          </div>
          <div className="icondesc">
            <FontAwesomeIcon className="icon29" icon={faFileArrowUp} />
            <span className="desc29">Download</span>
          </div>
         
        </div>
      </div>
    </div>
    <div className="mydiv333">
      <div className="cardcontainer29">
      <div className="cardimagecontainer29">
      
      <img
className="cardimage29"
src={doctor}
/>
        <span className="cardimagespan29">India</span>
      </div>
        <div className="container222">
          <div className="flexcategrank">
            <div className="categ">
              <span className="categspan">Health Forward</span>
            </div>
            <div className="rank">
              <p className="rankp">100k (Active)</p>
            </div>
          </div>
          <div className="mytitle29">
            <h3 className="mytitleheading">
           Progress so far.
            </h3>
          </div>
        
          <div className="icondesc">
            <FontAwesomeIcon className="icon29" icon={faFileArrowUp} />
            <span className="desc29">Download</span>
          </div>
          <div className="watch29">
        
            <button className="watchlater">  <FontAwesomeIcon  className="icon777"  icon={faCircleInfo} />   More info</button>
 
          </div> 
        </div>
      </div>
    </div>


</div>

  );
}

export default VideoCards;
