module.exports = {
    name: '!rip',
    execute(message, args) { 
        const { Attachment } = require('discord.js');
        const attachment = new Attachment('https://i.imgur.com/w3duR07.png');
        message.channel.send(attachment);
    }
}