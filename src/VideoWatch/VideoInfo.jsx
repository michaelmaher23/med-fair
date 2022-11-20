import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
 import './VideoInfo.css';
 import {} from "@fortawesome/free-regular-svg-icons"
 import {faShare} from "@fortawesome/free-solid-svg-icons"
 import Capture from "./Capture.PNG"
const VideoInfo = ({title, description, publishedDate, channelTitle, channelImage, viewCount, likeCount, dislikeCount, subs}) => {
    return (
        <div className='videoinfo'>
            <div className='videoinfo__headline'>
                <h1>{title}</h1>
            </div>
            <div className='videoinfo__stats'>
                <p>{viewCount} views • {publishedDate}</p>
                <div className="videoinfo__likes">
<FontAwesomeIcon icon={faShare}/>                </div>
            </div>
            <hr />
            <div className="videoinfo__channel">
                <div>
                    <img 
                        className='videoinfo__avatar' 
                      
                        src={channelImage}/>
                 
                    <div className='videoinfo__channelinfo'>
                        <h3 className='videoinfo__channeltitle'>{channelTitle}</h3>
                        <p className='videoinfo__channelsubs'>{subs} subscribers</p>
                    </div>
                    
                </div>
                <img className='videoinfo__subscribe' src={Capture}/>
                <div >
                   
                </div>
            </div>
            <div className='videoinfo__channeldesc'>
                <p> </p>
            </div>
        </div>
    )
}

export default VideoInfo;
