import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import "./RecommendedVideos.css";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import {
  getVideosFromYotube,
  createVideoLists,
  createVideosCards,
  shuffleArray,
} from "./functions.js";
function RecommendedVideos() {
  const { PlayListId,videoId} = useParams();

  const [videoCards1, setVideoCards1] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  {/*useEffect(()=>{
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
  },[videoId])*/}
 {/*
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

*/} 
const navigate = useNavigate();
useEffect(()=>{

    const data = JSON.parse(localStorage.getItem("data"));
    const shuflled = shuffleArray(data);
    setVideoCards1(shuflled);
 
  setIsLoading(false);
},[videoId])
useEffect(()=>{

  setIsLoading(true)
  let Nosavedwatch =
    !localStorage.getItem("data") ||
    JSON.parse(localStorage.getItem("data"))?.length == 0;
  const body = document.querySelector("#root");
  body.scrollIntoView({}, 200);
  console.log(PlayListId)
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

 
    setIsLoading(false);

},[PlayListId])
  return (
    <div className="recommendedvideos">
      <div className="recommendedvideos__videos">
        {!isLoading ? (
          videoCards1.map((item) => {
            return (
              <Link
                key={Math.random()}
                style={{ color: "unset", textDecoration: "none" }}
                to={`/watch/${PlayListId}/${item.videoId}`}
              >
                <VideoCard
                  title={item.title}
                  image={item.image}
                  views={item.views}
                  channel={item.channel}
                />{" "}
              </Link>
            );
          })
        ) : (
          <>Data is not loaded yet</>
        )}
      </div>
    </div>
  );
}

export default RecommendedVideos;
