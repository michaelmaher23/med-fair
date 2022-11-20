



  const [videos1, setVideos1] = useState([]);
  const [videos2, setVideos2] = useState([]);
  const [videos0, setVideos0] = useState([]);
  const [videos10, setVideos10] = useState([]);
  const [watch, setWatch] = useState([]);

  const [varr, setVarr] = useState(true);
  {
    /*
        .get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=-zxGnwgdmbQ%2C7JH5agRS02w%2CeIho2S0ZahI&key=AIzaSyB0G5FQlHARQ7HMwcQ0Ozzui0J6lXafT_I`)
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PLDhF6rfREScHkdYmXU-GXXMQ1iCgjLTyK&key=AIzaSyB0G5FQlHARQ7HMwcQ0Ozzui0J6lXafT_I`
 `https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&maxResults=50&type=video&key=AIzaSyA7_yhMrQF-fy3rNsoGNCJeCSEoiOoirhg`
*/
  }
  useEffect(() => {
    async function func() {
      if (
        !JSON.parse(localStorage.getItem("dataq")) ||
        JSON.parse(localStorage.getItem("dataq"))?.length == 0
      ) {
        await axios

          .get(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PLDhF6rfREScHkdYmXU-GXXMQ1iCgjLTyK&key=AIzaSyCaCtWpPncvcxtjaMAW55EmTdssWOwHdf0`
          )
          .then((response0) => {
            console.log(response0.data.items);
            setVideos0(response0?.data?.items || []);
          })
          .catch((error) => {
            console.log(error);
          });
        await axios

          .get(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PLDlmQmN0if28mZMfogkTka4TU3XQMTRNZ&key=AIzaSyCaCtWpPncvcxtjaMAW55EmTdssWOwHdf0`
          )
          .then((response0) => {
            console.log(response0.data.items);
            setWatch(response0?.data?.items || []);
          })
          .catch((error) => {
            console.log(error);
          });
        await axios

          .get(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PLasn7YWQovUafIl5hgi0DZKweYvFeEUKz&key=AIzaSyCaCtWpPncvcxtjaMAW55EmTdssWOwHdf0`
          )
          .then((response10) => {
            console.log(response10.data.items);
            setVideos10(response10.data.items || []);
          })
          .catch((error) => {
            console.log(error);
          });
        await axios
          .get(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PLw8VY87mGamwXtyTsdwSP1FusDTW3RtkR&key=AIzaSyCaCtWpPncvcxtjaMAW55EmTdssWOwHdf0`
          )
          .then((response) => {
            console.log(response.data.items);
            setVideos1(response.data.items || []);
          })
          .catch((error) => {
            console.log(error);
          });
        await axios

          .get(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PLDhF6rfREScHkdYmXU-GXXMQ1iCgjLTyK&key=AIzaSyA7_yhMrQF-fy3rNsoGNCJeCSEoiOoirhg`
          )
          .then((response2) => {
            console.log(response2.data.items);
            setVideos2(response2.data.items || []);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        createVideoCards(JSON.parse(localStorage.getItem("dataq")));
        setInterval(() => {
          axios

            .get(
              `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PLDhF6rfREScHkdYmXU-GXXMQ1iCgjLTyK&key=AIzaSyB0G5FQlHARQ7HMwcQ0Ozzui0J6lXafT_I`
            )
            .then((response0) => {
              console.log(response0.data.items);
              setVideos0(response0?.data?.items || []);
            })
            .catch((error) => {
              console.log(error);
            });
          axios

            .get(
              `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PLasn7YWQovUafIl5hgi0DZKweYvFeEUKz&key=AIzaSyA7_yhMrQF-fy3rNsoGNCJeCSEoiOoirhg`
            )
            .then((response10) => {
              console.log(response10.data.items);
              setVideos10(response10.data.items || []);
            })
            .catch((error) => {
              console.log(error);
            });
          axios
            .get(
              `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PLw8VY87mGamwXtyTsdwSP1FusDTW3RtkR&key=AIzaSyCaCtWpPncvcxtjaMAW55EmTdssWOwHdf0`
            )
            .then((response) => {
              console.log(response.data.items);
              setVideos1(response.data.items || []);
            })
            .catch((error) => {
              console.log(error);
            });
          axios

            .get(
              `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PLDlmQmN0if28mZMfogkTka4TU3XQMTRNZ&key=AIzaSyB0G5FQlHARQ7HMwcQ0Ozzui0J6lXafT_I`
            )
            .then((response2) => {
              console.log(response2.data.items);
              setVideos2(response2.data.items || []);
            })
            .catch((error) => {
              console.log(error);
            });
        }, 9000);
      }
    }

    if (videoId != null) {
      func();
      setVarr(!varr);
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    async function func() {
      if (
        !JSON.parse(localStorage.getItem("dataq")) ||
        JSON.parse(localStorage.getItem("dataq"))?.length == 0
      ) {
        await axios

          .get(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PLDhF6rfREScHkdYmXU-GXXMQ1iCgjLTyK&key=AIzaSyCaCtWpPncvcxtjaMAW55EmTdssWOwHdf0`
          )
          .then((response0) => {
            console.log(response0.data.items);
            setVideos0(response0?.data?.items || []);
          })
          .catch((error) => {
            console.log(error);
          });
        await axios

          .get(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PLDlmQmN0if28mZMfogkTka4TU3XQMTRNZ&key=AIzaSyCaCtWpPncvcxtjaMAW55EmTdssWOwHdf0`
          )
          .then((response0) => {
            console.log(response0.data.items);
            setWatch(response0?.data?.items || []);
          })
          .catch((error) => {
            console.log(error);
          });
        await axios

          .get(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PLasn7YWQovUafIl5hgi0DZKweYvFeEUKz&key=AIzaSyCaCtWpPncvcxtjaMAW55EmTdssWOwHdf0`
          )
          .then((response10) => {
            console.log(response10.data.items);
            setVideos10(response10.data.items || []);
          })
          .catch((error) => {
            console.log(error);
          });
        await axios
          .get(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PLw8VY87mGamwXtyTsdwSP1FusDTW3RtkR&key=AIzaSyCaCtWpPncvcxtjaMAW55EmTdssWOwHdf0`
          )
          .then((response) => {
            console.log(response.data.items);
            setVideos1(response.data.items || []);
          })
          .catch((error) => {
            console.log(error);
          });
        await axios

          .get(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PLDhF6rfREScHkdYmXU-GXXMQ1iCgjLTyK&key=AIzaSyA7_yhMrQF-fy3rNsoGNCJeCSEoiOoirhg`
          )
          .then((response2) => {
            console.log(response2.data.items);
            setVideos2(response2.data.items || []);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        createVideoCards(JSON.parse(localStorage.getItem("dataq")));
        setInterval(async () => {
          await axios

            .get(
              `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PLDhF6rfREScHkdYmXU-GXXMQ1iCgjLTyK&key=AIzaSyB0G5FQlHARQ7HMwcQ0Ozzui0J6lXafT_I`
            )
            .then((response0) => {
              console.log(response0.data.items);
              setVideos0(response0?.data?.items || []);
            })
            .catch((error) => {
              console.log(error);
            });
          await axios

            .get(
              `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PLasn7YWQovUafIl5hgi0DZKweYvFeEUKz&key=AIzaSyA7_yhMrQF-fy3rNsoGNCJeCSEoiOoirhg`
            )
            .then((response10) => {
              console.log(response10.data.items);
              setVideos10(response10.data.items || []);
            })
            .catch((error) => {
              console.log(error);
            });
          await axios
            .get(
              `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PLw8VY87mGamwXtyTsdwSP1FusDTW3RtkR&key=AIzaSyCaCtWpPncvcxtjaMAW55EmTdssWOwHdf0`
            )
            .then((response) => {
              console.log(response.data.items);
              setVideos1(response.data.items || []);
            })
            .catch((error) => {
              console.log(error);
            });
          await axios

            .get(
              `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PLDlmQmN0if28mZMfogkTka4TU3XQMTRNZ&key=AIzaSyB0G5FQlHARQ7HMwcQ0Ozzui0J6lXafT_I`
            )
            .then((response2) => {
              console.log(response2.data.items);
              setVideos2(response2.data.items || []);
            })
            .catch((error) => {
              console.log(error);
            });
        }, 9000);
      }
    }

    if (videoId !== null) {
      func();
      setVarr(!varr);
    }
  }, [videoId]);

  const [local, setLocal] = useState(false);
  useEffect(() => {
    const u = [...videos0, ...videos1, ...videos10, ...watch, ...videos2];

    if (
      !localStorage.getItem("dataq") ||
      JSON.parse(localStorage.getItem("dataq"))?.length == 0
    ) {
      localStorage.setItem("dataq", JSON.stringify(u));
      console.log(u);
      setLocal(true);
    } else if (u.length > 20) {
      setInterval(() => {
        localStorage.setItem("dataq", JSON.stringify(u));
        console.log(u);
        setLocal(true);
      }, 20000);
    }
  }, [varr]);
  useEffect(() => {
    let var5 = JSON.parse(localStorage.getItem("dataq")) || [];
    createVideoCards(var5);
  }, [local]);

  function shuffleArray(array) {
    for (var i = array?.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  function createVideoCards(c) {
    let dataq3 = [];
    dataq3 = shuffleArray(c);

    let newVideoCards = [];

    for (const video of dataq3) {
      const videoId = video?.contentDetails?.videoId
        ? video?.contentDetails?.videoId
        : video.id.videoId;

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
    }

    setVideoCards(newVideoCards);

    setIsLoading(false);
  }

  