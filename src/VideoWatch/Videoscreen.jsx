import React, { useEffect, useState } from "react";
import RecommendedVideos from "./RecommendedVideos";
import SideBar from "./SideBar ";
import axios from "axios";
import VideoInfo from "./VideoInfo";
import "./Videoscreen.css";
import { useParams } from "react-router-dom";
import aaa from "./aaa.gif"
function Videoscreen() {
  let { videoId } = useParams();

  const [videoInfo, setVideoInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
const [gif,setGIF]=useState(true);
  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet%2C%20statistics&id=${videoId}&key=AIzaSyA7_yhMrQF-fy3rNsoGNCJeCSEoiOoirhg`
      )
      .then((response) => {
        createVideoInfo(response.data["items"][0]);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [videoId]);

  async function createVideoInfo(video) {
  


    const snippet = video.snippet;
    const stats = video.statistics;
    const channelId = snippet.channelId;
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet%2C%20statistics&id=${channelId}&key=AIzaSyA7_yhMrQF-fy3rNsoGNCJeCSEoiOoirhg`
    );

    const channelImage = response.data.items[0].snippet.thumbnails.medium.url;
    const subs = response.data.items[0].statistics.subscriberCount;
    const publishedDate = new Date(snippet.publishedAt).toLocaleDateString(
      "en-GB",
      {
        day: "numeric",
        month: "short",
        year: "numeric",
      }
    );
    const title = snippet.title;
    const description = snippet.description;
    const channelTitle = snippet.channelTitle;
    const viewCount = stats.viewCount;
    const likeCount = stats.likeCount;
    const dislikeCount = stats.dislikeCount;

    setVideoInfo({
      title,
      description,
      publishedDate,
      channelTitle,
      channelImage,
      viewCount,
      likeCount,
      dislikeCount,
      subs,
    }); 
    setIsLoading(false)
    setTimeout(() => {
     setGIF(false)
    },900);
    
  }
  return (<div>
{
  gif? <div className="mydivload">
      <img src={aaa}/>
      </div>:
      (<>
      
    <div   className="mygrid77">
      <div>
        <iframe
          className="myvideo2"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media;   picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="videoplayer__videoinfo">
        
            <VideoInfo
              title={videoInfo.title}
              description={videoInfo.description}
              publishedDate={videoInfo.publishedDate}
              channelTitle={videoInfo.channelTitle}
              channelImage={videoInfo.channelImage}
              viewCount={videoInfo.viewCount}
              likeCount={videoInfo.likeCount}
              dislikeCount={videoInfo.dislikeCount}
              subs={videoInfo.subs}
            />
        
        </div>
      </div>
      <div>
        <div className="videoplayer__suggested">
          <RecommendedVideos/>
        </div>
      </div>
    </div>
      </>)
}



  



    </div>);
}

export default Videoscreen;
