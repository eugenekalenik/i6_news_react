import { BASE_URL, API_KEY } from '../constants';


export const getNews = async (topic) => {
  const NEWS_URL = `${BASE_URL}${topic}&apiKey=${API_KEY}`;

  return await fetch(NEWS_URL)
    .then(response => response.json());
};
