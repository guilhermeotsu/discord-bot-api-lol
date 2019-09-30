const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', function() { 
    console.log('Ready');
})

client.on('message', message => { 
    if(message.content === '!ping')
        message.reply('pong');
})

client.login('NjI4MzYwNTQyNzE2NjkwNDYz.XZKPVQ.YtZzUztZcMQwi0UW5aMrNWFVNwg');