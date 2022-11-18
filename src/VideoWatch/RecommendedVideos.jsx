import React, {useEffect, useState} from 'react';
import VideoCard from './VideoCard';
import './RecommendedVideos.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
  

const RecommendedVideos = () => {

    const [videoCards, setVideoCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
{/*
        .get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=-zxGnwgdmbQ%2C7JH5agRS02w%2CeIho2S0ZahI&key=AIzaSyB0G5FQlHARQ7HMwcQ0Ozzui0J6lXafT_I`)

*/}
    useEffect(() => {
      axios

        .get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PLw8VY87mGamwXtyTsdwSP1FusDTW3RtkR&key=AIzaSyB0G5FQlHARQ7HMwcQ0Ozzui0J6lXafT_I`)
        .then(response => {
          console.log(response.data.items)
          createVideoCards(response.data.items)
         })
        .catch(error => {
          console.log(error);
          setIsError(true);
        })
    }, [])

    async function createVideoCards(videoItems) {
      let newVideoCards = [];
      for (const video of videoItems) {
        const videoId = video.contentDetails.videoId;

        const snippet = video.snippet;
         
        const image = snippet?.thumbnails?.standard?.url;
        const title = snippet.title;
        const channel = snippet.channelTitle;
        newVideoCards.push({
          videoId,
          image,
          title,
          channel,
          
       
        });
      };
      setVideoCards(newVideoCards);
      setIsLoading(false);
    }

    if(isError) {
      return  "eror"
    }
    return (
        
        <div className='recommendedvideos'>
             <div className="recommendedvideos__videos">
                {
                  videoCards.map(item => {
                    return (
                      <Link  style={{color:'unset',textDecoration:'none'}} to={`/watch/${item.videoId}`}>
                    
                        <VideoCard key={item.videoId}
                            title={item.title}
                            image={item.image}
                            views={item.views}
                             channel={item.channel}
                         />  </Link>
                    )
                  })
                }
            </div>
        </div>
    )
}

export default RecommendedVideos;
