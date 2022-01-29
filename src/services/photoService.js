import axios from "axios";

const ENDPOINT = "https://api.flickr.com/services/rest/";
const { REACT_APP_FLICKR_API_KEY } = process.env;
const METHOD = "flickr.photos.getRecent";

async function getRecentPhotos(pageNum) {
  console.log("page number:", pageNum);
  const { data } = await axios.get(
    `${ENDPOINT}?method=${METHOD}&extra=url_s&api_key=${REACT_APP_FLICKR_API_KEY}&format=json&nojsoncallback=1&page=${pageNum}&per_page=30`
  );
  console.log(data);
  return data;
}

export const photoService = {
  getRecentPhotos,
};
