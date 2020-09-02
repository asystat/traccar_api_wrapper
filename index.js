const api = require('./api_client.js');

const res = api.client.get('/devices').then(function (response) {
    // handle success
    console.log(response);
}).catch(function (error) {
    // handle error
    console.log(error);
}).then(function () {
    // always executed
});

