// config.js
require('dotenv').config();

const config = {
  apiKey: process.env.REACT_APP_API_KEY || 'default_api_key',
};

export default config;