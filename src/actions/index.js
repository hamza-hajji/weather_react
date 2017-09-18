import axios from 'axios';

const APP_ID = 'bc100cac71e94741f1925da801cdb739';
const ENDPOINT = `http://api.openweathermap.org/data/2.5/forecast?appid=${APP_ID}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ENDPOINT}&q=${city},ma`;
  const req = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: req
  }
};
