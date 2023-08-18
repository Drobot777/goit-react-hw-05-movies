import axios from 'axios';

const kyeApi = 'api_key=f5f4430db74eddcea5cc6458a6f258ef';
const app = 'https://api.themoviedb.org/3/';

export const appiAxiosTrandingDay = async () => {
  const respons = await axios.get (`${app}trending/movie/day?${kyeApi}`);
  return respons;
};
export const appiAxiosMovieID = async id => {
  const respons = await axios.get (
    `${app}movie/${id}?language=en-US&${kyeApi}`
  );
  return respons;
};
export const appiAxiosCredits = async id => {
  const respons = await axios.get (
    `${app}movie/${id}/credits?language=en-US&${kyeApi}`
  );
  return respons;
};
export const appiAxiosReviews = async id => {
  const respons = await axios.get (
    `${app}movie/${id}/reviews?language=en-US&page=1&${kyeApi}`
  );
  return respons;
};
export const appiAxiosSearchMovie = async name => {
  const respons = await axios.get (
    `${app}search/movie?query=${name}&include_adult=false&language=en-US&page=1&${kyeApi}`
  );
  return respons;
};
