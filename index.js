const fs = require('fs'); // pacote do node (file system) para manipular os arquivos do commands
const { Client, Collection } = require('discord.js');
const client = new Client();
client.commands = new Collection();

const { discordToken } = require('./config.json');

/**
 * arquivos do commands, vai ler todos os arquivos da pasta commands 
 */
const commandFiles = fs.readdirSync('./commands');


for(const file of commandFiles) { 
    const command = require(`./commands/${file}`);


    // guardando valor dentro da collection
    client.commands.set(command.name, command);
}


client.on('ready', function() { 
    console.log('Ready');
})


client.on('message', message => { 
   const args = message.content.split(' ');
   const commandName = args.shift(); // tira o primeiro elemento e armazena na variável do array criado acima

    if(!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);

    try { 
        command.execute(message, args)
    }
    catch(error) {
        console.error(error);
        message.reply('Um erro aconteceu ao tentar executar o comando');
    }
});

client.login(discordToken);