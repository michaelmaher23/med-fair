import React from "react";
import "./t.css";
import jjj from "./jjj.svg";
function TEXTV() {
  return (
    <div className="interCont">
      <span className="span99">
        {" "}
        <img style={{ height: "35px", paddingRight: "10px" }} src={jjj} />
        Egy's 1st medical network 
      </span>
      <p className="p99">
        {" "}
        Online sharing platform of medical videos and clinical images.Easily
        connect your facility with patients, outside radiologists, and other
        facilities, which forms medical network.
      </p>

      <ul className="ul999">
        <li>
          <p style={{ fontSize: "17px", color: "black" }}>
            <span>Just access the URL and log in to view images.</span>
          </p>
        </li>

        <li>
          <p style={{ fontSize: "17px", color: "black" }}>
            Secure access through HTTPS protocol.
          </p>
        </li>
        <li>
          <p style={{ fontSize: "17px", color: "black" }}>
            No credit card required.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default TEXTV;
