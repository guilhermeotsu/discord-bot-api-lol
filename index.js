const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, Attachment } = require('discord.js');

const { discordToken } = require('./config.json');

client.on('ready', function() { 
    console.log('Ready');
})

client.on('message', message => { 
    if(message.content === '!ping')
    {
        message.reply('com .reply: pong');
        message.channel.send('sem reply: pong');
    } else if(message.content === '!server')
    {
        message.channel.send(
        `O nome do servidor é ${message.guild.name}`
        )
    } else if(message.content === '!rip') { 
        const attachment = new Attachment('https://i.imgur.com/w3duR07.png');
        message.channel.send(attachment);
    } else if (message.content.startsWith("!maiuscula"))
    {
        const args = message.split(' ');
        const command = args.shift();  
        const response = args.join(' ');
        message.channel.send(response.toUpperCase);
    }
});

client.login(discordToken);