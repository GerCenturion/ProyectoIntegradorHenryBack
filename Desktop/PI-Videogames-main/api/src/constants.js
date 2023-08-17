const config = require('./utils/config');
const APIKEY =  config.API_KEY;


const VIDEOGAMES_URL =
  'https://api.rawg.io/api/games?key='+ APIKEY;

const GENRES_URL =
  "https://api.rawg.io/api/genres?key=" + APIKEY;

module.exports = {
  VIDEOGAMES_URL,
  GENRES_URL,
};
