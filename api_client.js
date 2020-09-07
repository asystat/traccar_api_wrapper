const prvt = require('./private_data.js'); 

const axios = require('axios');


var instance = axios.create({
    baseURL: prvt.baseURL,
    timeout: 4000,
    auth: prvt.api_auth
  });

var api_export = {};

/* DEVICES */

api_export.get_devices = function(){
    const res = instance.get('/devices').then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.log(error);
    }).then(function () {
        // always executed
    });
}

api_export.get_device = function(id){
    const res = instance.get('/devices?id='+id).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.log(error);
    }).then(function () {
        // always executed
    });
}

/* COMMANDS */

api_export.get_commands = function(){
  const res = instance.get('/commands').then(function (response) {
      console.log(response.data);
  }).catch(function (error) {
      console.log(error);
  }).then(function () {
      // always executed
  });
}


module.exports={
    api: api_export
}