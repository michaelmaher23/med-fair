import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faEllipsisVertical,
  faLocationDot,
  faMailBulk,
  faMailReply,
  faPhoneAlt,
  faReplyAll,
  faTowerObservation,
} from "@fortawesome/free-solid-svg-icons";
import {faWhatsapp,faYoutube} from "@fortawesome/free-brands-svg-icons"
import React from "react";
import "./SideBox.css";
import www from "./www.png";
import { Link } from "react-router-dom";
import SideBoximg from "./SideBox.svg";
function SideBox() {
  return (
    <div className="fixedsidebox">
      <div style={{ height: "15vh" }}></div>
      <div className="Boxitem">
        <Link>
          <a>
            <FontAwesomeIcon className="icon333" icon={faMailBulk} />
         <div className="inside000">
          <p style={{textDecoration:"underline"}}>
            mikaelmaaher2017@gmail.com
          </p>
         </div>
          </a>
        </Link>
      </div>
      <div className="Boxitem">
        <Link to={"/"}>
          <a>
            <FontAwesomeIcon className="icon333"  icon={faPhoneAlt} />
            <div className="inside000">
          <p  >
          <b style={{float:"right",textTransform:"uppercase"}}>call us today on</b> <br/><b>Tel : </b>   +111 23 44432           </p>
         </div>
          </a>

        </Link>
      </div>{" "}
      <div className="Boxitem">
        <Link>
          <a>
            <FontAwesomeIcon className="icon333" icon={faLocationDot} />
            <div className="inside000">
          <p  >
          <b style={{float:"right",textTransform:"uppercase"}}>FIND OUR LOCATION</b><br/>  2 street unknown <br/>Cairo, Egy          </p>
         </div>
          </a>
        </Link>
      </div>
      <div className="Boxitem">
        <Link to={"/"}>
          <a>
            <FontAwesomeIcon className="icon333" style={{fontSize:'1.3rem' }}  icon={faWhatsapp} />
            <div className="inside000">
          <p  >
          <b style={{float:"right",textTransform:"uppercase"}}>Send us A message on</b><br/> Whatsapp.
          </p>
         </div>
          </a>
        </Link>
      </div>{" "}
      <div className="Boxitem">
        <Link to={"/"}>
          <a>
            <FontAwesomeIcon className="icon333"  icon={faYoutube} />
            <div className="inside000">
          <p  >
SUBSCRIBE  <FontAwesomeIcon style={{color:"red",fontSize:'1.3rem'}}  icon={faYoutube} />             
         </p>
         </div>
          </a>
        </Link>
      </div>{" "}
{/*  <img className="ICON888" src={www} />
      <img className="image44" src={SideBoximg} />  */}    
    </div>
  );
}

export default SideBox;
