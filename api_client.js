const prvt = require('./private_data.js'); 
const axios = require('axios');

var instance = axios.create({
    baseURL: prvt.baseURL,
    timeout: 4000,
    auth: prvt.api_auth
  });

module.exports={
    client: instance
}