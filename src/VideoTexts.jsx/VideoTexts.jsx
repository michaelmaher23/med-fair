import React, { useState } from 'react'
import TEXTV from './TEXTV'
import "./VideoTexts.css"

import VIDEOV from './VIDEOV'
function VideoTexts() {
 
  return (
    <div className='MainCont'>
        <div className='secondCont'>

       
        <TEXTV/>
        <VIDEOV  />
         </div>
    </div>
  )
}

export default VideoTexts