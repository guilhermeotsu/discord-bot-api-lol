const axios = require('axios').default;
const { RichEmbed } = require('discord.js');

module.exports = { 
    name: '!githubuser',
    async execute(message, args) { 
        const name = args.join(' ');
        const url = `https://api.github.com/users/${name}`

        try { 
            const response = await axios.get(url);
            const user = response.data;

            const embed = new RichEmbed()
            .setTitle('Informações do Usuário')
            .setColor(0x4f0220)
            .addField('Nome', user.name, true)
            .addField('Empresa', user.company, true)
            .addField('País', user.location, true)
            .addField('Data de Cadastro',user.created_at, true)

            message.channel.send(embed);
        }catch(error) {
            console.error(error)
            message.channel.send('Erro ao executar o comando');   
        }
    }
}