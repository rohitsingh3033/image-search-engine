import axios from "axios";

const baseUrl = "https://api.unsplash.com/";
const API_KEY = "yacNf5CmlMTZUrGUcy96Z--Esc0adU8srn7pHLQUqss";

export const getTrendingImages = async () => {
  const response = await axios
    .get(`${baseUrl}/photos`, {
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
    })
    .catch((err) => {
      console.log("Error", err);
    });
  //console.log(response.data);
  return (response.data);
};

export const getSearchedImages = async (query) => {
  const url = new URL(`${baseUrl}/search/photos`);
  url.search = new URLSearchParams({
    query:query
  });
  const response = await axios
    .get(url,{
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
    })
    .catch((err) => {
      console.log("Error", err);
    });
  //console.log(response.data.results);
  return (response.data.results);
};