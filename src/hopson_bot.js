
const Discord   = require('discord.js');
const Config    = require('../data/config');

//Log into discord
const client = new Discord.Client();
client.login(Config.getToken());

var exports = module.exports =
{
    logMessage : function(message) {
        message += "\n";
        console.log(message);
    },
    sendMessage : function(channel, message)
    {
        console.log(`Message sent by bot in channel "${channel.name}"\n\n`);
        channel.send(message);
    },
    getClient : function() 
    {
        return client;
    }
}

//Start the event handler
const EventHandler  = require("./event_handler")
let eventHandle = new EventHandler(client).run();

exports.getEventHandler = function() 
{
    return eventHandle;
}