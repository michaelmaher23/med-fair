import React from 'react';
 import './VideoCard.css';
 import Logo from '../pages/Home/Logo.svg'
const VideoCard = ({image, title, channel, views, timestamp, channelImage}) => {
    return (
        <div className='videocard'>
          <img className='videocard__image' src={image?image:Logo} alt='' />
          <div className="videocard__info">
            <img 
              className='videocard__avatar' 
              alt={channel} 
              src={Logo} 
            />
            <div className="videocard__text">
              <h4>{title}</h4>
              <p>{channel}</p>
              <p>{views} views  </p>
            </div> 
          </div>
        </div>
    )
}

export default VideoCard;