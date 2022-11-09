import React from "react";
import "./Map.css"
function Map() {
  return (
    <div     >
      <iframe
      className="MYMAP"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6907.662448564486!2d31.242375827376154!3d30.041699516691402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4b3c9b27d1aa2917!2z2YjYstin2LHZhyDYp9mE2LXYrdmH!5e0!3m2!1sar!2seg!4v1667746920215!5m2!1sar!2seg"
         height="400"
  
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;
