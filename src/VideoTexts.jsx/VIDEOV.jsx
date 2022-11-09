import React from "react";
import "./v.css";
import pic from "./pic.PNG";
import wwww from "./wwww.svg";
import { useState } from "react";
import VideoComponent from "./VideoComponent";
function VIDEOV() {
  const [diplay,setDiplay]=useState(false)
 
  return (
    <>
 <VideoComponent    diplay={diplay}  setDiplay={setDiplay} />
    <div className="interCont2" onClick={()=>setDiplay(true)}   >
      
      <div className="videoC2">
        <div>
          <img className="wzx" src={wwww} />
        </div>
        <img src={pic} className="image33" />
        <div className="Data99">
          <p>Computer science contributions in . . .</p>
          <span style={{display:'block'}}>19:07</span>
        </div>
      </div>
    </div>    </>
  );
}

export default VIDEOV;
