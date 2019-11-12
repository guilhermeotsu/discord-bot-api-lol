// ok

module.exports = {
    name: '!beep',
    execute(message, args)  {
        const { RichEmbed} = require('discord.js');
        const embed = new RichEmbed()
            .setTitle('Titulo do Embed')
            .setDescription('Aqui vai a descrição do Embed')
            .addField('Nome', 'Guilherme Otsu') 
            .addField('Faculdade', 'FATEC')
            .setColor(0xFF0000)
            .setThumbnail('https://i.imgur.com/vgERB5I.png')
            .setImage('https://i.imgur.com/9XjriY1.png')

            message.channel.send(embed);
    }
};
