import axios from "axios";

function shuffleArray(array) {
  for (var i = array?.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
async function getVideosFromYotube(MaxResults, playlistId, key) {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=${MaxResults}&playlistId=${playlistId}&key=${key}`
    );

    if (response?.data?.items) {
      return response.data.items;
    }
  } catch (error) {
    console.log(error.message);
  }
}
function createVideoLists(PlayListofAllVideos) {
  let shuffledArray = PlayListofAllVideos;
  let PlayListLength = shuffledArray.length;
  let List1 = shuffledArray.slice(0, parseInt(PlayListLength / 2));
  let List2 = shuffledArray.slice(((parseInt(PlayListLength / 2)+2)));
  return [List1, List2];
}
function createVideosCards(List) {
  let newVideoCards = [];
  for (const video of List) {
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

  return newVideoCards;
}
export { shuffleArray, getVideosFromYotube,createVideoLists,createVideosCards };
