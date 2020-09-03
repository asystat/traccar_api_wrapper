const api = require('./api_client.js');
const readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var cli = function () {
    rl.question('traccar_api_wrapper $ ', async function (answer) {
        if (answer === 'exit'){ //we need some base case, for recursion
            return rl.close(); //closing RL and returning from function.
        } else if (answer === 'help'){
            console.log('Commands:\nget devices\n');
        } else if (answer === 'get'){
            console.log('get what?\n');
        } else if (answer === 'get devices'){
            console.log('fetching devices (async)');
            get_devices();
        } else if (answer.startsWith('get device ')){
            var device = answer.substr(11);
            console.log('fetching device '+device);
            get_device(device);
        } 
        cli(); //Calling this function again to ask new question
    });
};

cli();


var get_devices = function(){
    const res = api.client.get('/devices').then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    }).then(function () {
        // always executed
    });
}

var get_device = function(id){
    const res = api.client.get('/devices?id='+id).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    }).then(function () {
        // always executed
    });
}


