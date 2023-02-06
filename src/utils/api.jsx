import axios, {AxiosHeaders} from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

export const fetchYoutubeAPI = async (path) => {
  const {data} = await axios.get(
    `${BASE_URL}/${path}`,
    {
      params: {
        maxResults: '50'
      },
      headers: new AxiosHeaders({
        'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      })
    }
  );
  return data
}