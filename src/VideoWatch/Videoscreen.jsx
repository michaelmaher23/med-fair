import React, { useEffect, useState } from "react";
import RecommendedVideos from "./RecommendedVideos";
import SideBar from "./SideBar ";
import axios from "axios";
import VideoInfo from "./VideoInfo";
import "./Videoscreen.css";
 
import aaa from "./aaa.gif"
import {  useNavigate, useParams } from "react-router-dom";

import {
  getVideosFromYotube,
  createVideoLists,
  createVideosCards,
  shuffleArray,
} from "./functions.js";
function Videoscreen() {
  const { PlayListId, videoId } = useParams();

  const [videoCards1, setVideoCards1] = useState([]);

  {
    /*useEffect(()=>{
    setInterval(() => {
      const MyAsyncFun = async () => {
        const PlayList1 = await getVideosFromYotube(
          "30",
          "PLDhF6rfREScHkdYmXU-GXXMQ1iCgjLTyK",
          "AIzaSyCaCtWpPncvcxtjaMAW55EmTdssWOwHdf0"
        );
        const PlayList2 = await getVideosFromYotube(
          "30",
          "PLDlmQmN0if28mZMfogkTka4TU3XQMTRNZ",
          "AIzaSyB0G5FQlHARQ7HMwcQ0Ozzui0J6lXafT_I"
        );
        const PlayList3 = await getVideosFromYotube(
          "30",
          "PLasn7YWQovUafIl5hgi0DZKweYvFeEUKz",
          "AIzaSyA7_yhMrQF-fy3rNsoGNCJeCSEoiOoirhg"
        );
        const ArrayofLists = createVideoLists(PlayList1);
        const ArrayofLists2 = createVideoLists(PlayList2);
        const ArrayofLists3 = createVideoLists(PlayList3);
  
        console.log(ArrayofLists);
        const First = createVideosCards(ArrayofLists[0]);
        const Second = createVideosCards(ArrayofLists[1]);
        const First2 = createVideosCards(ArrayofLists2[0]);
        const Second2 = createVideosCards(ArrayofLists2[1]);
        const First3 = createVideosCards(ArrayofLists3[0]);
        const Second3 = createVideosCards(ArrayofLists3[1]);
        let Last = [
          ...First,
          ...Second,
          ...First2,
          ...Second2,
          ...First3,
          ...Second3,
        ];
        Last = shuffleArray(Last);
        localStorage.setItem("data", JSON.stringify(Last));
        setVideoCards1(Last);
      };
      MyAsyncFun()
      setIsLoading(false)
    }, 1000101);
  },[videoId])*/
  }
  {
    /*
useEffect(() => {
    setIsLoading(true)
    let Nosavedwatch =
      !localStorage.getItem("data") ||
      JSON.parse(localStorage.getItem("data"))?.length == 0;
    const body = document.querySelector("#root");
    body.scrollIntoView({}, 200);
    const MyAsyncFun = async () => {
      const PlayList1 = await getVideosFromYotube(
        "30",
        "PLDhF6rfREScHkdYmXU-GXXMQ1iCgjLTyK",
        "AIzaSyCaCtWpPncvcxtjaMAW55EmTdssWOwHdf0"
      );
      const PlayList2 = await getVideosFromYotube(
        "30",
        "PLDlmQmN0if28mZMfogkTka4TU3XQMTRNZ",
        "AIzaSyB0G5FQlHARQ7HMwcQ0Ozzui0J6lXafT_I"
      );
      const PlayList3 = await getVideosFromYotube(
        "30",
        "PLasn7YWQovUafIl5hgi0DZKweYvFeEUKz",
        "AIzaSyA7_yhMrQF-fy3rNsoGNCJeCSEoiOoirhg"
      );
      const ArrayofLists = createVideoLists(PlayList1);
      const ArrayofLists2 = createVideoLists(PlayList2);
      const ArrayofLists3 = createVideoLists(PlayList3);

      console.log(ArrayofLists);
      const First = createVideosCards(ArrayofLists[0]);
      const Second = createVideosCards(ArrayofLists[1]);
      const First2 = createVideosCards(ArrayofLists2[0]);
      const Second2 = createVideosCards(ArrayofLists2[1]);
      const First3 = createVideosCards(ArrayofLists3[0]);
      const Second3 = createVideosCards(ArrayofLists3[1]);
      let Last = [
        ...First,
        ...Second,
        ...First2,
        ...Second2,
        ...First3,
        ...Second3,
      ];
      Last = shuffleArray(Last);
      localStorage.setItem("data", JSON.stringify(Last));
      setVideoCards1(Last);
    };
    if (Nosavedwatch) {
      MyAsyncFun();
    } else {
      const data = JSON.parse(localStorage.getItem("data"));
      const shuflled = shuffleArray(data);
      setVideoCards1(shuflled);
    }
    setIsLoading(false);
  }, [videoId]);

*/
  }
  const navigate = useNavigate();
  useEffect(() => {
    setGIF(true);
    const data = JSON.parse(localStorage.getItem("data"));
    const shuflled = shuffleArray(data);
    setVideoCards1(shuflled); 
   setTimeout(() => {
       setGIF(false)
   }, 400);
   

   
 
  

 
   
  }, [videoId]);
  useEffect(() => {
  
    setGIF(true);
    let Nosavedwatch =
      !localStorage.getItem("data") ||
      JSON.parse(localStorage.getItem("data"))?.length == 0;
 
    const MyAsyncFun = async () => {
      const PlayList1 = await getVideosFromYotube(
        "50",
        PlayListId,
        "AIzaSyCaCtWpPncvcxtjaMAW55EmTdssWOwHdf0"
      );

      const ArrayofLists = createVideoLists(PlayList1);

      console.log(ArrayofLists);
      const MyList = createVideosCards(PlayList1);

      let Last = shuffleArray(MyList);
      localStorage.setItem("data", JSON.stringify(Last));
      setVideoCards1(Last);
    };

    MyAsyncFun();

  

    setTimeout(() => {
      setGIF(false)
  }, 400);
  

   
  }, [PlayListId]);







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
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          allow='autoplay'
       
           
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
          <RecommendedVideos videoCards1={videoCards1}  isLoading={isLoading}/>
        </div>
      </div>
    </div>
      </>)
}



  



    </div>);
}

export default Videoscreen;
