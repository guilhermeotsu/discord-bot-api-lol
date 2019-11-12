const axios = require('axios').default;
const { RichEmbed } = require('discord.js');
const { climatempoAPIKey } = require('../config.json');

module.exports = { 
    name: '!clima',
    async execute(message, args) { 
        const url = `http://apiadvisor.climatempo.com.br/api/v1/climate/temperature/locale/3477?token=${climatempoAPIKey}`;
    
        try {
            const response = await axios.get(url);

            const embed = new RichEmbed() 
                .setTitle('Clima de São Paulo')
                .setColor(0x4f0220)
                .addFiel('Teste', 123, true)

            message.channel.send(embed);

        } catch (error) {
            console.error(error);
            message.channel.send('Erro ao executar o comando');   
        }
    }
}