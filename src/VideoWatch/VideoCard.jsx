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
              <h4 className='head77'>{title}</h4>
              <p className='head88'>{channel}</p>
              
            </div> 
          </div>
        </div>
    )
}

export default VideoCard;