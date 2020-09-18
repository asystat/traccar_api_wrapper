const api = require('./api_client.js').api;
const readline = require('readline');
const arg = require('arg');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


/* CLI command parsing */
const arg_config = {
	// Types
    '--command':  Boolean,    
    '--device':   Number,
};


var cli = function () {
    rl.question('traccar_api_wrapper $ ', async function (answer) {

        var argv = answer.split(" ");
        var args = arg(arg_config,{argv});


        if (args._.includes('exit')){ //we need some base case, for recursion
            return rl.close(); //closing RL and returning from function.
        } else if (args._.includes('help')){ //API help
            console.log('Commands:\nget devices\nget --device <device_id>\nget commands\nsend --command <command_id> --device <device_id>\n');
        } else if (args._.includes('get')){ // All get commands

            if (args._.includes('devices')){
                console.log('fetching devices (async)');
                api.get_devices();
            } else if (args._.includes('commands')){
                console.log('fetching commands (async)');
                api.get_commands();
            } else if ('--device' in args){
                console.log('fetching device '+args['--device']);
                api.get_device(args['--device']);
            } else {
                console.log('get what?\n');
            }
        } 
        cli(); //Calling this function again to ask new question
    });
};

cli();


